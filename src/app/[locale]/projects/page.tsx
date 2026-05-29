import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Camera } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectsContent locale={locale} />;
}

function ProjectsContent({ locale }: { locale: string }) {
  const t = useTranslations("projects");
  const lp = (path: string) => `/${locale}${path}`;

  const referenceImages = [
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
      tag: "Villa & Residential",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80",
      tag: "Hospitality",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
      tag: "Restaurant & Café",
    },
    {
      src: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=700&q=80",
      tag: "Villa & Residential",
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
      tag: "Hospitality",
    },
    {
      src: "https://images.unsplash.com/photo-1504376830547-506dedfe681a?w=700&q=80",
      tag: "Industrial",
    },
  ];

  const filterTabs = [
    t("filters.all"),
    t("filters.villa"),
    t("filters.hospitality"),
    t("filters.restaurant"),
    t("filters.industrial"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-light mb-5">{t("hero.label")}</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("hero.headline")}
          </h1>
          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">{t("hero.sub")}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-border sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {filterTabs.map((tab, i) => (
              <button
                key={tab}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-charcoal text-white"
                    : "text-gray-500 hover:text-charcoal hover:bg-sand"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon notice */}
      <section className="py-16 bg-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-border flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-cool/10 flex items-center justify-center shrink-0">
              <Camera size={20} className="text-cool" />
            </div>
            <div>
              <h3
                className="font-bold text-charcoal mb-2"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("coming.headline")}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t("coming.body")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reference grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("placeholder.label")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {referenceImages.map((img, i) => (
              <div key={i} className="group relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={`${t("placeholder.label")} — ${img.tag}`}
                    width={700}
                    height={525}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-full">
                    {img.tag}
                  </span>
                  <p className="text-xs text-gray-400 mt-1.5 italic">
                    {t("placeholder.caption")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("cta")}
          </h2>
          <Link
            href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors shadow-lg"
          >
            {t("cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
