"use client";

import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsShowcaseSection } from "@/components/sections/ProjectsShowcaseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";

export default function HomeClient() {
  return (
    <>
      <ShowcaseSection />
      <ProcessSection />
      <ProjectsShowcaseSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
