import Link from "next/link";
import { SITE } from "@/lib/constants";
import { FOOTER_SERVICES } from "@/lib/services-structure";
import { NEWSLETTER } from "@/lib/home-content";
import Logo from "./Logo";
import ContactBar from "@/components/ui/ContactBar";
import NewsletterForm from "@/components/ui/NewsletterForm";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/development" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
              Office
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>{SITE.location}</li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
              Newsletter
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              {NEWSLETTER.footerDescription}
            </p>
            <NewsletterForm compact />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <Logo variant="landscape" showText={true} className="opacity-80" />
          <p className="text-xs text-gray-500">
            &copy; 2026 {SITE.name}. All Rights Reserved.
          </p>
        </div>
      </div>

      <ContactBar />
    </footer>
  );
}
