import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description:
    "Let's build together — tell us about your UI/UX, development, or marketing project and we'll respond within one business day.",
};

export default function Contact() {
  return <ContactPage />;
}
