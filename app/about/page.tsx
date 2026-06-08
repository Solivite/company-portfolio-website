import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE.name}`,
  description: `Learn about ${SITE.name} — our mission, legacy, and the team behind your digital success.`,
};

export default function About() {
  return <AboutPage />;
}
