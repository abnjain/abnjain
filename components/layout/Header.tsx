"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavPillBar } from "@/components/layout/NavPillBar";
import { useActiveNav } from "@/lib/useActiveNav";
import { headerCta, navLinks, siteBrand } from "@/lib/data/site";
import type { NavSection } from "@/lib/useActiveNav";

function sectionForHref(href: string): NavSection {
  if (href === "/" || href === "") return "home";
  if (href.includes("#contact")) return "contact";
  if (href.includes("/about")) return "about";
  if (href.includes("/projects")) return "projects";
  return "home";
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeSection, isNavActive, setNavSection } = useActiveNav();

  const handleNavClick = (href: string) => {
    const section = sectionForHref(href);
    setNavSection(section);
    setMobileOpen(false);

    if (section === "contact") {
      requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      });
    }

    if (
      section === "home" &&
      typeof window !== "undefined" &&
      window.location.pathname === "/" &&
      window.location.hash
    ) {
      window.history.replaceState(null, "", "/");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-header/80 backdrop-blur-xl dark:border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-400/5 to-teal-500/10 dark:from-cyan-500/15 dark:via-sky-500/5 dark:to-teal-400/10" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between gap-4 md:h-20">
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="group flex shrink-0 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            aria-label={`${siteBrand.name} home`}
          >
            <Image
              src={siteBrand.logo}
              alt={siteBrand.logoAlt}
              width={44}
              height={44}
              priority
              className="rounded-full ring-1 ring-black/10 transition-transform duration-200 group-hover:scale-105 dark:ring-white/10"
            />
            <span className="hidden text-sm font-semibold tracking-tight text-text sm:block">
              {siteBrand.shortName}
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          >
            <NavPillBar
              links={navLinks}
              activeSection={activeSection}
              isActive={isNavActive}
              onNavClick={handleNavClick}
              orientation="horizontal"
              containerClassName="rounded-full border border-black/10 bg-white/45 px-2 py-1.5 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/10"
            />
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={headerCta.href}
              scroll={false}
              onClick={() => handleNavClick(headerCta.href)}
              className="hidden rounded-full bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 md:inline-flex dark:bg-white dark:text-bg"
            >
              {headerCta.label}
            </Link>

            <ThemeToggle />

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/40 text-text shadow-soft backdrop-blur-md transition-colors hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 md:hidden dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
            >
              {mobileOpen ? (
                <HiOutlineX className="h-5 w-5" />
              ) : (
                <HiOutlineMenuAlt3 className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <MobileNav
          links={navLinks}
          activeSection={activeSection}
          ctaLabel={headerCta.label}
          ctaHref={headerCta.href}
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          isActive={isNavActive}
          onNavClick={handleNavClick}
        />
      </div>
    </header>
  );
}
