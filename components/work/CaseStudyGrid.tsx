"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudyData } from "@/lib/case-studies-data";
import OptionalImage from "@/components/ui/OptionalImage";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionGlow from "@/components/ui/SectionGlow";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  study: CaseStudyData;
  index?: number;
  featured?: boolean;
}

export function CaseStudyCard({ study, index = 0, featured = false }: CaseStudyCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link href={`/work/${study.slug}`} className="group block h-full">
        <article
          className={cn(
            "relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 transition-all duration-300",
            "bg-surface-dark-elevated hover:border-purple-500/30 hover:bg-white/[0.02]",
            featured && "md:flex-row md:items-stretch"
          )}
        >
          <CaseStudyVisual study={study} featured={featured} />

          <div className={cn("flex flex-1 flex-col p-8", featured && "md:justify-center")}>
            <div className="mb-4 flex items-start justify-between">
              <span className="font-display text-sm font-bold text-purple-400">
                {study.number}
              </span>
              <ArrowUpRight className="h-5 w-5 text-gray-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-400" />
            </div>

            <h3
              className={cn(
                "font-display font-bold text-white transition-colors group-hover:text-purple-200",
                featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
              )}
            >
              {study.title}
            </h3>
            <p className="mt-2 text-sm text-purple-400">{study.category}</p>
            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-400">
              {study.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  );
}

function CaseStudyVisual({
  study,
  featured,
}: {
  study: CaseStudyData;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        featured ? "md:w-1/2 md:min-h-[280px]" : "h-40"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          study.heroGradient
        )}
      />
      {study.image && (
        <OptionalImage
          src={study.image}
          alt=""
          className="opacity-40 transition-opacity duration-300 group-hover:opacity-60"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark-elevated via-transparent to-transparent" />
    </div>
  );
}

interface CaseStudyGridProps {
  studies: CaseStudyData[];
  showHeader?: boolean;
}

export default function CaseStudyGrid({ studies, showHeader = true }: CaseStudyGridProps) {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-24 md:py-32">
      <SectionGlow position="top" />

      <div className="relative z-10 container mx-auto px-4">
        {showHeader && (
          <ScrollReveal>
            <SectionHeader
              eyebrow="Case Studies"
              title={
                <>
                  Proven Results,
                  <br />
                  <span className="text-gradient">Measurable Impact</span>
                </>
              }
              description="Explore the transformations we've delivered for clients across industries."
            />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {studies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
            >
              View all work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
