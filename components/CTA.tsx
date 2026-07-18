"use client";

import { SITE } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HeroBackground from "@/components/effects/HeroBackground";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-24 md:py-32">
      <HeroBackground rayIntensity={0.7} glowPosition="center" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow="Let's Work Together"
              title={
                <>
                  We turn bold ideas into
                  <br />
                  <span className="text-gradient">powerful digital realities.</span>
                </>
              }
              description={`Ready to start? Reach us at ${SITE.email} or book a call today.`}
            />

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/start-project">Start Your Project</PrimaryButton>
              <PrimaryButton href="/about" variant="outline" showArrow={false}>
                Learn About Us
              </PrimaryButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
