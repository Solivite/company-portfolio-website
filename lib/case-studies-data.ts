export interface CaseStudyData {
  slug: string;
  number: string;
  title: string;
  category: string;
  services: readonly string[];
  summary: string;
  client: string;
  timeline: string;
  heroGradient: string;
  image?: string;
  challenge: string;
  solution: string;
  results: readonly { label: string; value: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: "fintech-mobile-app",
    number: "01",
    title: "Fintech Mobile App",
    category: "Development",
    services: ["UI/UX Design", "Mobile Development"],
    summary:
      "A secure mobile banking experience with real-time transactions, biometric auth, and a polished UI built for scale.",
    client: "Confidential Fintech Startup",
    timeline: "4 months",
    heroGradient: "from-purple-900/60 via-violet-900/30 to-transparent",
    image: "/images/case-studies/fintech-app.webp",
    challenge:
      "The client needed a mobile app that could handle sensitive financial data while delivering a consumer-grade experience. Legacy wireframes lacked cohesion and the previous vendor missed deadlines.",
    solution:
      "We redesigned the full UX flow, built a React Native app with secure API integration, and implemented biometric authentication with offline-first transaction caching.",
    results: [
      { label: "App Store Rating", value: "4.8★" },
      { label: "Onboarding Drop-off", value: "-42%" },
      { label: "Launch Timeline", value: "On schedule" },
    ],
    testimonial: {
      quote:
        "Solivite delivered a beautiful, functional app that exceeded our expectations. The team understood fintech compliance without slowing us down.",
      author: "Michael Chen",
      role: "Founder, InnovateLab",
    },
  },
  {
    slug: "ecommerce-platform",
    number: "02",
    title: "E-Commerce Platform",
    category: "Web Development",
    services: ["Website Design", "Web Development"],
    summary:
      "A headless Next.js storefront with custom checkout, inventory sync, and conversion-optimized product pages.",
    client: "Retail Brand",
    timeline: "3 months",
    heroGradient: "from-violet-900/50 via-purple-800/20 to-transparent",
    image: "/images/case-studies/ecommerce.webp",
    challenge:
      "An outdated WordPress store struggled with slow load times, poor mobile conversion, and limited customization for seasonal campaigns.",
    solution:
      "We migrated to Next.js with a headless CMS, rebuilt product pages around conversion best practices, and integrated Shopify for fulfillment.",
    results: [
      { label: "Page Speed", value: "+65%" },
      { label: "Mobile Conversion", value: "+28%" },
      { label: "Core Web Vitals", value: "All green" },
    ],
  },
  {
    slug: "health-tracker-app",
    number: "03",
    title: "Health Tracker App",
    category: "Development",
    services: ["UI/UX Design", "Mobile Development"],
    summary:
      "A wellness app with activity tracking, personalized dashboards, and HIPAA-aware data handling.",
    client: "Health & Wellness Co.",
    timeline: "5 months",
    heroGradient: "from-indigo-900/50 via-purple-900/30 to-transparent",
    image: "/images/case-studies/health-tracker.webp",
    challenge:
      "Users abandoned the beta due to cluttered dashboards and unclear progress metrics. The client needed a simpler, motivating experience.",
    solution:
      "We ran user research, simplified the UI to three core metrics, and built gamified streaks with push notification reminders.",
    results: [
      { label: "Daily Active Users", value: "+120%" },
      { label: "Session Length", value: "+35%" },
      { label: "User Retention (30d)", value: "68%" },
    ],
  },
  {
    slug: "brand-growth-campaign",
    number: "04",
    title: "Brand Growth Campaign",
    category: "Marketing",
    services: ["Meta Ads", "Digital Marketing"],
    summary:
      "A Meta ads funnel that turned leaking traffic into qualified leads with creative testing and landing page optimization.",
    client: "B2B SaaS Company",
    timeline: "2 months",
    heroGradient: "from-purple-950/80 via-violet-900/40 to-transparent",
    image: "/images/case-studies/marketing-funnel.webp",
    challenge:
      "Paid traffic was arriving but bouncing — the funnel had cracks at the ad-to-landing-page handoff and weak retargeting sequences.",
    solution:
      "We rebuilt the Meta ad creative, designed high-converting landing pages, and implemented a full-funnel retargeting strategy with weekly optimization.",
    results: [
      { label: "Cost Per Lead", value: "-48%" },
      { label: "ROAS", value: "3.2×" },
      { label: "Qualified Leads", value: "+210%" },
    ],
    testimonial: {
      quote:
        "Their digital marketing strategies helped us triple our online engagement. Professional, creative, and results-driven.",
      author: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug);
}
