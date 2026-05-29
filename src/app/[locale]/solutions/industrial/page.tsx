import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, ArrowRight, Zap } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "industrial.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function IndustrialPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IndustrialContent locale={locale} />;
}

function IndustrialContent({ locale }: { locale: string }) {
  const t = useTranslations("industrial");
  const lp = (path: string) => `/${locale}${path}`;

  const results = [
    t("technical.r1"),
    t("technical.r2"),
    t("technical.r3"),
    t("technical.r4"),
    t("technical.r5"),
    t("technical.r6"),
  ];

  const kits = t.raw("range.kits") as Array<{
    id: string;
    flow: string;
    coolers: string;
    power: string;
  }>;

  const whoItems = t.raw("who.items") as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504376830547-506dedfe681a?w=1600&q=80"
            alt="Industrial cooling systems"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/95" />
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

      {/* Technical case */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-5">{t("technical.label")}</p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("technical.headline")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">{t("technical.body")}</p>
              <div className="space-y-2.5">
                {results.map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <Zap size={14} className="text-cool shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-charcoal">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565115030792-5ea5ba66d4c8?w=800&q=80"
                alt="Industrial adiabatic pre-cooling system"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kit Range Table */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">{t("range.label")}</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("range.headline")}
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm data-table">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-start px-6 py-4 font-semibold text-xs uppercase tracking-wider">
                      {t("range.col1")}
                    </th>
                    <th className="text-start px-6 py-4 font-semibold text-xs uppercase tracking-wider">
                      {t("range.col2")}
                    </th>
                    <th className="text-start px-6 py-4 font-semibold text-xs uppercase tracking-wider">
                      {t("range.col3")}
                    </th>
                    <th className="text-start px-6 py-4 font-semibold text-xs uppercase tracking-wider">
                      {t("range.col4")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {kits.map((kit) => (
                    <tr key={kit.id} className="border-t border-border">
                      <td className="px-6 py-4 font-mono text-xs font-medium text-charcoal">
                        {kit.id}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{kit.flow}</td>
                      <td className="px-6 py-4 text-gray-600">{kit.coolers}</td>
                      <td className="px-6 py-4 text-gray-600">{kit.power}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">{t("range.footnote")}</p>
        </div>
      </section>

      {/* Who this is for + Pilot offer */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label-light mb-5">{t("who.label")}</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-8"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("who.headline")}
              </h2>
              <div className="space-y-3">
                {whoItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-cool shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <p className="section-label-light mb-4">{t("pilot.label")}</p>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("pilot.headline")}
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">{t("pilot.body")}</p>
              <Link
                href={lp("/contact")}
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                {t("cta")} <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
