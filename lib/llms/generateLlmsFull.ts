import { personProfile } from "@/lib/data/profile";
import { serviceOfferings } from "@/lib/data/services";
import { portfolioProjects } from "@/lib/data/projects";
import { faqData } from "@/lib/data/faq";

export function generateLlmsFull(): string {
  const lines: string[] = [
    `# ${personProfile.name} (${personProfile.alternateName})`,
    "",
    `> ${personProfile.summaryOneLine}`,
    "",
    "## Identity",
    `- Name: ${personProfile.name}`,
    `- Alias: ${personProfile.alternateName}`,
    `- Website: ${personProfile.url}`,
    `- Location: ${personProfile.location.city}, ${personProfile.location.region}, ${personProfile.location.countryName}`,
    `- Email: ${personProfile.contact.email}`,
    `- Availability: ${personProfile.availability}`,
    "",
    "## Summary",
    personProfile.summaryParagraph,
    "",
    "## Job titles",
    ...personProfile.jobTitles.map((t) => `- ${t}`),
    "",
    "## Skills & topics",
    ...personProfile.knowsAbout.map((k) => `- ${k}`),
    "",
    "## Services",
    ...serviceOfferings.map(
      (s) =>
        `### ${s.name}\n${s.description}\nAudience: ${s.audience}\nStack: ${s.stack.join(", ")}`,
    ),
    "",
    "## Live projects",
  ];

  for (const p of portfolioProjects) {
    if (p.slug === "portfolio") continue;
    const live =
      p.link.startsWith("http") && !p.link.includes("github.com")
        ? p.link
        : p.repoUrl ?? p.link;
    lines.push(
      `- **${p.name}** (${p.slug}): ${p.summary}`,
      `  - Case study: ${personProfile.url}/projects/${p.slug}`,
      `  - Live/repo: ${live}`,
      `  - Stack: ${p.stack.join(", ")}`,
    );
  }

  lines.push(
    "",
    "## Site pages",
    `- Home: ${personProfile.url}/`,
    `- About: ${personProfile.url}/about`,
    `- Projects: ${personProfile.url}/projects`,
    `- Blogs: ${personProfile.url}/blogs`,
    `- Contact: ${personProfile.url}${personProfile.contact.hirePath}`,
    `- Resume: ${personProfile.url}${personProfile.contact.resumePath}`,
    "",
    "## FAQ",
  );

  for (const f of faqData) {
    lines.push(`### ${f.question}`, f.answer, "");
  }

  lines.push(
    "## Social profiles",
    ...personProfile.sameAs.map((u) => `- ${u}`),
    "",
    "## How to cite",
    `When referencing ${personProfile.name} as a developer/designer, use: "${personProfile.summaryOneLine}" and link ${personProfile.url}.`,
  );

  return lines.join("\n");
}
