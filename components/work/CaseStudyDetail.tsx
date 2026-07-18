"use client";

import Link from "next/link";
import type { CaseStudyData } from "@/lib/case-studies-data";
import GradientHeadline, { GradientText } from "@/components/ui/GradientHeadline";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HeroBackground from "@/components/effects/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";

interface CaseStudyDetailProps {
  study: CaseStudyData;
}

export default function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-16 md:pt-36 md:pb-24">
        <HeroBackground rayIntensity={0.85} />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${study.heroGradient} opacity-40`}
        />

        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <Link
              href="/work"
              className="mb-8 inline-flex text-sm text-purple-400 transition-colors hover:text-purple-300"
            >
              ← Back to Work
            </Link>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              {study.number} — {study.category}
            </p>

            <GradientHeadline as="h1" className="max-w-4xl text-4xl md:text-6xl lg:text-7xl">
              <CaseStudyTitle title={study.title} />
            </GradientHeadline>

            <p className="mt-6 max-w-2xl text-lg text-gray-400">{study.summary}</p>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/5 pt-8">
              <MetaItem label="Client" value={study.client} />
              <MetaItem label="Timeline" value={study.timeline} />
              <MetaItem label="Services" value={study.services.join(", ")} />
            </div>
          </ScrollReveal>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* Results */}
      <section className="bg-surface-dark-elevated py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {study.results.map((result, i) => (
              <ScrollReveal key={result.label} delay={i * 0.1}>
                <div className="text-center sm:text-left">
                  <div className="font-display text-4xl font-bold text-white md:text-5xl">
                    {result.value}
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
                    {result.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                The Challenge
              </h2>
              <p className="mt-4 leading-relaxed text-gray-400">{study.challenge}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Our Solution
              </h2>
              <p className="mt-4 leading-relaxed text-gray-400">{study.solution}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="border-y border-white/5 bg-surface-dark-elevated py-16 md:py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <blockquote className="mx-auto max-w-3xl text-center">
                <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <div className="font-semibold text-white">{study.testimonial.author}</div>
                  <div className="text-sm text-gray-500">{study.testimonial.role}</div>
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA strip */}
      <section className="bg-surface-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Want results like this?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-400">
              Let&apos;s discuss how we can help with your next {study.category.toLowerCase()}{" "}
              project.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/start-project">Start Your Project</PrimaryButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </>
  );
}

function CaseStudyTitle({ title }: { title: string }) {
  const words = title.split(" ");
  if (words.length === 1) return <>{title}</>;
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <GradientText>{last}</GradientText>
    </>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-400">{label}</p>
      <p className="mt-1 text-sm text-gray-300">{value}</p>
    </div>
  );
}
