"use client";

import Image from "next/image";

type HeroDitherBackgroundProps = {
  src: string;
};

/**
 * Figma hero (43:4 / 55:4): dither layer at 30% opacity inside overflow-hidden,
 * with slow drift animation on the prototype.
 */
export function HeroDitherBackground({ src }: HeroDitherBackgroundProps) {
  return (
    <div className="hero-dither" aria-hidden>
      <div className="hero-dither__motion">
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="hero-dither__image"
        />
      </div>
    </div>
  );
}
