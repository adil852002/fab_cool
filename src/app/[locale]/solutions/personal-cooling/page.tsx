import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "personalCooling.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function PersonalCoolingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PersonalCoolingContent locale={locale} />;
}

function PersonalCoolingContent({ locale }: { locale: string }) {
  const t = useTranslations("personalCooling");
  const lp = (path: string) => `/${locale}${path}`;

  const who = t.raw("who.items") as string[];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Regulatory context */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">{t("regulation.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("regulation.headline")}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">{t("regulation.body")}</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">{t("products.label")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {["p1", "p2", "p3", "p4"].map((key) => (
              <div key={key} className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-sm font-bold text-brand mb-3 uppercase tracking-wider">{t(`products.${key}Title`)}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t(`products.${key}Body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">{t("who.label")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {who.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-sand rounded-xl p-5">
                <Check size={15} className="text-brand shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply contracts */}
      <section className="py-16 lg:py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("supply.headline")}
          </h2>
          <p className="text-white/70 leading-relaxed text-lg">{t("supply.body")}</p>
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
