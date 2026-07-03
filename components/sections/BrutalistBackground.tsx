"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

type AnimObject = {
  animate: TargetAndTransition;
};

// Muted brutalist palette
const PALETTE = {
  charcoal: "#2A2927",
  red: "#B91C24",
  blue: "#96A9D1",
  yellow: "#E9C884",
  pink: "#DEA9B2",
  grey: "#BAB6B0",
  green: "#B0D1BB",
  bg: "#F4F3EF", // warm-white canvas
};

/**
 * Renders a dense matrix of dots/squares using an SVG pattern.
 * This keeps the DOM count to exactly 1 node regardless of how many dots are drawn.
 */
const DotMatrixSVG = ({
  width,
  height,
  color,
  dotSize = 3,
  spacing = 8,
  className = "",
  style = {},
}: {
  width: number | string;
  height: number | string;
  color: string;
  dotSize?: number;
  spacing?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  // Unique pattern ID based on properties so multiple patterns can coexist safely
  const patternId = useMemo(
    () => `dot-${spacing}-${dotSize}-${color.replace("#", "")}`,
    [spacing, dotSize, color]
  );

  return (
    <svg
      width={width}
      height={height}
      className={`mix-blend-multiply ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width={dotSize} height={dotSize} fill={color} />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export function BrutalistBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -0.5 ... 0.5
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Avoid hydration mismatch for client-side window/motion logic
  if (!isMounted) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ zIndex: 0, backgroundColor: PALETTE.bg }}
        aria-hidden="true"
      />
    );
  }

  // --- Animation Variants ---

  // Slow organic drifting
  const driftAnim = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [0, -15, 0, 10, 0],
          x: [0, 8, -8, 5, 0],
          transition: {
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
  } as AnimObject;

  const driftReverseAnim = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [0, 15, 0, -10, 0],
          x: [0, -10, 5, -5, 0],
          transition: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
  } as AnimObject;

  // Brutalist jump cut / glitch
  const glitchAnim = {
    animate: prefersReducedMotion
      ? {}
      : {
          opacity: [0.3, 0.3, 0.7, 0.1, 0.3, 0.3],
          x: [0, 0, -4, 4, 0, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            times: [0, 0.4, 0.42, 0.45, 0.48, 1], // sudden jumps
            ease: "linear",
          },
        },
  } as AnimObject;

  const flickerAnim = {
    animate: prefersReducedMotion
      ? {}
      : {
          opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
        },
  } as AnimObject;

  // Smooth vertical sliding columns
  const slideInAnim = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: ["-5%", "2%", "-3%", "-5%"],
          transition: {
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
  } as AnimObject;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        zIndex: 0,
        // Layer 1: soft warm-white base canvas
        backgroundColor: PALETTE.bg,
      }}
      aria-hidden="true"
    >
      {/* Mouse parallax wrapper */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          x: prefersReducedMotion ? 0 : mousePos.x * -45,
          y: prefersReducedMotion ? 0 : mousePos.y * -45,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
      >
        {/* =================================================================
            Layer 2 & 4: Halftone clusters and rectangular color blocks 
            ================================================================= */}

        {/* 1. TOP-RIGHT FORMATION */}
        <motion.div
          className="absolute top-8 right-8 md:top-16 md:right-24"
          {...driftAnim}
        >
          <div className="relative">
            {/* Color Block */}
            <div
              className="absolute -top-6 -left-12 w-40 h-64 mix-blend-multiply opacity-20"
              style={{ backgroundColor: PALETTE.blue }}
            />
            {/* Dot Matrix Fragment */}
            <DotMatrixSVG
              width={200}
              height={140}
              color={PALETTE.charcoal}
              spacing={10}
              dotSize={4}
              className="opacity-40"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-24 right-40 hidden md:block"
          {...glitchAnim}
          style={{ animationDelay: "1s" }}
        >
          <DotMatrixSVG
            width={100}
            height={60}
            color={PALETTE.red}
            spacing={8}
            dotSize={2}
            className="opacity-50"
          />
        </motion.div>

        {/* 2. RIGHT-CENTER: VERTICAL COLUMNS & STRIPS */}
        <motion.div
          className="absolute top-[25%] right-[8%] md:right-[15%] w-16 md:w-32 h-[50vh] flex gap-4 mix-blend-multiply opacity-40"
          {...slideInAnim}
        >
          <div
            className="w-[40%] h-full"
            style={{ backgroundColor: PALETTE.yellow }}
          />
          <div
            className="w-[60%] h-[75%] mt-12"
            style={{ backgroundColor: PALETTE.pink }}
          />
        </motion.div>

        {/* Occasional vertical strips near center-right */}
        <div className="absolute top-[10%] left-[65%] md:left-[70%] h-[80vh] w-[1px] bg-black/15" />
        <div className="absolute top-[30%] left-[68%] md:left-[72%] h-[40vh] w-[2px] bg-black/10" />

        <motion.div
          className="absolute top-[45%] right-[5%] hidden md:block"
          {...glitchAnim}
        >
          <DotMatrixSVG
            width={40}
            height={200}
            color={PALETTE.charcoal}
            spacing={6}
            dotSize={3}
            className="opacity-50"
          />
        </motion.div>

        {/* 3. BOTTOM-RIGHT DENSITY */}
        <motion.div
          className="absolute -bottom-16 -right-16 md:bottom-12 md:right-24 origin-bottom-right"
          {...driftReverseAnim}
        >
          <div className="relative">
            <div
              className="absolute -bottom-8 -right-8 w-80 h-48 mix-blend-multiply opacity-25"
              style={{ backgroundColor: PALETTE.grey }}
            />
            <div
              className="absolute bottom-12 right-16 w-32 h-32 mix-blend-multiply opacity-40"
              style={{ backgroundColor: PALETTE.charcoal }}
            />
            <DotMatrixSVG
              width={280}
              height={180}
              color={PALETTE.green}
              spacing={12}
              dotSize={4}
              className="opacity-60"
            />
          </div>
        </motion.div>

        {/* 4. BOTTOM-LEFT FRAGMENTS */}
        <motion.div
          className="absolute bottom-16 left-8 md:bottom-24 md:left-16"
          {...flickerAnim}
        >
          <div className="flex gap-6 items-end mix-blend-multiply">
            <div
              className="w-20 h-56 opacity-30 hidden md:block"
              style={{ backgroundColor: PALETTE.blue }}
            />
            <div className="mb-4">
              <DotMatrixSVG
                width={140}
                height={100}
                color={PALETTE.charcoal}
                spacing={8}
                dotSize={3}
                className="opacity-40"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* =================================================================
          Layer 5: Small system labels / tiny code-like text
          ================================================================= */}
      <div className="absolute inset-0 font-mono text-[10px] font-bold tracking-[0.2em] text-black/40">
        <motion.div
          className="absolute top-12 left-12"
          animate={glitchAnim.animate}
        >
          SYS.INIT // 0x001
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-[30%] hidden md:block"
          animate={flickerAnim.animate}
        >
          DATA_GRID_OK
        </motion.div>
        <motion.div
          className="absolute top-[40%] right-10 rotate-90 origin-right"
          animate={glitchAnim.animate}
        >
          LATENCY: 12ms
        </motion.div>
        <motion.div
          className="absolute bottom-12 left-12"
          animate={flickerAnim.animate}
        >
          PROCESS_09
        </motion.div>
      </div>

      {/* =================================================================
          Layer 6: Subtle grain/noise overlay
          ================================================================= */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}

export default BrutalistBackground;