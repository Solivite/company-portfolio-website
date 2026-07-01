"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  FLEXIBLE_PLANS,
  FLEXIBLE_PLANS_CARDS,
  type FlexiblePlanVisual,
} from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ScrollReveal from "@/components/ScrollReveal";
import PlansScrollVisual from "@/components/home/PlansScrollVisual";
import PlansServiceCard from "@/components/home/PlansServiceCard";
import { cn } from "@/lib/utils";

const CARD_COUNT = FLEXIBLE_PLANS_CARDS.length;

/**
 * Scroll phases (each unit = 100vh of vertical scroll):
 *
 * REVEAL  → section enters; header fills viewport, then scrolls away until cards pin
 * INTRO   → cards pinned & fully visible; card 1 held, no horizontal movement
 * MOVE    → cards slide horizontally
 * OUTRO   → last card held, then page scroll continues
 */
const PLANS_REVEAL_SCROLL_VH = 1;
const PLANS_INTRO_SCROLL_VH = 1;
const PLANS_OUTRO_SCROLL_VH = 3;
const PLANS_TRANSITION_SCROLL_VH = CARD_COUNT - 1;
const PLANS_TOTAL_PIN_SCROLL_VH =
  PLANS_INTRO_SCROLL_VH + PLANS_TRANSITION_SCROLL_VH + PLANS_OUTRO_SCROLL_VH;
const PLANS_PIN_CONTAINER_HEIGHT_VH = (PLANS_TOTAL_PIN_SCROLL_VH + 1) * 100;
const PLANS_TOTAL_CONTAINER_HEIGHT_VH =
  PLANS_REVEAL_SCROLL_VH * 100 + PLANS_PIN_CONTAINER_HEIGHT_VH;
const PLANS_SCROLL_RANGE_VH = PLANS_TOTAL_CONTAINER_HEIGHT_VH - 100;
const PLANS_REVEAL_END = (PLANS_REVEAL_SCROLL_VH * 100) / PLANS_SCROLL_RANGE_VH;
const PLANS_INTRO_END = PLANS_INTRO_SCROLL_VH / PLANS_TOTAL_PIN_SCROLL_VH;
const PLANS_OUTRO_START =
  (PLANS_INTRO_SCROLL_VH + PLANS_TRANSITION_SCROLL_VH) / PLANS_TOTAL_PIN_SCROLL_VH;

const HORIZONTAL_SCROLL_MIN_WIDTH = 1280;
const HORIZONTAL_SCROLL_MIN_HEIGHT = 720;

function useHorizontalScrollMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const check = () => {
      setEnabled(
        window.innerWidth >= HORIZONTAL_SCROLL_MIN_WIDTH &&
          window.innerHeight >= HORIZONTAL_SCROLL_MIN_HEIGHT,
      );
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return enabled;
}

function cardOpacity(progress: number, index: number) {
  const focus = progress * (CARD_COUNT - 1);
  const delta = index - focus;

  if (delta < -1) return 0;
  if (delta < -0.08) return Math.max(0, 1 + (delta + 0.08) * 1.15);
  if (delta < 0.35) return 1;
  if (delta < 1.15) return 0.42 + (1.15 - delta) * 0.5;
  return 0.38;
}

function cardScale(progress: number, index: number) {
  const focus = progress * (CARD_COUNT - 1);
  const delta = index - focus;

  if (delta < -1) return 0.9;
  if (delta < 0) return 0.92 + (1 + delta) * 0.08;
  if (delta < 0.35) return 1;
  return 0.96;
}

function cardFocused(progress: number, index: number) {
  const focus = progress * (CARD_COUNT - 1);
  return Math.abs(index - focus) < 0.42;
}

interface ScrollCardProps {
  card: (typeof FLEXIBLE_PLANS_CARDS)[number];
  index: number;
  progress: MotionValue<number>;
}

function ScrollCard({ card, index, progress }: ScrollCardProps) {
  const opacity = useTransform(progress, (v) => cardOpacity(v, index));
  const scale = useTransform(progress, (v) => cardScale(v, index));
  const [focused, setFocused] = useState(index === 0);

  useMotionValueEvent(progress, "change", (v) => {
    setFocused(cardFocused(v, index));
  });

  return (
    <motion.div
      style={{ opacity, scale }}
      className="origin-center shrink-0 will-change-[opacity,transform]"
    >
      <PlansServiceCard card={card} isFocused={focused} compact />
    </motion.div>
  );
}

function PlansSectionHeader({ className }: { className?: string }) {
  return (
    <>
      <SectionHeader
        eyebrow={FLEXIBLE_PLANS.eyebrow}
        title={
          <>
            Flexible Plans Built
            <br />
            <span className="text-gradient">Around Your Goals</span>
          </>
        }
        description={FLEXIBLE_PLANS.description}
        className={className}
      />
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-400 md:text-lg">
        {FLEXIBLE_PLANS.subDescription}
      </p>
    </>
  );
}

export default function FlexiblePlans() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackOffset, setTrackOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHorizontalScroll = useHorizontalScrollMode();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Phase 1: reveal header until cards are pinned and fully in view
  const pinProgress = useTransform(
    scrollYProgress,
    [PLANS_REVEAL_END, 1],
    [0, 1],
    { clamp: true },
  );

  // Phase 2: while pinned, drive horizontal card movement
  const horizontalProgress = useTransform(
    pinProgress,
    [0, PLANS_INTRO_END, PLANS_OUTRO_START, 1],
    [0, 0, 1, 1],
    { clamp: true },
  );

  // Negative X translation drives the card track left
  const x = useTransform(horizontalProgress, (v) => -v * trackOffset);

  // Left edge fade only appears once horizontal movement begins
  const edgeFadeOpacity = useTransform(horizontalProgress, [0, 0.05], [0, 1]);

  useMotionValueEvent(horizontalProgress, "change", (value) => {
    const index = Math.min(
      CARD_COUNT - 1,
      Math.round(value * (CARD_COUNT - 1)),
    );
    setActiveIndex(index);
  });

  useEffect(() => {
    if (!isHorizontalScroll) return;

    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const offset = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setTrackOffset(offset);
    };

    measure();

    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isHorizontalScroll]);

  const activeVisual: FlexiblePlanVisual =
    FLEXIBLE_PLANS_CARDS[activeIndex]?.visual ?? "design";

  return (
    <section className="relative">
      {!isHorizontalScroll && (
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
          <ScrollReveal>
            <PlansSectionHeader />
          </ScrollReveal>
        </div>
      )}

      {isHorizontalScroll ? (
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${PLANS_TOTAL_CONTAINER_HEIGHT_VH}vh` }}
        >
          {/* Reveal: section scrolls into full view before cards pin */}
          <div className="flex min-h-screen flex-col justify-center px-4 py-16 md:py-20">
            <div className="container mx-auto">
              <PlansSectionHeader className="mb-0" />
            </div>
          </div>

          <div className="sticky top-0 flex h-screen min-h-0 flex-col overflow-hidden">
            <div className="container mx-auto flex min-h-0 flex-1 items-center px-4 py-6 md:py-8">
              <div className="grid h-full min-h-0 w-full max-h-[calc(100vh-3rem)] grid-cols-12 items-center gap-4 xl:gap-8">
                <div className="relative z-20 col-span-4 flex h-full max-h-full items-center justify-center xl:col-span-5 xl:-mr-8 2xl:-mr-14">
                  <PlansScrollVisual
                    activeVisual={activeVisual}
                    className="max-h-[min(320px,42vh)] w-full xl:max-h-[min(380px,48vh)] 2xl:max-h-none"
                  />
                </div>

                <div className="relative z-10 col-span-8 flex min-h-0 flex-col justify-center xl:col-span-7">
                  <div
                    ref={viewportRef}
                    className="plans-cards-viewport relative min-h-0 overflow-hidden"
                  >
                    <motion.div
                      ref={trackRef}
                      style={{ x }}
                      className="flex gap-5 py-1 xl:gap-6"
                    >
                      {FLEXIBLE_PLANS_CARDS.map((card, index) => (
                        <ScrollCard
                          key={card.number}
                          card={card}
                          index={index}
                          progress={horizontalProgress}
                        />
                      ))}
                    </motion.div>

                    <motion.div
                      className="plans-cards-edge-fade pointer-events-none absolute inset-y-0 left-0 z-10 w-[28%] max-w-[180px]"
                      style={{ opacity: edgeFadeOpacity }}
                      aria-hidden
                    />
                  </div>

                  <div className="mt-4 flex shrink-0 items-center gap-3 xl:mt-6">
                    {FLEXIBLE_PLANS_CARDS.map((card, index) => (
                      <div
                        key={card.number}
                        className={cn(
                          "h-1 rounded-full transition-all duration-500 ease-out",
                          index === activeIndex
                            ? "w-10 bg-purple-500"
                            : "w-4 bg-white/15",
                        )}
                        aria-hidden
                      />
                    ))}
                    <span className="ml-2 text-xs font-medium text-gray-500">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(CARD_COUNT).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto space-y-5 px-4 pb-8">
          {FLEXIBLE_PLANS_CARDS.map((card) => (
            <PlansServiceCard key={card.number} card={card} isFocused />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 pb-24 pt-12 md:pb-32">
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <PrimaryButton href={FLEXIBLE_PLANS.cta.href}>
              {FLEXIBLE_PLANS.cta.label}
            </PrimaryButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
