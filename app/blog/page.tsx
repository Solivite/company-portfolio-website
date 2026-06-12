import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import BlogPreview from "@/components/home/BlogPreview";
import GradientHeadline, { GradientText } from "@/components/ui/GradientHeadline";
import HeroBackground from "@/components/effects/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: `Blog | ${SITE.name}`,
  description:
    "Latest insights on AI-first web development, design, and digital marketing from Solivite Solutions.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <HeroBackground rayIntensity={0.75} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Our Blog
            </p>
            <GradientHeadline as="h1" className="text-4xl md:text-6xl lg:text-7xl">
              Latest Insights &amp; <GradientText>Ideas</GradientText>
            </GradientHeadline>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              AI, web development, design trends, and digital marketing — straight from our team.
            </p>
          </ScrollReveal>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      <BlogPreview showCta={false} showHeader={false} />
    </>
  );
}
