import type { ReactNode } from "react";

type SiteFrameProps = {
  children: ReactNode;
};

/**
 * SiteFrame
 *
 * Wraps all primary page content (Header + page body).
 * Flat brutalist shell above the always-dark DetachedFooter.
 *
 * Server component — no client state or interactions.
 */
export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="relative z-10 min-h-screen border border-border bg-bg">
      {children}
    </div>
  );
}
