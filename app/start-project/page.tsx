import type { Metadata } from "next";
import StartProjectPage from "@/components/pages/StartProjectPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Start Your Project | ${SITE.name}`,
  description:
    "Share a short project brief so we can research your business and prepare a tailored solution before our discovery call.",
};

export default function StartProject() {
  return <StartProjectPage />;
}
