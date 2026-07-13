import { MAIN_SERVICES, SERVICES_NAV_SUBMENU } from "./services-structure";

export const SITE = {
  name: "Solivite Solutions",
  shortName: "Solivite",
  tagline: "The smartest way to build, design, and grow your brand online.",
  slogan: "Ai-First Digital Agency",
  email: "hello@solivite.com",
  phone: "+1 (805) 295-0538",
  website: "www.solivite.com",
  url: "https://www.solivite.com",
  location: "Global · Remote-first",
} as const;

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
] as const;

/** @deprecated Use MAIN_SERVICES from @/lib/services-structure */
export const SERVICES = MAIN_SERVICES;

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
  { name: "Portfolio", href: "/work" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services/development",
    submenu: SERVICES_NAV_SUBMENU,
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
] as const;

/** @deprecated Use CASE_STUDIES from @/lib/case-studies-data */
export { CASE_STUDIES } from "@/lib/case-studies-data";
