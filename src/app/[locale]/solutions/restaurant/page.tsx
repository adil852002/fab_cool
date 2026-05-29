import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "restaurant.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function RestaurantPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RestaurantContent locale={locale} />;
}

function RestaurantContent({ locale }: { locale: string }) {
  const t = useTranslations("restaurant");
  const lp = (path: string) => `/${locale}${path}`;

  const typicalItems = [
    t("typical.item1"),
    t("typical.item2"),
    t("typical.item3"),
    t("typical.item4"),
    t("typical.item5"),
  ];

  const objections = [
    { q: t("objections.q1"), a: t("objections.a1") },
    { q: t("objections.q2"), a: t("objections.a2") },
    { q: t("objections.q3"), a: t("objections.a3") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="Outdoor restaurant terrace"
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

      {/* ROI section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
                alt="Outdoor dining terrace"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-5">{t("roi.label")}</p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("roi.headline")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{t("roi.body")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Installation */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label-light mb-5">{t("typical.label")}</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-8"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("typical.headline")}
              </h2>
              <div className="space-y-3 mb-8">
                {typicalItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-cool shrink-0 mt-1" />
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50 border-t border-white/10 pt-6">
                <span>{t("typical.install")}</span>
                <span>·</span>
                <span>{t("typical.auto")}</span>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                alt="Restaurant misting installation"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objections / FAQ */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">{t("objections.label")}</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("objections.headline")}
            </h2>
          </div>
          <div className="space-y-5">
            {objections.map((obj) => (
              <div key={obj.q} className="bg-white rounded-2xl p-8 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle size={18} className="text-brand shrink-0 mt-0.5" />
                  <h3
                    className="font-bold text-charcoal"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {obj.q}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed ps-7">{obj.a}</p>
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
