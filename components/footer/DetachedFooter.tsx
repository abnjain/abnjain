"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import { GlowWordmark } from "@/components/footer/GlowWordmark";
import { BrandMark } from "@/components/footer/BrandMark";
import { SocialLinks } from "@/components/footer/SocialLinks";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

/**
 * DetachedFooter
 *
 * Always dark — fixed to the bottom of the viewport (z-0).
 * The SiteFrame (z-10) scrolls over it; a spacer in layout.js lets the
 * user scroll until the footer is fully revealed.
 *
 * position:fixed means whileInView fires immediately, so we use a
 * simple mount-fade (initial → animate) instead of scroll-based variants.
 */
export function DetachedFooter() {
  const reduceMotion = useReducedMotion();

  const mount = (delay = 0) => {
    if (reduceMotion) return {};
    const transition: Transition = { duration: 0.55, delay, ease: EASE_PREMIUM };
    return { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition };
  };

  return (
    <footer
      className="always-dark fixed inset-x-0 bottom-0 z-0 w-full bg-bg"
      aria-label="Site footer"
    >
      {/* Top border separating footer from the SiteFrame above */}
      <div className="absolute inset-x-0 top-0 h-px bg-text/10" aria-hidden />

      <div className="relative mx-auto flex h-80 w-full justify-end flex-col px-6 pb-5 pt-5 md:px-12 md:pb-6 md:pt-6 lg:px-20 xl:pt-48">
        {/* Tagline */}
        <motion.p
          {...mount(0)}
          className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-muted md:mb-4"
        >
          Designing systems.&nbsp; Building products.&nbsp; Scaling ideas.
        </motion.p>

        {/* ── Wordmark ────────────────────────────────────────────────── */}
        <motion.div {...mount(0.08)} className="w-full">
          <GlowWordmark />
        </motion.div>

        {/* ── Bottom bar ──────────────────────────────────────────────── */}
        <motion.div
          {...mount(0.16)}
          className="flex flex-col items-center gap-3 pt-3 md:flex-row md:justify-between md:gap-0"
        >
          {/* Left: brand + copyright */}
          <div className="flex items-center justify-center gap-3 md:flex-col md:items-center md:gap-1">
            <BrandMark />
            <p className="text-[10px] text-muted">
              &copy; {new Date().getFullYear()} Abhinav Jain. Let&apos;s Build Something Amazing for the future.
            </p>
          </div>

          {/* Right: socials */}
          <SocialLinks />
        </motion.div>
      </div>
    </footer>
  );
}
