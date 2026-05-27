import type { ReactNode } from "react";

type SiteFrameProps = {
  children: ReactNode;
};

/**
 * SiteFrame
 *
 * Wraps all primary page content (Header + page body).
 * Creates the "curved shell" visual above the always-dark DetachedFooter:
 *   - bg-surface  → slightly elevated surface vs the body/footer bg
 *   - rounded-b   → curved bottom corners that reveal the dark footer stage
 *   - border-x / border-b → premium card edge
 *   - z-10 + shadow → sits visually above the footer
 *
 * Server component — no client state or interactions.
 */
export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="relative z-10 min-h-screen rounded-b-[2rem] border-b border-x border-text/[0.07] bg-surface shadow-2xl">
      {children}
    </div>
  );
}
