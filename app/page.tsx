import {
  generatePageMetadata,
  getPersonSchema,
  getWebsiteSchema,
  getProfessionalServiceSchema,
  getFAQPageSchema,
  buildGraph,
} from "@/lib/seo";
import { JsonLdGraph } from "@/components/seo/JsonLdGraph";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { CtaDataStripSection } from "@/components/sections/CtaDataStripSection";
import { DeployedAssetsSection } from "@/components/sections/DeployedAssetsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { faqData } from "@/lib/data/faq";

export const metadata = generatePageMetadata({
  description:
    "Abhinav Jain (abnjain) — Full Stack Developer, Web Designer, SEO Specialist, Cloud Developer, DevOps Specialist & Entrepreneur from Indore, India. Hire me for MERN Stack, System Design, Cloud, and IT solutions.",
  path: "/",
  keywords: [
    "Portfolio",
    "Hire Developer India",
    "Hire Web Developer",
    "Hire Full Stack Developer",
    "MERN Developer Portfolio",
    "Web Developer Portfolio India",
    "Freelance Developer Indore",
    "abnjain Portfolio",
    "Hire Designer India",
    "Hire SEO Expert India",
    "Hire DevOps Engineer India",
    "Hire Cloud Developer India",
    "abnjain Deployed Assets",
    "abnjain"
  ],
});

const homeSchema = buildGraph(
  getPersonSchema(),
  getWebsiteSchema(),
  getProfessionalServiceSchema(),
  getFAQPageSchema(faqData),
);

export default function HomePage() {
  return (
    <>
      <JsonLdGraph schema={homeSchema} />
      <main className="relative w-full flex-1 selection:bg-accent/10 selection:text-text">
        <HeroSection />
        <ExperienceSection />
        <DeployedAssetsSection />
        <CtaDataStripSection />
        <FaqSection />
        <ContactCtaSection />
      </main>
    </>
  );
}
