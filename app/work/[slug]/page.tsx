import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/work/CaseStudyDetail";
import {
  getCaseStudy,
  getCaseStudySlugs,
} from "@/lib/case-studies-data";
import { SITE } from "@/lib/constants";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Not Found" };

  return {
    title: `${study.title} | Work | ${SITE.name}`,
    description: study.summary,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return <CaseStudyDetail study={study} />;
}
