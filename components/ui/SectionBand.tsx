"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type SectionBandBaseProps = {
  title: string;
  className?: string;
};

type SectionBandDarkProps = SectionBandBaseProps & {
  variant?: "dark";
  badge?: string;
};

type SectionBandLightProps = SectionBandBaseProps & {
  variant: "light";
  /** When true, renders prev/next icon controls (Figma 43:92). Default: off. */
  showNav?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  prevLabel?: string;
  nextLabel?: string;
  trailing?: ReactNode;
};

export type SectionBandProps = SectionBandDarkProps | SectionBandLightProps;

const bandLayout =
  "flex items-center justify-between border-b border-border px-6 py-4 md:px-10";

/** Figma section headers — dark ink band (43:49) or light band with nav (43:92). */
export function SectionBand(props: SectionBandProps) {
  const { title, className } = props;

  if (props.variant === "light") {
    const {
      showNav = false,
      onPrev,
      onNext,
      prevLabel = "Previous",
      nextLabel = "Next",
      trailing,
    } = props;

    const trailingContent =
      trailing !== undefined
        ? trailing
        : showNav
          ? (
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="icon"
                  aria-label={prevLabel}
                  onClick={onPrev}
                  disabled={!onPrev}
                >
                  <ArrowLeft className="size-5" aria-hidden />
                </Button>
                <Button
                  type="button"
                  variant="icon"
                  aria-label={nextLabel}
                  onClick={onNext}
                  disabled={!onNext}
                >
                  <ArrowRight className="size-5" aria-hidden />
                </Button>
              </div>
            )
          : null;

    return (
      <div className={cn(bandLayout, "bg-bg", className)}>
        <h2 className="font-display text-xs font-bold text-ink md:text-sm lg:text-base">
          {title}
        </h2>
        {trailingContent}
      </div>
    );
  }

  const { badge } = props;

  return (
    <div className={cn(bandLayout, "bg-ink", className)}>
      <h2 className="font-display text-base font-bold text-on-dark">{title}</h2>
      {badge ? (
        <p className="font-mono text-[11px] font-bold uppercase tracking-label text-on-dark">
          {badge}
        </p>
      ) : null}
    </div>
  );
}
