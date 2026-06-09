import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type RowContainerProps = {
  period: string;
  title: string;
  subtitle: string;
  details?: string[];
  trailing?: ReactNode;
  showArrow?: boolean;
  bordered?: boolean;
  className?: string;
};

export function RowContainer({
  period,
  title,
  subtitle,
  details = [],
  trailing,
  showArrow = true,
  bordered = false,
  className,
}: RowContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:gap-6 md:px-10",
        bordered && "border-t border-border",
        className,
      )}
    >
      <p className="shrink-0 text-[11px] font-bold uppercase tracking-label text-ink sm:w-32">
        {period}
      </p>

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-base text-ink/70">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4 sm:shrink-0">
        {(details.length > 0 || trailing) && (
          <div className="text-right text-base text-ink">
            {details.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {trailing}
          </div>
        )}
        {showArrow ? (
          <ArrowRight className="size-6 shrink-0 text-ink" aria-hidden />
        ) : null}
      </div>
    </div>
  );
}
