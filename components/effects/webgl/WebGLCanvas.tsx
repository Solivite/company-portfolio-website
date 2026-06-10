"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import type { ServiceVisualType } from "@/lib/services-data";
import TorusScene from "./scenes/TorusScene";
import FunnelScene from "./scenes/FunnelScene";
import PedestalScene from "./scenes/PedestalScene";

interface WebGLCanvasProps {
  type: ServiceVisualType;
  className?: string;
}

function Scene({ type }: { type: ServiceVisualType }) {
  switch (type) {
    case "development":
    case "web":
      return <TorusScene />;
    case "marketing":
      return <FunnelScene />;
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
