import Image from "next/image";
import Link from "next/link";
import { Code2, Network, Terminal } from "lucide-react";
import {
  footerBottomLinks,
  footerBrand,
  footerIconLinks,
  systemLogLines,
} from "@/lib/data/footer";

const iconMap = [Terminal, Code2, Network] as const;

/**
 * DetachedFooter — Figma "FOOTER TERMINAL" (node 43:185).
 * Always dark, fixed to viewport bottom; SiteFrame scrolls above it.
 */
export function DetachedFooter() {
  return (
    <footer
      className="always-dark fixed inset-x-0 bottom-0 z-0 w-full bg-bg p-6 md:p-10"
      aria-label="Site footer"
    >
      <div className="mx-auto flex w-full max-w-[1536px] flex-col">
        <div className="grid grid-cols-1 gap-6 border-b border-border-muted pb-10 lg:grid-cols-12 lg:gap-4 lg:pb-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-accent sm:text-5xl">
              {footerBrand.wordmark}
            </h2>
            <p className="max-w-sm text-[11px] font-bold uppercase leading-tight tracking-label text-on-dark opacity-50">
              {footerBrand.tagline}
            </p>
            <div className="flex gap-4 pt-2">
              {footerIconLinks.map((link, index) => {
                const Icon = iconMap[index];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex size-12 items-center justify-center border p-4 border-on-dark text-on-dark transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Icon className="size-5" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="relative h-64 overflow-hidden border border-border-muted bg-black lg:col-span-8">
            <div className="relative z-10 flex h-full flex-col gap-1 p-6">
              {systemLogLines.map((line) => (
                <p
                  key={line.text}
                  className={`text-[13px] leading-[1.5] ${
                    line.variant === "accent" ? "text-accent" : "text-on-dark"
                  }`}
                >
                  {line.text}
                </p>
              ))}
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-50 mix-blend-screen"
              aria-hidden
            >
              <Image
                src="/images/footer-terminal-wave.png"
                alt=""
                fill
                className="object-cover object-center grayscale"
                sizes="(max-width: 1024px) 50vw, 400px"
              />
            </div>

            <p className="absolute right-6 top-5 z-20 text-xs font-extrabold uppercase tracking-label text-on-dark">
              SYSTEM_LOG_LIVE
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 opacity-50 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-bold uppercase tracking-label text-on-dark">
            {footerBrand.copyright}
          </p>
          <nav aria-label="Footer links">
            <ul className="flex flex-wrap gap-6 sm:gap-8">
              {footerBottomLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold uppercase tracking-label text-on-dark transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[11px] font-bold uppercase tracking-label text-on-dark transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
