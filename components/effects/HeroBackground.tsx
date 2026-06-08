"use client";

import dynamic from "next/dynamic";
import SectionGlow from "@/components/ui/SectionGlow";
import { cn } from "@/lib/utils";

const LightRays = dynamic(() => import("./LightRays"), { ssr: false });

interface HeroBackgroundProps {
  showRays?: boolean;
  showSmoke?: boolean;
  showGlow?: boolean;
  glowPosition?: "top" | "bottom" | "center";
  rayIntensity?: number;
  className?: string;
}

export default function HeroBackground({
  showRays = true,
  showSmoke = true,
  showGlow = true,
  glowPosition = "bottom",
  rayIntensity = 1,
  className,
}: HeroBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className={cn("hero-atmosphere absolute inset-0", showSmoke && "hero-smoke")} />
      {showRays && <LightRays intensity={rayIntensity} />}
      <div className="hero-light-rays absolute inset-0 opacity-40" />
      {showGlow && <SectionGlow position={glowPosition} />}
    </div>
  );
}
