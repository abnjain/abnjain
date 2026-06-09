import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { DetachedFooter } from "@/components/footer/DetachedFooter";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { fontDisplay, fontMono } from "@/lib/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { generatePageMetadata, getWebsiteSchema } from "@/lib/seo";
import { JsonLdGraph } from "@/components/seo/JsonLdGraph";

export const metadata = {
  ...generatePageMetadata({}),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/abhinavjain-favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/abhinavjain-favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/abhinavjain.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en-IN"
      className={`${fontDisplay.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg font-mono text-text antialiased">
        <ThemeProvider>
          <JsonLdGraph schema={getWebsiteSchema()} />
          <SiteFrame>
            <Header />
            {children}
          </SiteFrame>
          <div className="h-[30rem] md:h-[28rem]" aria-hidden />
          <DetachedFooter />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
