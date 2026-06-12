import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
}
function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
}
function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const common = useTranslations("common");

  const localePath = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <div className="relative bg-white rounded-xl overflow-hidden" style={{ width: 260, height: 115 }}>
                <Image
                  src="/Logo.png"
                  alt="Fabtech Qatar"
                  fill
                  sizes="260px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm mt-1 mb-5 font-medium">
              {t("tagline")}
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              {t("company")}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: InstagramIcon, label: "Instagram", href: "#" },
                { Icon: FacebookIcon, label: "Facebook", href: "#" },
                { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              {t("solutions")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: nav("villa"), href: localePath("/solutions/villa") },
                { label: nav("hospitality"), href: localePath("/solutions/hospitality") },
                { label: nav("restaurant"), href: localePath("/solutions/restaurant") },
                { label: nav("industrial"), href: localePath("/solutions/industrial") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Company column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              {t("productsCol")}
            </h3>
            <ul className="space-y-2.5 mb-8">
              {[
                { label: "Aurora Misting Pole", href: localePath("/products") },
                { label: "Panorama LED Fan", href: localePath("/products") },
                { label: "Vento Kit Fans", href: localePath("/products") },
                { label: "Linea Kit", href: localePath("/products") },
                { label: "Fog Pump Systems", href: localePath("/products") },
                { label: "Industrial Systems", href: localePath("/products") },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              {t("companyCol")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { key: "about", href: localePath("/about") },
                { key: "projects", href: localePath("/projects") },
                { key: "blog", href: "#" },
                { key: "careers", href: "#" },
                { key: "contact", href: localePath("/contact") },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {t(`links.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              {t("contactCol")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${common("phone")}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  <span>{common("phone")}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${common("email")}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  <span>{common("email")}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>{common("address")}</span>
                </div>
              </li>
              <li>
                <a
                  href={`https://wa.me/97455187619?text=${encodeURIComponent(common("whatsappMsg"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t("whatsappUs")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span>{t("copyright")}</span>
              <span className="hidden sm:block">·</span>
              <span>{t("dealer")}</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white/70 transition-colors">
                {t("privacy")}
              </Link>
              <span>·</span>
              <Link href="#" className="hover:text-white/70 transition-colors">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
