"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FlexiblePlanCard } from "@/lib/home-content";

interface PlansServiceCardProps {
  card: FlexiblePlanCard;
  isFocused: boolean;
  /** Tighter sizing for the horizontal scroll track */
  compact?: boolean;
}

const contentTransition = {
  duration: 0.45,
  ease: [0.25, 0.25, 0, 1] as const,
};

export default function PlansServiceCard({
  card,
  isFocused,
  compact = false,
}: PlansServiceCardProps) {
  return (
    <Link
      href={card.href}
      className={cn(
        "group relative flex shrink-0 flex-col overflow-hidden rounded-3xl border p-6 md:p-8",
        compact
          ? "h-[min(360px,48vh)] w-[min(420px,52vw)] xl:h-[min(400px,52vh)] xl:w-[min(460px,48vw)] 2xl:h-[min(480px,58vh)] 2xl:w-[min(520px,44vw)]"
          : "h-[min(520px,72vh)] w-[min(560px,82vw)] p-8 md:p-10",
        isFocused
          ? "border-purple-500/30 bg-gradient-to-br from-purple-900/90 via-purple-950/95 to-[#0a0612] shadow-2xl shadow-purple-900/40"
          : "border-white/[0.06] bg-surface-dark-elevated/80 hover:border-purple-500/20"
      )}
    >
      {!isFocused && (
        <span
          className="pointer-events-none absolute -right-1 -top-2 select-none font-display text-8xl font-bold text-white/[0.04]"
          aria-hidden
        >
          {card.number}
        </span>
      )}

      {!isFocused && (
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
          aria-hidden
        />
      )}

      <div className="relative flex items-start justify-between gap-4">
        <AnimatePresence mode="wait">
          {isFocused ? (
            <motion.h3
              key="title-focused"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={contentTransition}
              className={cn(
                "font-display font-bold text-white",
                compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
              )}
            >
              {card.title}
            </motion.h3>
          ) : (
            <motion.span
              key="number"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={contentTransition}
              className="font-display text-sm font-bold text-purple-400"
            >
              {card.number}
            </motion.span>
          )}
        </AnimatePresence>

        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
            isFocused
              ? "border-white/20 bg-white/5 text-white"
              : "border-white/10 bg-white/[0.03] text-purple-400 group-hover:border-purple-500/40 group-hover:bg-purple-600 group-hover:text-white"
          )}
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <AnimatePresence mode="wait">
        {isFocused ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={contentTransition}
            className="relative flex min-h-0 flex-1 flex-col overflow-hidden"
          >
            <p
              className={cn(
                "mt-3 line-clamp-3 leading-relaxed text-gray-300",
                compact ? "text-sm md:text-base" : "mt-5 text-base md:text-lg"
              )}
            >
              {card.description}
            </p>

            <div
              className={cn(
                "mt-auto grid min-h-0 grid-cols-1 gap-4 overflow-hidden pt-5 sm:grid-cols-2",
                compact ? "xl:gap-6 xl:pt-6" : "gap-8 pt-10"
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                  Services
                </p>
                <ul className="space-y-1.5">
                  {card.services.map((service) => (
                    <li
                      key={service}
                      className={cn(
                        "text-gray-300",
                        compact ? "text-xs md:text-sm" : "text-sm md:text-base"
                      )}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-h-0 overflow-hidden">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                  Tools
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.h3
            key="collapsed-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={contentTransition}
            className={cn(
              "relative mt-auto font-display font-bold text-white",
              compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            )}
          >
            {card.title}
          </motion.h3>
        )}
      </AnimatePresence>
    </Link>
  );
}
