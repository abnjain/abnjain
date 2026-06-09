import type { PortfolioProject } from "@/types/project";
import type { FaqItem } from "@/types/home";
import { personProfile } from "@/lib/data/profile";
import { serviceOfferings } from "@/lib/data/services";
import { SEO_CONFIG } from "@/lib/seo/config";

type JsonLdObject = Record<string, unknown>;

export function getPersonSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${personProfile.url}/#person`,
    name: personProfile.name,
    alternateName: [personProfile.alternateName, "Abhinav Jain abnjain"],
    url: personProfile.url,
    image: personProfile.image,
    email: personProfile.contact.email,
    sameAs: personProfile.sameAs,
    jobTitle: personProfile.jobTitles,
    description: personProfile.summaryParagraph,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "username",
        value: personProfile.alternateName,
      },
      {
        "@type": "PropertyValue",
        name: "brand",
        value: "abnjain",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: personProfile.location.city,
      addressRegion: personProfile.location.region,
      addressCountry: personProfile.location.country,
    },
    knowsAbout: personProfile.knowsAbout,
  };
}

export function getWebsiteSchema(): JsonLdObject {
  const { siteUrl, siteName, siteTitle, defaultDescription } = SEO_CONFIG;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    alternateName: [siteTitle, personProfile.alternateName, "abnjain.me"],
    url: siteUrl,
    description: defaultDescription,
    inLanguage: "en-IN",
    publisher: { "@id": `${personProfile.url}/#person` },
    author: { "@id": `${personProfile.url}/#person` },
    about: { "@id": `${personProfile.url}/#person` },
    keywords: "abnjain, Abhinav Jain, Full Stack Developer, Indore, India",
    potentialAction: {
      "@type": "ReadAction",
      target: [
        `${siteUrl}/llms-full.txt`,
        `${siteUrl}/llms.txt`,
        `${siteUrl}/about`,
        `${siteUrl}/projects`,
      ],
    },
  };
}

export function getProfessionalServiceSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Hire ${personProfile.name}`,
    description: personProfile.summaryOneLine,
    url: `${personProfile.url}/#contact`,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    provider: getPersonSchema(),
    serviceType: serviceOfferings.map((s) => s.name),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${personProfile.url}${personProfile.contact.hirePath}`,
    },
  };
}

export function getFAQPageSchema(faq: FaqItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLdObject {
  const { siteUrl } = SEO_CONFIG;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function getProfilePageSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `About ${personProfile.name}`,
    url: `${personProfile.url}/about`,
    mainEntity: getPersonSchema(),
  };
}

export function getProjectsSchema(
  projects: Pick<PortfolioProject, "name" | "link" | "desc" | "slug">[],
): JsonLdObject {
  const { siteUrl, siteName } = SEO_CONFIG;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Projects by ${siteName}`,
    description: "Portfolio of web development projects by Abhinav Jain (abnjain)",
    url: `${siteUrl}/projects`,
    itemListElement: projects
      .filter((p) => p.slug !== "portfolio")
      .map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        description: project.desc,
        url: `${siteUrl}/projects/${project.slug}`,
      })),
  };
}

export function getSoftwareApplicationSchema(project: PortfolioProject): JsonLdObject {
  const { siteUrl } = SEO_CONFIG;
  const appUrl = project.link.startsWith("http")
    ? project.link
    : `${siteUrl}${project.link}`;

  const schema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
    url: `${siteUrl}/projects/${project.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Person",
      name: personProfile.name,
      alternateName: personProfile.alternateName,
      url: personProfile.url,
    },
    keywords: [...project.stack, "abnjain", personProfile.alternateName].join(", "),
  };

  if (project.img) {
    schema.screenshot = `${siteUrl}${project.img}`;
  }
  if (appUrl !== `${siteUrl}/`) {
    schema.sameAs = appUrl;
  }

  return schema;
}

export function buildGraph(...nodes: JsonLdObject[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map((node) => {
      const copy = { ...node };
      delete copy["@context"];
      return copy;
    }),
  };
}
