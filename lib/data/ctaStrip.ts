export type CtaStat = {
  value: string;
  label: string;
  variant?: "outline" | "accent";
};

export const ctaDataStrip = {
  bandTitle: "// 04 INITIATE_PROTOCOL",
  titleLine1: "READY TO",
  titleLine2: "OVERRIDE?",
  description:
    "My mission is to design robust systems, build impactful products, and scale ideas that transform complex constraints into flawless digital masterpieces.",
  ctaLabel: "INITIATE_CONTACT",
  stats: [
    { value: "5+", label: "YEARS_EXP", variant: "outline" },
    { value: "15", label: "SYS_LAUNCHED", variant: "outline" },
    { value: "04", label: "EXIT_EVENTS", variant: "outline" },
    { value: "00", label: "SYSTEM_FAILURES", variant: "accent" },
  ] satisfies CtaStat[],
} as const;
