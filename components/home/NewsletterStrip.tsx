"use client";

import { NEWSLETTER } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterForm from "@/components/ui/NewsletterForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function NewsletterStrip() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl glass-panel p-10 md:p-14">
            {/* Inner glow wash */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/15 via-transparent to-violet-600/12"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-600/20 blur-[80px] animate-glow-pulse"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-600/15 blur-[70px] animate-atmo-float"
              aria-hidden
            />

            <div className="relative text-center">
              <SectionHeader
                title={
                  <>
                    Stay Ahead of the
                    <br />
                    <span className="text-gradient">Digital Curve</span>
                  </>
                }
                description={NEWSLETTER.description}
                className="mb-10"
              />
              <NewsletterForm compact />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
