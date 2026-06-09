import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ModalProps = {
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;
};

/**
 * Brutalist bordered panel (Figma node 43:155).
 * Use inside an overlay wrapper when a full-screen dialog is needed.
 */
export function Modal({ title, description, children, className }: ModalProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between border border-border bg-bg p-8 shadow-brutal",
        className,
      )}
    >
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ink">
          {title}
        </h2>
        {description ? (
          <p className="max-w-sm text-base leading-relaxed text-muted">{description}</p>
        ) : null}
      </div>
      {children ? <div className="pt-12">{children}</div> : null}
    </div>
  );
}
