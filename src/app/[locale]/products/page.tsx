import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
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

  const ventokits = t.raw("cat3.kits") as Array<{ id: string; fans: string; coverage: string; best: string }>;
  const lineakits = t.raw("cat4.kits") as Array<{ id: string; nozzles: string; length: string }>;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
            alt="Outdoor misting installation"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-light mb-5">{t("hero.label")}</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-none tracking-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("hero.headline1")}
            <br />
            <span className="text-cool">{t("hero.headline2")}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">{t("hero.intro")}</p>
        </div>
      </section>

      {/* Authorized Dealer Trust Bar */}
      <section className="bg-cool/10 border-y border-cool/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              { icon: "🇮🇹", text: "Made in Italy — Idrobase Group" },
              { icon: "✓", text: "Official Qatar Distributor" },
              { icon: "✓", text: "CE Certified" },
              { icon: "✓", text: "ISO 9001" },
              { icon: "✓", text: "230V / 50Hz — GCC Native" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-1.5 text-sm font-medium text-charcoal/80">
                <span className="text-cool font-bold">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cat 1 — Aurora / Rondò — CLICKABLE CARDS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label mb-3">{t("cat1.label")}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              {t("cat1.headline")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Aurora — entire card is a link */}
            <Link
              href={lp("/products/aurora-misting-pole")}
              className="group bg-sand rounded-2xl overflow-hidden border border-border hover:border-brand hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src="/aurora2.png"
                  alt="Aurora Misting Pole"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                  {t("cat1.aurora.name")}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{t("cat1.aurora.desc")}</p>
                <div className="space-y-2 mb-5">
                  {[t("cat1.aurora.spec1"), t("cat1.aurora.spec2"), t("cat1.aurora.spec3"), t("cat1.aurora.spec4")].map((s) => (
                    <div key={s} className="spec-item">
                      <Check size={13} className="text-cool shrink-0 mt-0.5" />
                      <span className="text-xs">{s}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-brand font-medium mb-5">{t("cat1.aurora.best")}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand group-hover:gap-3 transition-all">
                  View Full Details <ArrowRight size={15} />
                </div>
              </div>
            </Link>

            {/* Rondò — entire card is a link */}
            <Link
              href={lp("/products/rondo-ceiling-unit")}
              className="group bg-sand rounded-2xl overflow-hidden border border-border hover:border-brand hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src="/rondo.png"
                  alt="Rondò ceiling misting fan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                  {t("cat1.rondo.name")}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{t("cat1.rondo.desc")}</p>
                <div className="space-y-2 mb-5">
                  {[t("cat1.rondo.spec1"), t("cat1.rondo.spec2"), t("cat1.rondo.spec3")].map((s) => (
                    <div key={s} className="spec-item">
                      <Check size={13} className="text-cool shrink-0 mt-0.5" />
                      <span className="text-xs">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand group-hover:gap-3 transition-all mt-5">
                  View Full Details <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </div>

          {/* Cat1 CTA row */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href={lp("/contact")}
              className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-dark transition-colors text-sm"
            >
              Request a Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cat 2 — Panorama LED */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">{t("cat2.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-2" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                {t("cat2.headline")}
              </h2>
              <p className="text-sm text-gray-400 font-mono mb-6">{t("cat2.name")}</p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t("cat2.desc")}</p>
              <div className="space-y-2 mb-6">
                {[t("cat2.spec1"), t("cat2.spec2"), t("cat2.spec3"), t("cat2.spec4"), t("cat2.spec5"), t("cat2.spec6")].map((s) => (
                  <div key={s} className="spec-item">
                    <Check size={13} className="text-cool shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600">{s}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand font-medium mb-7">{t("cat2.best")}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={lp("/products/panorama-led-fan")}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand border border-brand px-5 py-2.5 rounded-full hover:bg-brand hover:text-white transition-colors"
                >
                  View Details <ArrowRight size={14} />
                </Link>
                <Link
                  href={lp("/contact")}
                  className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <Link href={lp("/products/panorama-led-fan")} className="group aspect-[4/3] rounded-2xl overflow-hidden block">
              <Image
                src="/360fan.png"
                alt="Panorama LED ceiling mist fan"
                width={800}
                height={600}
                quality={85}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Cat 3 — Vento Kit */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">{t("cat3.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                {t("cat3.headline")}
              </h2>
              <p className="text-gray-600 max-w-2xl text-sm leading-relaxed mb-8">{t("cat3.desc")}</p>

              <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm data-table">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        {[t("cat3.col1"), t("cat3.col2"), t("cat3.col3"), t("cat3.col4")].map((col) => (
                          <th key={col} className="text-start px-6 py-4 font-semibold text-xs uppercase tracking-wider">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ventokits.map((kit) => (
                        <tr key={kit.id} className="border-t border-border">
                          <td className="px-6 py-4 font-mono text-xs font-medium text-charcoal">{kit.id}</td>
                          <td className="px-6 py-4 text-gray-600">{kit.fans}</td>
                          <td className="px-6 py-4 text-gray-600">{kit.coverage}</td>
                          <td className="px-6 py-4 text-gray-500 text-xs">{kit.best}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-7">{t("cat3.specs")}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={lp("/products/vento-kit-fans")}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand border border-brand px-5 py-2.5 rounded-full hover:bg-brand hover:text-white transition-colors"
                >
                  View Details <ArrowRight size={14} />
                </Link>
                <Link
                  href={lp("/contact")}
                  className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&q=80"
                alt="Vento misting fan installation on outdoor terrace"
                width={800}
                height={600}
                quality={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cat 4 — Linea Kit */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">{t("cat4.label")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                {t("cat4.headline")}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">{t("cat4.desc")}</p>

              <div className="bg-white rounded-xl border border-border overflow-hidden mb-4">
                <table className="w-full text-sm data-table">
                  <thead>
                    <tr className="bg-charcoal text-white">
                      {[t("cat4.col1"), t("cat4.col2"), t("cat4.col3")].map((col) => (
                        <th key={col} className="text-start px-5 py-3 font-semibold text-xs uppercase tracking-wider">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {lineakits.map((kit) => (
                      <tr key={kit.id} className="border-t border-border">
                        <td className="px-5 py-3 font-mono text-xs font-medium text-charcoal">{kit.id}</td>
                        <td className="px-5 py-3 text-gray-600">{kit.nozzles}</td>
                        <td className="px-5 py-3 text-gray-600">{kit.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mb-7">{t("cat4.compat")}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={lp("/products/linea-kit")}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand border border-brand px-5 py-2.5 rounded-full hover:bg-brand hover:text-white transition-colors"
                >
                  View Details <ArrowRight size={14} />
                </Link>
                <Link
                  href={lp("/contact")}
                  className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <Link href={lp("/products/linea-kit")} className="group aspect-[4/3] rounded-2xl overflow-hidden block">
              <Image
                src="/linea.png"
                alt="Linea Kit pergola misting installation"
                width={800}
                height={600}
                quality={85}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Cat 5 — Pumps */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label mb-3">{t("cat5.label")}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              {t("cat5.headline")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { key: "fogApp", slug: "fog-app-pump", tier: "Residential", dark: false,
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75" },
              { key: "fogExtra", slug: "fog-extra-pump", tier: "Commercial", dark: false,
                img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=75" },
              { key: "var3", slug: "fog-70-var3", tier: "Industrial", dark: true,
                img: "/fog-70-var3.png" },
            ].map(({ key, slug, tier, dark, img }) => (
              <div key={key} className={`rounded-2xl overflow-hidden border ${dark ? "border-charcoal" : "border-border"}`}>
                {/* Product image */}
                <div className="aspect-[3/2] relative overflow-hidden">
                  <Image
                    src={img}
                    alt={t(`cat5.${key}.name`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={80}
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 ${dark ? "bg-charcoal/60" : "bg-charcoal/30"}`} />
                  <span className={`absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${dark ? "bg-cool/20 text-cool" : "bg-white/90 text-brand"}`}>
                    {tier}
                  </span>
                </div>
                {/* Content */}
                <div className={`p-8 ${dark ? "bg-charcoal text-white" : "bg-sand text-charcoal"}`}>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                    {t(`cat5.${key}.name`)}
                  </h3>
                  <p className={`font-mono text-xs mb-4 ${dark ? "text-white/40" : "text-gray-400"}`}>
                    {t(`cat5.${key}.code`)}
                  </p>
                  <p className={`text-xs font-medium mb-3 ${dark ? "text-cool" : "text-brand"}`}>
                    {t(`cat5.${key}.specs`)}
                  </p>
                  <p className={`text-sm leading-relaxed mb-5 ${dark ? "text-white/70" : "text-gray-600"}`}>
                    {t(`cat5.${key}.desc`)}
                  </p>
                  <p className={`text-xs font-medium mb-6 ${dark ? "text-white/50" : "text-gray-500"}`}>
                    {t(`cat5.${key}.best`)}
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={lp(`/products/${slug}`)}
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-cool hover:text-white" : "text-brand hover:text-brand-dark"} transition-colors`}
                    >
                      View Full Details <ArrowRight size={14} />
                    </Link>
                    <Link
                      href={lp("/contact")}
                      className={`inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ${dark ? "bg-cool hover:bg-cool/80 text-white" : "bg-brand hover:bg-brand-dark text-white"}`}
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cat 6 — Industrial / Adiabatico */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=75"
            alt="Industrial adiabatic chiller pre-cooling"
            fill
            sizes="100vw"
            quality={75}
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label-light mb-4">{t("cat6.label")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat6.headline")}
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">{t("cat6.desc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={lp("/products/fog-adiabatico")}
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              View Product Details <ArrowRight size={15} />
            </Link>
            <Link
              href={lp("/solutions/industrial")}
              className="inline-flex items-center justify-center gap-2 bg-cool hover:bg-cool/90 text-white font-semibold px-7 py-3 rounded-full transition-colors"
            >
              {t("cat6.link")} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
