import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: baseUrl,
      lastModified: "2026-10-29",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: "2026-10-29",
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
