export const THEME_STORAGE_KEY = "theme";
export const THEME_DEFAULT_MIGRATION_KEY = "theme-default-light-v1";

export const THEME_OPTIONS = ["light", "dark", "system"] as const;

export type ThemeOption = (typeof THEME_OPTIONS)[number];

export const DEFAULT_THEME: ThemeOption = "light";

/** Runs before next-themes hydration to migrate legacy system default to light. */
export const THEME_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)},m=${JSON.stringify(THEME_DEFAULT_MIGRATION_KEY)},d=${JSON.stringify(DEFAULT_THEME)},s=localStorage.getItem(k);if(!localStorage.getItem(m)&&s==="system"){localStorage.setItem(k,d);localStorage.setItem(m,"1");}}catch(e){}})();`;

export function isValidTheme(value: string | null | undefined): value is ThemeOption {
  return THEME_OPTIONS.includes(value as ThemeOption);
}

/** Read saved theme from localStorage; returns default when missing or invalid. */
export function getStoredTheme(): ThemeOption {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const migrated = localStorage.getItem(THEME_DEFAULT_MIGRATION_KEY);
    const stored = localStorage.getItem(THEME_STORAGE_KEY);

    if (!migrated && stored === "system") {
      localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME);
      localStorage.setItem(THEME_DEFAULT_MIGRATION_KEY, "1");
      return DEFAULT_THEME;
    }

    if (stored === null) {
      localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME);
      localStorage.setItem(THEME_DEFAULT_MIGRATION_KEY, "1");
      return DEFAULT_THEME;
    }
    if (isValidTheme(stored)) {
      return stored;
    }
    localStorage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME);
  } catch {
    // Private mode or blocked storage — fall back to default
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
