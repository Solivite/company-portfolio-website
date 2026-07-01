"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import type { ServiceVisualType } from "@/lib/services-data";
import PedestalScene from "./scenes/PedestalScene";
import ParticleCubeScene from "./scenes/ParticleCubeScene";
import ParticleBracketsScene from "./scenes/ParticleBracketsScene";
import ParticlePhoneScene from "./scenes/ParticlePhoneScene";
import ParticleFunnelScene from "./scenes/ParticleFunnelScene";

interface WebGLCanvasProps {
  type: ServiceVisualType;
  className?: string;
}

function Scene({ type }: { type: ServiceVisualType }) {
  switch (type) {
    case "design":
      return <ParticleCubeScene />;
    case "web":
      return <ParticleBracketsScene />;
    case "development":
      return <ParticlePhoneScene />;
    case "marketing":
      return <ParticleFunnelScene />;
    case "ai":
      return <PedestalScene variant="ai" />;
    case "meta":
      return <PedestalScene variant="meta" />;
    default:
      return null;
  }
}

export default function WebGLCanvas({ type, className }: WebGLCanvasProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 3.2], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Scene type={type} />
      </Suspense>
    </Canvas>
  );
}
