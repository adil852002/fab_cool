import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

const PRODUCT_HERO_IMAGES: Record<Slug, string> = {
  "aurora-misting-pole": "/aurora-1.jpg",
  "rondo-ceiling-unit": "/rondo.png",
  "panorama-led-fan": "/360fan.png",
  "vento-kit-fans": "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=1400&q=80",
  "linea-kit": "/linea.png",
  "fog-app-pump": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
  "fog-extra-pump": "/fog-70-var3.png",
  "fog-70-var3": "/fog-70-var3.png",
  "fog-adiabatico": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
};

const PRODUCT_GALLERY: Partial<Record<Slug, string[]>> = {
  "aurora-misting-pole": ["/aurora2.png", "/aurora.png"],
  "rondo-ceiling-unit": ["/360fan.png"],
  "linea-kit": ["/linea.png"],
  "fog-70-var3": ["/fog-70-var3.png"],
};

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
    title: `${name} | Idrobase Products Qatar | Fabtech`,
    description: `${name} — available in Qatar through Fabtech, authorised Idrobase dealer. Technical specs, pricing, and free site survey. Request a quote.`,
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

  const heroImg = PRODUCT_HERO_IMAGES[slug];
  const gallery = PRODUCT_GALLERY[slug] ?? [];

  return (
    <>
      {/* Back breadcrumb */}
      <div className="pt-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href={lp("/products")} className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors">
            <ChevronLeft size={14} /> All Products
          </Link>
        </div>
      </div>

      {slug === "aurora-misting-pole" && (
        <AuroraSection t={t} lp={lp} heroImg={heroImg} gallery={gallery} />
      )}
      {slug === "rondo-ceiling-unit" && (
        <RondoSection t={t} lp={lp} heroImg={heroImg} gallery={gallery} />
      )}
      {slug === "panorama-led-fan" && (
        <PanoramaSection t={t} lp={lp} heroImg={heroImg} />
      )}
      {slug === "vento-kit-fans" && (
        <VentoSection t={t} lp={lp} heroImg={heroImg} kits={ventoKits} />
      )}
      {slug === "linea-kit" && (
        <LineaSection t={t} lp={lp} heroImg={heroImg} kits={lineaKits} />
      )}
      {slug === "fog-app-pump" && (
        <FogPumpSection t={t} lp={lp} pumpKey="fogApp" heroImg={heroImg} />
      )}
      {slug === "fog-extra-pump" && (
        <FogPumpSection t={t} lp={lp} pumpKey="fogExtra" heroImg={heroImg} />
      )}
      {slug === "fog-70-var3" && (
        <FogPumpSection t={t} lp={lp} pumpKey="var3" heroImg={heroImg} />
      )}
      {slug === "fog-adiabatico" && (
        <AdiabaticoSection t={t} lp={lp} heroImg={heroImg} />
      )}
    </>
  );
}

/* ── Shared layout pieces ── */

function HeroImage({ src, alt, priority = true }: { src: string; alt: string; priority?: boolean }) {
  const isLocal = src.startsWith("/");
  return (
    <div className="relative h-[40vh] sm:h-[55vh] bg-charcoal overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        quality={isLocal ? 90 : 80}
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
    </div>
  );
}

function SpecRow({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-0">
      <Check size={14} className="text-cool shrink-0 mt-0.5" />
      <span className="text-sm text-charcoal">{label}</span>
    </div>
  );
}

function GalleryRow({ images }: { images: string[] }) {
  if (!images.length) return null;
  return (
    <div className={`grid gap-4 mt-8 ${images.length === 1 ? "grid-cols-1 max-w-md" : "grid-cols-2"}`}>
      {images.map((src, i) => (
        <div key={src} className="aspect-[4/3] rounded-xl overflow-hidden border border-border">
          <Image
            src={src}
            alt={`Product view ${i + 1}`}
            width={600}
            height={450}
            quality={85}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
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

/* ── Product-specific sections ── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AuroraSection({ t, lp, heroImg, gallery }: { t: any; lp: (s: string) => string; heroImg: string; gallery: string[] }) {
  return (
    <>
      <HeroImage src={heroImg} alt="Aurora ZX.5352-MC Misting Pole" />
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">AURORA ZX.5352-MC</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat1.aurora.name")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{t("cat1.aurora.desc")}</p>
          <Link href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Technical Specifications</h2>
              <div className="bg-sand rounded-2xl p-8 border border-border">
                {[t("cat1.aurora.spec1"), t("cat1.aurora.spec2"), t("cat1.aurora.spec3"), t("cat1.aurora.spec4")].map((s: string) => (
                  <SpecRow key={s} label={s} />
                ))}
              </div>
              <p className="mt-6 text-sm text-brand font-medium">{t("cat1.aurora.best")}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Product Gallery</h2>
              <GalleryRow images={gallery} />
            </div>
          </div>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RondoSection({ t, lp, heroImg, gallery }: { t: any; lp: (s: string) => string; heroImg: string; gallery: string[] }) {
  return (
    <>
      <HeroImage src={heroImg} alt="Rondò ZX.5115 Ceiling Misting Fan" />
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">RONDÒ ZX.5115</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat1.rondo.name")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{t("cat1.rondo.desc")}</p>
          <Link href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Technical Specifications</h2>
              <div className="bg-sand rounded-2xl p-8 border border-border">
                {[t("cat1.rondo.spec1"), t("cat1.rondo.spec2"), t("cat1.rondo.spec3")].map((s: string) => (
                  <SpecRow key={s} label={s} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Product Gallery</h2>
              <GalleryRow images={gallery} />
            </div>
          </div>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PanoramaSection({ t, lp, heroImg }: { t: any; lp: (s: string) => string; heroImg: string }) {
  return (
    <>
      <HeroImage src={heroImg} alt="Fan 360° Panorama LED Ceiling Mist Fan" />
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">{t("cat2.name")}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat2.headline")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{t("cat2.desc")}</p>
          <Link href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Technical Specifications</h2>
          <div className="bg-sand rounded-2xl p-8 border border-border mb-6">
            {[t("cat2.spec1"), t("cat2.spec2"), t("cat2.spec3"), t("cat2.spec4"), t("cat2.spec5"), t("cat2.spec6")].map((s: string) => (
              <SpecRow key={s} label={s} />
            ))}
          </div>
          <p className="text-sm text-brand font-medium">{t("cat2.best")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function VentoSection({ t, lp, heroImg, kits }: { t: any; lp: (s: string) => string; heroImg: string; kits: Array<{ id: string; fans: string; coverage: string; best: string }> }) {
  return (
    <>
      <HeroImage src={heroImg} alt="Vento Kit misting fan installation" />
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">{t("cat3.label")}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat3.headline")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{t("cat3.desc")}</p>
          <Link href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Available Kits</h2>
          <div className="overflow-x-auto rounded-2xl border border-border mb-4">
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
          <p className="text-xs text-gray-400">{t("cat3.specs")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LineaSection({ t, lp, heroImg, kits }: { t: any; lp: (s: string) => string; heroImg: string; kits: Array<{ id: string; nozzles: string; length: string }> }) {
  return (
    <>
      <HeroImage src={heroImg} alt="Linea Kit stainless misting line for pergolas" />
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">{t("cat4.label")}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat4.headline")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{t("cat4.desc")}</p>
          <Link href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal mb-8" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Kit Configurations</h2>
          <div className="overflow-x-auto rounded-2xl border border-border mb-4">
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
          <p className="text-xs text-gray-400">{t("cat4.compat")}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FogPumpSection({ t, lp, pumpKey, heroImg }: { t: any; lp: (s: string) => string; pumpKey: "fogApp" | "fogExtra" | "var3"; heroImg: string }) {
  const key = pumpKey;
  return (
    <>
      <HeroImage src={heroImg} alt={t(`cat5.${key}.name`)} />
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">{t(`cat5.${key}.code`)}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t(`cat5.${key}.name`)}
          </h1>
          <p className="text-cool text-sm font-medium mb-4">{t(`cat5.${key}.specs`)}</p>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{t(`cat5.${key}.desc`)}</p>
          <Link href={lp("/contact")}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand rounded-2xl p-8 border border-border">
            <p className="text-xs font-bold text-brand uppercase tracking-wider mb-4">SPECIFICATIONS</p>
            <SpecRow label={t(`cat5.${key}.specs`)} />
            <SpecRow label={t(`cat5.${key}.desc`)} />
          </div>
          <p className="mt-6 text-sm text-gray-500 font-medium">{t(`cat5.${key}.best`)}</p>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AdiabaticoSection({ t, lp, heroImg }: { t: any; lp: (s: string) => string; heroImg: string }) {
  return (
    <>
      <HeroImage src={heroImg} alt="Fog Adiabatico industrial pre-cooling system" />
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-cool uppercase tracking-widest mb-3">{t("cat6.label")}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {t("cat6.headline")}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">{t("cat6.desc")}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={lp("/contact")}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full transition-colors">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link href={lp("/solutions/industrial")}
              className="inline-flex items-center gap-2 border border-white/40 text-white font-medium px-7 py-4 rounded-full hover:border-white transition-colors">
              {t("cat6.link")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <CtaSection lp={lp} />
    </>
  );
}
