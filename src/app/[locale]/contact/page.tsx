import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return { title: t("title"), description: t("description") };
}

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent locale={locale} />;
}

function ContactContent({ locale }: { locale: string }) {
  const t = useTranslations("contact");
  const common = useTranslations("common");

  const typeOptions = t.raw("form.typeOptions") as string[];
  const sourceOptions = t.raw("form.sourceOptions") as string[];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-light mb-5">{t("hero.label")}</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {t("hero.headline1")}
            <br />
            <span className="text-cool">{t("hero.headline2")}</span>
          </h1>
          <p className="text-white/60 text-lg">{t("hero.sub")}</p>
        </div>
      </section>

      {/* Channels + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Channels */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="bg-sand rounded-2xl p-7 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="font-bold text-charcoal text-lg"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {t("channels.whatsapp.title")}
                  </h3>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                    {t("channels.whatsapp.badge")}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {t("channels.whatsapp.body")}
                </p>
                <a
                  href={`https://wa.me/97455187619?text=${encodeURIComponent(
                    common("whatsappMsg")
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full text-sm transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t("channels.whatsapp.cta")}
                </a>
              </div>

              {/* Email */}
              <div className="bg-sand rounded-2xl p-7 border border-border">
                <h3
                  className="font-bold text-charcoal text-lg mb-3"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {t("channels.email.title")}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {t("channels.email.body")}
                </p>
                <a
                  href={`mailto:${common("email")}`}
                  className="flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                >
                  <Mail size={14} />
                  {t("channels.email.cta")}
                </a>
              </div>

              {/* Office */}
              <div className="bg-sand rounded-2xl p-7 border border-border">
                <h3
                  className="font-bold text-charcoal text-lg mb-3"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {t("channels.office.title")}
                </h3>
                <div className="flex items-start gap-2 text-sm text-gray-500 mb-3">
                  <MapPin size={14} className="shrink-0 mt-0.5 text-brand" />
                  <span className="leading-relaxed">{t("channels.office.body")}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-500">
                  <Phone size={14} className="shrink-0 mt-0.5 text-brand" />
                  <span>{t("channels.office.hours")}</span>
                </div>
              </div>

              {/* Free survey box */}
              <div className="bg-charcoal rounded-2xl p-7 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle size={18} className="text-cool" />
                  <h3
                    className="font-bold text-base"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {t("survey.headline")}
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-3">
                  {t("survey.body")}
                </p>
                <p className="text-xs text-white/40">{t("survey.note")}</p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2
                className="text-2xl font-bold text-charcoal mb-8"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {t("form.headline")}
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      {t("form.name")} <span className="text-brand">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("form.namePlaceholder")}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      {t("form.company")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("form.companyPlaceholder")}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      {t("form.phone")} <span className="text-brand">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t("form.phonePlaceholder")}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      {t("form.email")} <span className="text-brand">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    {t("form.type")}
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-sm">
                    <option value="">—</option>
                    {typeOptions.map((opt: string) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    {t("form.space")}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t("form.spacePlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    {t("form.source")}
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-sm">
                    <option value="">—</option>
                    {sourceOptions.map((opt: string) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white font-semibold px-10 py-4 rounded-full transition-colors shadow-md text-base"
                >
                  {t("form.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
