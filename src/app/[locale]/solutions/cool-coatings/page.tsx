import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "coolCoatings.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function CoolCoatingsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CoolCoatingsContent locale={locale} />;
}

function CoolCoatingsContent({ locale }: { locale: string }) {
  const t = useTranslations("coolCoatings");
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=75"
            alt="Building rooftop in summer heat"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-light mb-4">{t("hero.label")}</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-none tracking-tight mb-6 max-w-4xl"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("hero.headline")}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
            {t("hero.sub")}
          </p>
          <Link
            href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors"
          >
            {t("hero.cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {[
              { val: t("stats.s1"), label: t("stats.s1Label") },
              { val: t("stats.s2"), label: t("stats.s2Label") },
              { val: t("stats.s3"), label: t("stats.s3Label") },
              { val: t("stats.s4"), label: t("stats.s4Label") },
            ].map((s) => (
              <div key={s.label} className="py-6 px-4 lg:px-8 text-center">
                <p className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "var(--font-syne), sans-serif" }}>{s.val}</p>
                <p className="text-xs text-white/70 mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">{t("problem.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("problem.headline")}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">{t("problem.body")}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">{t("how.label")}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              {t("how.headline")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t("how.s1Title"), body: t("how.s1Body") },
              { title: t("how.s2Title"), body: t("how.s2Body") },
              { title: t("how.s3Title"), body: t("how.s3Body") },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-sm font-bold text-brand mb-3 uppercase tracking-wider">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">{t("apps.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-10" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("apps.headline")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[t("apps.a1"), t("apps.a2"), t("apps.a3"), t("apps.a4"), t("apps.a5")].map((a) => (
              <div key={a} className="flex items-start gap-3 bg-sand rounded-xl p-5">
                <Check size={15} className="text-brand shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cool Pavements */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-light mb-4">{t("pavement.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("pavement.headline")}
          </h2>
          <p className="text-white/70 leading-relaxed text-lg mb-4">{t("pavement.body")}</p>
          <p className="text-cool text-sm font-medium">{t("pavement.note")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{t("crossSell")}</p>
          <Link
            href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
          >
            {t("cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
