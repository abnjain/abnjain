"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { homeProjectsData, projectTabs } from "@/lib/data/homeProjects";
import type { ProjectTabId } from "@/types/home";

export function ProjectsShowcaseSection() {
  const [activeTab, setActiveTab] = useState<ProjectTabId>("selected");
  const reduce = useReducedMotion();
  const content = homeProjectsData[activeTab];

  return (
    <section id="work" className="relative flex w-full flex-col items-center pb-40 pt-20">
      <div className="absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center">
        <motion.div
          initial={reduce ? false : { height: 0 }}
          whileInView={reduce ? undefined : { height: 100 }}
          viewport={{ once: true }}
          transition={reduce ? undefined : { duration: 1, ease: "anticipate" }}
          className="w-0.5 bg-connector"
        />
        <div className="mt-1 h-2 w-2 rounded-full border-2 border-connector bg-surface" />
      </div>

      <div className="relative z-10 mx-auto mt-40 w-full max-w-5xl px-4 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? undefined : { duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-light tracking-tight text-text sm:text-5xl md:text-6xl">
            <span className="text-muted">Crafting</span> digital
            <br />
            solutions <span className="text-muted">for</span>
          </h2>
        </motion.div>

        <div className="relative z-20 mx-auto flex h-full max-w-3xl items-end justify-center px-2 pt-4">
          <div className="relative flex w-full items-end justify-center md:justify-between">
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative whitespace-nowrap px-3 py-2.5 text-xs transition-all duration-300 sm:px-6 sm:py-3 md:px-8 md:text-base ${
                    isActive
                      ? "z-10 pb-3.5 font-medium text-accent sm:pb-4"
                      : "text-muted hover:bg-text/5 hover:text-text"
                  }`}
                  style={{
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    backgroundColor: isActive ? "var(--color-surface)" : "rgb(229 229 229 / 0.12)",
                  }}
                >
                  {isActive && (
                    <>
                      <div
                        className="absolute bottom-0 -left-3 h-3 w-3 bg-surface"
                        style={{
                          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                          borderBottomRightRadius: "12px",
                        }}
                        aria-hidden
                      />
                      <div
                        className="absolute bottom-0 -right-3 h-3 w-3 bg-surface"
                        style={{
                          clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                          borderBottomLeftRadius: "12px",
                        }}
                        aria-hidden
                      />
                    </>
                  )}
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabOutline"
                      className="absolute bottom-2 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 min-h-[500px] w-full rounded-t-3xl bg-surface p-6 shadow-soft sm:p-12 md:p-20"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={reduce ? undefined : { duration: 0.4 }}
              className="relative z-10"
            >
              <p className="mx-auto mb-16 max-w-2xl text-center text-sm leading-relaxed tracking-wide text-muted sm:text-base">
                {content.description}
              </p>

              <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-bg md:aspect-[2/1]">
                <motion.div
                  initial={reduce ? false : { scale: 1.05 }}
                  animate={reduce ? undefined : { scale: 1 }}
                  transition={reduce ? undefined : { duration: 0.8, ease: "easeOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={content.image}
                    alt={content.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 1024px"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
