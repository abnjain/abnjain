import { HeroDitherBackground } from "@/components/sections/HeroDitherBackground";
import { HeroLocationBar } from "@/components/sections/HeroLocationBar";
import { HeroStatusPanel } from "@/components/sections/HeroStatusPanel";
import { heroContent } from "@/lib/data/hero";

export function HeroSection() {
  const { status, titleLine1, titleLine2, description, images } = heroContent;

  return (
    <section className="border-b border-border" aria-label="Hero">
      <div className="grid lg:grid-cols-12 lg:min-h-[51rem]">
        <div className="relative flex min-h-[28rem] flex-col justify-between overflow-hidden border-b border-border lg:col-span-8 lg:min-h-[51rem] lg:border-b-0 lg:border-r">
          <HeroDitherBackground src={images.dither} alt={images.ditherAlt} />

          <div className="relative z-10 flex flex-1 flex-col justify-center md:justify-start px-6 py-8 md:px-10 md:py-24 lg:px-20 lg:py-32">
            <div className="mb-6 flex items-center gap-3">
              <span className="size-3 shrink-0 bg-accent" aria-hidden />
              <p className="text-base font-extrabold text-alert">{status}</p>
            </div>

            <h1 className="font-display text-5xl font-bold uppercase leading-[0.85] tracking-tight text-ink sm:text-7xl md:text-8xl xl:text-[11.25rem]">
              <span className="block">{titleLine1}</span>
              <span className="block text-accent">{titleLine2}</span>
            </h1>

            <div className="mt-8 max-w-lg space-y-0">
              {description.map((line) => (
                <p
                  key={line}
                  className="text-base font-extrabold leading-6 text-muted"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* <Image
            src={images.character}
            alt={images.characterAlt}
            width={468}
            height={430}
            priority
            className="pointer-events-none absolute bottom-8 right-4 z-10 hidden w-[min(42%,28rem)] object-contain md:block lg:right-10"
            aria-hidden
          /> */}
        </div>

        <HeroStatusPanel />
      </div>

      <HeroLocationBar className="border-x-0 border-b-0 lg:hidden" />
    </section>
  );
}
