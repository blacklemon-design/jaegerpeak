import { MetadataRoute } from "next/types";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: 'https://jaegerpeak.ch',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://jaegerpeak.ch/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://jeagerpeak.ch/services',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ]
}