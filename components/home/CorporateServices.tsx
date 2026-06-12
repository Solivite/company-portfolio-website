"use client";

import { CORPORATE_SERVICES } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionGlow from "@/components/ui/SectionGlow";
import ScrollReveal from "@/components/ScrollReveal";

export default function CorporateServices() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-24 md:py-32">
      <SectionGlow position="center" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeader
              eyebrow={CORPORATE_SERVICES.eyebrow}
              title={CORPORATE_SERVICES.title}
              description={CORPORATE_SERVICES.description}
              align="left"
              className="mb-0"
            />
            <div className="mt-8">
              <PrimaryButton href={CORPORATE_SERVICES.cta.href}>
                {CORPORATE_SERVICES.cta.label}
              </PrimaryButton>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {CORPORATE_SERVICES.points.map((point, index) => (
              <ScrollReveal key={point.number} delay={index * 0.12}>
                <article className="rounded-2xl border border-white/5 bg-surface-dark-elevated p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-display text-sm font-bold text-purple-400">
                      {point.number}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    {point.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-400">{point.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
