export const THEME_STORAGE_KEY = "theme";

export const THEME_OPTIONS = ["light", "dark", "system"] as const;

export type ThemeOption = (typeof THEME_OPTIONS)[number];

export const DEFAULT_THEME: ThemeOption = "light";

export function isValidTheme(value: string | null | undefined): value is ThemeOption {
  return THEME_OPTIONS.includes(value as ThemeOption);
}

/** Read saved theme from localStorage; returns default when missing or invalid. */
export function getStoredTheme(): ThemeOption {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isValidTheme(stored)) {
      return stored;
    }
    if (stored !== null) {
      localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME);
    }
  } catch {
    // Private mode or blocked storage — fall back to system
  }

  return DEFAULT_THEME;
}

/** Persist theme preference to localStorage. */
export function setStoredTheme(theme: ThemeOption): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore quota / private browsing errors
  }
}
