import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description: `Get in touch with ${SITE.name}. Start your project today.`,
};

export default function Contact() {
  return <ContactPage />;
}
