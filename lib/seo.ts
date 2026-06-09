import type { Metadata } from "next";

export { SEO_CONFIG } from "@/lib/seo/config";
export {
  getPersonSchema,
  getWebsiteSchema,
  getProfessionalServiceSchema,
  getFAQPageSchema,
  getBreadcrumbSchema,
  getProfilePageSchema,
  getProjectsSchema,
  getSoftwareApplicationSchema,
  buildGraph,
} from "@/lib/seo/schemas";

import { SEO_CONFIG } from "@/lib/seo/config";

export type PageMetadataOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "/",
  image,
  type = "website",
}: PageMetadataOptions = {}): Metadata {
  const { siteUrl, siteName, defaultImage, twitterHandle, locale, geo, globalKeywords } =
    SEO_CONFIG;

  const resolvedTitle = title ? `${title} | ${siteName}` : SEO_CONFIG.siteTitle;
  const resolvedDesc = description ?? SEO_CONFIG.defaultDescription;
  const resolvedImage = image ?? defaultImage;
  const canonicalUrl = `${siteUrl}${path}`;
  const allKeywords = [...new Set([...globalKeywords, ...keywords])];

  return {
    title: resolvedTitle,
    description: resolvedDesc,
    keywords: allKeywords,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-IN": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDesc,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
      locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDesc,
      creator: twitterHandle,
      images: [resolvedImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": geo.region,
      "geo.placename": geo.placename,
      "geo.position": geo.position,
      ICBM: geo.icbm,
    },
  };
}
