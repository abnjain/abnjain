"use client";

import Image from "next/image";
import { decorativeImageAlt } from "@/lib/seo/imageAlt";

type HeroDitherBackgroundProps = {
  src: string;
  alt: string;
};

/**
 * Figma hero (43:4 / 55:4): dither layer at 30% opacity inside overflow-hidden,
 * with slow drift animation on the prototype.
 */
export function HeroDitherBackground({ src, alt }: HeroDitherBackgroundProps) {
  return (
    <div className="hero-dither" aria-hidden>
      <div className="hero-dither__motion">
        <Image
          src={src}
          alt={alt || decorativeImageAlt("abnjain hero dither background")}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="hero-dither__image"
        />
      </div>
    </div>
  );
}
