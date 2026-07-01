"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import type { FlexiblePlanVisual } from "@/lib/home-content";
import ParticleCubeScene from "@/components/effects/webgl/scenes/ParticleCubeScene";
import ParticleBracketsScene from "@/components/effects/webgl/scenes/ParticleBracketsScene";
import TorusScene from "@/components/effects/webgl/scenes/TorusScene";
import FunnelScene from "@/components/effects/webgl/scenes/FunnelScene";

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
      return <TorusScene />;
    case "marketing":
      return <FunnelScene />;
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
