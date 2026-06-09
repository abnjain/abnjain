"use client";

import Image from "next/image";

type HeroWireframeVizProps = {
  mapSrc: string;
  waveSrc: string;
};

/**
 * Figma hero margin (43:40): animated wave GIF (55:8) behind a clipped
 * wireframe map (55:11) with slow scan drift on the prototype.
 */
export function HeroWireframeViz({ mapSrc, waveSrc }: HeroWireframeVizProps) {
  return (
    <div className="hero-wireframe" aria-hidden>
      {/* 55:8 — GIF wave; unoptimized so frames animate in production */}
      <div className="hero-wireframe__map-viewport">
        <div className="hero-wireframe__map-motion">
          <Image
            src={mapSrc}
            alt=""
            width={385}
            height={321}
            className="hero-wireframe__map-image"
          />
        </div>
      </div>
    </div>
  );
}
