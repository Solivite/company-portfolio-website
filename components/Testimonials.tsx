"use client";

import Link from "next/link";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS_CONTENT } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

function initials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow={TESTIMONIALS_CONTENT.eyebrow}
            title={
              <>
                Brands That Trusted Us
                <br />
                <span className="text-gradient">— and Grew</span>
              </>
            }
            description={TESTIMONIALS_CONTENT.description}
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS_CONTENT.items.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <div className="dark-card-glow group relative h-full p-8">
                <div className="card-accent-top" aria-hidden />

                <div className="relative mb-5 flex items-start justify-between">
                  <Quote className="h-9 w-9 text-purple-500/50 transition-colors group-hover:text-purple-400/70" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-purple-500/60 text-purple-500/60"
                      />
                    ))}
                  </div>
                </div>

                <p className="relative mb-8 leading-relaxed text-gray-300 transition-colors group-hover:text-gray-200">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-violet-600 text-sm font-bold text-white shadow-lg shadow-purple-600/30">
                    {initials(testimonial.name)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-purple-400/80">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href={TESTIMONIALS_CONTENT.cta.href}
              className="group inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-600/10 px-6 py-3 text-sm font-semibold text-purple-300 transition-all hover:border-purple-400/50 hover:bg-purple-600/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
            >
              {TESTIMONIALS_CONTENT.cta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
