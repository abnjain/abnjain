"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ProjectSlideshowProps = {
  /** Array of screenshot paths to cycle through. */
  screenshots: string[];
  /** Alt prefix for each image. */
  alt: string;
  /** Project description shown in a bar at the bottom of the image. */
  description: string;
  /** Called when the slideshow should close. */
  onClose: () => void;
};

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

export function ProjectSlideshow({ screenshots, alt, description, onClose }: ProjectSlideshowProps) {
  const [[index, dir], setPage] = useState([0, 0]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = () => {
    setPage(([i]) => [(i + 1) % screenshots.length, 1]);
  };

  const goPrev = () => {
    setPage(([i]) => [(i - 1 + screenshots.length) % screenshots.length, -1]);
  };

  const clearHoverTimer = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  const startHoverTimer = () => {
    clearHoverTimer();
    hoverTimerRef.current = setTimeout(goNext, 2000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(goNext, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenshots.length]);

  useEffect(() => {
    return () => clearHoverTimer();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      onClick={onClose}
      onMouseLeave={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close slideshow"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/70 text-white transition-colors hover:bg-neutral-900/90 md:right-6 md:top-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
          <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="flex h-full w-full items-center justify-center p-4 md:p-8 lg:p-12"
        onMouseEnter={startHoverTimer}
        onMouseLeave={clearHoverTimer}
      >
        <div className="relative flex h-full max-h-[75vh] w-full max-w-5xl items-center justify-center">
          <AnimatePresence mode="popLayout" custom={dir}>
            <motion.div
              key={screenshots[index]}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screenshots[index]}
                alt={`${alt} — screenshot ${index + 1} of ${screenshots.length}`}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full rounded-2xl border border-white/10 object-contain shadow-2xl"
              />

              {/* Click zones overlay — left 30% prev, right 70% next */}
              <div
                className="absolute inset-y-0 left-0 z-20 w-[30%]"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-hidden
              />
              <div
                className="absolute inset-y-0 right-0 z-20 w-[70%]"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-hidden
              />
            </motion.div>
          </AnimatePresence>

          {/* Description overlay — glass card, static, doesn't slide with image */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 p-4 md:p-6">
            <div className="mx-auto max-w-2xl rounded-xl border border-white/30 bg-black/10 px-5 py-3.5 backdrop-blur-2xl md:px-6 md:py-4">
              <p className="font-display text-xs font-bold uppercase tracking-wider mix-blend-difference text-white md:text-sm">
                {alt}
              </p>
              <p className="font-display mt-1 text-sm leading-relaxed mix-blend-difference text-white md:text-base">
                {description}
              </p>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-neutral-900/70 p-2 text-white transition-colors hover:bg-neutral-900/90 md:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-neutral-900/70 p-2 text-white transition-colors hover:bg-neutral-900/90 md:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Stepped indicator dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-6">
            {screenshots.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); setPage([i, i > index ? 1 : -1]); }}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
