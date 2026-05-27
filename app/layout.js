import Header from "@/components/layout/Header";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { DetachedFooter } from "@/components/footer/DetachedFooter";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { generatePageMetadata, JsonLd, getWebsiteSchema } from "@/Components/SEO";

/**
 * Root layout metadata — fallback for all pages.
 * Each page overrides title/description/keywords via its own `export const metadata`.
 */
export const metadata = {
  ...generatePageMetadata({}),
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/abhinavjain-favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/abhinavjain-favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple:    [{ url: '/abhinavjain.png', sizes: '192x192', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      {/*
        body bg-bg: the theme-reactive background that shows at the very
        bottom behind the always-dark footer (visible only at the SiteFrame's
        rounded bottom corners — intentional depth separation).
      */}
      <body className="bg-bg text-text antialiased">
        <ThemeProvider>
          <JsonLd schema={getWebsiteSchema()} />

          {/* Main content shell — curved bottom, bordered, sits above the footer */}
          <SiteFrame>
            <Header />
            {children}
          </SiteFrame>

          {/*
            Spacer — matches the fixed footer's height so the page is
            scrollable far enough that the footer is fully revealed.
            h-72 (288px) on mobile | md:h-56 (224px) on desktop.
          */}
          <div className="h-32 md:h-56 lg:h-72" aria-hidden />

          {/* Fixed footer stage — always dark, always at bottom (z-0) */}
          <DetachedFooter />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
