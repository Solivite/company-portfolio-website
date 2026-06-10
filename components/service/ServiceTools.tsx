"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

interface ServiceToolsProps {
  tools: readonly string[];
  dark?: boolean;
}

export default function ServiceTools({ tools, dark = false }: ServiceToolsProps) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-20",
        dark ? "bg-surface-dark text-white" : "section-surface-light text-foreground"
      )}
    >
      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Tools & Stack"
            title="Technologies We Use"
            dark={dark}
            className="mb-10"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className={cn(
                  dark
                    ? "rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-purple-500/40 hover:text-white"
                    : "light-tool-chip"
                )}
              >
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
