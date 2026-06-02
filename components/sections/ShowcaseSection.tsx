"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { showcaseSlides } from "@/lib/data/showcaseSlides";

export function ShowcaseSection() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % showcaseSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reduce]);

  const slide = showcaseSlides[index];

  return (
    <section className="relative flex w-full flex-col items-center justify-start overflow-hidden pb-10">
      <div className="relative mb-16 flex flex-col items-center">
        <motion.div
          initial={reduce ? false : { height: 0 }}
          whileInView={reduce ? undefined : { height: 160 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={reduce ? undefined : { duration: 1.2, ease: "anticipate" }}
          className="w-0.5 bg-connector"
        />
        <div className="mt-1 h-2 w-2 rounded-full border-2 border-connector bg-surface" />
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 15 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={reduce ? undefined : { duration: 0.8 }}
        className="mb-16 px-4 text-center"
      >
        <h2 className="text-2xl font-normal tracking-tight text-text sm:text-3xl md:text-4xl">
          The next benchmark will be
          <br />
          <span className="relative mt-2 inline-block">
            <span className="relative z-0 text-text/30 mix-blend-multiply">ordinary</span>
            <svg
              className="absolute left-0 top-1/2 z-10 h-8 w-[110%] -translate-x-[5%] -translate-y-1/2 overflow-visible text-text"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path
                initial={reduce ? false : { pathLength: 0 }}
                whileInView={reduce ? undefined : { pathLength: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={reduce ? undefined : { duration: 0.7, delay: 0.3, ease: "easeInOut" }}
                d="M2,13 Q 15,4 25,12 T 50,11 T 75,13 T 98,6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          beautifully human.
        </h2>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduce ? undefined : { duration: 1, delay: 0.2 }}
        className="relative mx-auto w-full max-w-5xl px-4 sm:px-8"
      >
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-muted/30 blur-[100px] mix-blend-multiply"
          aria-hidden
        />

        <div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl bg-text/5 sm:aspect-[16/9] md:aspect-[21/9]"
          style={{
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={reduce ? false : { opacity: 0, scale: 1.03 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.8 } }}
              transition={reduce ? undefined : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-12 sm:pb-24">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10, scale: 0.95 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={reduce ? undefined : { delay: 0.6, duration: 1 }}
              className="flex w-full max-w-[260px] flex-col items-center rounded-2xl border border-text/10 bg-surface/40 p-5 shadow-soft backdrop-blur-2xl"
            >
              <div className="mb-6 flex w-full items-center justify-between">
                <div className="grid grid-cols-2 gap-1.5" aria-hidden>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-text/60" />
                  ))}
                </div>
                <div className="text-right text-[9px] font-medium uppercase tracking-wider text-muted">
                  Selected Work
                  <br />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={slide.id}
                      initial={reduce ? false : { opacity: 0, y: -2 }}
                      animate={reduce ? undefined : { opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: 2 }}
                      className="mt-0.5 block font-semibold text-text"
                    >
                      {slide.title}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-text/10">
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-text/5 bg-surface/10 shadow-inner">
                  <span className="mb-0.5 text-[9px] uppercase tracking-widest text-muted">Status</span>
                  <span className="text-lg font-medium leading-none tracking-tight text-text">Live</span>
                  <div className="mt-2 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[8px] font-medium tracking-wide text-accent">
                    Active
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
