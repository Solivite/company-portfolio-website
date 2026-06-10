"use client";

import { STATS } from "@/lib/constants";
import { StatGrid } from "@/components/ui/StatCounter";
import SectionGlow from "@/components/ui/SectionGlow";
import ScrollReveal from "./ScrollReveal";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-20 md:py-28">
      <SectionGlow position="center" />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <StatGrid stats={STATS} />
        </ScrollReveal>
      </div>
    </section>
  );
}
