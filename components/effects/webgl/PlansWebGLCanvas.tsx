"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import type { FlexiblePlanVisual } from "@/lib/home-content";
import ParticleCubeScene from "@/components/effects/webgl/scenes/ParticleCubeScene";
import ParticleBracketsScene from "@/components/effects/webgl/scenes/ParticleBracketsScene";
import ParticlePhoneScene from "@/components/effects/webgl/scenes/ParticlePhoneScene";
import ParticleFunnelScene from "@/components/effects/webgl/scenes/ParticleFunnelScene";

interface PlansWebGLCanvasProps {
  activeVisual: FlexiblePlanVisual;
  className?: string;
}

function Scene({ type }: { type: FlexiblePlanVisual }) {
  switch (type) {
    case "design":
      return <ParticleCubeScene />;
    case "web":
      return <ParticleBracketsScene />;
    case "development":
      return <ParticlePhoneScene />;
    case "marketing":
      return <ParticleFunnelScene />;
    default:
      return null;
  }
}

export default function PlansWebGLCanvas({ activeVisual, className }: PlansWebGLCanvasProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 4.2], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <group key={activeVisual}>
          <Scene type={activeVisual} />
        </group>
      </Suspense>
    </Canvas>
  );
}
