import { RowContainer } from "@/components/ui/RowContainer";
import { SectionBand } from "@/components/ui/SectionBand";
import { experienceSection } from "@/lib/data/experience";

/** Figma EXPERIENCE SECTION (43:48) — system log rows below hero. */
export function ExperienceSection() {
  const { title, entries } = experienceSection;

  return (
    <section
      id="experience"
      className="border-b border-border"
      aria-label="Experience"
    >
      <SectionBand variant="light" title={title} />

      <div>
        {entries.map((entry, index) => (
          <RowContainer
            key={`${entry.period}-${entry.title}`}
            period={entry.period}
            title={entry.title}
            subtitle={entry.company}
            details={[entry.project, entry.metric]}
            bordered={index > 0}
            className="py-12 md:px-10"
          />
        ))}
      </div>
    </section>
  );
}
