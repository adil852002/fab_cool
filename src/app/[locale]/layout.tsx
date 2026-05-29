import type { Metadata } from "next";
import { Syne, Inter, Tajawal } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LocalBusinessSchema } from "./schema";
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Outdoor Cooling Systems Qatar | Italian-Engineered Misting | Fabtech Services",
    template: "%s | Fabtech Qatar",
  },
  description:
    "Fabtech Qatar delivers Made-in-Italy outdoor misting and cooling solutions for villas, hotels, restaurants and commercial spaces. Drop temperatures by up to 15°C. Authorised Idrobase dealer.",
  metadataBase: new URL("https://www.fabtechqatar.com"),
  openGraph: {
    siteName: "Fabtech Qatar",
    locale: "en_US",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${syne.variable} ${inter.variable} ${tajawal.variable}`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
