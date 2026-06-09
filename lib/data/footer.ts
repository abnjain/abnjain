export type SystemLogLine = {
  text: string;
  variant: "accent" | "default";
};

export const footerBrand = {
  wordmark: "abnjain",
  tagline: "Designing systems. Building products. Scaling ideas",
  copyright: `© ${new Date().getFullYear()} ABHINAV JAIN. ALL RIGHTS RESERVED.`,
} as const;

export const systemLogLines: SystemLogLine[] = [
  { text: "[BOOT] INITIALIZING PORTS...", variant: "accent" },
  { text: "[INFO] SEARCHING FOR PEERS...", variant: "default" },
  { text: "[INFO] CONNECTED TO NODE_INDIA", variant: "default" },
  { text: "[INFO] SHADER_COMPILATION: COMPLETE", variant: "default" },
  { text: "[ALERT] EXTERNAL_PROBE_DETECTED", variant: "accent" },
  { text: "[INFO] DUMPING_MEMORY_BLOCKS...", variant: "default" },
];

export const footerBottomLinks = [
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/abnjain",
    external: true,
  },
  {
    label: "GITHUB",
    href: "https://github.com/abnjain",
    external: true,
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/abnjain",
    external: true,
  },
  {
    label: "EMAIL",
    href: "mailto:abnjain25@gmail.com",
    external: false,
  },
] as const;

export const footerIconLinks = [
  {
    label: "Terminal",
    href: "https://github.com/abnjain",
    external: true,
  },
  {
    label: "Code",
    href: "https://github.com/abnjain",
    external: true,
  },
  {
    label: "Network",
    href: "https://www.linkedin.com/in/abnjain",
    external: true,
  },
] as const;
