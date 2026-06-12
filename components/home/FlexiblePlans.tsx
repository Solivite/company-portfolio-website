import { CASE_STUDIES } from "@/lib/case-studies-data";
import { FLEXIBLE_PLANS } from "@/lib/home-content";
import { CaseStudyCard } from "@/components/work/CaseStudyGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function FlexiblePlans() {
  const previewStudies = CASE_STUDIES.slice(0, 4);

  return (
    <section className="relative overflow-hidden section-surface-light py-24 md:py-32">
      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow={FLEXIBLE_PLANS.eyebrow}
            title={
              <>
                Flexible Plans Built
                <br />
                <span className="text-gradient-light">Around Your Goals</span>
              </>
            }
            description={FLEXIBLE_PLANS.description}
            dark={false}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto -mt-8 mb-12 max-w-3xl text-center text-base text-slate-600 md:text-lg">
            {FLEXIBLE_PLANS.subDescription}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {previewStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <PrimaryButton href={FLEXIBLE_PLANS.cta.href} variant="dark">
              {FLEXIBLE_PLANS.cta.label}
            </PrimaryButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
