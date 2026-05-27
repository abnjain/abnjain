import Header from "@/components/layout/Header";
import Footer from "@/Components/Footer.js";
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
      <body className="bg-bg text-text antialiased">
        <ThemeProvider>
          <JsonLd schema={getWebsiteSchema()} />
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
