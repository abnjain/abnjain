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
        "inline-flex border border-border px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase leading-[15px] text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
