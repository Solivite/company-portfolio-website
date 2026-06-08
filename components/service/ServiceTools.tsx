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
        "py-16 md:py-20",
        dark ? "bg-surface-dark text-white" : "bg-white text-foreground"
      )}
    >
      <div className="container mx-auto px-4">
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
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
                  dark
                    ? "border-white/10 text-gray-300 hover:border-purple-500/40 hover:text-white"
                    : "border-border text-muted-foreground hover:border-purple-300 hover:text-purple-700"
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
