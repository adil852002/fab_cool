import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent locale={locale} />;
}

function AboutContent({ locale }: { locale: string }) {
  const t = useTranslations("about");
  const lp = (path: string) => `/${locale}${path}`;

  const values = [
    { title: t("values.v1Title"), body: t("values.v1Body"), num: "01" },
    { title: t("values.v2Title"), body: t("values.v2Body"), num: "02" },
    { title: t("values.v3Title"), body: t("values.v3Body"), num: "03" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="Doha skyline"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-light mb-5">{t("hero.label")}</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("hero.headline1")}
            <br />
            <span className="text-cool">{t("hero.headline2")}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">{t("hero.sub")}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-5">{t("story.label")}</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("story.headline")}
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>{t("story.p1")}</p>
                <p>{t("story.p2")}</p>
                <p className="font-medium text-charcoal">{t("story.p3")}</p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&q=80"
                alt="Fabtech team in Qatar"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Idrobase partnership */}
      <section className="py-24 lg:py-32 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label-light mb-5">{t("idrobase.label")}</p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("idrobase.headline")}
              </h2>
              <div className="space-y-5 text-white/70 leading-relaxed mb-10">
                <p>{t("idrobase.p1")}</p>
                <p>{t("idrobase.p2")}</p>
              </div>
              {/* Credential pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "🇮🇹 Made in Italy" },
                  { label: "CE Certified" },
                  { label: "ISO 9001" },
                  { label: "Est. 1986" },
                  { label: "40+ Years Manufacturing" },
                ].map((p) => (
                  <span
                    key={p.label}
                    className="pill border-cool/60 text-cool"
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Idrobase misting products from Italy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Official Dealer Card */}
              <div className="absolute -bottom-4 -end-4 bg-cool text-white rounded-2xl px-6 py-5 shadow-2xl max-w-[220px]">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">
                  Official Dealer
                </p>
                <p
                  className="text-2xl font-bold leading-tight"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  Idrobase
                </p>
                <p className="text-xs opacity-70 mt-0.5">Group S.r.l. · Padova, Italy</p>
                <div className="mt-3 pt-3 border-t border-white/20 text-xs opacity-70">
                  Qatar's Authorized Distributor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label-light mb-4">{t("values.label")}</p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("values.headline")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.num} className="relative">
                <p
                  className="text-7xl font-bold text-white/5 select-none leading-none mb-4"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {v.num}
                </p>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">{t("team.label")}</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("team.headline")}
            </h2>
          </div>
          <div className="bg-sand rounded-2xl p-12 text-center border border-border">
            <p className="text-gray-500 max-w-lg mx-auto">{t("team.placeholder")}</p>
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
