"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BLOG_PREVIEW } from "@/lib/home-content";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ScrollReveal from "@/components/ScrollReveal";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="light-card flex h-full flex-col p-6 md:p-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
            {post.category}
          </span>
          <h3 className="mt-3 font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-purple-700 md:text-xl">
            {post.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-600">
            Read article
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
    <section className="section-surface-light py-24 md:py-32">
      <div className="container mx-auto px-4">
        {showHeader && (
          <ScrollReveal>
            <SectionHeader
              eyebrow={BLOG_PREVIEW.eyebrow}
              title={
                <>
                  Latest Insights
                  <br />
                  <span className="text-gradient-light">&amp; Ideas</span>
                </>
              }
              dark={false}
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
              <PrimaryButton href={BLOG_PREVIEW.cta.href} variant="dark">
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
