import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        header: "var(--color-header)",
        ink: "var(--color-ink)",
        accent: "var(--color-accent)",
        "accent-muted": "var(--color-accent-muted)",
        alert: "var(--color-alert)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        "on-dark": "var(--color-on-dark)",
        border: "var(--color-border)",
        "border-muted": "var(--color-border-muted)",
        connector: "var(--color-connector)",
      },
      boxShadow: {
        brutal: "var(--shadow-brutal)",
        glow: "var(--shadow-glow)",
        soft: "var(--shadow-soft)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        none: "0",
      },
      letterSpacing: {
        label: "0.1em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utils: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};

export default config;
