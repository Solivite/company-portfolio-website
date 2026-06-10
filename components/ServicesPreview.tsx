"use client";

import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ServicePreviewCard from "./ServicePreviewCard";
import ScrollReveal from "./ScrollReveal";

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden section-surface-light py-24 md:py-32">
      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Services"
            title={
              <>
                Comprehensive Digital
                <br />
                <span className="text-gradient-light">Solutions</span>
              </>
            }
            description="We transform your business and drive innovation across every touchpoint."
            dark={false}
          />
        </ScrollReveal>

        <div className="space-y-5">
          {SERVICES.map((service, index) => (
            <ServicePreviewCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
