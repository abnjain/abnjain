"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import {
  DEFAULT_THEME,
  getStoredTheme,
  setStoredTheme,
  type ThemeOption,
} from "@/lib/theme";

const themes = [
  { value: "light" as const, label: "Light", icon: HiOutlineSun },
  { value: "dark" as const, label: "Dark", icon: HiOutlineMoon },
  { value: "system" as const, label: "System", icon: HiOutlineComputerDesktop },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  /** Restore last saved preference from localStorage (defaults to system). */
  useEffect(() => {
    if (!mounted) return;
    setTheme(getStoredTheme());
  }, [mounted, setTheme]);

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
  const ActiveIcon =
    activeTheme === "system"
      ? HiOutlineComputerDesktop
      : resolvedTheme === "light"
        ? HiOutlineSun
        : HiOutlineMoon;

  if (!mounted) {
    return (
      <div
        className="h-10 w-10 rounded-full border border-black/10 bg-surface/80 dark:border-white/10"
        aria-hidden
      />
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Change theme"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-surface/80 text-text shadow-soft backdrop-blur-md transition-all duration-200 hover:bg-accent-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 dark:border-white/12 dark:hover:bg-white/10"
      >
        <ActiveIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-105" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="listbox"
            aria-label="Theme options"
            className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[100px] overflow-hidden rounded-2xl border border-black/10 bg-surface shadow-[0_16px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:border-white/12 dark:shadow-[0_16px_48px_rgba(0,0,0,0.65)]"
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
                  className={`flex w-full items-center gap-2.5 rounded-xl px-6 py-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                    isActive
                      ? "bg-accent/20 text-accent"
                      : "text-muted hover:bg-accent-muted/50 hover:text-text dark:hover:bg-white/8"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${isActive ? "text-accent" : "text-muted"}`}
                    aria-hidden
                  />
                  <span>{label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
