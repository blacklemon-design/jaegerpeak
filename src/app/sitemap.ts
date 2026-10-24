import { MetadataRoute } from "next/types";
import { sitemapPaths, sitemapUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths.flatMap((path) =>
    ["de", "en"].map((locale) => ({
      url: sitemapUrl(locale, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/about" || path === "/services" ? 0.8 : 0.3,
    }))
  );
}
