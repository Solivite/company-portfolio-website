"use client";

import { Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

function FunnelBody() {
  return (
    <mesh castShadow receiveShadow>
      <cylinderGeometry args={[0.85, 0.18, 1.75, 32, 1, false]} />
      <meshStandardMaterial color="#111111" metalness={0.85} roughness={0.25} />
    </mesh>
  );
}

function GlowCracks() {
  return (
    <group>
      {[0.15, 0.35, 0.55].map((y, i) => (
        <mesh key={i} position={[0.05 * (i - 1), y - 0.35, 0.42]} rotation={[0, 0, 0.15 * i]}>
          <boxGeometry args={[0.04, 0.35, 0.02]} />
          <meshStandardMaterial
            color="#9333ea"
            emissive="#a855f7"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function Drip() {
  const dripRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (dripRef.current) {
      dripRef.current.position.y = -0.95 + Math.sin(clock.elapsedTime * 2) * 0.04;
    }
  });

  return (
    <group ref={dripRef} position={[0, -0.95, 0]}>
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#9333ea"
          emissive="#c084fc"
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0, -0.12, 0]}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial
          color="#7e22ce"
          emissive="#9333ea"
          emissiveIntensity={1.2}
          transparent
          opacity={0.85}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function PedestalGlow() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]}>
        <circleGeometry args={[0.55, 32]} />
        <meshStandardMaterial
          color="#9333ea"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          transparent
          opacity={0.5}
          toneMapped={false}
        />
      </mesh>
      <pointLight position={[0, -0.8, 0.5]} intensity={1.5} color="#9333ea" distance={3} />
    </>
  );
}

export default function FunnelScene() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <spotLight position={[2, 4, 3]} intensity={1} color="#a855f7" angle={0.5} />

      <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.25}>
        <group ref={groupRef} position={[0, 0.1, 0]}>
          <FunnelBody />
          <GlowCracks />
          <Drip />
        </group>
      </Float>

      <PedestalGlow />
    </>
  );
}
