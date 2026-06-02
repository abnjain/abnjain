"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const current = testimonials[index];

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-bg py-32">
      <div className="absolute left-1/2 top-0 z-0 flex -translate-x-1/2 flex-col items-center">
        <motion.div
          initial={reduce ? false : { height: 0 }}
          whileInView={reduce ? undefined : { height: 120 }}
          viewport={{ once: true }}
          transition={reduce ? undefined : { duration: 1.2, ease: "anticipate" }}
          className="w-0.5 bg-gradient-to-b from-transparent via-connector to-accent"
        />
        <div className="relative mt-1 flex items-center justify-center">
          {!reduce && (
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-4 w-4 rounded-full bg-accent/30"
              aria-hidden
            />
          )}
          <div className="z-10 h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-20 w-full max-w-4xl px-6">
        <div
          className="pointer-events-none absolute -left-10 top-[-4rem] select-none font-serif text-[10rem] leading-none text-text opacity-[0.03] md:top-[-6rem] md:text-[15rem]"
          aria-hidden
        >
          &ldquo;
        </div>

        <div className="relative flex min-h-[300px] flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={reduce ? false : { opacity: 0, scale: 0.98, filter: "blur(8px)" }}
              animate={reduce ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={reduce ? undefined : { opacity: 0, scale: 1.02, filter: "blur(8px)" }}
              transition={reduce ? undefined : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 md:gap-12"
            >
              <p className="text-2xl font-light leading-[1.3] tracking-tight text-text sm:text-3xl md:ml-12 md:text-5xl">
                {current.quote}
              </p>
              <div className="flex items-center gap-4 md:ml-12">
                <div className="flex flex-col">
                  <span className="text-sm font-medium uppercase tracking-wide text-text">
                    {current.author}
                  </span>
                  <span className="mt-0.5 text-xs text-muted">{current.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center gap-3 md:ml-12">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative flex h-1 cursor-pointer items-center"
              style={{ width: index === i ? "4rem" : "1.5rem" }}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={index === i}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  index === i ? "bg-text/15" : "bg-text/15 group-hover:bg-text/25"
                }`}
              />
              {index === i && !reduce && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute bottom-0 left-0 top-0 rounded-full bg-accent"
                />
              )}
              {index === i && reduce && (
                <div className="absolute bottom-0 left-0 top-0 w-full rounded-full bg-accent" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
