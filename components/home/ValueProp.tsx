"use client";

import { Brain, Layers } from "lucide-react";
import { VALUE_PROP } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionGlow from "@/components/ui/SectionGlow";
import ScrollReveal from "@/components/ScrollReveal";

const featureIcons = [Brain, Layers];

export default function ValueProp() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-24 md:py-32">
      <SectionGlow position="top" />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow={VALUE_PROP.eyebrow}
            title={VALUE_PROP.title}
            description={VALUE_PROP.description}
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {VALUE_PROP.features.map((feature, index) => {
            const Icon = featureIcons[index] ?? Brain;
            return (
              <ScrollReveal key={feature.title} delay={index * 0.12}>
                <article className="h-full rounded-2xl border border-white/5 bg-surface-dark-elevated p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/20 to-violet-600/20 text-purple-400">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-400">{feature.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
