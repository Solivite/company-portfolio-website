export const SITE = {
  name: "Solivite Solutions",
  shortName: "Solivite",
  tagline: "Building digital solutions that matter.",
  email: "hello@solivite.com",
  phone: "+1 (805) 295-0538",
  website: "www.solivite.com",
  url: "https://www.solivite.com",
} as const;

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Design Services",
    description:
      "Graphic design, UI/UX, logo design, branding, and motion — polished systems with developer-ready handoff.",
    href: "/services/design",
    tags: ["Graphic Design", "Logo Design", "UX/UI Design", "Branding"],
    theme: "dark" as const,
  },
  {
    number: "02",
    title: "Development",
    description:
      "Web and mobile apps from WordPress to custom React and Next.js — fast, secure, and built to scale.",
    href: "/services/development",
    tags: ["Web Apps", "Mobile Apps", "Cross-platform", "Modern Stack"],
    theme: "light" as const,
  },
  {
    number: "03",
    title: "Content Writing",
    description:
      "Professional content that strengthens your brand voice across web, social, and marketing channels.",
    href: "/services/content",
    tags: ["Web Copy", "Blog Posts", "Social Content", "SEO Writing"],
    theme: "light" as const,
  },
  {
    number: "04",
    title: "Data & AI",
    description:
      "Data analytics, machine learning, and AI-powered solutions from prototype to production.",
    href: "/services/data-ai",
    tags: ["Analytics", "Machine Learning", "AI Integration", "Automation"],
    theme: "dark" as const,
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "SEO, social media, Meta ads, and growth strategies that turn attention into measurable results.",
    href: "/services/marketing",
    tags: ["SEO", "Meta Ads", "Social Media", "Growth Strategy"],
    theme: "dark" as const,
  },
  {
    number: "06",
    title: "Games",
    description:
      "Interactive game development and immersive experiences for web, mobile, and beyond.",
    href: "/services/games",
    tags: ["Game Dev", "Unity", "Interactive", "Mobile Games"],
    theme: "dark" as const,
  },
] as const;

export const TRUST_LOGOS = [
  "TechStart",
  "InnovateLab",
  "GrowthCo",
  "DataFlow",
  "CloudNine",
  "PixelWorks",
] as const;

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    submenu: SERVICES.map((s) => ({ name: s.title, href: s.href })),
  },
  { name: "Contact", href: "/contact" },
] as const;

/** @deprecated Use CASE_STUDIES from @/lib/case-studies-data */
export { CASE_STUDIES } from "@/lib/case-studies-data";
