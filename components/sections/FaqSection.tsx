"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { faqData } from "@/lib/data/faq";

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const reduce = useReducedMotion();

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full py-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-12 px-4 md:flex-row md:gap-20">
        <div className="relative w-full pt-2 md:w-1/3">
          <div className="absolute left-0 top-0 flex items-center">
            <div className="h-2 w-2 rounded-full border-2 border-connector bg-surface" />
            <motion.div
              initial={reduce ? false : { width: 0 }}
              whileInView={reduce ? undefined : { width: 80 }}
              viewport={{ once: true }}
              transition={reduce ? undefined : { duration: 1, delay: 0.2 }}
              className="h-0.5 bg-connector"
            />
          </div>
          <motion.h2
            initial={reduce ? false : { opacity: 0, x: -10 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.5 }}
            className="mt-8 text-4xl font-light tracking-tight text-text"
          >
            FAQs — abnjain
          </motion.h2>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? undefined : { duration: 1 }}
          className="w-full rounded-2xl border border-text/10 bg-surface p-4 shadow-soft md:w-2/3 md:p-8"
        >
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
