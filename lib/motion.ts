import type { Transition, Variants } from "framer-motion";

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function fadeUpVariants(reduce: boolean | null): Variants {
  if (reduce) {
    return { hidden: {}, visible: {} };
  }
  return {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };
}

export function viewTransition(reduce: boolean | null, delay = 0): Transition {
  if (reduce) return { duration: 0 };
  return { duration: 0.5, delay, ease: EASE_PREMIUM };
}
