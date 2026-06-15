import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-posts";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogContent locale={locale} />;
}

function BlogContent({ locale }: { locale: string }) {
  const t = useTranslations("blog");
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-light mb-4">{t("hero.label")}</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-none tracking-tight mb-6"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("hero.headline")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">{t("hero.sub")}</p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-7 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-brand uppercase tracking-wider bg-brand/5 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2
                    className="text-lg font-bold text-charcoal mb-3 leading-snug flex-1"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <time className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </time>
                    <Link
                      href={lp(`/blog/${post.slug}`)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                    >
                      {t("readMore")} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Ready to talk about your outdoor space?
          </h2>
          <p className="text-gray-600 mb-8">Free site survey. No obligation. We respond within 2 hours.</p>
          <Link
            href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors"
          >
            Request a Free Site Survey <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
