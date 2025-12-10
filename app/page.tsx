import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
