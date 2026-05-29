import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: "Outdoor Cooling Systems Qatar | Italian-Engineered Misting | Fabtech Services",
    description:
      "Fabtech Qatar delivers Made-in-Italy outdoor misting and cooling solutions for villas, hotels, restaurants and commercial spaces. Drop temperatures by up to 15°C. Authorised Idrobase dealer.",
  };
}

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const common = useTranslations("common");
  const lp = (path: string) => `/${locale}${path}`;

  const stats = [
    { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
    { value: t("hero.stat2Value"), label: t("hero.stat2Label") },
    { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
    { value: t("hero.stat4Value"), label: t("hero.stat4Label") },
  ];

  const solutions = [
    {
      icon: "🏡",
      title: t("solutions.villa"),
      desc: t("solutions.villaDesc"),
      href: lp("/solutions/villa"),
    },
    {
      icon: "🏨",
      title: t("solutions.hospitality"),
      desc: t("solutions.hospitalityDesc"),
      href: lp("/solutions/hospitality"),
    },
    {
      icon: "🍽️",
      title: t("solutions.restaurant"),
      desc: t("solutions.restaurantDesc"),
      href: lp("/solutions/restaurant"),
    },
    {
      icon: "🏭",
      title: t("solutions.industrial"),
      desc: t("solutions.industrialDesc"),
      href: lp("/solutions/industrial"),
    },
  ];

  const whyItems = [
    { title: t("why.f1Title"), body: t("why.f1Body") },
    { title: t("why.f2Title"), body: t("why.f2Body") },
    { title: t("why.f3Title"), body: t("why.f3Body") },
    { title: t("why.f4Title"), body: t("why.f4Body") },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-charcoal">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
            alt="Luxury pool terrace"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-32">
          <div className="max-w-3xl">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight mb-6"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("hero.headline1")}
              <br />
              <span className="text-cool">{t("hero.headline2")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed mb-10">
              {t("hero.sub")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={lp("/contact")}
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-7 py-4 rounded-full text-base transition-colors shadow-lg"
              >
                {t("hero.cta1")}
              </Link>
              <Link
                href={lp("/solutions/villa")}
                className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-7 py-4 rounded-full text-base transition-colors"
              >
                {t("hero.cta2")}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="py-6 px-4 lg:px-8 text-center">
                  <p
                    className="text-2xl sm:text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-white/60 mt-1 font-medium uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">{t("problem.label")}</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-10"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("problem.headline")}
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>{t("problem.p1")}</p>
            <p>{t("problem.p2")}</p>
            <p className="font-medium text-charcoal">{t("problem.p3")}</p>
          </div>
          <p className="mt-6 text-sm text-gray-400 italic">{t("problem.footnote")}</p>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ─── */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">{t("solutions.label")}</p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("solutions.headline")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <span className="text-4xl block mb-5">{s.icon}</span>
                <h3
                  className="text-lg font-bold text-charcoal mb-2 group-hover:text-brand transition-colors"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IDROBASE ADVANTAGE ─── */}
      <section className="py-24 lg:py-32 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label-light mb-6">{t("technology.label")}</p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("technology.headline1")}
                <br />
                <span className="text-cool">{t("technology.headline2")}</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed mb-8">
                <p>{t("technology.p1")}</p>
                <p>{t("technology.p2")}</p>
                <p>{t("technology.p3")}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  t("technology.pill1"),
                  t("technology.pill2"),
                  t("technology.pill3"),
                ].map((pill) => (
                  <span
                    key={pill}
                    className="pill border-cool/60 text-cool"
                  >
                    <Check size={12} />
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Italian engineering — Idrobase misting technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Made in Italy badge */}
              <div className="absolute -bottom-4 -start-4 bg-brand text-white rounded-xl px-5 py-4 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">
                  Technology Partner
                </p>
                <p
                  className="text-xl font-bold mt-0.5"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  Idrobase
                </p>
                <p className="text-xs opacity-70">Padova, Italy · Est. 1986</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-4">{t("products.label")}</p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("products.headline")}
              </h2>
            </div>
            <Link
              href={lp("/products")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark whitespace-nowrap"
            >
              {t("products.viewAll")} <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
                title: t("products.aurora"),
                desc: t("products.auroraDesc"),
                href: lp("/products"),
              },
              {
                img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80",
                title: t("products.panorama"),
                desc: t("products.panoramaDesc"),
                href: lp("/products"),
              },
              {
                img: "https://images.unsplash.com/photo-1565115030792-5ea5ba66d4c8?w=600&q=80",
                title: t("products.var3"),
                desc: t("products.var3Desc"),
                href: lp("/products"),
              },
            ].map((p) => (
              <div key={p.title} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-sand mb-5">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="text-lg font-bold text-charcoal mb-2"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {p.desc}
                </p>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY FABTECH ─── */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">{t("why.label")}</p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {t("why.headline1")}
              <br />
              <span className="text-brand">{t("why.headline2")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-border">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                  <span className="text-brand font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3
                  className="text-base font-bold text-charcoal mb-3"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS TEASER ─── */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label-light mb-4">{t("projectsTeaser.label")}</p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("projectsTeaser.headline")}
              </h2>
            </div>
            <Link
              href={lp("/projects")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cool hover:text-white whitespace-nowrap transition-colors"
            >
              {t("projectsTeaser.cta")} <ArrowRight size={15} />
            </Link>
          </div>
          <p className="text-white/60 max-w-xl mb-12">{t("projectsTeaser.body")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
              "https://images.unsplash.com/photo-1504376830547-506dedfe681a?w=700&q=80",
            ].map((img, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={img}
                  alt={t("projectsTeaser.placeholder")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 start-4 end-4 text-white/70 text-xs italic">
                  {t("projectsTeaser.placeholder")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section className="py-20 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("cta.headline")}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            {t("cta.body")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/97455187619?text=${encodeURIComponent(
                common("whatsappMsg")
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-brand font-semibold px-8 py-4 rounded-full text-base hover:bg-white/90 transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("cta.whatsapp")}
            </a>
            <Link
              href={lp("/contact")}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
            >
              {t("cta.survey")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
