import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { ProjectSlideshow } from "@/components/ui/ProjectSlideshow";
import { cn } from "@/lib/cn";

export type ProjectAssetCardProps = {
  assetId: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: string[];
  href?: string;
  bordered?: boolean;
  screenshots?: string[];
};

export function ProjectAssetCard({
  assetId,
  title,
  description,
  image,
  imageAlt,
  stack,
  href,
  bordered = false,
  screenshots,
}: ProjectAssetCardProps) {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (!screenshots || screenshots.length === 0) return;
    timerRef.current = setTimeout(() => {
      setShowSlideshow(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowSlideshow(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const content = (
    <>
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-surface-muted md:aspect-auto md:flex-1 md:min-h-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover blur-sm saturate-0 transition-[filter] duration-300 group-hover:blur-none group-hover:saturate-100"
          loading="lazy"
          decoding="async"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-white mix-blend-saturation transition-opacity duration-300 group-hover:opacity-0"
          aria-hidden
        />
      </div>

      <div className="flex flex-col gap-1 p-3 md:p-4 lg:p-5 md:h-[252px] lg:h-[268px]">
        <p className="text-[9px] font-bold uppercase tracking-label text-accent md:text-[10px]">
          {assetId}
        </p>
        <h3 className="font-display text-xs font-bold uppercase leading-4 text-ink md:text-sm md:leading-5 lg:text-base lg:leading-6">
          {title}
        </h3>
        <p className="font-mono text-[11px] leading-[18px] text-muted md:text-xs md:leading-5 lg:text-sm lg:leading-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-2 md:gap-1.5 md:pt-2 lg:gap-2 lg:pt-3">
          {stack.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </>
  );

  const className = cn(
    "flex flex-1 flex-col bg-bg",
    bordered && "border-t border-border md:border-l md:border-t-0",
  );

  if (href) {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="contents"
      >
        <Link href={href} className={cn(className, "group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent")}>
          {content}
        </Link>
        <AnimatePresence>
          {showSlideshow && screenshots && screenshots.length > 0 && (
            <ProjectSlideshow screenshots={screenshots} alt={title} description={description} onClose={() => setShowSlideshow(false)} />
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="contents"
    >
      <article className={cn(className, "group")}>{content}</article>
      <AnimatePresence>
        {showSlideshow && screenshots && screenshots.length > 0 && (
          <ProjectSlideshow screenshots={screenshots} alt={title} description={description} onClose={() => setShowSlideshow(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
