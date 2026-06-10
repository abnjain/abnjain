"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export type NavSection = "home" | "about" | "projects" | "contact";

function readHash(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash.toLowerCase();
}

export function sectionFromLocation(
  pathname: string,
  hash: string,
): NavSection {
  if (hash === "#contact" || pathname.toLowerCase().startsWith("/contact")) {
    return "contact";
  }

  if (pathname.toLowerCase().startsWith("/projects")) {
    return "projects";
  }

  if (pathname.toLowerCase().startsWith("/about")) {
    return "about";
  }

  return "home";
}

export function useActiveNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [pendingSection, setPendingSection] = useState<NavSection | null>(
    null,
  );

  useEffect(() => {
    const sync = () => setHash(readHash());
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  const resolvedSection = useMemo(
    () => sectionFromLocation(pathname, hash),
    [pathname, hash],
  );

  const activeSection = pendingSection ?? resolvedSection;

  useEffect(() => {
    if (pendingSection !== null && pendingSection === resolvedSection) {
      setPendingSection(null);
    }
  }, [pendingSection, resolvedSection]);

  const isNavActive = useCallback(
    (href: string) => {
      if (href === "/" || href === "") {
        return activeSection === "home";
      }

      if (href.includes("#contact") || href.toLowerCase().includes("/contact")) {
        return activeSection === "contact";
      }

      if (href.toLowerCase().includes("/projects") || href.includes("#work")) {
        return activeSection === "projects";
      }

      if (href.toLowerCase().includes("/about")) {
        return activeSection === "about";
      }

      return false;
    },
    [activeSection],
  );

  const setNavSection = useCallback((section: NavSection) => {
    setPendingSection(section);
    if (section === "contact") {
      setHash("#contact");
    } else if (section === "home") {
      setHash("");
    } else {
      setHash("");
    }
  }, []);

  return { activeSection, isNavActive, setNavSection };
}
