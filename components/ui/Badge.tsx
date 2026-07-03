import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex border border-border px-2 py-1 font-mono text-[9px] font-bold uppercase leading-[13px] text-ink md:px-1.5 md:py-0.5 md:text-[8px] md:leading-[11px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
