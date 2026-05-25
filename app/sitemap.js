import { SEO_CONFIG } from '@/Components/SEO';

/**
 * Generates /sitemap.xml at build time (Next.js App Router).
 * Works with both SSR deployments and static export (GitHub Pages / DigitalOcean).
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  const { siteUrl } = SEO_CONFIG;
  const now = new Date().toISOString();

  return [
    {
      url:             siteUrl,
      lastModified:    now,
      changeFrequency: 'weekly',
      priority:        1.0,
    },
    {
      url:             `${siteUrl}/About`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${siteUrl}/Projects`,
      lastModified:    now,
      changeFrequency: 'weekly',
      priority:        0.85,
    },
    {
      url:             `${siteUrl}/Blogs`,
      lastModified:    now,
      changeFrequency: 'weekly',
      priority:        0.7,
    },
  ];
}
