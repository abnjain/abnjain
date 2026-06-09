import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo/config";

/**
 * GEO: intentionally permissive — all crawlers (including AI training bots)
 * may index public pages. Only Next internals and API routes are blocked.
 */
export default function robots(): MetadataRoute.Robots {
  const { siteUrl } = SEO_CONFIG;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
