"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceSubOffering } from "@/lib/services-data";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

interface ServiceSubOfferingsProps {
  offerings: readonly ServiceSubOffering[];
  dark?: boolean;
}

export default function ServiceSubOfferings({
  offerings,
  dark = false,
}: ServiceSubOfferingsProps) {
  return (
    <section
      className={
        dark
          ? "bg-surface-dark py-20 md:py-28"
          : "section-surface-light-muted py-20 md:py-28"
      }
    >
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Specialisations"
            title="Explore Our Development Services"
            description="Deep expertise across every platform your business might need."
            dark={dark}
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {offerings.map((offering, index) => (
            <ScrollReveal key={offering.href} delay={index * 0.08}>
              <Link href={offering.href} className="group block h-full">
                <article
                  className={
                    dark
                      ? "flex h-full flex-col rounded-2xl border border-white/5 bg-surface-dark-elevated p-6 transition-colors hover:border-purple-500/30"
                      : "light-card flex h-full flex-col p-6"
                  }
                >
                  <div className="mb-4 flex items-start justify-between">
                    <h3
                      className={
                        dark
                          ? "font-display text-xl font-bold text-white group-hover:text-purple-200"
                          : "font-display text-xl font-bold text-slate-900"
                      }
                    >
                      {offering.title}
                    </h3>
                    <ArrowUpRight
                      className={
                        dark
                          ? "h-5 w-5 shrink-0 text-gray-500 transition-all group-hover:text-purple-400"
                          : "h-5 w-5 shrink-0 text-purple-400"
                      }
                    />
                  </div>
                  <p
                    className={
                      dark
                        ? "text-sm leading-relaxed text-gray-400"
                        : "text-sm leading-relaxed text-slate-600"
                    }
                  >
                    {offering.description}
                  </p>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
