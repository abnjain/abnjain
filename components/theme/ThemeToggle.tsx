"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { Button } from "@/components/ui/Button";
import {
  DEFAULT_THEME,
  getStoredTheme,
  setStoredTheme,
  type ThemeOption,
} from "@/lib/theme";
import { cn } from "@/lib/cn";

const themes = [
  { value: "light" as const, label: "Light", icon: HiOutlineSun },
  { value: "dark" as const, label: "Dark", icon: HiOutlineMoon },
  { value: "system" as const, label: "System", icon: HiOutlineComputerDesktop },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTheme(getStoredTheme());
  }, [setTheme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectTheme = (value: ThemeOption) => {
    setStoredTheme(value);
    setTheme(value);
    setOpen(false);
  };

  const activeTheme = (theme ?? DEFAULT_THEME) as ThemeOption;
  const resolved = resolvedTheme ?? DEFAULT_THEME;

  const ActiveIcon =
    activeTheme === "system"
      ? HiOutlineComputerDesktop
      : resolved === "light"
        ? HiOutlineSun
        : HiOutlineMoon;

  return (
    <div ref={containerRef} className="relative">
      <Button
        type="button"
        variant="icon"
        aria-label="Change theme"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <ActiveIcon className="size-[18px]" aria-hidden />
      </Button>

      {open ? (
        <div
          role="listbox"
          aria-label="Theme options"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[9rem] overflow-hidden border border-border bg-bg shadow-brutal"
        >
          {themes.map(({ value, label, icon: Icon }) => {
            const isActive = activeTheme === value;

            return (
              <button
                key={value}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => selectTheme(value)}
                className={cn(
                  "flex w-full items-center gap-2.5 px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-surface hover:text-ink",
                )}
              >
                <Icon
                  className={cn("size-4 shrink-0", isActive ? "text-accent" : "text-muted")}
                  aria-hidden
                />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
