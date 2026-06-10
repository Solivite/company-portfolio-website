"use client";

import dynamic from "next/dynamic";
import { usePreferWebGL } from "@/lib/hooks/usePreferWebGL";
import { cn } from "@/lib/utils";

const HeroWebGLCanvas = dynamic(() => import("./webgl/HeroWebGLCanvas"), {
  ssr: false,
});

interface HeroParticleSphereProps {
  className?: string;
}

export default function HeroParticleSphere({ className }: HeroParticleSphereProps) {
  const preferWebGL = usePreferWebGL();

  if (!preferWebGL) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-[5] flex items-center justify-center",
        className
      )}
      aria-hidden
    >
      <div className="h-[min(92vw,720px)] w-[min(92vw,720px)] max-h-[85vh] opacity-90">
        <HeroWebGLCanvas className="h-full w-full" />
      </div>
    </div>
  );
}
