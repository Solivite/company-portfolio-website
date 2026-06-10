"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

interface ServiceProcessProps {
  process: readonly { step: string; title: string; description: string }[];
  dark?: boolean;
}

export default function ServiceProcess({ process, dark = true }: ServiceProcessProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28",
        dark ? "bg-surface-dark-elevated text-white" : "section-surface-light-muted text-foreground"
      )}
    >
      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Process"
            title={
              <>
                How We{" "}
                <span className={dark ? "text-gradient" : "text-gradient-light"}>Work</span>
              </>
            }
            dark={dark}
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {process.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.12}>
              <div
                className={cn(
                  "relative text-center md:text-left",
                  !dark && "light-card p-6"
                )}
              >
                <span
                  className={cn(
                    "font-display text-sm font-bold",
                    dark ? "text-purple-400" : "text-purple-600"
                  )}
                >
                  {step.step}
                </span>
                <h3
                  className={cn(
                    "mt-2 font-display text-xl font-bold",
                    !dark && "text-slate-900"
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    dark ? "text-gray-400" : "text-slate-600"
                  )}
                >
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
