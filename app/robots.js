import { SEO_CONFIG } from '@/Components/SEO';

/**
 * Generates /robots.txt at build time (Next.js App Router).
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  const { siteUrl } = SEO_CONFIG;
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host:    siteUrl,
  };
}
