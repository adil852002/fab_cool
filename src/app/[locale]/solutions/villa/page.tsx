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
  const t = await getTranslations({ locale, namespace: "villa.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function VillaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <VillaContent locale={locale} />;
}

function VillaContent({ locale }: { locale: string }) {
  const t = useTranslations("villa");
  const common = useTranslations("common");
  const lp = (path: string) => `/${locale}${path}`;

  const cases = [
    {
      img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&q=80",
      title: t("install.case1Title"),
      body: t("install.case1Body"),
      specs: [t("install.case1Spec1"), t("install.case1Spec2"), t("install.case1Spec3")],
    },
    {
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      title: t("install.case2Title"),
      body: t("install.case2Body"),
      specs: [t("install.case2Spec1"), t("install.case2Spec2"), t("install.case2Spec3")],
    },
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      title: t("install.case3Title"),
      body: t("install.case3Body"),
      specs: [t("install.case3Spec1"), t("install.case3Spec2"), t("install.case3Spec3")],
    },
  ];

  const typicalItems = [
    t("typical.item1"),
    t("typical.item2"),
    t("typical.item3"),
    t("typical.item4"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
            alt="Villa pool with misting"
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

      {/* Use Cases */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">{t("install.label")}</p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("install.headline")}
            </h2>
          </div>

          <div className="space-y-20">
            {cases.map((c, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{c.body}</p>
                  <div className="space-y-2.5">
                    {c.specs.map((spec) => (
                      <div key={spec} className="spec-item">
                        <Check size={14} className="text-cool shrink-0 mt-0.5" />
                        <span className="text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why not AC */}
      <section className="py-20 bg-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-border">
            <h3
              className="text-xl sm:text-2xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("why.question")}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t("why.answer")}</p>
          </div>
        </div>
      </section>

      {/* Typical Installation */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-10"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("typical.headline")}
          </h2>
          <div className="space-y-4 mb-8">
            {typicalItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cool/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-cool" />
                </div>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/60 border-t border-white/10 pt-6 mb-10">
            <span>{t("typical.install")}</span>
            <span>·</span>
            <span>{t("typical.warranty")}</span>
          </div>
          <Link
            href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors"
          >
            {t("cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
