"use client";

import { TRUST_LOGOS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "./ScrollReveal";

export default function TrustBar() {
  const logos = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <section className="overflow-hidden bg-surface-dark-elevated py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Trusted By"
            title="Industry Leaders"
            description="Powering innovation for companies worldwide."
          />
        </ScrollReveal>
      </div>

      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-dark-elevated to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-dark-elevated to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap">
          {logos.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="mx-12 font-display text-2xl font-bold text-white/20 md:text-3xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
