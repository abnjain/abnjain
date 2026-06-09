import { heroContent, parseMetricProgress } from "@/lib/data/hero";
import { cn } from "@/lib/cn";
import { HeroWireframeViz } from "@/components/sections/HeroWireframeViz";

function MetricBar({
  label,
  value,
  fillClass,
}: (typeof heroContent.metrics)[number]) {
  const progress = parseMetricProgress(value);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-bold uppercase tracking-label text-ink">
          {label}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-label text-ink">
          {value}
        </span>
      </div>
      <div
        className="h-4 border border-border bg-bg p-0.5"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100) / 100}
      >
        <div
          className={cn("h-full", fillClass)}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export function HeroStatusPanel() {
  const { metrics, bootLog, location, images } = heroContent;

  return (
    <aside className="flex flex-col bg-surface p-6 md:p-10 lg:col-span-4">
      <div className="flex flex-col gap-8">
        <div className="border-b border-ink pb-2">
          <h2 className="text-base text-ink">SYSTEM STATUS</h2>
        </div>

        <div className="flex flex-col gap-4">
          {metrics.map((metric) => (
            <MetricBar key={metric.label} {...metric} />
          ))}
        </div>

        <div className="border border-border bg-bg p-4">
          <div className="space-y-1 text-[13px] leading-relaxed">
            {bootLog.map((line) => (
              <p key={line.text} className="text-ink">
                <span className="text-accent">{">"}</span>
                {line.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-8 flex flex-1 flex-col gap-4 lg:min-h-[25rem]">
        <div className="flex w-full items-center justify-center lg:absolute lg:inset-x-0 lg:top-0 lg:bottom-[6.125rem]">
          <HeroWireframeViz
            mapSrc={images.wireframeMap}
            waveSrc={images.wireframeWave}
          />
        </div>

        <div className="relative z-20 flex shrink-0 items-center justify-between border border-border bg-ink p-4 text-on-dark md:p-6 lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
          <p className="text-base">{location.label}</p>
          <div className="text-right text-base">
            <p>{location.hq}</p>
            <p>{location.coords}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
