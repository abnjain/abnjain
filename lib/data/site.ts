export type NavItem = {
  label: string;
  href: string;
};

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

/** Brutalist header navigation (Figma node 43:231). */
export const headerNavLinks: NavItem[] = [
  { label: "WORK", href: "/#work" },
  { label: "SERVICES", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "LABS", href: "/blogs" },
];

export const siteBrand = {
  name: "Abhinav Jain",
  shortName: "abnjain",
  wordmark: "abnjain",
  logo: "/Images/favicon.png",
  avatar: "/images/header-avatar.png",
  logoAlt: "Abhinav Jain (abnjain) — Portfolio Home",
  avatarAlt: "Abhinav Jain (abnjain) — profile photo",
} as const;

export const headerCta = {
  label: "INITIATE CONTACT",
  href: "/#contact",
} as const;
