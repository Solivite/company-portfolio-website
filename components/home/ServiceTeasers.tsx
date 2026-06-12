"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_TEASERS } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServiceTeasers() {
  return (
    <section className="relative overflow-hidden section-surface-light py-24 md:py-32">
      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow={SERVICE_TEASERS.eyebrow}
            title={
              <>
                What We Do
                <br />
                <span className="text-gradient-light">Best</span>
              </>
            }
            dark={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICE_TEASERS.items.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Link href={service.href} className="group block h-full">
                <article className="light-card relative flex h-full flex-col overflow-hidden p-8">
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-7xl font-bold text-purple-100/80"
                    aria-hidden
                  >
                    {service.number}
                  </span>

                  <div className="relative flex flex-1 flex-col">
                    <span className="font-display text-sm font-bold text-purple-600">
                      {service.number}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="light-chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-600">
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        Learn more
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-200 bg-purple-50 text-purple-600 transition-all group-hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
