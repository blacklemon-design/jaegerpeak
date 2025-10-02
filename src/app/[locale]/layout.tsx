export const dynamic = "force-static";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ namespace: "Meta", locale: locale });

  /*return {
    title: t("title"),
    description: t("description"),
    icons: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
    ],
    alternates: {
      canonical: `https://ghostbyte.dev${locale === "de" ? "/de" : ""}`,
    },
  };*/
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "https://jaegerpeak.ch",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang="en">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
