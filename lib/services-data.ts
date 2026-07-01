export type ServiceVisualType =
  | "design"
  | "development"
  | "web"
  | "marketing"
  | "meta"
  | "ai"
  | "content"
  | "games";

export type ServiceTheme = "dark" | "light";

export type ServiceIconName =
  | "palette"
  | "video"
  | "zap"
  | "image"
  | "penTool"
  | "layers"
  | "code"
  | "globe"
  | "smartphone"
  | "shoppingCart"
  | "rocket"
  | "fileText"
  | "penSquare"
  | "bookOpen"
  | "messageSquare"
  | "fileEdit"
  | "brain"
  | "database"
  | "barChart3"
  | "cpu"
  | "network"
  | "trendingUp"
  | "search"
  | "share2"
  | "target"
  | "mail"
  | "barChart"
  | "gamepad2"
  | "puzzle"
  | "users"
  | "trophy";

export interface ServiceDeliverable {
  icon: ServiceIconName;
  title: string;
  description: string;
}

export interface ServiceSubOffering {
  title: string;
  description: string;
  href: string;
}

export interface ServicePageData {
  slug: string;
  number: string;
  title: string;
  metaDescription: string;
  hero: {
    theme: ServiceTheme;
    eyebrow: string;
    headline: string;
    headlineGradient: string;
    description: string;
    tags: readonly string[];
    visual: ServiceVisualType;
    image?: string;
  };
  deliverables: ServiceDeliverable[];
  tools: readonly string[];
  process: readonly { step: string; title: string; description: string }[];
  subOfferings?: readonly ServiceSubOffering[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  design: {
    slug: "design",
    number: "01",
    title: "UI/UX Design",
    metaDescription:
      "UI/UX design, branding, and conversion-ready digital experiences from Solivite Solutions.",
    hero: {
      theme: "dark",
      eyebrow: "UI/UX Design",
      headline: "Digital Experiences That",
      headlineGradient: "Feel Effortless",
      description:
        "We design digital experiences that feel effortless. Every interface is built around your users — intuitive, engaging, and conversion-ready.",
      tags: ["UI/UX Design", "Branding", "Prototyping", "Design Systems"],
      visual: "design",
      image: "/images/services/design.webp",
    },
    deliverables: [
      {
        icon: "palette",
        title: "Graphic Design",
        description:
          "Stunning visual designs for print and digital media — brochures, social graphics, and brand collateral.",
      },
      {
        icon: "video",
        title: "Video Editing",
        description:
          "Professional video editing for commercials, social content, corporate videos, and storytelling.",
      },
      {
        icon: "zap",
        title: "Animations",
        description:
          "2D and 3D animations, motion graphics, and interactive animations that captivate audiences.",
      },
      {
        icon: "image",
        title: "Logo Design",
        description:
          "Memorable, scalable logo designs that represent your brand identity and make a lasting impression.",
      },
      {
        icon: "layers",
        title: "UI/UX Design",
        description:
          "User-centered design for websites and apps — intuitive, beautiful interfaces users love.",
      },
      {
        icon: "penTool",
        title: "Brand Identity",
        description:
          "Complete brand packages: color systems, typography, style guides, and brand guidelines.",
      },
    ],
    tools: ["Figma", "Adobe Creative Suite", "After Effects", "Principle", "Blender"],
    process: [
      { step: "01", title: "Discover", description: "Research your brand, audience, and goals." },
      { step: "02", title: "Design", description: "Wireframes, concepts, and polished UI systems." },
      { step: "03", title: "Deliver", description: "Developer-ready assets and design documentation." },
    ],
    cta: {
      title: "Ready to Get Started?",
      description: "Let's discuss your design needs and create something amazing together.",
      buttonText: "Let's Build Together",
    },
  },

  development: {
    slug: "development",
    number: "02",
    title: "Web & App Development",
    metaDescription:
      "WordPress, Shopify, MERN, MEAN, and mobile app development — fast, scalable, future-proof digital products.",
    hero: {
      theme: "dark",
      eyebrow: "Web & App Development",
      headline: "Build Fast, Scalable",
      headlineGradient: "Digital Products",
      description:
        "WordPress, Shopify, MERN, MEAN, or mobile — we build fast, scalable, and future-proof digital products tailored to your business.",
      tags: ["WordPress", "Shopify", "MERN", "Mobile"],
      visual: "development",
      image: "/images/services/development.webp",
    },
    deliverables: [
      {
        icon: "globe",
        title: "WordPress Development",
        description: "Affordable WordPress sites and e-commerce with custom themes, plugins, and maintenance.",
      },
      {
        icon: "shoppingCart",
        title: "Shopify Development",
        description: "High-converting Shopify stores with custom themes, apps, and integrations.",
      },
      {
        icon: "code",
        title: "Custom Web Development",
        description: "Fully custom MERN and MEAN applications — scalable, modern, and built to perform.",
      },
      {
        icon: "smartphone",
        title: "Mobile App Development",
        description: "Native iOS and Android apps plus cross-platform solutions with React Native and Flutter.",
      },
      {
        icon: "cpu",
        title: "AI-Powered Development",
        description: "Intelligent features, automation, and data-driven enhancements built into your product.",
      },
      {
        icon: "rocket",
        title: "Maintenance & Support",
        description: "Ongoing maintenance, updates, security patches, and dedicated support.",
      },
    ],
    subOfferings: [
      {
        title: "WordPress Development",
        description: "Custom WordPress sites, themes, plugins, and e-commerce solutions.",
        href: "/services/development/wordpress",
      },
      {
        title: "Shopify Development",
        description: "High-converting Shopify stores with custom themes and integrations.",
        href: "/services/development/shopify",
      },
      {
        title: "Custom Development",
        description: "MERN, MEAN, and fully custom web applications built to scale.",
        href: "/services/development/custom",
      },
      {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile apps for iOS and Android.",
        href: "/services/development/mobile-apps",
      },
    ],
    tools: ["React", "Next.js", "Node.js", "Flutter", "WordPress", "Shopify"],
    process: [
      { step: "01", title: "Plan", description: "Scope, architecture, and roadmap alignment." },
      { step: "02", title: "Build", description: "Agile development with regular demos and feedback." },
      { step: "03", title: "Launch", description: "Deploy, monitor, and iterate for long-term success." },
    ],
    cta: {
      title: "Let's Build Something Great",
      description: "Ready to bring your idea to life? Get in touch and let's discuss your project.",
      buttonText: "Let's Build Together",
    },
  },

  marketing: {
    slug: "marketing",
    number: "03",
    title: "Digital Marketing",
    metaDescription:
      "SEO, social media, Google Ads, and AI-powered marketing strategies that drive measurable results.",
    hero: {
      theme: "dark",
      eyebrow: "Digital Marketing",
      headline: "Put Your Brand in Front of",
      headlineGradient: "The Right Audience",
      description:
        "SEO, Social Media, and Google Ads — powered by AI insights and real strategy to put your brand in front of the right audience.",
      tags: ["SEO", "Social Media", "Google Ads", "AI Insights"],
      visual: "marketing",
      image: "/images/services/marketing.webp",
    },
    deliverables: [
      {
        icon: "search",
        title: "SEO Services",
        description: "Comprehensive SEO — keyword research, on-page optimization, and link building.",
      },
      {
        icon: "share2",
        title: "Social Media Marketing",
        description: "Content, community management, and paid advertising across all platforms.",
      },
      {
        icon: "target",
        title: "Google Ads & PPC",
        description: "Google Ads and paid campaigns with data-driven strategies that convert.",
      },
      {
        icon: "penSquare",
        title: "SEO Content Writing",
        description: "Compelling, search-optimised copy that ranks and converts across your funnel.",
      },
      {
        icon: "mail",
        title: "Email Marketing",
        description: "Targeted campaigns with automation, segmentation, and conversion optimization.",
      },
      {
        icon: "barChart",
        title: "Analytics & Reporting",
        description: "Track performance with comprehensive dashboards and actionable insights.",
      },
      {
        icon: "trendingUp",
        title: "Growth Marketing",
        description: "End-to-end growth from acquisition to retention — scale sustainably.",
      },
    ],
    tools: ["Google Ads", "Meta Business Suite", "Google Analytics", "SEMrush", "HubSpot"],
    process: [
      { step: "01", title: "Audit", description: "Analyze your funnel, channels, and conversion leaks." },
      { step: "02", title: "Strategy", description: "Build a data-backed plan tailored to your goals." },
      { step: "03", title: "Scale", description: "Launch, optimize, and scale what works." },
    ],
    cta: {
      title: "Ready to Grow Your Business?",
      description: "Let's create a marketing strategy that drives real results.",
      buttonText: "Let's Build Together",
    },
  },
};

export const DEVELOPMENT_SUB_PAGES: Record<string, ServicePageData> = {
  wordpress: {
    slug: "wordpress",
    number: "02",
    title: "WordPress Development",
    metaDescription:
      "Custom WordPress development — themes, plugins, e-commerce, and maintenance from Solivite Solutions.",
    hero: {
      theme: "dark",
      eyebrow: "WordPress Development",
      headline: "WordPress Sites That",
      headlineGradient: "Perform",
      description:
        "From blogs to e-commerce, we build WordPress sites with custom themes, plugins, and performance optimisation.",
      tags: ["Custom Themes", "WooCommerce", "Plugins", "Maintenance"],
      visual: "web",
    },
    deliverables: [
      {
        icon: "globe",
        title: "Custom Themes",
        description: "Bespoke WordPress themes tailored to your brand and conversion goals.",
      },
      {
        icon: "shoppingCart",
        title: "WooCommerce Stores",
        description: "Full e-commerce setup with payment gateways, inventory, and checkout optimisation.",
      },
      {
        icon: "code",
        title: "Plugin Development",
        description: "Custom plugins and integrations to extend WordPress functionality.",
      },
      {
        icon: "rocket",
        title: "Performance & Security",
        description: "Speed optimisation, security hardening, and ongoing maintenance.",
      },
    ],
    tools: ["WordPress", "WooCommerce", "PHP", "ACF", "Elementor"],
    process: [
      { step: "01", title: "Plan", description: "Define site structure, features, and content strategy." },
      { step: "02", title: "Build", description: "Develop theme, configure plugins, and populate content." },
      { step: "03", title: "Launch", description: "Deploy, train your team, and provide ongoing support." },
    ],
    cta: {
      title: "Ready for a Better WordPress Site?",
      description: "Let's discuss your WordPress project and build something that performs.",
      buttonText: "Let's Build Together",
    },
  },
  shopify: {
    slug: "shopify",
    number: "02",
    title: "Shopify Development",
    metaDescription:
      "Shopify store development — custom themes, apps, and conversion optimisation from Solivite Solutions.",
    hero: {
      theme: "dark",
      eyebrow: "Shopify Development",
      headline: "Shopify Stores That",
      headlineGradient: "Convert",
      description:
        "High-converting Shopify stores with custom themes, apps, and integrations built for growth.",
      tags: ["Custom Themes", "Shopify Apps", "Conversion", "Integrations"],
      visual: "development",
    },
    deliverables: [
      {
        icon: "shoppingCart",
        title: "Custom Shopify Themes",
        description: "On-brand storefronts optimised for speed, UX, and conversion.",
      },
      {
        icon: "code",
        title: "App Integrations",
        description: "Connect your store with CRM, email, analytics, and fulfilment tools.",
      },
      {
        icon: "layers",
        title: "Store Migration",
        description: "Seamless migration from other platforms with zero data loss.",
      },
      {
        icon: "trendingUp",
        title: "Conversion Optimisation",
        description: "A/B testing, checkout flows, and UX improvements that lift sales.",
      },
    ],
    tools: ["Shopify", "Liquid", "React", "Klaviyo", "Google Analytics"],
    process: [
      { step: "01", title: "Audit", description: "Review your catalog, brand, and conversion funnel." },
      { step: "02", title: "Build", description: "Design and develop your custom Shopify experience." },
      { step: "03", title: "Scale", description: "Launch, optimise, and grow your eCommerce revenue." },
    ],
    cta: {
      title: "Ready to Scale Your Shopify Store?",
      description: "Let's build a store that converts browsers into buyers.",
      buttonText: "Let's Build Together",
    },
  },
  custom: {
    slug: "custom",
    number: "02",
    title: "Custom Development",
    metaDescription:
      "Custom MERN and MEAN web application development — scalable, secure, and built to your specs.",
    hero: {
      theme: "dark",
      eyebrow: "Custom Development",
      headline: "MERN & MEAN Apps",
      headlineGradient: "Built to Scale",
      description:
        "Complex custom web applications built on MERN or MEAN stack with precision, performance, and scalability in mind.",
      tags: ["MERN", "MEAN", "React", "Node.js"],
      visual: "development",
    },
    deliverables: [
      {
        icon: "code",
        title: "Full-Stack Applications",
        description: "End-to-end web apps with React, Next.js, Node.js, and modern databases.",
      },
      {
        icon: "layers",
        title: "API Development",
        description: "RESTful and GraphQL APIs designed for performance and extensibility.",
      },
      {
        icon: "cpu",
        title: "AI Integration",
        description: "Intelligent features, chatbots, and automation powered by modern AI APIs.",
      },
      {
        icon: "database",
        title: "Cloud & DevOps",
        description: "AWS, Azure, or GCP deployment with CI/CD pipelines and monitoring.",
      },
    ],
    tools: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
    process: [
      { step: "01", title: "Architect", description: "Define system design, tech stack, and milestones." },
      { step: "02", title: "Develop", description: "Agile sprints with demos, testing, and iteration." },
      { step: "03", title: "Deploy", description: "Production launch with monitoring and handoff docs." },
    ],
    cta: {
      title: "Need a Custom Web Application?",
      description: "Let's architect and build a solution that scales with your business.",
      buttonText: "Let's Build Together",
    },
  },
  "mobile-apps": {
    slug: "mobile-apps",
    number: "02",
    title: "Mobile App Development",
    metaDescription:
      "Native and cross-platform mobile app development for iOS and Android from Solivite Solutions.",
    hero: {
      theme: "dark",
      eyebrow: "Mobile Apps",
      headline: "Mobile Apps Users",
      headlineGradient: "Love",
      description:
        "Native iOS and Android apps plus cross-platform solutions — including interactive and game experiences.",
      tags: ["iOS", "Android", "React Native", "Flutter"],
      visual: "development",
    },
    deliverables: [
      {
        icon: "smartphone",
        title: "Native Apps",
        description: "High-performance iOS and Android apps with platform-native UX.",
      },
      {
        icon: "globe",
        title: "Cross-Platform",
        description: "React Native and Flutter apps that ship to both stores from one codebase.",
      },
      {
        icon: "gamepad2",
        title: "Interactive Experiences",
        description: "Engaging mobile games and interactive apps that captivate users.",
      },
      {
        icon: "rocket",
        title: "App Store Launch",
        description: "Submission, ASO, analytics setup, and post-launch optimisation.",
      },
    ],
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    process: [
      { step: "01", title: "Design", description: "UX flows, wireframes, and interactive prototypes." },
      { step: "02", title: "Build", description: "Develop, test, and refine across devices." },
      { step: "03", title: "Ship", description: "App store submission, launch, and iteration." },
    ],
    cta: {
      title: "Ready to Launch Your App?",
      description: "Let's bring your mobile app idea to life.",
      buttonText: "Let's Build Together",
    },
  },
};

export function getServicePageData(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES[slug];
}

export function getDevelopmentSubPageData(slug: string): ServicePageData | undefined {
  return DEVELOPMENT_SUB_PAGES[slug];
}

export function getDevelopmentSubSlugs(): string[] {
  return Object.keys(DEVELOPMENT_SUB_PAGES);
}
