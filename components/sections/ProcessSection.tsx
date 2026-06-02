"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    num: 1,
    title: "Discover the foundation",
    body: "Getting started is easy: run a deep dive into the constraints. We establish the scalable architecture early on—data structures and workflows perfectly aligned.",
  },
  {
    num: 2,
    title: "Design the system",
    body: "Laying out the wireframes and component methodology. The interface is crafted to maintain sheer elegance while serving strict usability standards.",
  },
  {
    num: 3,
    title: "Execute with precision",
    body: "The final output is polished engineering. Robust code, beautiful motion, and flawless performance across all environments seamlessly delivered.",
  },
] as const;

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const layer1Y = useTransform(scrollYProgress, [0.1, 0.35], [0, -120]);
  const layer1Opacity = useTransform(scrollYProgress, [0.1, 0.35], [1, 0]);
  const layer2Y = useTransform(scrollYProgress, [0.45, 0.7], [0, -120]);
  const layer2Opacity = useTransform(scrollYProgress, [0.45, 0.7], [1, 0]);
  const text1Op = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.1, 0.25], [0, -40]);
  const text2Op = useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.6], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.2, 0.35, 0.45, 0.6], [40, 0, 0, -40]);
  const text3Op = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const text3Y = useTransform(scrollYProgress, [0.55, 0.7], [40, 0]);

  const textStyles = reduce
    ? [{ opacity: 1, y: 0 }, { opacity: 1, y: 0 }, { opacity: 1, y: 0 }]
    : [
        { opacity: text1Op, y: text1Y },
        { opacity: text2Op, y: text2Y },
        { opacity: text3Op, y: text3Y },
      ];

  return (
    <section
      ref={containerRef}
      className={`relative w-full bg-transparent pb-32 ${reduce ? "py-24" : "h-[300vh]"}`}
    >
      <div
        className={`w-full ${reduce ? "relative" : "sticky top-0 h-screen"} flex items-center justify-center overflow-hidden`}
      >
        <div className="pointer-events-none absolute inset-0 mx-auto hidden w-full max-w-5xl md:block">
          <div className="absolute left-1/2 top-[3rem] h-[3rem] w-0.5 bg-connector" />
          <div className="absolute left-1/2 top-[3rem] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-connector bg-surface" />
          <div className="absolute left-[15%] right-[50%] top-[6rem] h-[3rem] rounded-tl-2xl border-l-2 border-t-2 border-connector" />
          <div className="absolute bottom-0 left-[15%] top-[9rem] w-0.5 bg-gradient-to-b from-connector via-connector to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-between px-4 pt-20 md:flex-row md:px-0 md:pt-0">
          <div className="absolute left-6 top-20 md:hidden">
            <h2 className="mb-8 text-3xl font-normal tracking-tight text-text">How it works</h2>
            <div className="absolute bottom-[-200px] left-4 top-16 w-0.5 bg-gradient-to-b from-connector to-transparent" />
          </div>

          <h2 className="absolute left-1/2 top-[10%] hidden -translate-x-1/2 text-4xl font-normal tracking-tight text-text md:block">
            How it works
          </h2>

          <div className="relative mt-32 flex h-auto w-full flex-col justify-center pl-10 md:mt-0 md:h-[300px] md:w-[40%] md:pl-[15%]">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                style={textStyles[i]}
                className={`flex flex-col justify-center ${i > 0 && !reduce ? "pointer-events-none absolute inset-0" : i > 0 ? "mt-12 md:absolute md:inset-0 md:mt-0" : ""}`}
              >
                <div className="absolute left-[-2.35rem] flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[13px] font-medium text-white shadow-glow md:left-[-1.15rem]">
                  {step.num}
                </div>
                <h3 className="mb-2 text-[20px] font-normal tracking-tight text-text md:text-[22px]">
                  {step.title}
                </h3>
                <p className="pr-4 text-[13px] font-light leading-relaxed text-muted md:text-[14px]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-20 flex h-[400px] w-full items-center justify-center md:mt-0 md:w-[50%]">
            <div className="relative mt-10 h-[280px] w-[280px] md:h-[320px] md:w-[320px]">
              <div className="absolute inset-x-0 bottom-0 aspect-square">
                <div
                  className="-ml-[5%] -mt-[5%] flex h-[110%] w-[110%] items-center justify-center rounded-2xl border border-text/10 bg-surface shadow-soft"
                  style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
                >
                  <div className="relative flex h-[85%] w-[85%] flex-col justify-between overflow-hidden rounded-xl border border-text/5 bg-bg p-4">
                    <div className="mt-4 h-px w-full bg-text/10" />
                    <div className="h-px w-full bg-text/10" />
                    <div className="h-px w-full bg-text/10" />
                    <div className="absolute right-8 top-0 h-full w-px bg-text/10" />
                  </div>
                </div>
              </div>

              <motion.div
                style={reduce ? undefined : { y: layer2Y, opacity: layer2Opacity }}
                className="absolute inset-x-0 bottom-[30px] aspect-square md:bottom-[40px]"
              >
                <div
                  className="-ml-[5%] -mt-[5%] flex h-[110%] w-[110%] flex-col gap-4 rounded-2xl border border-accent-muted/30 bg-surface/70 p-5 backdrop-blur-md"
                  style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
                >
                  <div className="h-10 w-full rounded-lg border border-text/10 bg-surface/60" />
                  <div className="h-4 w-[40%] rounded border border-text/10 bg-surface/60" />
                  <div className="mt-2 flex-1 rounded-lg border border-text/10 bg-surface/60" />
                </div>
              </motion.div>

              <motion.div
                style={reduce ? undefined : { y: layer1Y, opacity: layer1Opacity }}
                className="absolute inset-x-0 bottom-[60px] aspect-square md:bottom-[80px]"
              >
                <div
                  className="-ml-[5%] -mt-[5%] flex h-[110%] w-[110%] flex-col overflow-hidden rounded-2xl border border-accent/20 bg-accent-muted/20 shadow-glow backdrop-blur-xl"
                  style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
                >
                  <div className="flex h-[12%] min-h-[30px] items-center gap-2 border-b border-accent/20 bg-surface/30 px-4 backdrop-blur-sm">
                    <div className="h-2 w-2 rounded-full bg-accent/40" />
                    <div className="h-2 w-2 rounded-full bg-accent/40" />
                    <div className="h-2 w-2 rounded-full bg-accent/40" />
                  </div>
                  <div className="relative flex flex-1 items-center justify-center p-6">
                    <div className="relative flex aspect-[1.4] w-[85%] flex-col items-center justify-center rounded-xl border border-text/10 bg-surface shadow-sm">
                      <div className="absolute left-3 top-3 flex w-[20px] flex-wrap gap-1" aria-hidden>
                        <div className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                        <div className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                        <div className="h-1.5 w-1.5 rounded-full bg-accent/30" />
                      </div>
                      <div className="mb-1 text-[9px] font-medium uppercase tracking-widest text-accent">
                        Total Time
                      </div>
                      <div className="font-mono text-3xl font-light tracking-tighter text-text">
                        04<span className="text-xl">m</span> 35<span className="text-xl">s</span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
                        <div className="h-1.5 w-3 rounded-full bg-accent/30" />
                        <div className="h-1.5 w-10 rounded-full bg-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
