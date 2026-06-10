"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  Color,
  Group,
  InstancedMesh,
  MeshBasicMaterial,
  Object3D,
  SphereGeometry,
  Vector3,
} from "three";

const PARTICLE_COUNT = 1000;
const SPHERE_RADIUS = 1.35;
const ROTATION_SPEED = 0.12;
const PARALLAX_STRENGTH = { x: 0.22, y: 0.14 };
const PARALLAX_LERP = 4;
const OSCILLATION_AMPLITUDE = 0.045;
const TANGENT_OSCILLATION_AMPLITUDE = 0.045;
const OSCILLATION_SPEED = 0.55;
const TANGENT_AXIS = new Vector3(1, 0, 0);

/** Deterministic hash in [0, 1) for stable per-particle variation. */
function hash01(seed: number) {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453;
  return x - Math.floor(x);
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
  const targetParallax = useRef({ x: 0, y: 0 });
  const currentParallax = useRef({ x: 0, y: 0 });
  const offsetRef = useRef(new Vector3());

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
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetParallax.current = {
        x: x * PARALLAX_STRENGTH.x,
        y: y * PARALLAX_STRENGTH.y,
      };
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state, delta) => {
    const group = groupRef.current;
    const mesh = meshRef.current;
    if (!group || !mesh) return;

    group.rotation.y += delta * ROTATION_SPEED;

    const lerpFactor = 1 - Math.exp(-PARALLAX_LERP * delta);
    currentParallax.current.x +=
      (targetParallax.current.x - currentParallax.current.x) * lerpFactor;
    currentParallax.current.y +=
      (targetParallax.current.y - currentParallax.current.y) * lerpFactor;

    group.position.x = currentParallax.current.x;
    group.position.y = currentParallax.current.y;

    const time = state.clock.elapsedTime;
    const dummy = dummyRef.current;
    const offset = offsetRef.current;

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
      dummy.position.copy(particle.basePosition).add(offset);
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
