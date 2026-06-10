"use client";

import OptionalImage from "@/components/ui/OptionalImage";
import WebGLServiceVisual from "@/components/effects/webgl/WebGLServiceVisual";
import { cn } from "@/lib/utils";
import type { ServiceVisualType } from "@/lib/services-data";

interface ServiceVisualProps {
  type: ServiceVisualType;
  theme: "dark" | "light";
  image?: string;
  className?: string;
}

export default function ServiceVisual({ type, theme, image, className }: ServiceVisualProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-2xl",
        isDark
          ? "border border-white/5 bg-surface-dark-elevated"
          : "border border-purple-100 bg-gradient-to-br from-purple-50 to-violet-100/50",
        className
      )}
      aria-hidden
    >
      {type === "design" && <DesignVisual />}
      {type === "development" && <DevelopmentVisual />}
      {type === "web" && <WebVisual />}
      {type === "marketing" && <MarketingVisual />}
      {type === "meta" && <PedestalVisual />}
      {type === "ai" && <PedestalVisual variant="ai" />}
      {type === "content" && <ContentVisual />}
      {type === "games" && <GamesVisual />}

      <WebGLServiceVisual type={type} />

      {image && (
        <OptionalImage
          src={image}
          alt=""
          className="z-20 opacity-90 mix-blend-normal"
        />
      )}
    </div>
  );
}
function DesignVisual() {
  return (
    <>
      <div className="absolute inset-0 hero-atmosphere opacity-80" />
      <div className="relative z-10 text-center">
        <div className="font-display text-6xl font-bold text-white/20 md:text-8xl">Aa</div>
        <div className="mt-2 h-1 w-16 mx-auto rounded-full bg-purple-500/60" />
      </div>
    </>
  );
}

function DevelopmentVisual() {
  return (
    <>
      <div className="absolute inset-4 rounded-xl border-2 border-purple-200/60" />
      <div className="absolute -right-4 top-8 h-16 w-16 rounded-full bg-purple-400/30 blur-sm" />
      <div className="absolute -left-2 bottom-12 h-10 w-10 rounded-lg bg-violet-400/40 rotate-12" />
      <div className="relative z-10 mx-auto w-32 rounded-[2rem] border-4 border-purple-300/80 bg-white p-1 shadow-xl shadow-purple-200/50">
        <div className="aspect-[9/19] rounded-[1.5rem] bg-gradient-to-b from-purple-100 to-violet-200">
          <div className="p-3 space-y-2">
            <div className="h-2 w-12 rounded bg-purple-300/60" />
            <div className="h-8 rounded-lg bg-purple-200/50" />
            <div className="h-8 rounded-lg bg-violet-200/50" />
          </div>
        </div>
      </div>
      <div className="absolute right-8 top-1/4 font-mono text-2xl font-bold text-purple-400/40">
        {"</>"}
      </div>
    </>
  );
}

function WebVisual() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-violet-50" />
      <div className="relative h-32 w-32 rounded-full border-[6px] border-purple-300/30 bg-gradient-to-br from-gray-800 via-purple-900 to-violet-800 shadow-2xl shadow-purple-300/40" />
    </>
  );
}

function MarketingVisual() {
  return (
    <>
      <div className="absolute inset-0 bg-black" />
      <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-600/30 blur-[60px]" />
      <svg viewBox="0 0 120 140" className="relative z-10 h-40 w-32 drop-shadow-2xl">
        <path
          d="M30 20 L90 20 L75 100 L45 100 Z"
          fill="#1a1a1a"
          stroke="url(#funnelGrad)"
          strokeWidth="1.5"
        />
        <path d="M40 55 L80 55" stroke="#9333ea" strokeWidth="0.5" opacity="0.6" />
        <path d="M45 75 L75 75" stroke="#9333ea" strokeWidth="0.5" opacity="0.4" />
        <ellipse cx="60" cy="115" rx="20" ry="4" fill="#9333ea" opacity="0.5" />
        <defs>
          <linearGradient id="funnelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-8 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full bg-purple-500 animate-pulse" />
    </>
  );
}

function PedestalVisual({ variant = "meta" }: { variant?: "meta" | "ai" }) {
  return (
    <>
      <div className="absolute inset-0 bg-black" />
      <div className="absolute bottom-1/4 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-purple-600/40 blur-[50px]" />
      <div className="absolute bottom-16 left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-gray-900 border border-purple-500/30 shadow-lg shadow-purple-500/20" />
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400/80 to-violet-600/80 shadow-xl shadow-purple-500/30">
        {variant === "ai" ? (
          <span className="font-display text-2xl font-bold text-white">AI</span>
        ) : (
          <span className="text-3xl text-white">∞</span>
        )}
      </div>
    </>
  );
}

function ContentVisual() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white" />
      <div className="relative z-10 space-y-3 p-8 w-full">
        <div className="h-3 w-3/4 rounded bg-purple-200/80" />
        <div className="h-3 w-full rounded bg-purple-100/60" />
        <div className="h-3 w-5/6 rounded bg-purple-100/60" />
        <div className="h-3 w-2/3 rounded bg-purple-200/80" />
        <div className="mt-6 font-display text-4xl font-bold text-purple-300/50">&ldquo;</div>
      </div>
    </>
  );
}

function GamesVisual() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 to-black" />
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-purple-400"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-8 w-8 rounded-lg",
              i % 3 === 0 ? "bg-purple-500/60" : "bg-purple-800/40"
            )}
          />
        ))}
      </div>
    </>
  );
}
