"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import GradientHeadline, { GradientText } from "@/components/ui/GradientHeadline";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HeroBackground from "@/components/effects/HeroBackground";
import HeroParticleSphere from "@/components/effects/HeroParticleSphere";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <HeroBackground rayIntensity={1.1} />
      <HeroParticleSphere />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400"
          >
            {SITE.name}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <GradientHeadline
              as="h1"
              className="text-5xl leading-[1.05] md:text-7xl lg:text-8xl"
            >
              Building Digital
              <br />
              <GradientText>Solutions That Matter</GradientText>
            </GradientHeadline>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-gray-400 md:text-xl"
          >
            We empower organizations with design, development, and AI that turn
            complex challenges into real-world outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <PrimaryButton href="/contact">Start Your Project</PrimaryButton>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-gray-300 transition-colors hover:text-white"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
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
