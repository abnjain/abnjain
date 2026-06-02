"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsShowcaseSection } from "@/components/sections/ProjectsShowcaseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";

export default function HomeClient() {
  return (
    <main className="relative w-full flex-1 selection:bg-accent/10 selection:text-text">
      <HeroSection />
      <ShowcaseSection />
      <ProcessSection />
      <ProjectsShowcaseSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactCtaSection />
    </main>
  );
}
