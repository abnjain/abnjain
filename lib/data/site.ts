export type NavItem = {
  label: string;
  href: string;
};

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export const siteBrand = {
  name: "Abhinav Jain",
  shortName: "abnjain",
  logo: "/Images/favicon.png",
  logoAlt: "Abhinav Jain (abnjain) — Portfolio Home",
} as const;

export const headerCta = {
  label: "Let's Talk",
  href: "/#contact",
} as const;
