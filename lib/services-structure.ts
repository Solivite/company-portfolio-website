export interface ServiceLink {
  title: string;
  href: string;
  description?: string;
}

export interface MainService {
  number: string;
  title: string;
  description: string;
  href: string;
  tags: readonly string[];
  theme: "dark" | "light";
}

export interface NavSubItem {
  name: string;
  href: string;
  children?: readonly { name: string; href: string }[];
}

export const MAIN_SERVICES: readonly MainService[] = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "We design digital experiences that feel effortless. Every interface is built around your users — intuitive, engaging, and conversion-ready.",
    href: "/services/design",
    tags: ["UI/UX", "Branding", "Prototyping"],
    theme: "dark",
  },
  {
    number: "02",
    title: "Web & App Development",
    description:
      "WordPress, Shopify, MERN, MEAN, or mobile — we build fast, scalable, and future-proof digital products tailored to your business.",
    href: "/services/development",
    tags: ["WordPress", "Shopify", "MERN", "Mobile"],
    theme: "light",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "SEO, Social Media, and Google Ads — powered by AI insights and real strategy to put your brand in front of the right audience.",
    href: "/services/marketing",
    tags: ["SEO", "Social Media", "Google Ads"],
    theme: "dark",
  },
] as const;

export const DEVELOPMENT_SUB_SERVICES: readonly ServiceLink[] = [
  {
    title: "WordPress Development",
    href: "/services/development/wordpress",
    description: "Custom WordPress sites, themes, plugins, and e-commerce solutions.",
  },
  {
    title: "Shopify Development",
    href: "/services/development/shopify",
    description: "High-converting Shopify stores with custom themes and integrations.",
  },
  {
    title: "Custom Development",
    href: "/services/development/custom",
    description: "MERN, MEAN, and fully custom web applications built to scale.",
  },
  {
    title: "Mobile Apps",
    href: "/services/development/mobile-apps",
    description: "Native and cross-platform mobile apps for iOS and Android.",
  },
] as const;

export const FOOTER_SERVICES: readonly ServiceLink[] = [
  { title: "UI/UX Design", href: "/services/design" },
  { title: "Web Development", href: "/services/development" },
  { title: "Custom Development", href: "/services/development/custom" },
  { title: "Mobile Apps", href: "/services/development/mobile-apps" },
  { title: "Digital Marketing", href: "/services/marketing" },
] as const;

export const SERVICES_NAV_SUBMENU: readonly NavSubItem[] = [
  { name: "UI/UX Design", href: "/services/design" },
  {
    name: "Web & App Development",
    href: "/services/development",
    children: DEVELOPMENT_SUB_SERVICES.map((s) => ({
      name: s.title,
      href: s.href,
    })),
  },
  { name: "Digital Marketing", href: "/services/marketing" },
] as const;
