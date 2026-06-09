import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { SectionBand } from "@/components/ui/SectionBand";
import { StatCard } from "@/components/ui/StatCard";
import { ctaDataStrip } from "@/lib/data/ctaStrip";
import { headerCta } from "@/lib/data/site";

/** Figma CTA / DATA STRIP (43:154) — contact panel + stat grid. */
export function CtaDataStripSection() {
  const { bandTitle, titleLine1, titleLine2, description, ctaLabel, stats } =
    ctaDataStrip;

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-b border-border"
      aria-label="Contact and metrics"
    >
      <SectionBand variant="dark" title={bandTitle} />

      <div className="px-6 py-10 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-10">
        <Modal
          className="min-h-[22.5rem]"
          title={
            <>
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
            </>
          }
          description={description}
        >
          <Button
            variant="primary"
            size="lg"
            href={headerCta.href}
            className="w-full px-6 py-8 sm:px-8 sm:py-9"
          >
            {ctaLabel}
          </Button>
        </Modal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              variant={stat.variant}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
