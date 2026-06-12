import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE.name}`,
  description:
    "Your digital growth partner — designers, developers, and marketers working as one team to grow your brand online.",
};

export default function About() {
  return <AboutPage />;
}
