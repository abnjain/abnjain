"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { NavPillBar } from "@/components/layout/NavPillBar";
import type { NavItem } from "@/lib/data/site";
import type { NavSection } from "@/lib/useActiveNav";

type MobileNavProps = {
  links: NavItem[];
  activeSection: NavSection;
  ctaLabel: string;
  ctaHref: string;
  isOpen: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
  onNavClick: (href: string) => void;
};

export function MobileNav({
  links,
  activeSection,
  ctaLabel,
  ctaHref,
  isOpen,
  onClose,
  isActive,
  onNavClick,
}: MobileNavProps) {
  const reduceMotion = useReducedMotion();

  const handleNavClick = (href: string) => {
    onNavClick(href);
    onClose();
  };

  return (
    <motion.div
      id="mobile-navigation"
      initial={false}
      animate={
        isOpen
          ? { height: "auto", opacity: 1 }
          : { height: 0, opacity: 0 }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
      }
      className="overflow-hidden md:hidden"
      aria-hidden={!isOpen}
    >
      <nav
        aria-label="Mobile navigation"
        className="mt-3 rounded-3xl border border-black/10 bg-white/50 p-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
      >
        <NavPillBar
          links={links}
          activeSection={activeSection}
          isActive={isActive}
          onNavClick={handleNavClick}
          orientation="vertical"
          pillClassName="rounded-2xl"
          linkClassName="rounded-2xl py-3 font-semibold"
        />

        <Link
          href={ctaHref}
          scroll={false}
          onClick={() => handleNavClick(ctaHref)}
          className="mt-3 flex w-full items-center justify-center rounded-full bg-text px-5 py-3 text-sm font-semibold text-bg transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 dark:bg-white dark:text-bg"
        >
          {ctaLabel}
        </Link>
      </nav>
    </motion.div>
  );
}
