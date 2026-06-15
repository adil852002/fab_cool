import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, ArrowRight, ChevronLeft } from "lucide-react";

const PRODUCT_SLUGS = [
  "aurora-misting-pole",
  "rondo-ceiling-unit",
  "panorama-led-fan",
  "vento-kit-fans",
  "linea-kit",
  "fog-app-pump",
  "fog-extra-pump",
  "fog-70-var3",
  "fog-adiabatico",
] as const;

type Slug = (typeof PRODUCT_SLUGS)[number];

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!PRODUCT_SLUGS.includes(slug as Slug)) return {};
  const t = await getTranslations({ locale, namespace: "products" });
  const name = getProductName(slug as Slug, t);
  return {
    title: `${name} | Fabtech Qatar`,
    description: `Details and specifications for the ${name}. Authorised Idrobase product available in Qatar through Fabtech. Request a quote.`,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getProductName(slug: Slug, t: any): string {
  switch (slug) {
    case "aurora-misting-pole": return t("cat1.aurora.name");
    case "rondo-ceiling-unit": return t("cat1.rondo.name");
    case "panorama-led-fan": return t("cat2.headline");
    case "vento-kit-fans": return t("cat3.headline");
    case "linea-kit": return t("cat4.headline");
    case "fog-app-pump": return t("cat5.fogApp.name");
    case "fog-extra-pump": return t("cat5.fogExtra.name");
    case "fog-70-var3": return t("cat5.var3.name");
    case "fog-adiabatico": return t("cat6.headline");
  }
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!PRODUCT_SLUGS.includes(slug as Slug)) notFound();
  setRequestLocale(locale);
  return <ProductContent locale={locale} slug={slug as Slug} />;
}

function ProductContent({ locale, slug }: { locale: string; slug: Slug }) {
  const t = useTranslations("products");
  const lp = (path: string) => `/${locale}${path}`;

  const ventoKits = t.raw("cat3.kits") as Array<{ id: string; fans: string; coverage: string; best: string }>;
  const lineaKits = t.raw("cat4.kits") as Array<{ id: string; nozzles: string; length: string }>;

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={lp("/products")} className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors">
            <ChevronLeft size={14} /> All Products
          </Link>
        </div>
      </div>

      {slug === "aurora-misting-pole" && <AuroraSection t={t} lp={lp} />}
      {slug === "rondo-ceiling-unit" && <RondoSection t={t} lp={lp} />}
      {slug === "panorama-led-fan" && <PanoramaSection t={t} lp={lp} />}
      {slug === "vento-kit-fans" && <VentoSection t={t} lp={lp} kits={ventoKits} />}
      {slug === "linea-kit" && <LineaSection t={t} lp={lp} kits={lineaKits} />}
      {slug === "fog-app-pump" && <FogAppSection t={t} lp={lp} />}
      {slug === "fog-extra-pump" && <FogExtraSection t={t} lp={lp} />}
      {slug === "fog-70-var3" && <Var3Section t={t} lp={lp} />}
      {slug === "fog-adiabatico" && <AdiabaticoSection t={t} lp={lp} />}
    </>
  );
}

/* ── Shared components ── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SpecRow({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-0">
      <Check size={14} className="text-cool shrink-0 mt-0.5" />
      <span className="text-sm text-charcoal">{label}</span>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProductHero({ code, name, desc, lp, t: _t }: { code: string; name: string; desc: string; lp: (s: string) => string; t: any }) {
  return (
    <section className="pb-20 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">{code}</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          {name}
        </h1>
        <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-10">{desc}</p>
        <Link href={lp("/contact")}
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
          Request a Quote <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

/* ── Individual product sections ── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AuroraSection({ t, lp }: { t: any; lp: (s: string) => string }) {
  return (
    <>
      <ProductHero code="AURORA ZX.5352-MC" name={t("cat1.aurora.name")} desc={t("cat1.aurora.desc")} lp={lp} t={t} />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Technical Specifications</h2>
          <div className="bg-sand rounded-2xl p-8 border border-border">
            {[t("cat1.aurora.spec1"), t("cat1.aurora.spec2"), t("cat1.aurora.spec3"), t("cat1.aurora.spec4")].map((s: string) => (
              <SpecRow key={s} label={s} />
            ))}
          </div>
          <p className="mt-6 text-sm text-brand font-medium">{t("cat1.aurora.best")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RondoSection({ t, lp }: { t: any; lp: (s: string) => string }) {
  return (
    <>
      <ProductHero code="RONDÒ ZX.5115" name={t("cat1.rondo.name")} desc={t("cat1.rondo.desc")} lp={lp} t={t} />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Technical Specifications</h2>
          <div className="bg-sand rounded-2xl p-8 border border-border">
            {[t("cat1.rondo.spec1"), t("cat1.rondo.spec2"), t("cat1.rondo.spec3")].map((s: string) => (
              <SpecRow key={s} label={s} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PanoramaSection({ t, lp }: { t: any; lp: (s: string) => string }) {
  return (
    <>
      <ProductHero code={t("cat2.name")} name={t("cat2.headline")} desc={t("cat2.desc")} lp={lp} t={t} />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Technical Specifications</h2>
          <div className="bg-sand rounded-2xl p-8 border border-border">
            {[t("cat2.spec1"), t("cat2.spec2"), t("cat2.spec3"), t("cat2.spec4"), t("cat2.spec5"), t("cat2.spec6")].map((s: string) => (
              <SpecRow key={s} label={s} />
            ))}
          </div>
          <p className="mt-6 text-sm text-brand font-medium">{t("cat2.best")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function VentoSection({ t, lp, kits }: { t: any; lp: (s: string) => string; kits: Array<{ id: string; fans: string; coverage: string; best: string }> }) {
  return (
    <>
      <section className="pb-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">{t("cat3.label")}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat3.headline")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-10">{t("cat3.desc")}</p>
          <Link href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Available Kits</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-sand">
                <tr>
                  {[t("cat3.col1"), t("cat3.col2"), t("cat3.col3"), t("cat3.col4")].map((col: string) => (
                    <th key={col} className="text-left px-5 py-3 font-semibold text-charcoal text-xs uppercase tracking-wider">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {kits.map((kit) => (
                  <tr key={kit.id} className="hover:bg-sand/50 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-brand font-medium">{kit.id}</td>
                    <td className="px-5 py-3 text-charcoal">{kit.fans}</td>
                    <td className="px-5 py-3 text-charcoal">{kit.coverage}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{kit.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">{t("cat3.specs")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LineaSection({ t, lp, kits }: { t: any; lp: (s: string) => string; kits: Array<{ id: string; nozzles: string; length: string }> }) {
  return (
    <>
      <section className="pb-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">{t("cat4.label")}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat4.headline")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-10">{t("cat4.desc")}</p>
          <Link href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Kit Configurations</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-sand">
                <tr>
                  {[t("cat4.col1"), t("cat4.col2"), t("cat4.col3")].map((col: string) => (
                    <th key={col} className="text-left px-5 py-3 font-semibold text-charcoal text-xs uppercase tracking-wider">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {kits.map((kit) => (
                  <tr key={kit.id} className="hover:bg-sand/50 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-brand font-medium">{kit.id}</td>
                    <td className="px-5 py-3 text-charcoal">{kit.nozzles}</td>
                    <td className="px-5 py-3 text-charcoal">{kit.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">{t("cat4.compat")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FogAppSection({ t, lp }: { t: any; lp: (s: string) => string }) {
  return (
    <>
      <ProductHero code={t("cat5.fogApp.code")} name={t("cat5.fogApp.name")} desc={t("cat5.fogApp.desc")} lp={lp} t={t} />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand rounded-2xl p-8 border border-border mb-6">
            <p className="text-sm font-medium text-brand mb-4">{t("cat5.fogApp.specs")}</p>
            <SpecRow label={t("cat5.fogApp.desc")} />
          </div>
          <p className="text-sm text-gray-500 font-medium">{t("cat5.fogApp.best")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FogExtraSection({ t, lp }: { t: any; lp: (s: string) => string }) {
  return (
    <>
      <ProductHero code={t("cat5.fogExtra.code")} name={t("cat5.fogExtra.name")} desc={t("cat5.fogExtra.desc")} lp={lp} t={t} />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand rounded-2xl p-8 border border-border mb-6">
            <p className="text-sm font-medium text-brand mb-4">{t("cat5.fogExtra.specs")}</p>
            <SpecRow label={t("cat5.fogExtra.desc")} />
          </div>
          <p className="text-sm text-gray-500 font-medium">{t("cat5.fogExtra.best")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Var3Section({ t, lp }: { t: any; lp: (s: string) => string }) {
  return (
    <>
      <ProductHero code={t("cat5.var3.code")} name={t("cat5.var3.name")} desc={t("cat5.var3.desc")} lp={lp} t={t} />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand rounded-2xl p-8 border border-border mb-6">
            <p className="text-sm font-medium text-brand mb-4">{t("cat5.var3.specs")}</p>
            <SpecRow label={t("cat5.var3.desc")} />
          </div>
          <p className="text-sm text-gray-500 font-medium">{t("cat5.var3.best")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AdiabaticoSection({ t, lp }: { t: any; lp: (s: string) => string }) {
  return (
    <>
      <section className="pb-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">{t("cat6.label")}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat6.headline")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-10">{t("cat6.desc")}</p>
          <Link href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={lp("/solutions/industrial")}
            className="inline-flex items-center gap-2 text-brand font-medium hover:text-brand-dark">
            {t("cat6.link")} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

function CtaSection({ lp }: { lp: (s: string) => string }) {
  return (
    <section className="py-20 bg-brand text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          Ready to install this in Qatar?
        </h2>
        <p className="text-white/80 mb-8">Free site survey. No obligation. We respond within 2 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={lp("/contact")}
            className="inline-flex items-center justify-center gap-2 bg-white text-brand font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
          <Link href={lp("/products")}
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-medium px-8 py-4 rounded-full hover:border-white transition-colors">
            <ChevronLeft size={16} /> All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
