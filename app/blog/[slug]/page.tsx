import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getBlogPost, getBlogSlugs } from "@/lib/blog-data";
import { SITE } from "@/lib/constants";
import GradientHeadline from "@/components/ui/GradientHeadline";
import HeroBackground from "@/components/effects/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} | Blog | ${SITE.name}`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-12 md:pt-36 md:pb-16">
        <HeroBackground rayIntensity={0.6} />

        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                {post.category} · {formatDate(post.date)}
              </p>
              <GradientHeadline as="h1" className="text-3xl md:text-5xl lg:text-6xl">
                {post.title}
              </GradientHeadline>
              <p className="mt-6 text-lg text-gray-400">{post.excerpt}</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      <article className="bg-surface-dark-elevated py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="prose prose-invert mx-auto max-w-3xl">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-6 text-lg leading-relaxed text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
