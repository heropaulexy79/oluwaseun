import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV?.includes("preview");

  return {
    rules: [
      {
        userAgent: "*",
        allow: isProduction ? "/" : "",
        disallow: isProduction ? ["/api/"] : ["/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
