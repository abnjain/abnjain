import localFont from "next/font/local";

export const fontDisplay = localFont({
  src: "../assets/fonts/space-grotesk-700.woff2",
  weight: "700",
  variable: "--font-display",
  display: "swap",
});

export const fontMono = localFont({
  src: [
    {
      path: "../assets/fonts/jetbrains-mono-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/jetbrains-mono-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/jetbrains-mono-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});
