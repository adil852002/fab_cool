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
  const t = await getTranslations({ locale, namespace: "products.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductsContent locale={locale} />;
}

function ProductsContent({ locale }: { locale: string }) {
  const t = useTranslations("products");
  const lp = (path: string) => `/${locale}${path}`;

  const ventokits = t.raw("cat3.kits") as Array<{
    id: string; fans: string; coverage: string; best: string;
  }>;
  const lineakits = t.raw("cat4.kits") as Array<{
    id: string; nozzles: string; length: string;
  }>;

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
            {t("hero.headline1")}
            <br />
            <span className="text-cool">{t("hero.headline2")}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">{t("hero.intro")}</p>
        </div>
      </section>

      {/* Cat 1 — Aurora / Rondò */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label mb-3">{t("cat1.label")}</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("cat1.headline")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Aurora */}
            <div className="bg-sand rounded-2xl overflow-hidden border border-border">
              <div className="aspect-[16/9] relative">
                <Image
                  src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&q=80"
                  alt="Aurora Misting Pole"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3
                  className="text-xl font-bold text-charcoal mb-3"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {t("cat1.aurora.name")}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{t("cat1.aurora.desc")}</p>
                <div className="space-y-2">
                  {[
                    t("cat1.aurora.spec1"),
                    t("cat1.aurora.spec2"),
                    t("cat1.aurora.spec3"),
                    t("cat1.aurora.spec4"),
                  ].map((s) => (
                    <div key={s} className="spec-item">
                      <Check size={13} className="text-cool shrink-0 mt-0.5" />
                      <span className="text-xs">{s}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-brand font-medium">{t("cat1.aurora.best")}</p>
              </div>
            </div>

            {/* Rondò */}
            <div className="bg-sand rounded-2xl overflow-hidden border border-border">
              <div className="aspect-[16/9] relative">
                <Image
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80"
                  alt="Rondò ceiling fan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3
                  className="text-xl font-bold text-charcoal mb-3"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {t("cat1.rondo.name")}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{t("cat1.rondo.desc")}</p>
                <div className="space-y-2">
                  {[t("cat1.rondo.spec1"), t("cat1.rondo.spec2"), t("cat1.rondo.spec3")].map(
                    (s) => (
                      <div key={s} className="spec-item">
                        <Check size={13} className="text-cool shrink-0 mt-0.5" />
                        <span className="text-xs">{s}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cat 2 — Panorama LED */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">{t("cat2.label")}</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-charcoal mb-2"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("cat2.headline")}
              </h2>
              <p className="text-sm text-gray-400 font-mono mb-6">{t("cat2.name")}</p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t("cat2.desc")}</p>
              <div className="space-y-2 mb-6">
                {[
                  t("cat2.spec1"),
                  t("cat2.spec2"),
                  t("cat2.spec3"),
                  t("cat2.spec4"),
                  t("cat2.spec5"),
                  t("cat2.spec6"),
                ].map((s) => (
                  <div key={s} className="spec-item">
                    <Check size={13} className="text-cool shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600">{s}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand font-medium">{t("cat2.best")}</p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Panorama LED ceiling mist fan"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cat 3 — Vento Kit */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="section-label mb-3">{t("cat3.label")}</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("cat3.headline")}
            </h2>
            <p className="text-gray-600 max-w-2xl text-sm leading-relaxed">{t("cat3.desc")}</p>
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm data-table">
                <thead>
                  <tr className="bg-charcoal text-white">
                    {[t("cat3.col1"), t("cat3.col2"), t("cat3.col3"), t("cat3.col4")].map(
                      (col) => (
                        <th
                          key={col}
                          className="text-start px-6 py-4 font-semibold text-xs uppercase tracking-wider"
                        >
                          {col}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {ventokits.map((kit) => (
                    <tr key={kit.id} className="border-t border-border">
                      <td className="px-6 py-4 font-mono text-xs font-medium text-charcoal">
                        {kit.id}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{kit.fans}</td>
                      <td className="px-6 py-4 text-gray-600">{kit.coverage}</td>
                      <td className="px-6 py-4 text-gray-500 text-xs">{kit.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">{t("cat3.specs")}</p>
        </div>
      </section>

      {/* Cat 4 — Linea Kit */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">{t("cat4.label")}</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("cat4.headline")}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">{t("cat4.desc")}</p>

              <div className="bg-white rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm data-table">
                  <thead>
                    <tr className="bg-charcoal text-white">
                      {[t("cat4.col1"), t("cat4.col2"), t("cat4.col3")].map((col) => (
                        <th
                          key={col}
                          className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wider"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {lineakits.map((kit) => (
                      <tr key={kit.id} className="border-t border-border">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-charcoal">
                          {kit.id}
                        </td>
                        <td className="px-5 py-3 text-gray-600">{kit.nozzles}</td>
                        <td className="px-5 py-3 text-gray-600">{kit.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">{t("cat4.compat")}</p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Linea Kit pergola misting installation"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cat 5 — Pumps */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label mb-3">{t("cat5.label")}</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("cat5.headline")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t("cat5.fogApp.name"),
                code: t("cat5.fogApp.code"),
                specs: t("cat5.fogApp.specs"),
                desc: t("cat5.fogApp.desc"),
                best: t("cat5.fogApp.best"),
                tier: "Residential",
              },
              {
                name: t("cat5.fogExtra.name"),
                code: t("cat5.fogExtra.code"),
                specs: t("cat5.fogExtra.specs"),
                desc: t("cat5.fogExtra.desc"),
                best: t("cat5.fogExtra.best"),
                tier: "Commercial",
              },
              {
                name: t("cat5.var3.name"),
                code: t("cat5.var3.code"),
                specs: t("cat5.var3.specs"),
                desc: t("cat5.var3.desc"),
                best: t("cat5.var3.best"),
                tier: "Industrial",
              },
            ].map((pump, i) => (
              <div
                key={pump.code}
                className={`rounded-2xl p-8 border ${
                  i === 2
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-sand text-charcoal border-border"
                }`}
              >
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-wider mb-4 px-2.5 py-1 rounded-full ${
                    i === 2
                      ? "bg-cool/20 text-cool"
                      : "bg-brand/10 text-brand"
                  }`}
                >
                  {pump.tier}
                </span>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {pump.name}
                </h3>
                <p className={`font-mono text-xs mb-4 ${i === 2 ? "text-white/40" : "text-gray-400"}`}>
                  {pump.code}
                </p>
                <p
                  className={`text-xs font-medium mb-3 ${
                    i === 2 ? "text-cool" : "text-brand"
                  }`}
                >
                  {pump.specs}
                </p>
                <p className={`text-sm leading-relaxed mb-4 ${i === 2 ? "text-white/70" : "text-gray-600"}`}>
                  {pump.desc}
                </p>
                <p className={`text-xs font-medium ${i === 2 ? "text-white/50" : "text-gray-500"}`}>
                  {pump.best}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cat 6 — Industrial CTA */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label-light mb-4">{t("cat6.label")}</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("cat6.headline")}
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">{t("cat6.desc")}</p>
          <Link
            href={lp("/solutions/industrial")}
            className="inline-flex items-center gap-2 bg-cool hover:bg-cool/90 text-white font-semibold px-7 py-3 rounded-full transition-colors"
          >
            {t("cat6.link")} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
