"use client";

import { motion, useReducedMotion } from "framer-motion";
import { personProfile } from "@/lib/data/profile";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden pb-16 pt-20">
      <div className="relative z-10 mx-auto mb-20 flex max-w-5xl flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="text-4xl font-normal leading-[1.05] tracking-[-0.03em] text-text sm:text-5xl md:text-6xl"
          initial={reduce ? false : { opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={reduce ? undefined : { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Crafting elegant
          <br />
          digital experiences.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-muted sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.8, delay: 0.5 }}
        >
          {personProfile.summaryOneLine}
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <motion.div
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={reduce ? undefined : { scale: 1, opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.5, delay: 1 }}
          className="relative z-10 h-2 w-2 rounded-full border-2 border-connector bg-surface"
        >
          {!reduce && (
            <span
              className="absolute inset-0 animate-ping rounded-full bg-accent/20"
              style={{ transform: "scale(2.5)" }}
              aria-hidden
            />
          )}
        </motion.div>

        <motion.div
          initial={reduce ? false : { height: 0 }}
          animate={reduce ? undefined : { height: "10vh" }}
          transition={reduce ? undefined : { duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-1 w-0.5 bg-connector"
        />
      </div>
    </section>
  );
}
