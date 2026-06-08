import type { Metadata } from "next";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { SITE } from "@/lib/constants";
import { CaseStudyCard } from "@/components/work/CaseStudyGrid";
import GradientHeadline, { GradientText } from "@/components/ui/GradientHeadline";
import HeroBackground from "@/components/effects/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: `Work | ${SITE.name}`,
  description: "Explore case studies and client projects delivered by Solivite Solutions.",
};

export default function WorkPage() {
  const [featured, ...rest] = CASE_STUDIES;

  return (
    <>
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <HeroBackground rayIntensity={0.8} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Our Work
            </p>
            <GradientHeadline as="h1" className="text-4xl md:text-6xl lg:text-7xl">
              Case <GradientText>Studies</GradientText>
            </GradientHeadline>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Proven results across design, development, and marketing — measurable impact for
              every client we partner with.
            </p>
          </ScrollReveal>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* Featured project */}
      <section className="bg-surface-dark pb-8 pt-4">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
              Featured Project
            </p>
          </ScrollReveal>
          <CaseStudyCard study={featured} featured />
        </div>
      </section>

      {/* All projects */}
      <section className="bg-surface-dark pb-24 pt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {rest.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
