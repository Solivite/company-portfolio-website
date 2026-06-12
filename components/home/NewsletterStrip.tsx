"use client";

import { NEWSLETTER } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterForm from "@/components/ui/NewsletterForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function NewsletterStrip() {
  return (
    <section className="section-surface-light-muted py-20 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              title={NEWSLETTER.title}
              description={NEWSLETTER.description}
              dark={false}
              className="mb-10"
            />
            <NewsletterForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
