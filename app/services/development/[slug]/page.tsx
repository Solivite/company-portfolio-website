import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service/ServicePage";
import {
  getDevelopmentSubPageData,
  getDevelopmentSubSlugs,
} from "@/lib/services-data";
import { SITE } from "@/lib/constants";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getDevelopmentSubSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const data = getDevelopmentSubPageData(params.slug);
  if (!data) return { title: "Not Found" };

  return {
    title: `${data.title} | ${SITE.name}`,
    description: data.metaDescription,
  };
}

export default function DevelopmentSubServicePage({ params }: PageProps) {
  const data = getDevelopmentSubPageData(params.slug);
  if (!data) notFound();

  return <ServicePage data={data} />;
}
