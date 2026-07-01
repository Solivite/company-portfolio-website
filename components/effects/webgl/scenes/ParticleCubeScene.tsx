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

const PARTICLE_COUNT = 900;
const HALF_SIZE = 1.15;
const ROTATION_SPEED = 0.1;
const OSCILLATION_AMPLITUDE = 0.035;
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

function sampleCubeEdges(half: number, perEdge: number): Vector3[] {
  const corners = [
    new Vector3(-half, -half, -half),
    new Vector3(half, -half, -half),
    new Vector3(half, -half, half),
    new Vector3(-half, -half, half),
    new Vector3(-half, half, -half),
    new Vector3(half, half, -half),
    new Vector3(half, half, half),
    new Vector3(-half, half, half),
  ];
  const edgePairs = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];
  const points: Vector3[] = [];
  const temp = new Vector3();

  for (const [a, b] of edgePairs) {
    for (let i = 0; i < perEdge; i++) {
      const t = i / (perEdge - 1);
      temp.copy(corners[a]).lerp(corners[b], t);
      points.push(temp.clone());
    }
  }

  return points;
}

type ParticleSeed = {
  basePosition: Vector3;
  normal: Vector3;
  scale: number;
  phase: number;
  speed: number;
};

export default function ParticleCubeScene() {
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
    const edgePoints = sampleCubeEdges(HALF_SIZE, 80);
    const seeds: ParticleSeed[] = edgePoints.map((pos, i) => {
      const normal = pos.clone().normalize();
      return {
        basePosition: pos,
        normal,
        scale: 0.014 + hash01(i * 2.1) * 0.01,
        phase: hash01(i * 3.3) * Math.PI * 2,
        speed: 0.45 + hash01(i * 5.1) * 0.4,
      };
    });

    const geo = new SphereGeometry(0.5, 5, 4);
    const mat = new MeshBasicMaterial({
      color: new Color("#eef0f4"),
      transparent: true,
      opacity: 0.82,
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
    group.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.12;

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
    <group ref={groupRef}>
      <instancedMesh
        ref={meshRef}
        args={[geometry, material, particles.length]}
        frustumCulled={false}
      />
    </group>
  );
}
