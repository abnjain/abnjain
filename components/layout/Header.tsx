"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Button } from "@/components/ui/Button";
import { MarqueeBar } from "@/components/ui/MarqueeBar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { useActiveNav } from "@/lib/useActiveNav";
import { headerCta, headerNavLinks, siteBrand } from "@/lib/data/site";
import { cn } from "@/lib/cn";
import type { NavSection } from "@/lib/useActiveNav";

function sectionForHref(href: string): NavSection {
  if (href === "/" || href === "") return "home";
  if (href.includes("#contact")) return "contact";
  if (href.includes("/about")) return "about";
  if (href.includes("/projects") || href.includes("#work")) return "projects";
  return "home";
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isNavActive, setNavSection } = useActiveNav();

  const handleNavClick = (href: string) => {
    const section = sectionForHref(href);
    setNavSection(section);
    setMobileOpen(false);

    if (section === "contact" || href.includes("#contact")) {
      requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      });
    }

    if (href.includes("#work")) {
      requestAnimationFrame(() => {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
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
    <header className="sticky top-0 z-50 w-full">
      <MarqueeBar />

      <div className="border-b border-border bg-bg">
        <div className="relative mx-auto flex h-[4.5rem] max-w-[1536px] items-center justify-between gap-4 px-4 md:h-[5.375rem] md:px-10">
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="shrink-0 font-display text-2xl font-bold tracking-[-0.05em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`${siteBrand.name} home`}
          >
            {siteBrand.wordmark}
          </Link>

          <nav
            aria-label="Primary navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          >
            <ul className="flex items-center gap-8">
              {headerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={link.href.startsWith("/#") ? false : undefined}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "text-base text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isNavActive(link.href) && "text-accent",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <Image
              src={siteBrand.avatar}
              alt=""
              width={52}
              height={52}
              className="relative z-10 -mr-6 hidden size-[52px] object-cover md:block"
              aria-hidden
            />
            <Button
              href={headerCta.href}
              scroll={false}
              onClick={() => handleNavClick(headerCta.href)}
              variant="dark"
              size="sm"
              className="hidden md:inline-flex"
            >
              {headerCta.label}
            </Button>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <Button
              type="button"
              variant="icon"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden"
            >
              {mobileOpen ? (
                <HiOutlineX className="size-5" aria-hidden />
              ) : (
                <HiOutlineMenuAlt3 className="size-5" aria-hidden />
              )}
            </Button>
          </div>
        </div>

        <MobileNav
          links={headerNavLinks}
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
