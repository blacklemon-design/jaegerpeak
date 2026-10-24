import type { Metadata } from "next";

const BASE_URL = "https://jaegerpeak.ch";

// German is the default locale and has no prefix (localePrefix: "as-needed")
function localizedPath(locale: string, path: string) {
  if (locale === "de") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export function pageAlternates(locale: string, path: string): Metadata["alternates"] {
  return {
    canonical: `${BASE_URL}${localizedPath(locale, path)}`,
    languages: {
      de: `${BASE_URL}${localizedPath("de", path)}`,
      en: `${BASE_URL}${localizedPath("en", path)}`,
      "x-default": `${BASE_URL}${localizedPath("de", path)}`,
    },
  };
}

export const sitemapPaths = ["/", "/about", "/services", "/impressum", "/datenschutzerklaerung"];

export function sitemapUrl(locale: string, path: string) {
  return `${BASE_URL}${localizedPath(locale, path)}`;
}
