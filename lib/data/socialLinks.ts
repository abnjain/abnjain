export type SocialLinkId =
  | "github"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "email";

export type SocialLink = {
  id: SocialLinkId;
  label: string;
  href: string;
  external: boolean;
};

/** Plain data only — no React components or IconType here. */
export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/abnjain",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abnjain",
    external: true,
  },
  {
    id: "twitter",
    label: "X / Twitter",
    href: "https://x.com/abnjain",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/abnjain",
    external: true,
  },
  {
    id: "email",
    label: "Email abnjain25@gmail.com",
    href: "mailto:abnjain25@gmail.com",
    external: false,
  },
];
