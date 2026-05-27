"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * GlowWordmark — "abnjain" with a cursor-tracked radial accent glow.
 *
 * All pointer tracking is via imperative DOM refs + requestAnimationFrame:
 * zero React state changes → zero re-renders on mouse move.
 *
 * Two stacked text layers share identical sizing/font properties:
 *   1. Outline layer  — text-stroke, transparent fill (always visible)
 *   2. Glow layer     — radial-gradient background-clip:text (visible on hover)
 *
 * CSS in globals.css drives the glow technique via CSS custom props --x and --y.
 */
export function GlowWordmark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    // Throttle to one RAF frame — no React re-renders
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handlePointerMove]);

  const textClasses =
    "block w-full text-center font-black leading-none tracking-[0.06em] text-[clamp(2.5rem,_9vw,_10rem)]";

  return (
    <div
      ref={containerRef}
      className="wordmark-container relative w-full select-none cursor-default"
      aria-label="abnjain"
      role="img"
    >
      {/* Layer 1: outlined stroke — always visible */}
      <span className={`${textClasses} wordmark-outline`} aria-hidden>
        abnjain
      </span>

      {/* Layer 2: radial glow that follows the cursor — revealed on hover */}
      <span
        className={`${textClasses} wordmark-glow-layer absolute inset-0`}
        aria-hidden
      >
        abnjain
      </span>
    </div>
  );
}
