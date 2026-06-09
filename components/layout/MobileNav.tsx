"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/lib/data/site";

type MobileNavProps = {
  links: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
  onNavClick: (href: string) => void;
};

export function MobileNav({
  links,
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
      className="overflow-hidden border-t border-border lg:hidden"
      aria-hidden={!isOpen}
    >
      <nav
        aria-label="Mobile navigation"
        className="px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6"
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

        <div className="border-t border-border pt-4">
          <ThemeToggle />
        </div>
      </nav>
    </motion.div>
  );
}
