"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Button } from "@/components/ui/Button";
import { MarqueeBar } from "@/components/ui/MarqueeBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { useActiveNav } from "@/lib/useActiveNav";
import { headerCta, headerNavLinks, siteBrand } from "@/lib/data/site";
import { cn } from "@/lib/cn";
import type { NavSection } from "@/lib/useActiveNav";

function sectionForHref(href: string): NavSection {
  if (href === "/" || href === "") return "home";
  if (href.includes("#contact") || href.includes("/contact")) return "contact";
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

    if (href.includes("#contact")) {
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
    <header className="sticky top-0 z-50 w-full pt-[env(safe-area-inset-top)]">
      <MarqueeBar />

      <div className="border-b border-border bg-bg">
        <div className="relative mx-auto flex h-16 max-w-[1536px] items-center gap-3 px-4 sm:h-[4.5rem] sm:gap-4 sm:px-6 lg:h-[5.375rem] lg:px-10">
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="z-10 min-w-0 flex-1 truncate font-display text-xl font-bold tracking-[-0.05em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:flex-none sm:text-2xl"
            aria-label={`${siteBrand.name} home`}
          >
            {siteBrand.wordmark}
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden min-w-0 flex-1 justify-center lg:flex"
          >
            <ul className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 xl:gap-x-8">
              {headerNavLinks.map((link) => (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    scroll={link.href.startsWith("/#") ? false : undefined}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "whitespace-nowrap text-sm text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:text-base",
                      isNavActive(link.href) && "text-accent",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
            <Image
              src={siteBrand.avatar}
              alt={siteBrand.avatarAlt}
              width={52}
              height={52}
              className="relative z-10 hidden size-10 object-cover lg:-mr-4 lg:block xl:-mr-6 xl:size-[52px]"
            />

            {/* below lg: full CTA label (compact on xs) */}
            <Button
              href={headerCta.href}
              scroll={false}
              onClick={() => handleNavClick(headerCta.href)}
              variant="dark"
              size="sm"
              shellClassName="mb-0 mr-0 self-center lg:hidden"
              className="px-4 py-3 text-[10px] leading-tight sm:px-5 sm:py-3 sm:text-xs lg:hidden"
            >
              {headerCta.label}
            </Button>

            {/* lg+: full label + avatar row */}
            <Button
              href={headerCta.href}
              scroll={false}
              onClick={() => handleNavClick(headerCta.href)}
              variant="dark"
              size="sm"
              shellClassName="hidden lg:inline-flex"
              className="hidden lg:inline-flex"
            >
              {headerCta.label}
            </Button>

            <Button
              type="button"
              variant="icon"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden"
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
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          isActive={isNavActive}
          onNavClick={handleNavClick}
        />
      </div>
    </header>
  );
}
