"use client";

import HeroBackground from "@/components/effects/HeroBackground";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ScrollReveal from "@/components/ScrollReveal";

interface ServiceCTAProps {
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export default function ServiceCTA({ cta }: ServiceCTAProps) {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-20 md:py-28">
      <HeroBackground rayIntensity={0.65} glowPosition="center" />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {cta.title}
            </h2>
            <p className="mt-4 text-lg text-gray-400">{cta.description}</p>
            <div className="mt-8">
              <PrimaryButton href="/contact">{cta.buttonText}</PrimaryButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
