"use client";

import { motion } from "framer-motion";
import type { ServicePageData } from "@/lib/services-data";
import GradientHeadline, { GradientText } from "@/components/ui/GradientHeadline";
import ServicePillRow from "@/components/ui/ServicePillRow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HeroBackground from "@/components/effects/HeroBackground";
import ServiceVisual from "./ServiceVisual";
import { cn } from "@/lib/utils";

interface ServiceHeroProps {
  data: ServicePageData;
}

export default function ServiceHero({ data }: ServiceHeroProps) {
  const { hero, number } = data;
  const isDark = hero.theme === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24",
        isDark ? "bg-surface-dark text-white" : "bg-surface-light text-foreground"
      )}
    >
      {isDark && (
        <HeroBackground
          rayIntensity={data.slug === "marketing" ? 1.3 : 0.9}
          glowPosition="bottom"
        />
      )}

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className={cn(
                "mb-4 text-xs font-semibold uppercase tracking-[0.2em]",
                isDark ? "text-purple-400" : "text-purple-600"
              )}
            >
              {number} — {hero.eyebrow}
            </p>

            {isDark ? (
              <GradientHeadline
                as="h1"
                className="text-4xl leading-[1.1] md:text-6xl lg:text-7xl"
              >
                {hero.headline}
                <br />
                <GradientText>{hero.headlineGradient}</GradientText>
              </GradientHeadline>
            ) : (
              <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                {hero.headline}{" "}
                <span className="text-gradient">{hero.headlineGradient}</span>
              </h1>
            )}

            <p
              className={cn(
                "mt-6 max-w-lg text-lg leading-relaxed",
                isDark ? "text-gray-400" : "text-muted-foreground"
              )}
            >
              {hero.description}
            </p>

            <ServicePillRow
              tags={hero.tags}
              dark={isDark}
              className="mt-8 justify-start"
            />

            <div className="mt-10">
              <PrimaryButton
                href="/contact"
                variant={isDark ? "filled" : "dark"}
              >
                Start Your Project
              </PrimaryButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <ServiceVisual type={hero.visual} theme={hero.theme} image={hero.image} />
          </motion.div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
