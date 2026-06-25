"use client";

import { Brain, Layers } from "lucide-react";
import { VALUE_PROP } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

const featureIcons = [Brain, Layers];

export default function ValueProp() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow={VALUE_PROP.eyebrow}
            title={
              <>
                We Help Your Business
                <br />
                <span className="text-gradient">Grow in the Digital Age</span>
              </>
            }
            description={VALUE_PROP.description}
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {VALUE_PROP.features.map((feature, index) => {
            const Icon = featureIcons[index] ?? Brain;
            return (
              <ScrollReveal key={feature.title} delay={index * 0.12}>
                <article className="dark-card-glow group h-full p-8">
                  <div className="card-accent-top" aria-hidden />

                  <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/30 to-violet-600/20 text-purple-300 shadow-lg shadow-purple-600/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-500/30 group-hover:text-purple-200">
                    <Icon className="h-7 w-7" />
                    <div
                      className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-purple-100 md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                    {feature.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
