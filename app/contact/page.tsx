import {
  generatePageMetadata,
  getBreadcrumbSchema,
  buildGraph,
} from "@/lib/seo";
import { JsonLdGraph } from "@/components/seo/JsonLdGraph";
import { ContactPageSection } from "@/components/sections/ContactPageSection";
import { personProfile } from "@/lib/data/profile";
import { SEO_CONFIG } from "@/lib/seo/config";

export const metadata = generatePageMetadata({
  title: "Contact Abhinav Jain (abnjain) — Initiate Contact",
  description:
    "Contact Abhinav Jain (abnjain) for freelance, contract, or full-time work. Send a message via the secure contact form, email abnjain25@gmail.com, or connect on GitHub and LinkedIn.",
  path: "/contact",
  keywords: [
    "Contact Abhinav Jain",
    "Hire abnjain",
    "Contact Developer Indore",
    "Hire Full Stack Developer India",
    "Freelance Developer Contact",
    "abnjain Contact",
    "abnjain",
  ],
});

const contactSchema = buildGraph(
  getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Abhinav Jain (abnjain)",
    url: `${SEO_CONFIG.siteUrl}/contact`,
    description: `Contact ${personProfile.name} (${personProfile.alternateName}) for web development, design, and IT consulting.`,
    mainEntity: {
      "@type": "Person",
      name: personProfile.name,
      alternateName: personProfile.alternateName,
      email: personProfile.contact.email,
      url: personProfile.url,
    },
  },
);

export default function ContactPage() {
  return (
    <>
      <JsonLdGraph schema={contactSchema} />
      <main>
        <ContactPageSection />
      </main>
    </>
  );
}
