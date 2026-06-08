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
        "py-20 md:py-28",
        dark ? "bg-surface-dark-elevated text-white" : "bg-secondary/30 text-foreground"
      )}
    >
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Process"
            title={
              <>
                How We <span className="text-gradient">Work</span>
              </>
            }
            dark={dark}
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {process.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.12}>
              <div className="relative text-center md:text-left">
                <span
                  className={cn(
                    "font-display text-sm font-bold",
                    dark ? "text-purple-400" : "text-purple-600"
                  )}
                >
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    dark ? "text-gray-400" : "text-muted-foreground"
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
