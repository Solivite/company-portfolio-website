import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceTeasers from "@/components/home/ServiceTeasers";
import CorporateServices from "@/components/home/CorporateServices";
import FlexiblePlans from "@/components/home/FlexiblePlans";
import NewsletterStrip from "@/components/home/NewsletterStrip";
import ValueProp from "@/components/home/ValueProp";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import { SITE } from "@/lib/constants";
import { HOME_HERO } from "@/lib/home-content";

export const metadata: Metadata = {
  title: `${SITE.name} — ${HOME_HERO.eyebrow}`,
  description: HOME_HERO.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTeasers />
      <CorporateServices />
      <FlexiblePlans />
      <NewsletterStrip />
      <ValueProp />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
