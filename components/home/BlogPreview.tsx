"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BLOG_PREVIEW } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ScrollReveal from "@/components/ScrollReveal";

const CATEGORY_GRADIENTS: Record<string, string> = {
  Development: "from-purple-600/40 via-violet-600/25 to-transparent",
  Strategy: "from-violet-600/40 via-purple-700/25 to-transparent",
  Design: "from-fuchsia-600/35 via-purple-600/25 to-transparent",
  Marketing: "from-indigo-600/35 via-purple-600/25 to-transparent",
};

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const gradient =
    CATEGORY_GRADIENTS[post.category] ??
    "from-purple-600/40 via-violet-600/25 to-transparent";

  return (
    <ScrollReveal delay={index * 0.08}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="dark-card-glow flex h-full flex-col overflow-hidden">
          <div className={`relative h-24 bg-gradient-to-br ${gradient}`}>
            <div
              className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-90"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, hsl(271 80% 60% / 0.35) 0%, transparent 60%)",
              }}
            />
            <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-purple-200">
              {post.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6 md:p-7">
            <time className="text-xs text-gray-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <h3 className="mt-2 font-display text-lg font-bold text-white transition-colors group-hover:text-purple-200 md:text-xl">
              {post.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
              {post.excerpt}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors group-hover:text-purple-300">
              Read article
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all group-hover:border-purple-500/40 group-hover:bg-purple-600/20 group-hover:shadow-md group-hover:shadow-purple-500/20">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  );
}

interface BlogPreviewProps {
  posts?: readonly BlogPost[];
  showCta?: boolean;
  showHeader?: boolean;
}

export default function BlogPreview({
  posts = BLOG_POSTS,
  showCta = true,
  showHeader = true,
}: BlogPreviewProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {showHeader && (
          <ScrollReveal>
            <SectionHeader
              eyebrow={BLOG_PREVIEW.eyebrow}
              title={
                <>
                  Latest Insights
                  <br />
                  <span className="text-gradient">&amp; Ideas</span>
                </>
              }
            />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {showCta && (
          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <PrimaryButton href={BLOG_PREVIEW.cta.href}>
                {BLOG_PREVIEW.cta.label}
              </PrimaryButton>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

export { BlogCard };
