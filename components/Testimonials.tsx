"use client";

import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { TESTIMONIALS_CONTENT } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function Testimonials() {
  return (
    <section className="bg-surface-dark-elevated py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow={TESTIMONIALS_CONTENT.eyebrow}
            title={TESTIMONIALS_CONTENT.title}
            description={TESTIMONIALS_CONTENT.description}
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS_CONTENT.items.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <div className="relative h-full rounded-2xl border border-white/5 bg-surface-dark p-8">
                <Quote className="mb-4 h-8 w-8 text-purple-500/40" />
                <p className="mb-6 leading-relaxed text-gray-400">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href={TESTIMONIALS_CONTENT.cta.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
            >
              {TESTIMONIALS_CONTENT.cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
