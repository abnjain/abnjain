import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
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
}: ProjectAssetCardProps) {
  const content = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-surface-muted">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover blur-sm saturate-0 transition-[filter] duration-300 group-hover:blur-none group-hover:saturate-100"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-white mix-blend-saturation transition-opacity duration-300 group-hover:opacity-0"
          aria-hidden
        />
      </div>

      <div className="flex flex-col gap-2 p-6 md:p-8">
        <p className="text-[11px] font-bold uppercase tracking-label text-accent">
          {assetId}
        </p>
        <h3 className="font-display text-base font-bold uppercase leading-6 text-ink">
          {title}
        </h3>
        <p className="pt-2 font-mono text-base leading-6 text-muted">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-4">
          {stack.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </>
  );

  const className = cn(
    "flex flex-col bg-bg",
    bordered && "border-t border-border md:border-l md:border-t-0",
  );

  if (href) {
    return (
      <Link href={href} className={cn(className, "group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent")}>
        {content}
      </Link>
    );
  }

  return <article className={cn(className, "group")}>{content}</article>;
}
