import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ChevronLeft, ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS, getBlogPost } from "@/data/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Fabtech Qatar Blog`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  setRequestLocale(locale);

  const lp = (path: string) => `/${locale}${path}`;

  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-4 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={lp("/blog")}
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors mb-6"
          >
            <ChevronLeft size={14} /> All Articles
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-cool uppercase tracking-wider bg-cool/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/40">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight pb-10"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <article className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-gray-400 border-b border-border pb-8 mb-10">
            <time>
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>
            <span>·</span>
            <span>Fabtech Qatar</span>
          </div>

          <div className="prose-custom">
            {post.sections.map((section, i) => (
              <div key={i} className="mb-8">
                {section.heading && (
                  <h2
                    className="text-xl sm:text-2xl font-bold text-charcoal mb-4"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {section.heading}
                  </h2>
                )}
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Article CTA */}
      <section className="py-16 bg-brand text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Ready to see what's possible at your property?
          </h2>
          <p className="text-white/80 mb-8">Free site survey. No obligation. We respond within 2 hours.</p>
          <Link
            href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
          >
            Request a Free Site Survey <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            More Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={lp(`/blog/${related.slug}`)}
                  className="bg-white rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-semibold text-brand uppercase tracking-wider">{related.category}</span>
                  <h4 className="text-sm font-bold text-charcoal mt-2 mb-2 leading-snug" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                    {related.title}
                  </h4>
                  <span className="text-xs text-gray-400">{related.readTime}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
