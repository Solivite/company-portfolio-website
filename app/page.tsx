import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesPreview from "@/components/ServicesPreview";
import CaseStudies from "@/components/CaseStudies";
import TrustBar from "@/components/TrustBar";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <CaseStudies />
      <TrustBar />
      <Testimonials />
      <CTA />
    </>
  );
}
