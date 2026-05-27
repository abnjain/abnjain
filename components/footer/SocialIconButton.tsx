"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";

type SocialIconButtonProps = {
  href: string;
  label: string;
  icon: IconType;
  external?: boolean;
};

export function SocialIconButton({
  href,
  label,
  icon: Icon,
  external = true,
}: SocialIconButtonProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={reduceMotion ? {} : { y: -4, scale: 1.1 }}
      whileTap={reduceMotion ? {} : { scale: 0.93 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className="group flex h-11 w-11 items-center justify-center rounded-full bg-text/5 text-muted transition-colors duration-200 hover:border-accent/40 hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      <Icon className="h-[18px] w-[18px]" aria-hidden />
    </motion.a>
  );
}
