import { heroContent } from "@/lib/data/hero";
import { cn } from "@/lib/cn";

type HeroLocationBarProps = {
  className?: string;
};

export function HeroLocationBar({ className }: HeroLocationBarProps) {
  const { location } = heroContent;

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between border border-border bg-ink p-4 text-on-dark md:p-6",
        className,
      )}
    >
      <p className="text-base">{location.label}</p>
      <div className="text-right text-base">
        <p>{location.hq}</p>
        <p>{location.coords}</p>
      </div>
    </div>
  );
}
