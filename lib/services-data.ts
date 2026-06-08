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
    title: "Design Services",
    metaDescription:
      "Graphic design, UI/UX, logo design, branding, and motion from Solivite Solutions.",
    hero: {
      theme: "dark",
      eyebrow: "Design Services",
      headline: "Do You Need a",
      headlineGradient: "Designer?",
      description:
        "Transform your ideas into visually stunning designs. Our creative team delivers exceptional design solutions that elevate your brand.",
      tags: ["Graphic Design", "Logo Design", "UX/UI Design", "Branding Design"],
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
      buttonText: "Start Your Project",
    },
  },

  development: {
    slug: "development",
    number: "02",
    title: "Development",
    metaDescription:
      "Web and mobile development — WordPress, Shopify, React, Next.js, and full-stack solutions.",
    hero: {
      theme: "light",
      eyebrow: "Development",
      headline: "Launch Your Dream",
      headlineGradient: "App",
      description:
        "Design. Build. Deploy. From simple websites to complex applications, we build digital solutions that scale with your business.",
      tags: ["Cross-platform", "Fast", "Secure", "Modern"],
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
        description: "Fully custom apps with React, Next.js, Angular, or Vue — scalable, modern, and fast.",
      },
      {
        icon: "smartphone",
        title: "Mobile App Development",
        description: "Native iOS and Android apps plus cross-platform solutions with React Native and Flutter.",
      },
      {
        icon: "layers",
        title: "Full-Stack Solutions",
        description: "End-to-end development — frontend, backend, APIs, databases, and cloud infrastructure.",
      },
      {
        icon: "rocket",
        title: "Maintenance & Support",
        description: "Ongoing maintenance, updates, security patches, and dedicated support.",
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
      buttonText: "Start Your Project",
    },
  },

  content: {
    slug: "content",
    number: "03",
    title: "Content Writing",
    metaDescription:
      "Professional content writing — blogs, copywriting, technical docs, and content strategy.",
    hero: {
      theme: "light",
      eyebrow: "Content Writing",
      headline: "Words That",
      headlineGradient: "Resonate",
      description:
        "We create compelling content that engages your audience, strengthens your brand voice, and drives measurable results.",
      tags: ["Web Copy", "Blog Posts", "Social Content", "SEO Writing"],
      visual: "content",
      image: "/images/services/content.webp",
    },
    deliverables: [
      {
        icon: "fileText",
        title: "Blog Writing",
        description: "Engaging, SEO-optimized blog posts that drive traffic and establish thought leadership.",
      },
      {
        icon: "penSquare",
        title: "Copywriting",
        description: "Compelling copy that converts — landing pages, emails, and campaigns that sell.",
      },
      {
        icon: "bookOpen",
        title: "Technical Writing",
        description: "Clear documentation, user manuals, and guides that make complex topics accessible.",
      },
      {
        icon: "globe",
        title: "Website Content",
        description: "Professional website copy that tells your story and drives conversions.",
      },
      {
        icon: "messageSquare",
        title: "Social Media Content",
        description: "Captivating posts, captions, and content strategies that grow your presence.",
      },
      {
        icon: "fileEdit",
        title: "Content Strategy",
        description: "Comprehensive strategies aligned with your business goals and audience.",
      },
    ],
    tools: ["SEO Tools", "Grammarly", "Ahrefs", "Google Analytics", "Notion"],
    process: [
      { step: "01", title: "Brief", description: "Understand your voice, audience, and objectives." },
      { step: "02", title: "Create", description: "Draft, refine, and optimize every piece of content." },
      { step: "03", title: "Publish", description: "Deliver ready-to-publish content with SEO baked in." },
    ],
    cta: {
      title: "Let's Create Amazing Content",
      description: "Get in touch to discuss your content needs and see how we can help.",
      buttonText: "Start Your Project",
    },
  },

  "data-ai": {
    slug: "data-ai",
    number: "04",
    title: "Data & AI",
    metaDescription:
      "Machine learning, data analytics, AI integration, and predictive analytics from Solivite Solutions.",
    hero: {
      theme: "dark",
      eyebrow: "Data & AI",
      headline: "Unlock the Power of",
      headlineGradient: "Intelligent Data",
      description:
        "Harness the power of data and artificial intelligence to drive innovation and growth in your business.",
      tags: ["Analytics", "Machine Learning", "AI Integration", "Automation"],
      visual: "ai",
      image: "/images/services/data-ai.webp",
    },
    deliverables: [
      {
        icon: "brain",
        title: "Machine Learning",
        description: "Custom ML models from predictive analytics to recommendation systems.",
      },
      {
        icon: "database",
        title: "Data Analytics",
        description: "Transform raw data into actionable insights with analysis and visualization.",
      },
      {
        icon: "barChart3",
        title: "Business Intelligence",
        description: "Dashboards, reports, and BI platforms for data-driven decisions.",
      },
      {
        icon: "cpu",
        title: "AI Integration",
        description: "Chatbots, automation, and intelligent workflows integrated into your systems.",
      },
      {
        icon: "network",
        title: "Data Engineering",
        description: "Robust pipelines, ETL processes, data warehousing, and cloud solutions.",
      },
      {
        icon: "trendingUp",
        title: "Predictive Analytics",
        description: "Forecast trends and behaviors with advanced predictive models.",
      },
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Power BI", "AWS"],
    process: [
      { step: "01", title: "Assess", description: "Audit data sources, quality, and AI readiness." },
      { step: "02", title: "Model", description: "Build, train, and validate models with solid evals." },
      { step: "03", title: "Deploy", description: "Production deployment with monitoring and guardrails." },
    ],
    cta: {
      title: "Unlock the Power of Data",
      description: "Ready to transform your business with AI and data solutions? Let's talk.",
      buttonText: "Start Your Project",
    },
  },

  marketing: {
    slug: "marketing",
    number: "05",
    title: "Digital Marketing",
    metaDescription:
      "SEO, social media, Meta ads, PPC, and growth marketing that drives measurable results.",
    hero: {
      theme: "dark",
      eyebrow: "Digital Marketing",
      headline: "You're",
      headlineGradient: "Leaking.",
      description:
        "Growth isn't missing — it's escaping. We plug the gaps with data-driven strategies that turn attention into revenue.",
      tags: ["SEO", "Meta Ads", "Social Media", "Growth Strategy"],
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
        title: "PPC & Meta Ads",
        description: "Google Ads, Meta ads, and paid campaigns with data-driven strategies that convert.",
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
      buttonText: "Start Your Project",
    },
  },

  games: {
    slug: "games",
    number: "06",
    title: "Game Development",
    metaDescription:
      "Game development for mobile, web, AR/VR, and multiplayer experiences from Solivite Solutions.",
    hero: {
      theme: "dark",
      eyebrow: "Game Development",
      headline: "Create Games",
      headlineGradient: "Players Love",
      description:
        "Immersive gaming experiences that entertain, engage, and captivate players worldwide.",
      tags: ["Game Dev", "Unity", "Interactive", "Mobile Games"],
      visual: "games",
      image: "/images/services/games.webp",
    },
    deliverables: [
      {
        icon: "gamepad2",
        title: "Game Development",
        description: "Full-cycle development for mobile, web, and desktop — concept to launch.",
      },
      {
        icon: "smartphone",
        title: "Mobile Games",
        description: "Engaging iOS and Android games — casual, puzzle, action, and strategy.",
      },
      {
        icon: "puzzle",
        title: "Game Design",
        description: "Creative mechanics, level design, and storytelling that keeps players hooked.",
      },
      {
        icon: "zap",
        title: "AR/VR Games",
        description: "Immersive augmented and virtual reality experiences with cutting-edge tech.",
      },
      {
        icon: "users",
        title: "Multiplayer Games",
        description: "Online multiplayer with real-time sync, matchmaking, and social features.",
      },
      {
        icon: "trophy",
        title: "Game Analytics",
        description: "Player analytics, monetization strategies, and A/B testing for optimization.",
      },
    ],
    tools: ["Unity", "Unreal Engine", "C#", "Blender", "Photon", "Firebase"],
    process: [
      { step: "01", title: "Concept", description: "Define mechanics, art direction, and target audience." },
      { step: "02", title: "Develop", description: "Prototype, iterate, and polish gameplay experiences." },
      { step: "03", title: "Ship", description: "Launch, market, and optimize with live analytics." },
    ],
    cta: {
      title: "Ready to Create Your Game?",
      description: "Let's bring your game idea to life and build an experience players will love.",
      buttonText: "Start Your Project",
    },
  },
};

export function getServicePageData(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES[slug];
}
