import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hospitality.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function HospitalityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HospitalityContent locale={locale} />;
}

function HospitalityContent({ locale }: { locale: string }) {
  const t = useTranslations("hospitality");
  const lp = (path: string) => `/${locale}${path}`;

  const multizonePoints = [
    t("multizone.b1"),
    t("multizone.b2"),
    t("multizone.b3"),
    t("multizone.b4"),
    t("multizone.b5"),
    t("multizone.b6"),
  ];

  const productsList = [
    t("products.p1"),
    t("products.p2"),
    t("products.p3"),
    t("products.p4"),
    t("products.p5"),
    t("products.p6"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80"
            alt="Hotel pool deck"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <p className="section-label-light mb-5">{t("hero.label")}</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("hero.headline1")}
            <br />
            <span className="text-cool">{t("hero.headline2")}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed">
            {t("hero.sub")}
          </p>
          <Link
            href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors shadow-lg"
          >
            {t("hero.cta")}
          </Link>
        </div>
      </section>

      {/* Revenue Case */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-5">{t("revenue.label")}</p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("revenue.headline")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{t("revenue.body")}</p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"
                alt="Hotel outdoor F&B terrace"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Multi-zone Control */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label-light mb-5">{t("multizone.label")}</p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("multizone.headline")}
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">{t("multizone.intro")}</p>
              <div className="space-y-3">
                {multizonePoints.map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <Check size={14} className="text-cool shrink-0 mt-1" />
                    <span className="text-white/80 text-sm leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-cool font-semibold uppercase tracking-wider mb-1">System Spec</p>
                <p className="text-sm text-white/70">{t("multizone.spec")}</p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden lg:sticky lg:top-24">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Hotel pool area with cooling system"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products deployed */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-5">{t("products.label")}</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("products.headline")}
              </h2>
              <div className="space-y-3">
                {productsList.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cool/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-cool" />
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white border border-border">
                <p className="text-sm text-gray-500 italic">{t("reference")}</p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Hotel outdoor cooling installation"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
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
