"use client";

import { useMemo, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";

// ─── Static noise SVG (inline) ──────────────────────────────────────────

const NOISE_DATA = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E")`;

// ─── Color palette for brutalist look on light bg ────────────────────────

const COLORS = {
  accent: "#b91c24",
  ink: "#1c1b1b",
  muted: "#444748",
  border: "#000000",
} as const;

// ─── Helpers ────────────────────────────────────────────────────────────

function mulberry32(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rng: () => number, arr: readonly T[]): T {
  return arr[Math.floor(rng() * arr.length)];
}

/** Snap an element abruptly — no smooth interpolation */
const SNAP = { type: "spring", stiffness: 900, damping: 30, mass: 2 } as const;

/** Hold state, then snap — for glitch/strobe timing */
const HOLD = { duration: 0.12, ease: "linear" } as const;

// ─── Generators ─────────────────────────────────────────────────────────

function genBars(w: number, h: number, density: number, seed: number) {
  const rng = mulberry32(seed + 1);
  const count = Math.floor((8 + rng() * 8) * density);
  return Array.from({ length: count }, () => {
    const size = 40 + rng() * 160;
    return {
      x: rng() * w * 1.3 - w * 0.15,
      y: rng() * h * 1.3 - h * 0.15,
      w: size * (0.4 + rng() * 1.0),
      h: size * (0.1 + rng() * 0.5),
      color: pick(rng, [COLORS.accent, COLORS.ink, "rgba(185,28,36,0.7)", "rgba(28,27,27,0.6)", COLORS.border] as const),
      o: 0.3 + rng() * 0.5,
      snapX1: (rng() - 0.5) * 200,
      snapX2: (rng() - 0.5) * 180,
      snapY1: (rng() - 0.5) * 140,
      snapY2: (rng() - 0.5) * 120,
      hold: 2 + rng() * 4,
    };
  });
}

function genDots(w: number, h: number, density: number, seed: number) {
  const rng = mulberry32(seed + 2);
  const spacing = Math.floor((32 + rng() * 24) / density);
  const dots = [];
  for (let y = -20; y < h + 20; y += spacing) {
    for (let x = -20; x < w + 20; x += spacing) {
      dots.push({
        x: x + (rng() - 0.5) * spacing * 0.3,
        y: y + (rng() - 0.5) * spacing * 0.3,
        size: 2 + rng() * 3,
        o: 0.45 + rng() * 0.5,
        group: Math.floor(y / spacing) % 7,
        color: rng() > 0.65 ? COLORS.accent : COLORS.muted,
      });
    }
  }
  return dots;
}

function genLabels(w: number, h: number, density: number, seed: number) {
  const rng = mulberry32(seed + 3);
  const pool = [
    "SYS://BOOT", "CORE::01", "//MONITOR", "⎔ ACTIVE", "◆ 0x1A7F",
    "▣ EXEC", "▼ SCAN", "■ LOCK", "● CORE", "⏣ NODE",
    "PORT:8080", "dev:~$", "//GRID", "⟐ 0xBEEF", "SIGMA",
    "▲ INIT", "⎔ LOOP", "∅ NULL", "0xDEF", "CORE_0",
  ];
  const count = Math.floor((8 + rng() * 10) * density);
  return Array.from({ length: count }, () => ({
    x: rng() * w * 1.1 - w * 0.05,
    y: rng() * h * 1.1 - h * 0.05,
    text: pick(rng, pool),
    fs: 10 + rng() * 16,
    o: 0.45 + rng() * 0.5,
  }));
}

function genCorners(w: number, h: number) {
  const margin = 24;
  const s = 24;
  return [
    { x: margin, y: margin, side: "tl" as const, s },
    { x: w - margin, y: margin, side: "tr" as const, s },
    { x: margin, y: h - margin, side: "bl" as const, s },
    { x: w - margin, y: h - margin, side: "br" as const, s },
  ];
}

// ─── Sub-components ─────────────────────────────────────────────────────

/**
 * Bars — snap between positions with spring stiffness (no smooth drift).
 */
function BarsLayer({ bars, reduce }: { bars: ReturnType<typeof genBars>; reduce: boolean }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <>
      {bars.map((b, i) => {
        // deterministic pseudo-random mutation based on tick
        const phase = (i * 7 + tick) % 5;
        const snapX = phase < 2 ? b.snapX1 : phase < 4 ? b.snapX2 : 0;
        const snapY = phase < 2 ? b.snapY1 : b.snapY2;
        const opacity = phase === 4 ? b.o * 0.3 : b.o * (phase === 0 ? 1.3 : 1);
        const scaleXVal = phase === 3 ? 0.15 : phase === 1 ? 1.2 : 1;
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: b.x, top: b.y, width: b.w, height: b.h,
              backgroundColor: b.color,
            }}
            animate={{
              x: snapX,
              y: snapY,
              opacity: reduce ? b.o : opacity,
              scaleX: reduce ? 1 : scaleXVal,
            }}
            transition={SNAP}
          />
        );
      })}
    </>
  );
}

/**
 * Dots — blink on/off in row-groups (mechanical, not organic fade).
 */
function DotsLayer({ dots, reduce }: { dots: ReturnType<typeof genDots>; reduce: boolean }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <>
      {dots.map((d, i) => {
        const blink = (d.group + tick) % 4 === 0;
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: d.x, top: d.y, width: d.size, height: d.size,
              backgroundColor: d.color,
              borderRadius: 0, // square dots = more brutalist
            }}
            animate={{
              opacity: reduce ? d.o : blink ? d.o * 1.8 : d.o * 0.12,
              scale: reduce ? 1 : blink ? 1.6 : 0.4,
            }}
            transition={HOLD}
          />
        );
      })}
    </>
  );
}

/**
 * Scan lines — multiple horizontal lines that teleport instantly.
 */
function ScanLines({ h, reduce }: { h: number; reduce: boolean }) {
  const pos1 = useMotionValue(20 + Math.random() * (h - 40));
  const pos2 = useMotionValue(40 + Math.random() * (h - 80));

  const jump = useCallback(() => {
    pos1.set(20 + Math.random() * (h - 40));
    pos2.set(40 + Math.random() * (h - 80));
  }, [h, pos1, pos2]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(jump, 2500 + Math.random() * 3000);
    jump();
    return () => clearInterval(id);
  }, [reduce, jump]);

  if (reduce) return null;

  return (
    <>
      {/* Main scan line */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none z-10"
        style={{ top: pos1, y: "-50%" }}
      >
        <div
          className="h-[2px] w-full"
          style={{
            backgroundColor: COLORS.accent,
            boxShadow: `0 0 6px 2px ${COLORS.accent}, 0 0 20px 5px rgba(185,28,36,0.3)`,
          }}
        />
      </motion.div>
      {/* Secondary scan line */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none z-10"
        style={{ top: pos2, y: "-50%" }}
      >
        <div
          className="h-[1px] w-3/4"
          style={{
            backgroundColor: COLORS.muted,
            boxShadow: `0 0 4px 1px ${COLORS.muted}`,
          }}
        />
      </motion.div>
    </>
  );
}

/**
 * Labels — snap between visible and near-hidden.
 */
function LabelsLayer({ labels, reduce }: { labels: ReturnType<typeof genLabels>; reduce: boolean }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <>
      {labels.map((l, i) => {
        const visible = (i + tick) % 3 !== 0;
        const glitched = (i * 3 + tick) % 7 === 0;
        return (
          <motion.span
            key={i}
            className="absolute font-mono font-bold pointer-events-none select-none whitespace-nowrap"
            style={{
              left: l.x, top: l.y, fontSize: l.fs,
              color: COLORS.ink,
              letterSpacing: "0.04em",
            }}
            animate={{
              opacity: reduce ? l.o : visible ? l.o : 0.06,
              x: reduce ? 0 : glitched ? 3 : 0,
              scaleX: reduce ? 1 : glitched ? -1 : 1,
            }}
            transition={HOLD}
          >
            {l.text}
          </motion.span>
        );
      })}
    </>
  );
}

/**
 * Corner brackets — SVG L-shapes, flash on/off.
 */
function CornersLayer({ corners, reduce }: { corners: ReturnType<typeof genCorners>; reduce: boolean }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setTick((t) => t + 1), 1600);
    return () => clearInterval(id);
  }, [reduce]);

  const s = corners[0]?.s ?? 24;
  const strokeW = 3;

  return (
    <>
      {corners.map((c, i) => {
        const visible = (i + tick) % 2 === 0;
        const opacity = reduce ? 0.8 : visible ? 0.9 : 0.05;

        let pathD = "";
        switch (c.side) {
          case "tl": pathD = `M0,${s} V0 H${s}`; break;
          case "tr": pathD = `M0,0 H${s} V${s}`; break;
          case "bl": pathD = `M${s},0 V${s} H0`; break;
          case "br": pathD = `M${s},${s} V0 H0`; break;
        }

        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{ left: c.x, top: c.y, width: s, height: s }}
            animate={{ opacity }}
            transition={HOLD}
          >
            <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
              <path d={pathD} stroke={COLORS.accent} strokeWidth={strokeW} />
              <circle cx={s / 2} cy={s / 2} r={2} fill={COLORS.accent} />
            </svg>
          </motion.div>
        );
      })}
    </>
  );
}

// ─── Main component ─────────────────────────────────────────────────────

const DENSITY = { desktop: 1, tablet: 0.6, mobile: 0.35 } as const;

export function BrutalistBackground() {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ w: 1600, h: 900 });
  const [density, setDensity] = useState<keyof typeof DENSITY>("desktop");
  const [reduce, setReduce] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    function m() {
      const w = window.innerWidth, h = window.innerHeight;
      setSize({ w, h });
      setDensity(w < 640 ? "mobile" : w < 1024 ? "tablet" : "desktop");
    }
    m();
    window.addEventListener("resize", m, { passive: true });
    return () => window.removeEventListener("resize", m);
  }, []);

  const d = DENSITY[density];

  const bars = useMemo(() => genBars(size.w, size.h, d, 42), [size.w, size.h, d]);
  const dots = useMemo(() => genDots(size.w, size.h, d, 99), [size.w, size.h, d]);
  const labels = useMemo(() => genLabels(size.w, size.h, d, 77), [size.w, size.h, d]);
  const corners = useMemo(() => genCorners(size.w, size.h), [size.w, size.h]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      {/* Layer 1: Solid bars */}
      {mounted && <BarsLayer bars={bars} reduce={reduce} />}

      {/* Layer 2: Halftone dots */}
      <div className="absolute inset-0" style={{ opacity: 0.75 }}>
        {mounted && <DotsLayer dots={dots} reduce={reduce} />}
      </div>

      {/* Layer 3: System labels */}
      <div className="absolute inset-0">
        {mounted && <LabelsLayer labels={labels} reduce={reduce} />}
      </div>

      {/* Layer 4: Corner brackets */}
      <div className="absolute inset-0">
        {mounted && <CornersLayer corners={corners} reduce={reduce} />}
      </div>

      {/* Layer 5: Scan lines */}
      {mounted && <ScanLines h={size.h} reduce={reduce} />}

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: NOISE_DATA,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          opacity: 0.04,
          mixBlendMode: "multiply",
        }}
        aria-hidden
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.15) 100%)",
        }}
        aria-hidden
      />
    </div>
  );
}
