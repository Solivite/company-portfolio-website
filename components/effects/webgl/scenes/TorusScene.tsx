"use client";

import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export default function TorusScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <spotLight position={[4, 6, 4]} intensity={1.2} color="#c084fc" angle={0.4} penumbra={0.5} />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#7c3aed" />
      <Environment preset="city" />

      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.5}>
        <mesh ref={meshRef} rotation={[Math.PI / 2.8, 0.6, 0]}>
          <torusGeometry args={[0.95, 0.32, 48, 128]} />
          <meshStandardMaterial
            color="#1e1033"
            metalness={0.92}
            roughness={0.12}
            emissive="#581c87"
            emissiveIntensity={0.35}
          />
        </mesh>
      </Float>
    </>
  );
}
