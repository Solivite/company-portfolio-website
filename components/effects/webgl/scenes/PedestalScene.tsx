"use client";

import { Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

interface PedestalSceneProps {
  variant?: "ai" | "meta";
}

export default function PedestalScene({ variant = "ai" }: PedestalSceneProps) {
  const iconRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (iconRef.current) {
      iconRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.15;
      iconRef.current.position.y = 0.35 + Math.sin(clock.elapsedTime * 1.2) * 0.06;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, -0.5, 1.5]} intensity={2} color="#9333ea" distance={4} />
      <spotLight position={[2, 3, 2]} intensity={0.6} color="#c084fc" />

      <mesh position={[0, -0.65, 0]}>
        <cylinderGeometry args={[0.7, 0.75, 0.12, 32]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.58, 0]}>
        <ringGeometry args={[0.2, 0.65, 32]} />
        <meshStandardMaterial
          color="#9333ea"
          emissive="#7c3aed"
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>

      <Float speed={1} floatIntensity={0.3}>
        <group ref={iconRef} position={[0, 0.35, 0]}>
          {variant === "ai" ? (
            <mesh>
              <boxGeometry args={[0.9, 0.9, 0.2]} />
              <meshStandardMaterial
                color="#581c87"
                metalness={0.7}
                roughness={0.2}
                emissive="#9333ea"
                emissiveIntensity={0.6}
              />
            </mesh>
          ) : (
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.45, 0.12, 24, 64]} />
              <meshStandardMaterial
                color="#9333ea"
                metalness={0.95}
                roughness={0.1}
                emissive="#a855f7"
                emissiveIntensity={0.5}
              />
            </mesh>
          )}
        </group>
      </Float>
    </>
  );
}
