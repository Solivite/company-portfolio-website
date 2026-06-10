"use client";

import type { ServiceDeliverable } from "@/lib/services-data";
import { getServiceIcon } from "@/lib/service-icons";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

interface ServiceDeliverablesProps {
  deliverables: ServiceDeliverable[];
  title: string;
  dark?: boolean;
}

export default function ServiceDeliverables({
  deliverables,
  title,
  dark = false,
}: ServiceDeliverablesProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28",
        dark ? "bg-surface-dark text-white" : "section-surface-light text-foreground"
      )}
    >
      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow="What We Deliver"
            title={
              <>
                {title.split(" ")[0]}{" "}
                <span className={dark ? "text-gradient" : "text-gradient-light"}>
                  Capabilities
                </span>
              </>
            }
            description="End-to-end services tailored to your business goals."
            dark={dark}
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => {
            const Icon = getServiceIcon(item.icon);
            return (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div
                  className={cn(
                    "group h-full p-8",
                    dark
                      ? "rounded-2xl border border-white/5 bg-surface-dark-elevated transition-all duration-300 hover:border-purple-500/30"
                      : "light-card"
                  )}
                >
                  <div
                    className={cn(
                      "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
                      dark ? "bg-purple-600/20 text-purple-400" : "bg-purple-100 text-purple-600"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={cn(
                      "font-display text-xl font-bold",
                      !dark && "text-slate-900"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-relaxed",
                      dark ? "text-gray-400" : "text-slate-600"
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
