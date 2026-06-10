"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  href: string;
  tags: readonly string[];
};

interface ServicePreviewCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServicePreviewCard({ service, index }: ServicePreviewCardProps) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <Link href={service.href} className="group block">
        <article className="light-card relative overflow-hidden p-8 md:p-10">
          <span
            className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-8xl font-bold text-purple-100/80 md:text-9xl"
            aria-hidden
          >
            {service.number}
          </span>

          <div className="absolute left-0 top-8 h-16 w-1 rounded-full bg-gradient-to-b from-purple-500 to-violet-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1 pr-4 md:pr-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-sm font-bold text-purple-600">
                  {service.number}
                </span>
                <div className="h-px flex-1 bg-purple-200/80" />
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="light-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 self-start md:mt-3">
              <span className="text-sm font-semibold text-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View Service
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-purple-50 text-purple-600 transition-all duration-300 group-hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white">
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  );
}
