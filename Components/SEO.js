/**
 * SEO.js — Central SEO Configuration & Reusable Utilities
 *
 * Usage in any page/layout:
 *   import { generatePageMetadata } from '@/Components/SEO';
 *   export const metadata = generatePageMetadata({ title: '...', description: '...', path: '/route' });
 *
 * For JSON-LD structured data:
 *   import { JsonLd, getPersonSchema } from '@/Components/SEO';
 *   <JsonLd schema={getPersonSchema()} />
 */

// ─── Site-wide constants ────────────────────────────────────────────────────
export const SEO_CONFIG = {
  siteUrl: 'https://abnjain.me',
  siteName: 'Abhinav Jain',
  siteTitle: 'Abhinav Jain — Developer, Designer & Best IT Solutionist',
  defaultDescription:
    'Abhinav Jain (abnjain) — Full Stack Developer, Web Designer, SEO Specialist, Cloud Developer, DevOps Specialist & Entrepreneur from Indore, India. Expert in MERN Stack, System Design, and scalable web solutions.',
  defaultImage: '/abhinavjain.png',
  twitterHandle: '@abnjain',
  locale: 'en_IN',
  geo: {
    region: 'IN-MP',
    placename: 'Indore, Madhya Pradesh, India',
    position: '22.7196;75.8577',
    icbm: '22.7196, 75.8577',
  },
  // All target keywords (global — merged into every page)
  globalKeywords: [
    // Personal brand
    'Abhinav Jain',
    'abnjain',
    // Developer
    'Developer',
    'Web Developer',
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Developer',
    // Designer
    'Designer',
    'Web Designer',
    'UI Designer',
    'UX Designer',
    'Frontend Designer',
    'UI/UX Designer',
    // SEO
    'SEO Specialist',
    'SEO Expert',
    'SEO Consultant',
    'Digital Marketing Expert',
    'Search Engine Optimization',
    // Entrepreneur
    'Entrepreneur',
    'Tech Entrepreneur',
    'Freelancer',
    'Startup Founder',
    'IT Consultant',
    // System Design
    'System Designer',
    'System Architecture',
    'System Design Expert',
    'Software Architect',
    // Cloud
    'Cloud Developer',
    'AWS Developer',
    'Google Cloud Developer',
    'Cloud Infrastructure',
    'Cloud Solutions Architect',
    // DevOps
    'DevOps Specialist',
    'DevOps Engineer',
    'CI/CD Expert',
    'Docker',
    'Kubernetes',
    'Infrastructure Engineer',
    // Unique branding
    'Best IT Solutionist',
    'IT Specialist',
    'IT Solutions Expert',
    // India-specific geo-targeting
    'Indore Developer',
    'India Web Developer',
    'Madhya Pradesh Developer',
    'Indian Full Stack Developer',
    'Freelance Developer India',
    'Best Developer Indore',
    'Web Developer Indore',
    'Software Engineer India',
  ],
};

// ─── Metadata factory ────────────────────────────────────────────────────────

/**
 * Generates a complete Next.js App Router metadata object.
 *
 * @param {object}   options
 * @param {string}  [options.title]       Page title; appended as "Title | Abhinav Jain".
 *                                        Omit to use the default site title.
 * @param {string}  [options.description] Page description.
 * @param {string[]}[options.keywords]    Additional page-specific keywords.
 * @param {string}  [options.path='/']    Canonical URL path (e.g. '/About').
 * @param {string}  [options.image]       Absolute path to OG image.
 * @param {string}  [options.type]        OG type ('website' | 'article'). Default 'website'.
 * @returns {import('next').Metadata}
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '/',
  image,
  type = 'website',
} = {}) {
  const { siteUrl, siteName, defaultImage, twitterHandle, locale, geo, globalKeywords } =
    SEO_CONFIG;

  const resolvedTitle = title ? `${title} | ${siteName}` : SEO_CONFIG.siteTitle;
  const resolvedDesc   = description || SEO_CONFIG.defaultDescription;
  const resolvedImage  = image || defaultImage;
  const canonicalUrl   = `${siteUrl}${path}`;
  const allKeywords    = [...new Set([...globalKeywords, ...keywords])];

  return {
    title: resolvedTitle,
    description: resolvedDesc,
    keywords: allKeywords,
    authors:   [{ name: siteName, url: siteUrl }],
    creator:   siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-IN':     canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title:       resolvedTitle,
      description: resolvedDesc,
      url:         canonicalUrl,
      siteName,
      images: [
        {
          url:    resolvedImage,
          width:  1200,
          height: 630,
          alt:    resolvedTitle,
        },
      ],
      locale,
      type,
    },
    twitter: {
      card:        'summary_large_image',
      title:       resolvedTitle,
      description: resolvedDesc,
      creator:     twitterHandle,
      images:      [resolvedImage],
    },
    robots: {
      index:  true,
      follow: true,
      googleBot: {
        index:                true,
        follow:               true,
        'max-video-preview':  -1,
        'max-image-preview':  'large',
        'max-snippet':        -1,
      },
    },
    other: {
      'geo.region':    geo.region,
      'geo.placename': geo.placename,
      'geo.position':  geo.position,
      ICBM:            geo.icbm,
    },
  };
}

// ─── JSON-LD Schemas ─────────────────────────────────────────────────────────

/**
 * Schema.org Person — for the home page.
 */
export function getPersonSchema() {
  const { siteUrl, siteName } = SEO_CONFIG;
  return {
    '@context': 'https://schema.org',
    '@type':    'Person',
    name:         siteName,
    alternateName: 'abnjain',
    url:          siteUrl,
    image:        `${siteUrl}/abhinavjain.png`,
    sameAs: [
      'https://github.com/abnjain',
      'https://linkedin.com/in/abnjain',
    ],
    jobTitle: [
      'Full Stack Developer',
      'Web Designer',
      'SEO Specialist',
      'Cloud Developer',
      'DevOps Engineer',
      'Entrepreneur',
    ],
    description:
      'Abhinav Jain is a Full Stack Developer, Web Designer, SEO Specialist, Cloud Developer, DevOps Specialist, and Entrepreneur from Indore, India.',
    address: {
      '@type':          'PostalAddress',
      addressLocality:  'Indore',
      addressRegion:    'Madhya Pradesh',
      addressCountry:   'IN',
    },
    knowsAbout: [
      'Web Development', 'React.js', 'Node.js', 'Next.js', 'MongoDB',
      'Express.js', 'PHP', 'WordPress', 'JavaScript', 'Java',
      'SEO', 'Cloud Computing', 'AWS', 'Google Cloud Platform',
      'DevOps', 'Docker', 'Kubernetes', 'System Design',
    ],
  };
}

/**
 * Schema.org WebSite — for the root layout.
 */
export function getWebsiteSchema() {
  const { siteUrl, siteName, siteTitle, defaultDescription } = SEO_CONFIG;
  return {
    '@context':   'https://schema.org',
    '@type':      'WebSite',
    name:          siteName,
    alternateName: siteTitle,
    url:           siteUrl,
    description:   defaultDescription,
    inLanguage:    'en-IN',
    author: {
      '@type': 'Person',
      name:     siteName,
      url:      siteUrl,
    },
  };
}

/**
 * Schema.org ItemList — for the Projects page.
 * @param {{ name: string, link: string, desc: string }[]} projects
 */
export function getProjectsSchema(projects) {
  const { siteUrl, siteName } = SEO_CONFIG;
  return {
    '@context': 'https://schema.org',
    '@type':    'ItemList',
    name:        `Projects by ${siteName}`,
    description: 'Portfolio of web development projects by Abhinav Jain',
    url:         `${siteUrl}/Projects`,
    itemListElement: projects
      .filter((p) => p.link && p.link !== '/')
      .map((project, index) => ({
        '@type':    'ListItem',
        position:   index + 1,
        name:       project.name,
        description: project.desc,
        url:         project.link.startsWith('http') ? project.link : `${siteUrl}${project.link}`,
      })),
  };
}

// ─── JsonLd Server Component ─────────────────────────────────────────────────

/**
 * JsonLd — Server component for injecting structured data into <head>.
 * Works in Next.js App Router server components and static export.
 *
 * @param {{ schema: object }} props
 */
export function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
