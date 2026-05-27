"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import {
  DEFAULT_THEME,
  THEME_OPTIONS,
  THEME_STORAGE_KEY,
} from "@/lib/theme";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={DEFAULT_THEME}
      storageKey={THEME_STORAGE_KEY}
      themes={[...THEME_OPTIONS]}
      enableSystem
      enableColorScheme
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
