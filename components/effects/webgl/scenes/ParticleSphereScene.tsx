"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  Color,
  Group,
  InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  Object3D,
  Raycaster,
  SphereGeometry,
  Vector2,
  Vector3,
} from "three";

const PARTICLE_COUNT = 1000;
const SPHERE_RADIUS = 1.35;
const ROTATION_SPEED = 0.12;
const OSCILLATION_AMPLITUDE = 0.045;
const TANGENT_OSCILLATION_AMPLITUDE = 0.045;
const OSCILLATION_SPEED = 0.55;
const TUNNEL_RADIUS = 0.34;
const TUNNEL_PUSH = 0.38;
const POINTER_LERP = 10;
const STRENGTH_LERP = 8;
const TANGENT_AXIS = new Vector3(1, 0, 0);

/** Deterministic hash in [0, 1) for stable per-particle variation. */
function hash01(seed: number) {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

type ParticleSeed = {
  basePosition: Vector3;
  normal: Vector3;
  tangent: Vector3;
  scale: number;
  phase: number;
  speed: number;
};

/** Uniform random shell — avoids the visible spiral lines Fibonacci ordering creates. */
function randomShell(count: number, baseRadius: number): ParticleSeed[] {
  const particles: ParticleSeed[] = [];

  for (let i = 0; i < count; i++) {
    const u = hash01(i * 1.7 + 0.3);
    const v = hash01(i * 4.1 + 1.9);
    const h = hash01(i * 9.3 + 4.2);

    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = baseRadius * (1 + (h - 0.5) * 0.01);

    const basePosition = new Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi),
    );

    const normal = basePosition.clone().normalize();
    const tangent = new Vector3().crossVectors(normal, TANGENT_AXIS);
    if (tangent.lengthSq() < 1e-4) {
      tangent.crossVectors(normal, new Vector3(0, 0, 1));
    }
    tangent.normalize();

    particles.push({
      basePosition,
      normal,
      tangent,
      scale: 0.016 + hash01(i * 2.3) * 0.008 + hash01(i * 5.7) * 0.004,
      phase: hash01(i * 3.7 + 2.1) * Math.PI * 2,
      speed: OSCILLATION_SPEED * (0.72 + hash01(i * 6.3 + 8.4) * 0.56),
    });
  }

  return particles;
}

export default function ParticleSphereScene() {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<InstancedMesh>(null);
  const dummyRef = useRef(new Object3D());
  const mouseClient = useRef({ x: 0, y: 0, active: false });
  const pointerNdc = useRef(new Vector2(0, 0));
  const targetStrength = useRef(0);
  const currentStrength = useRef(0);
  const offsetRef = useRef(new Vector3());
  const localPosRef = useRef(new Vector3());
  const worldPosRef = useRef(new Vector3());
  const rayOriginRef = useRef(new Vector3());
  const rayDirRef = useRef(new Vector3());
  const closestRef = useRef(new Vector3());
  const pushDirRef = useRef(new Vector3());
  const invGroupMatrixRef = useRef(new Matrix4());
  const raycasterRef = useRef(new Raycaster());

  const { geometry, material, particles } = useMemo(() => {
    const geo = new SphereGeometry(0.5, 6, 5);
    const mat = new MeshBasicMaterial({
      color: new Color("#eef0f4"),
      transparent: true,
      opacity: 0.78,
    });
    return {
      geometry: geo,
      material: mat,
      particles: randomShell(PARTICLE_COUNT, SPHERE_RADIUS),
    };
  }, []);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseClient.current.x = event.clientX;
      mouseClient.current.y = event.clientY;
      mouseClient.current.active = true;
    };

    const onLeave = () => {
      mouseClient.current.active = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useFrame((state, delta) => {
    const group = groupRef.current;
    const mesh = meshRef.current;
    if (!group || !mesh) return;

    group.rotation.y += delta * ROTATION_SPEED;

    const { camera, gl } = state;
    const canvas = gl.domElement;
    const rect = canvas.getBoundingClientRect();
    const mouse = mouseClient.current;
    const inCanvas =
      mouse.active &&
      mouse.x >= rect.left &&
      mouse.x <= rect.right &&
      mouse.y >= rect.top &&
      mouse.y <= rect.bottom;

    targetStrength.current = inCanvas ? 1 : 0;

    const targetX = inCanvas
      ? ((mouse.x - rect.left) / rect.width) * 2 - 1
      : pointerNdc.current.x;
    const targetY = inCanvas
      ? -((mouse.y - rect.top) / rect.height) * 2 + 1
      : pointerNdc.current.y;

    const pointerLerp = 1 - Math.exp(-POINTER_LERP * delta);
    const strengthLerp = 1 - Math.exp(-STRENGTH_LERP * delta);

    pointerNdc.current.x += (targetX - pointerNdc.current.x) * pointerLerp;
    pointerNdc.current.y += (targetY - pointerNdc.current.y) * pointerLerp;
    currentStrength.current +=
      (targetStrength.current - currentStrength.current) * strengthLerp;

    const raycaster = raycasterRef.current;
    raycaster.setFromCamera(pointerNdc.current, camera);
    rayOriginRef.current.copy(raycaster.ray.origin);
    rayDirRef.current.copy(raycaster.ray.direction).normalize();

    group.updateMatrixWorld();
    invGroupMatrixRef.current.copy(group.matrixWorld).invert();

    const time = state.clock.elapsedTime;
    const dummy = dummyRef.current;
    const offset = offsetRef.current;
    const localPos = localPosRef.current;
    const worldPos = worldPosRef.current;
    const closest = closestRef.current;
    const pushDir = pushDirRef.current;
    const tunnelStrength = currentStrength.current;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = particles[i];
      const radialWave =
        Math.sin(time * particle.speed + particle.phase) *
        OSCILLATION_AMPLITUDE;
      const radialDrift =
        Math.sin(time * particle.speed * 0.45 + particle.phase * 1.7) *
        OSCILLATION_AMPLITUDE *
        0.35;
      const tangentWave =
        Math.sin(time * particle.speed * 0.68 + particle.phase * 1.35) *
        TANGENT_OSCILLATION_AMPLITUDE;
      const tangentDrift =
        Math.sin(time * particle.speed * 0.36 + particle.phase * 2.15) *
        TANGENT_OSCILLATION_AMPLITUDE *
        0.3;

      offset
        .copy(particle.normal)
        .multiplyScalar(radialWave + radialDrift)
        .addScaledVector(particle.tangent, tangentWave + tangentDrift);

      localPos.copy(particle.basePosition).add(offset);
      worldPos.copy(localPos).applyMatrix4(group.matrixWorld);

      if (tunnelStrength > 0.001) {
        const axisOffset = worldPos.x - rayOriginRef.current.x;
        const axisOffsetY = worldPos.y - rayOriginRef.current.y;
        const axisOffsetZ = worldPos.z - rayOriginRef.current.z;
        const rayDir = rayDirRef.current;
        const projection =
          axisOffset * rayDir.x +
          axisOffsetY * rayDir.y +
          axisOffsetZ * rayDir.z;

        closest
          .copy(rayOriginRef.current)
          .addScaledVector(rayDir, projection);

        pushDir.subVectors(worldPos, closest);
        const axisDistance = pushDir.length();

        if (axisDistance < TUNNEL_RADIUS) {
          const influence = smoothstep(
            TUNNEL_RADIUS,
            0,
            axisDistance,
          );
          const pushAmount = TUNNEL_PUSH * influence * tunnelStrength;

          if (axisDistance > 1e-5) {
            pushDir.multiplyScalar(pushAmount / axisDistance);
          } else {
            pushDir.set(pushAmount, 0, 0);
          }

          worldPos.add(pushDir);
        }
      }

      localPos.copy(worldPos).applyMatrix4(invGroupMatrixRef.current);
      dummy.position.copy(localPos);
      dummy.scale.setScalar(particle.scale);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[0, 0.05, 0]}>
      <instancedMesh
        ref={meshRef}
        args={[geometry, material, PARTICLE_COUNT]}
        frustumCulled={false}
      />
    </group>
  );
}
