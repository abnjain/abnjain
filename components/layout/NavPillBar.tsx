"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { NavItem } from "@/lib/nav";
import type { NavSection } from "@/lib/useActiveNav";

export const navPillSpring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 28,
  mass: 0.85,
};

type PillRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type NavPillBarProps = {
  links: NavItem[];
  activeSection: NavSection;
  isActive: (href: string) => boolean;
  onNavClick: (href: string) => void;
  orientation?: "horizontal" | "vertical";
  layoutId?: string;
  containerClassName?: string;
  pillClassName?: string;
  linkClassName?: string;
};

export function NavPillBar({
  links,
  activeSection,
  isActive,
  onNavClick,
  orientation = "horizontal",
  containerClassName = "",
  pillClassName = "rounded-full",
  linkClassName = "",
}: NavPillBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState<PillRect | null>(null);
  const reduceMotion = useReducedMotion();

  const updatePill = useCallback(() => {
    const container = containerRef.current;
    const activeLink = links.find((link) => isActive(link.href));
    if (!container || !activeLink) {
      return;
    }

    const el = linkRefs.current[activeLink.href];
    if (!el) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();

    setPill({
      left: linkRect.left - containerRect.left,
      top: linkRect.top - containerRect.top,
      width: linkRect.width,
      height: linkRect.height,
    });
  }, [links, isActive]);

  useLayoutEffect(() => {
    updatePill();
  }, [activeSection, updatePill]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const observer = new ResizeObserver(() => updatePill());
    observer.observe(container);
    window.addEventListener("resize", updatePill);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePill);
    };
  }, [updatePill]);

  const isVertical = orientation === "vertical";

  return (
    <div
      ref={containerRef}
      className={`relative ${isVertical ? "flex flex-col gap-1" : "flex items-center gap-1"} ${containerClassName}`}
    >
      {pill && (
        <motion.div
          className={`pointer-events-none absolute bg-accent shadow-glow ${pillClassName}`}
          initial={false}
          animate={{
            left: pill.left,
            top: pill.top,
            width: pill.width,
            height: pill.height,
          }}
          transition={reduceMotion ? { duration: 0 } : navPillSpring}
          aria-hidden
        />
      )}

      {links.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.href}
            ref={(node) => {
              linkRefs.current[link.href] = node;
            }}
            href={link.href}
            scroll={!link.href.includes("#")}
            onClick={() => onNavClick(link.href)}
            aria-current={active ? "page" : undefined}
            className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${linkClassName} ${
              active ? "text-white" : "text-muted hover:text-text"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
