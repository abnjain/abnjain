"use client";

import Image from "next/image";
import { decorativeImageAlt } from "@/lib/seo/imageAlt";

type HeroWireframeVizProps = {
  mapSrc: string;
  mapAlt: string;
};

/**
 * Figma hero margin (43:40): clipped wireframe map (55:11) with slow scan drift.
 */
export function HeroWireframeViz({
  mapSrc,
  mapAlt,
}: HeroWireframeVizProps) {
  return (
    <div className="hero-wireframe" aria-hidden>
      <div className="hero-wireframe__map-viewport">
        <div className="hero-wireframe__map-motion">
          <Image
            src={mapSrc}
            alt={mapAlt || decorativeImageAlt("abnjain hero wireframe map")}
            width={385}
            height={321}
            className="hero-wireframe__map-image"
          />
        </div>
      </div>
    </div>
  );
}
