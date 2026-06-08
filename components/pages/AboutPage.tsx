"use client";

import { Target, Eye, Heart, TrendingUp } from "lucide-react";
import { SITE, STATS } from "@/lib/constants";
import GradientHeadline, { GradientText } from "@/components/ui/GradientHeadline";
import SectionHeader from "@/components/ui/SectionHeader";
import { StatGrid } from "@/components/ui/StatCounter";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HeroBackground from "@/components/effects/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with cutting-edge digital solutions that drive growth and innovation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading digital solutions provider, recognized globally for excellence and innovation.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, creativity, and client success are at the core of everything we do.",
  },
  {
    icon: TrendingUp,
    title: "Our Promise",
    description:
      "Delivering exceptional results that exceed expectations and drive measurable business outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-16 md:pt-36 md:pb-24">
        <HeroBackground rayIntensity={0.85} />

        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                About Us
              </p>
              <GradientHeadline
                as="h1"
                className="text-4xl md:text-6xl lg:text-7xl"
              >
                About{" "}
                <GradientText>{SITE.shortName}</GradientText>
              </GradientHeadline>
              <p className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl">
                We are a complete digital solutions company with a rich legacy of
                transforming businesses through innovative technology and creative
                excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* Stats */}
      <section className="relative bg-surface-dark-elevated py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <StatGrid stats={STATS} />
          </ScrollReveal>
        </div>
      </section>

      {/* Legacy */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Our Story"
              title={
                <>
                  A Legacy of <span className="text-gradient">Innovation</span>
                </>
              }
              align="left"
              className="mb-10 max-w-3xl"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl space-y-6 rounded-2xl border border-white/5 bg-surface-dark-elevated p-8 text-gray-300 leading-relaxed md:p-12">
              <p className="text-lg text-gray-200">
                Founded in 2014, {SITE.name} began as a small team of passionate
                developers and designers with a vision to revolutionize the digital
                landscape. What started as a boutique agency has grown into a
                full-service digital solutions company serving clients across the
                globe.
              </p>
              <p>
                Over the years, we&apos;ve built a reputation for excellence,
                delivering successful projects ranging from simple websites to
                complex enterprise applications. Our journey has been marked by
                continuous innovation, adapting to emerging technologies and market
                demands.
              </p>
              <p>
                In 2018, we expanded into AI and data analytics. By 2020, we had
                established partnerships with major tech companies and were
                recognized as a leader in digital transformation.
              </p>
              <p>
                Today, {SITE.name} stands as a testament to what&apos;s possible when
                passion meets expertise. We&apos;ve worked with startups, mid-size
                companies, and enterprises — each project adding to our legacy of
                success.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-dark-elevated py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeader
              eyebrow="What Drives Us"
              title="Mission, Vision & Values"
            />
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-white/5 bg-surface-dark p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <PrimaryButton href="/contact">Work With Us</PrimaryButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </>
  );
}