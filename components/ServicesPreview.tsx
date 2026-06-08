"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ServicePillRow from "@/components/ui/ServicePillRow";
import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/utils";

export default function ServicesPreview() {
  return (
    <section className="bg-surface-light py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Services"
            title={
              <>
                Comprehensive Digital
                <br />
                <span className="text-gradient">Solutions</span>
              </>
            }
            description="We transform your business and drive innovation across every touchpoint."
            dark={false}
          />
        </ScrollReveal>

        <div className="space-y-6">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.number} delay={index * 0.08}>
              <Link href={service.href} className="group block">
                <article
                  className={cn(
                    "relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 md:p-10",
                    service.theme === "dark"
                      ? "border-white/5 bg-surface-dark text-white hover:border-purple-500/30"
                      : "border-border bg-white text-foreground hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/50"
                  )}
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-4 flex items-center gap-4">
                        <span
                          className={cn(
                            "font-display text-sm font-bold",
                            service.theme === "dark" ? "text-purple-400" : "text-purple-600"
                          )}
                        >
                          {service.number}
                        </span>
                        <div
                          className={cn(
                            "h-px flex-1",
                            service.theme === "dark" ? "bg-white/10" : "bg-border"
                          )}
                        />
                      </div>

                      <h3 className="font-display text-2xl font-bold md:text-3xl">
                        {service.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-3 max-w-xl text-base leading-relaxed",
                          service.theme === "dark" ? "text-gray-400" : "text-muted-foreground"
                        )}
                      >
                        {service.description}
                      </p>

                      <ServicePillRow
                        tags={service.tags}
                        dark={service.theme === "dark"}
                        className="mt-6 justify-start"
                      />
                    </div>

                    <div className="flex items-center gap-2 self-start md:mt-2">
                      <span
                        className={cn(
                          "text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100",
                          service.theme === "dark" ? "text-purple-400" : "text-purple-600"
                        )}
                      >
                        View Service
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                          service.theme === "dark" ? "text-gray-500 group-hover:text-purple-400" : "text-muted-foreground group-hover:text-purple-600"
                        )}
                      />
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
