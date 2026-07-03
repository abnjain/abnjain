import Image from "next/image";
import Link from "next/link";
import { Code2, Network, Terminal } from "lucide-react";
import {
  footerBottomLinks,
  footerBrand,
  footerIconLinks,
  systemLogLines,
} from "@/lib/data/footer";
import { decorativeImageAlt } from "@/lib/seo/imageAlt";

const iconMap = [Terminal, Code2, Network] as const;

/**
 * DetachedFooter — Figma "FOOTER TERMINAL" (node 43:185).
 * Always dark, fixed to viewport bottom; SiteFrame scrolls above it.
 */
export function DetachedFooter() {
  return (
    <footer
      className="always-dark relative z-0 w-full bg-bg p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6 lg:fixed lg:inset-x-0 lg:bottom-0 lg:p-10"
      aria-label="Site footer"
    >
      <div className="mx-auto flex w-full max-w-[1536px] flex-col">
        <div className="grid grid-cols-1 gap-4 border-b border-border-muted pb-6 sm:gap-6 sm:pb-10 lg:grid-cols-12 lg:gap-4 lg:pb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between gap-3 sm:gap-4 lg:flex-col lg:items-start lg:gap-4">
              <div className="min-w-0 flex-1 space-y-2">
                <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-accent sm:text-4xl lg:text-5xl">
                  {footerBrand.wordmark}
                </h2>
                <p className="max-w-sm text-[11px] font-bold uppercase leading-tight tracking-label text-on-dark opacity-50">
                  {footerBrand.tagline}
                </p>
              </div>

              <div className="flex shrink-0 gap-2 sm:gap-4 lg:pt-2">
                {footerIconLinks.map((link, index) => {
                  const Icon = iconMap[index];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex size-10 p-3 items-center justify-center border border-on-dark text-on-dark transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-12"
                    >
                      <Icon className="size-5" aria-hidden />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative min-h-52 overflow-hidden border border-border-muted bg-black sm:min-h-56 lg:col-span-8 lg:h-64">
            <div className="relative z-10 flex flex-col gap-1 p-10 sm:p-10">
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
              className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50 mix-blend-screen sm:inset-y-0 sm:left-auto sm:right-0 sm:w-1/2"
              aria-hidden
            >
              <div className="absolute bottom-0 right-0 h-[240%] w-full origin-bottom-right">
                <Image
                  src="/images/footer-terminal-wave.png"
                  alt={decorativeImageAlt("abnjain footer terminal wave")}
                  fill
                  unoptimized
                  className="object-cover object-right-bottom grayscale"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <p className="absolute right-6 top-5 z-20 text-xs font-extrabold uppercase tracking-label text-on-dark">
              SYSTEM_LOG_LIVE
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 opacity-50 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-8">
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
