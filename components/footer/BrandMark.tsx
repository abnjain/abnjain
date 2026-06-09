"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function BrandMark() {
  const reduceMotion = useReducedMotion();

  return (
    <Link
      href="/"
      aria-label="abnjain — back to home"
      className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      <motion.div
        whileHover={reduceMotion ? {} : { scale: 1.07, rotate: -4 }}
        whileTap={reduceMotion ? {} : { scale: 0.95 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="h-11 w-11 overflow-hidden rounded-full ring-1 ring-text/15"
      >
        <Image
          src="/Images/favicon.png"
          alt="abnjain brand mark"
          width={44}
          height={44}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <span className="text-sm font-semibold tracking-tight text-muted transition-colors duration-200 group-hover:text-text">
        Abhinav Jain (abnjain)
      </span>
    </Link>
  );
}
