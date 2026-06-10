"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ParticleSphereScene from "./scenes/ParticleSphereScene";

interface HeroWebGLCanvasProps {
  className?: string;
}

export default function HeroWebGLCanvas({ className }: HeroWebGLCanvasProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 4.8], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={null}>
        <ParticleSphereScene />
      </Suspense>
    </Canvas>
  );
}
