import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type StatCardVariant = "outline" | "accent";

type StatCardProps = {
  value: ReactNode;
  label: string;
  variant?: StatCardVariant;
  className?: string;
};

const variantClasses: Record<StatCardVariant, string> = {
  outline: "border border-border bg-bg text-ink",
  accent: "border border-border bg-accent text-on-dark",
};

export function StatCard({
  value,
  label,
  variant = "outline",
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-12",
        variantClasses[variant],
        className,
      )}
    >
      <p className="font-display text-5xl font-bold tracking-[-0.02em]">{value}</p>
      <p className="mt-1 text-center text-[11px] font-bold uppercase tracking-label">
        {label}
      </p>
    </div>
  );
}
