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

const ROTATION_SPEED = 0.08;
const OSCILLATION_AMPLITUDE = 0.03;
const POINTER_LERP = 10;
const STRENGTH_LERP = 8;
const TUNNEL_RADIUS = 0.32;
const TUNNEL_PUSH = 0.35;

function hash01(seed: number) {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function sampleLine(a: Vector3, b: Vector3, count: number): Vector3[] {
  const points: Vector3[] = [];
  const temp = new Vector3();
  for (let i = 0; i < count; i++) {
    temp.copy(a).lerp(b, i / (count - 1));
    points.push(temp.clone());
  }
  return points;
}

/** Particle layout approximating </> brackets */
function buildBracketPoints(): Vector3[] {
  const points: Vector3[] = [];
  const scale = 0.55;

  const leftBracketTop = new Vector3(-1.4 * scale, 0.9 * scale, 0);
  const leftBracketMid = new Vector3(-0.55 * scale, 0, 0);
  const leftBracketBot = new Vector3(-1.4 * scale, -0.9 * scale, 0);

  const slashStart = new Vector3(-0.15 * scale, 0.85 * scale, 0.1);
  const slashEnd = new Vector3(0.15 * scale, -0.85 * scale, -0.1);

  const rightBracketTop = new Vector3(1.4 * scale, 0.9 * scale, 0);
  const rightBracketMid = new Vector3(0.55 * scale, 0, 0);
  const rightBracketBot = new Vector3(1.4 * scale, -0.9 * scale, 0);

  points.push(...sampleLine(leftBracketTop, leftBracketMid, 55));
  points.push(...sampleLine(leftBracketMid, leftBracketBot, 55));
  points.push(...sampleLine(slashStart, slashEnd, 70));
  points.push(...sampleLine(rightBracketTop, rightBracketMid, 55));
  points.push(...sampleLine(rightBracketMid, rightBracketBot, 55));

  return points;
}

type ParticleSeed = {
  basePosition: Vector3;
  normal: Vector3;
  scale: number;
  phase: number;
  speed: number;
};

export default function ParticleBracketsScene() {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<InstancedMesh>(null);
  const dummyRef = useRef(new Object3D());
  const mouseClient = useRef({ x: 0, y: 0, active: false });
  const pointerNdc = useRef(new Vector2(0, 0));
  const targetStrength = useRef(0);
  const currentStrength = useRef(0);
  const invGroupMatrixRef = useRef(new Matrix4());
  const raycasterRef = useRef(new Raycaster());

  const { geometry, material, particles } = useMemo(() => {
    const positions = buildBracketPoints();
    const seeds: ParticleSeed[] = positions.map((pos, i) => {
      const normal = pos.clone().normalize();
      if (normal.lengthSq() < 1e-4) normal.set(0, 1, 0);
      return {
        basePosition: pos,
        normal,
        scale: 0.015 + hash01(i * 2.4) * 0.009,
        phase: hash01(i * 3.8) * Math.PI * 2,
        speed: 0.42 + hash01(i * 4.9) * 0.45,
      };
    });

    const geo = new SphereGeometry(0.5, 5, 4);
    const mat = new MeshBasicMaterial({
      color: new Color("#e8ecff"),
      transparent: true,
      opacity: 0.85,
    });

    return { geometry: geo, material: mat, particles: seeds };
  }, []);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseClient.current = { x: event.clientX, y: event.clientY, active: true };
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
    const rect = gl.domElement.getBoundingClientRect();
    const mouse = mouseClient.current;
    const inCanvas =
      mouse.active &&
      mouse.x >= rect.left &&
      mouse.x <= rect.right &&
      mouse.y >= rect.top &&
      mouse.y <= rect.bottom;

    targetStrength.current = inCanvas ? 1 : 0;

    const pointerLerp = 1 - Math.exp(-POINTER_LERP * delta);
    const strengthLerp = 1 - Math.exp(-STRENGTH_LERP * delta);

    if (inCanvas) {
      pointerNdc.current.x += (((mouse.x - rect.left) / rect.width) * 2 - 1 - pointerNdc.current.x) * pointerLerp;
      pointerNdc.current.y += (-((mouse.y - rect.top) / rect.height) * 2 + 1 - pointerNdc.current.y) * pointerLerp;
    }
    currentStrength.current += (targetStrength.current - currentStrength.current) * strengthLerp;

    const raycaster = raycasterRef.current;
    raycaster.setFromCamera(pointerNdc.current, camera);
    const rayOrigin = raycaster.ray.origin.clone();
    const rayDir = raycaster.ray.direction.clone().normalize();

    group.updateMatrixWorld();
    invGroupMatrixRef.current.copy(group.matrixWorld).invert();

    const time = state.clock.elapsedTime;
    const dummy = dummyRef.current;
    const tunnelStrength = currentStrength.current;

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      const wave =
        Math.sin(time * particle.speed + particle.phase) * OSCILLATION_AMPLITUDE;

      const localPos = particle.basePosition.clone().addScaledVector(particle.normal, wave);
      const worldPos = localPos.clone().applyMatrix4(group.matrixWorld);

      if (tunnelStrength > 0.001) {
        const toPoint = worldPos.clone().sub(rayOrigin);
        const projection = toPoint.dot(rayDir);
        const closest = rayOrigin.clone().addScaledVector(rayDir, projection);
        const axisDistance = worldPos.distanceTo(closest);

        if (axisDistance < TUNNEL_RADIUS) {
          const influence = smoothstep(TUNNEL_RADIUS, 0, axisDistance);
          const pushDir = worldPos.clone().sub(closest);
          if (pushDir.lengthSq() > 1e-5) {
            pushDir.normalize().multiplyScalar(TUNNEL_PUSH * influence * tunnelStrength);
            worldPos.add(pushDir);
          }
        }
      }

      localPos.copy(worldPos).applyMatrix4(invGroupMatrixRef.current);
      dummy.position.copy(localPos);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[0, 0.05, 0]}>
      <instancedMesh
        ref={meshRef}
        args={[geometry, material, particles.length]}
        frustumCulled={false}
      />
    </group>
  );
}
