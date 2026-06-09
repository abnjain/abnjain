export type HeroMetric = {
  label: string;
  value: string;
  fillClass: "bg-accent" | "bg-ink";
};

function clampPercent(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

/** Derive bar fill from display values like `99.98%` or `42GB/64GB`. */
export function parseMetricProgress(value: string): number {
  const trimmed = value.trim();

  if (trimmed.endsWith("%")) {
    return clampPercent(parseFloat(trimmed.slice(0, -1)));
  }

  const slashIndex = trimmed.indexOf("/");
  if (slashIndex !== -1) {
    const used = parseFloat(
      trimmed.slice(0, slashIndex).replace(/[^\d.]/g, ""),
    );
    const total = parseFloat(
      trimmed.slice(slashIndex + 1).replace(/[^\d.]/g, ""),
    );
    if (!total) return 0;
    return clampPercent((used / total) * 100);
  }

  return 0;
}

export type HeroBootLine = {
  text: string;
  variant: "accent" | "default";
};

export const heroContent = {
  status: "[ STATUS: EXECUTIVE_OVERRIDE ]",
  titleLine1: "ABNJAIN",
  titleLine2: "SYS",
  description: [
    "ENTREPRENEUR · SYSTEM ARCHITECT · CLOUD ENGINEER...",
    "SPECIALIZING IN SCALABLE INFRASTRUCTURE, HIGH-",
    "PERFORMANCE BACKENDS, AND LIGHTWEIGHT INTERFACES.",
  ],
  metrics: [
    {
      label: "UPTIME",
      value: "99.98%",
      fillClass: "bg-accent",
    },
    {
      label: "MEMORY_LOAD",
      value: "42GB/64GB",
      fillClass: "bg-ink",
    },
  ] satisfies HeroMetric[],
  bootLog: [
    { text: " INITIALIZING_ENVIRONMENT...", variant: "default" },
    { text: " LOADING_DESIGNS_AND_CODE...", variant: "default" },
    { text: " BUILDING_AND_SHIPPING...", variant: "default" },
    { text: " SHIPPED_WITH: NEXT.JS, NODE, TYPESCRIPT, TAILWIND, VERCEL, GIT, GITHUB", variant: "default" },
  ] satisfies HeroBootLine[],
  location: {
    label: "CURRENT_LOCATION",
    hq: "INDIA_HQ",
    coords: "[22.75, 75.89]",
  },
  images: {
    dither: "/images/hero/dither-bg.png",
    ditherAlt: "abnjain hero dither background texture",
    character: "/images/hero/character.png",
    characterAlt: "Abhinav Jain (abnjain) — hero character illustration",
    wireframeMap: "/images/hero/wireframe-map.png",
    wireframeMapAlt: "abnjain system wireframe map visualization",
    wireframeWave: "/images/hero/wireframe-wave.png",
    wireframeWaveAlt: "abnjain animated wireframe wave background",
  },
} as const;
