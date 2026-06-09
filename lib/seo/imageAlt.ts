import { siteBrand } from "@/lib/data/site";

export const DEFAULT_OG_IMAGE_ALT =
  "Abhinav Jain (abnjain) — Full Stack Developer, Designer & IT Solutionist";

/** Ensures every image alt includes the abnjain brand when missing. */
export function imageAlt(description: string): string {
  const base = description.trim();
  if (/abnjain/i.test(base)) return base;
  return `${base} — ${siteBrand.name} (${siteBrand.shortName})`;
}

/** Decorative or ambient imagery still gets a crawlable abnjain label. */
export function decorativeImageAlt(context: string): string {
  return imageAlt(`${context} — abnjain portfolio visual`);
}
