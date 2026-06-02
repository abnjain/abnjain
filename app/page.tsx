import { generatePageMetadata, getPersonSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import HomeClient from "./HomeClient";

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
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={getPersonSchema()} />
      <HomeClient />
    </>
  );
}
