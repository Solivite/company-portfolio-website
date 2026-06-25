"use client";

import { motion } from "framer-motion";
import GradientHeadline, { GradientText } from "@/components/ui/GradientHeadline";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HeroBackground from "@/components/effects/HeroBackground";
import HeroParticleSphere from "@/components/effects/HeroParticleSphere";
import { HOME_HERO } from "@/lib/home-content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <HeroBackground rayIntensity={1.1} showGlow={false} />
      <HeroParticleSphere />

      {/* Blend hero into the unified page background */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-40 bg-gradient-to-b from-transparent to-[hsl(260_20%_4%)] md:h-56"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400"
          >
            {HOME_HERO.eyebrow}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <GradientHeadline
              as="h1"
              className="text-4xl leading-[1.08] sm:text-5xl md:text-7xl lg:text-8xl"
            >
              The Smartest Way to Build, Design &amp;
              <br />
              <GradientText>Grow Your Brand Online</GradientText>
            </GradientHeadline>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-gray-400 md:text-xl"
          >
            {HOME_HERO.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <PrimaryButton href={HOME_HERO.cta.href}>{HOME_HERO.cta.label}</PrimaryButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-purple-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
