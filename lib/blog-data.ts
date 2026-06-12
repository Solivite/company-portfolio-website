export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  body: readonly string[];
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "ai-first-web-development-2026",
    title:
      "Why AI-First Web Development Is the Competitive Advantage Your Business Needs in 2026",
    excerpt:
      "Discover how AI is reshaping the way websites are built, optimised, and scaled — and why your brand needs to adapt now.",
    date: "2026-01-15",
    category: "Development",
    body: [
      "Artificial intelligence is no longer a novelty in web development — it's becoming the baseline for teams that want to ship faster, optimise smarter, and scale without proportional headcount.",
      "From automated code generation and intelligent testing to AI-driven personalisation and performance tuning, the agencies winning in 2026 are those embedding AI into every stage of the build process.",
      "At Solivite, we combine human craft with AI-assisted workflows so your site isn't just beautiful — it's built to learn, adapt, and outperform competitors from day one.",
    ],
  },
  {
    slug: "wordpress-vs-shopify-vs-custom",
    title: "WordPress vs Shopify vs Custom Development — Which One Is Right for Your Business?",
    excerpt:
      "Not sure which platform to build on? We break down the pros, cons, and best use cases for each so you can make the right call.",
    date: "2026-02-03",
    category: "Strategy",
    body: [
      "Choosing the right platform is one of the most consequential decisions you'll make for your digital presence. WordPress excels at content-rich sites and flexible CMS needs. Shopify dominates eCommerce with out-of-the-box selling tools. Custom MERN or MEAN stacks unlock unlimited flexibility for complex products.",
      "The wrong choice costs you months of rework and thousands in migration fees. The right choice gives you a foundation that grows with your business for years.",
      "We help clients evaluate traffic goals, product complexity, integration needs, and budget before recommending a path — no one-size-fits-all templates.",
    ],
  },
  {
    slug: "ux-mistakes-costing-conversions",
    title: "5 UI/UX Mistakes That Are Costing You Conversions (And How to Fix Them)",
    excerpt:
      "Bad design is expensive. Here are the five most common UX errors we see on client websites — and exactly how to fix them.",
    date: "2026-02-20",
    category: "Design",
    body: [
      "Slow load times, unclear CTAs, mobile-unfriendly layouts, inconsistent branding, and friction-heavy checkout flows — these five UX mistakes silently drain revenue every day.",
      "The fix isn't always a full redesign. Often, targeted improvements to navigation hierarchy, button contrast, form fields, and page speed can lift conversion rates by double digits within weeks.",
      "Our design audits identify the highest-impact fixes first so you see measurable ROI before committing to a larger rebuild.",
    ],
  },
  {
    slug: "seo-smm-or-ppc-first",
    title: "SEO, SMM, or PPC — Which Digital Marketing Channel Should You Invest In First?",
    excerpt:
      "Every business has limited budget and time. We help you figure out where to start and how to build a marketing mix that actually works.",
    date: "2026-03-08",
    category: "Marketing",
    body: [
      "SEO builds long-term organic visibility but takes months to compound. Social media marketing grows community and brand affinity. PPC delivers immediate traffic and leads when you need results now.",
      "The best first channel depends on your timeline, margins, and audience behaviour. High-intent B2B services often win with Google Ads first. Consumer brands with strong visuals may lead with social. Content-heavy businesses benefit from an SEO foundation early.",
      "We design phased marketing roadmaps that start with one high-ROI channel, prove results, then reinvest into a balanced mix.",
    ],
  },
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
