"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { usePreferWebGL } from "@/lib/hooks/usePreferWebGL";
import type { FlexiblePlanVisual } from "@/lib/home-content";
import { cn } from "@/lib/utils";

const PlansWebGLCanvas = dynamic(
  () => import("@/components/effects/webgl/PlansWebGLCanvas"),
  { ssr: false }
);

interface PlansScrollVisualProps {
  activeVisual: FlexiblePlanVisual;
  className?: string;
}

const FALLBACK_LABELS: Record<FlexiblePlanVisual, string> = {
  design: "Aa",
  web: "</>",
  development: "Dev",
  marketing: "↑",
};

export default function PlansScrollVisual({ activeVisual, className }: PlansScrollVisualProps) {
  const preferWebGL = usePreferWebGL();

  return (
    <div
      className={cn(
        "relative z-20 flex aspect-square w-full max-w-lg items-center justify-center",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-purple-600/10 blur-[80px]" />

      {preferWebGL ? (
        <div className="relative h-full w-full">
          <PlansWebGLCanvas activeVisual={activeVisual} className="h-full w-full" />
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVisual}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.45, ease: [0.25, 0.25, 0, 1] }}
            className="relative z-10 font-display text-6xl font-bold text-white/15 md:text-8xl"
          >
            {FALLBACK_LABELS[activeVisual]}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
