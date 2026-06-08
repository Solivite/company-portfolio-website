"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LightRaysProps {
  className?: string;
  intensity?: number;
}

export default function LightRays({ className, intensity = 1 }: LightRaysProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationId = 0;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, w, h);

      // Bottom-center volumetric glow
      const glow = ctx.createRadialGradient(w * 0.5, h * 0.95, 0, w * 0.5, h * 0.4, h * 0.85);
      glow.addColorStop(0, `rgba(147, 51, 234, ${0.35 * intensity})`);
      glow.addColorStop(0.35, `rgba(124, 58, 237, ${0.12 * intensity})`);
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // God-ray beams
      const rayCount = 7;
      for (let i = 0; i < rayCount; i++) {
        const baseX = w * (0.12 + (i / (rayCount - 1)) * 0.76);
        const drift = prefersReduced ? 0 : Math.sin(time * 0.4 + i * 0.9) * 18;
        const x = baseX + drift;
        const pulse = prefersReduced ? 1 : 0.55 + Math.sin(time * 0.6 + i * 1.2) * 0.35;
        const rayWidth = 40 + i * 6;

        const ray = ctx.createLinearGradient(x, h, x, 0);
        ray.addColorStop(0, `rgba(168, 85, 247, ${0.18 * pulse * intensity})`);
        ray.addColorStop(0.25, `rgba(139, 92, 246, ${0.07 * pulse * intensity})`);
        ray.addColorStop(0.6, `rgba(109, 40, 217, ${0.02 * pulse * intensity})`);
        ray.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = ray;
        ctx.fillRect(x - rayWidth / 2, 0, rayWidth, h);
      }

      // Subtle top haze
      const haze = ctx.createLinearGradient(0, 0, 0, h * 0.35);
      haze.addColorStop(0, `rgba(88, 28, 135, ${0.06 * intensity})`);
      haze.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, w, h * 0.35);

      if (!prefersReduced) {
        time += 0.016;
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-80", className)}
      aria-hidden
    />
  );
}
