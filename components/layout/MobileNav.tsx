"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/lib/data/site";
type MobileNavProps = {
  links: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  isOpen: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
  onNavClick: (href: string) => void;
};

export function MobileNav({
  links,
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
      className="overflow-hidden border-t border-border md:hidden"
      aria-hidden={!isOpen}
    >
      <nav
        aria-label="Mobile navigation"
        className="space-y-1 px-4 py-4"
      >
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                scroll={link.href.startsWith("/#") ? false : undefined}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "block px-2 py-3 text-base text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive(link.href) && "text-accent",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-3 pt-3">
          <ThemeToggle />
          <Button
            href={ctaHref}
            scroll={false}
            onClick={() => handleNavClick(ctaHref)}
            variant="dark"
            size="sm"
            className="flex-1 justify-center"
          >
            {ctaLabel}
          </Button>
        </div>
      </nav>
    </motion.div>
  );
}
