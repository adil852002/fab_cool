"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isArabic = locale === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === "en" ? "ar" : "en";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  };

  const localePath = (path: string) => `/${locale}${path}`;

  const solutionLinks = [
    { label: t("villa"), href: localePath("/solutions/villa") },
    { label: t("hospitality"), href: localePath("/solutions/hospitality") },
    { label: t("restaurant"), href: localePath("/solutions/restaurant") },
    { label: t("industrial"), href: localePath("/solutions/industrial") },
  ];
  const moreSolutionLinks = [
    { label: t("coolCoatings"), href: localePath("/solutions/cool-coatings") },
    { label: t("shadeMisting"), href: localePath("/solutions/shade-misting") },
    { label: t("personalCooling"), href: localePath("/solutions/personal-cooling") },
    { label: t("mosquitoControl"), href: localePath("/solutions/mosquito-control") },
  ];

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white shadow-md"
          : isHome
          ? "bg-transparent"
          : "bg-white shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo */}
          <Link href={localePath("/")} className="flex items-center">
            <div className="relative overflow-hidden w-[155px] h-[70px] lg:w-[220px] lg:h-[100px]">
              <Image
                src="/Logo.png"
                alt="Fabtech Qatar"
                fill
                sizes="(max-width: 1024px) 155px, 220px"
                className="object-cover object-top"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  scrolled || !isHome
                    ? "text-charcoal hover:text-brand"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {t("solutions")}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div
                  className={`absolute top-full ${isArabic ? "right-0" : "left-0"} w-64 bg-white rounded-xl shadow-xl border border-border pt-1 pb-2`}
                >
                  {solutionLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-charcoal hover:bg-sand hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-border mx-3 my-1.5" />
                  <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">More Services</p>
                  {moreSolutionLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-charcoal hover:bg-sand hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: t("products"), href: localePath("/products") },
              { label: t("about"), href: localePath("/about") },
              { label: t("projects"), href: localePath("/projects") },
              { label: t("contact"), href: localePath("/contact") },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled || !isHome
                    ? "text-charcoal hover:text-brand"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={switchLocale}
              className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
                scrolled || !isHome
                  ? "text-charcoal hover:bg-sand"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              <Globe size={14} />
              {locale === "en" ? "العربية" : "English"}
            </button>

            <Link
              href={localePath("/contact")}
              className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              {t("getQuote")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={switchLocale}
              className={`p-2 rounded-lg transition-colors ${
                scrolled || !isHome || isOpen
                  ? "text-charcoal"
                  : "text-white"
              }`}
            >
              <Globe size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled || !isHome || isOpen ? "text-charcoal" : "text-white"
              }`}
              aria-label={isOpen ? t("close") : t("menu")}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border pb-4 pt-2">
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {t("solutions")}
              </p>
              {solutionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm text-charcoal hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border mx-3 my-1" />
              {moreSolutionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-charcoal hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border mt-2 pt-2 space-y-1">
                {[
                  { label: t("products"), href: localePath("/products") },
                  { label: t("about"), href: localePath("/about") },
                  { label: t("projects"), href: localePath("/projects") },
                  { label: t("contact"), href: localePath("/contact") },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-charcoal hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="px-3 pt-3">
                <Link
                  href={localePath("/contact")}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand text-white text-sm font-semibold px-5 py-3 rounded-full"
                >
                  {t("getQuote")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
