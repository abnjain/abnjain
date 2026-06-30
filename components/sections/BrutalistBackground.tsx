"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * BrutalistBackground
 *
 * Animated brutalist halftone "pixel cluster" background. Renders entirely
 * on a single <canvas>: a cheap fractal-noise field is sampled at low
 * resolution per color layer and upscaled without smoothing, which produces
 * the blocky pixel/halftone look while keeping per-frame cost tiny and
 * independent of screen size (no large DOM trees, no per-cell DOM nodes).
 *
 * Drop-in replacement for a static background image — usage is unchanged:
 *
 *   <section className="relative min-h-screen overflow-hidden">
 *     <BrutalistBackground />
 *     <div className="relative z-10">
 *       {existing content, untouched}
 *     </div>
 *   </section>
 *
 * - pointer-events-none, absolute inset-0, z-index 0 — sits behind content.
 * - Respects prefers-reduced-motion: renders one static frame, no rAF loop,
 *   and reacts live if the OS setting changes mid-session.
 * - Subtle cursor parallax, lerped, skipped entirely under reduced motion.
 * - Layer count / sample density / DPR / fps scale down on small screens.
 */

type Tier = "mobile" | "tablet" | "desktop";

type LayerConfig = {
  /** base RGB color for this cluster layer */
  rgb: [number, number, number];
  /** noise frequency — lower = larger, slower blobs */
  freq: number;
  /** how fast this layer's noise field evolves over time */
  speed: number;
  /** drift direction in noise-space — gives each layer its own travel path */
  driftX: number;
  driftY: number;
  /** alpha band center (0-1) — where in the noise field this color "appears" */
  threshold: number;
  /** softness of the alpha edge around threshold */
  softness: number;
  /** peak opacity for this layer */
  maxAlpha: number;
  /** per-layer parallax depth (0 = none, 1 = most movement) */
  depth: number;
  /** unique noise seed so layers don't line up with each other */
  seed: number;
};

const PALETTE = {
  charcoal: [42, 41, 39] as [number, number, number],
  red: [185, 28, 36] as [number, number, number],
  blue: [150, 169, 209] as [number, number, number],
  yellow: [233, 200, 132] as [number, number, number],
  grey: [186, 182, 176] as [number, number, number],
  green: [176, 209, 187] as [number, number, number],
  pink: [222, 169, 178] as [number, number, number],
};

function buildLayers(tier: Tier): LayerConfig[] {
  const all: LayerConfig[] = [
    { rgb: PALETTE.grey, freq: 1.1, speed: 0.035, driftX: 0.2, driftY: 0.6, threshold: 0.55, softness: 0.22, maxAlpha: 0.5, depth: 0.15, seed: 59 },
    { rgb: PALETTE.charcoal, freq: 1.6, speed: 0.05, driftX: 0.6, driftY: -0.3, threshold: 0.62, softness: 0.16, maxAlpha: 0.5, depth: 0.2, seed: 11 },
    { rgb: PALETTE.blue, freq: 1.3, speed: 0.04, driftX: 0.3, driftY: 0.4, threshold: 0.58, softness: 0.2, maxAlpha: 0.45, depth: 0.5, seed: 83 },
    { rgb: PALETTE.yellow, freq: 1.9, speed: 0.06, driftX: -0.5, driftY: -0.2, threshold: 0.66, softness: 0.18, maxAlpha: 0.4, depth: 0.6, seed: 23 },
    { rgb: PALETTE.red, freq: 2.1, speed: 0.07, driftX: -0.4, driftY: 0.5, threshold: 0.7, softness: 0.14, maxAlpha: 0.4, depth: 0.35, seed: 47 },
    { rgb: PALETTE.pink, freq: 2.0, speed: 0.065, driftX: -0.3, driftY: -0.5, threshold: 0.68, softness: 0.15, maxAlpha: 0.32, depth: 0.55, seed: 31 },
    { rgb: PALETTE.green, freq: 2.4, speed: 0.08, driftX: 0.5, driftY: 0.3, threshold: 0.74, softness: 0.13, maxAlpha: 0.32, depth: 0.7, seed: 97 },
  ];

  if (tier === "mobile") return all.slice(0, 4);
  if (tier === "tablet") return all.slice(0, 5);
  return all;
}

// ---- lightweight fractal value-noise (no external deps) ----------------

function hash2(x: number, y: number, seed: number): number {
  const v = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453123;
  return v - Math.floor(v);
}

function valueNoise(x: number, y: number, seed: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const tl = hash2(xi, yi, seed);
  const tr = hash2(xi + 1, yi, seed);
  const bl = hash2(xi, yi + 1, seed);
  const br = hash2(xi + 1, yi + 1, seed);
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  return tl + (tr - tl) * u + (bl - tl) * v + (tl - tr - bl + br) * u * v;
}

function fbm(x: number, y: number, seed: number, octaves: number): number {
  let sum = 0;
  let amp = 0.55;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    sum += amp * valueNoise(x * freq, y * freq, seed + i * 17.3);
    freq *= 2.05;
    amp *= 0.55;
  }
  return sum;
}

/** Domain-warped fbm — gives the organic, "drifting cloud" blob edges. */
function blobField(x: number, y: number, t: number, seed: number): number {
  const wx = fbm(x * 0.6 + t * 0.18, y * 0.6, seed + 4.1, 1) * 1.3;
  const wy = fbm(x * 0.6, y * 0.6 + t * 0.15, seed + 9.7, 1) * 1.3;
  return fbm(x + wx, y + wy + t * 0.1, seed, 2);
}

function smoothstep(edge0: number, edge1: number, value: number): number {
  const t = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

// ---- component -----------------------------------------------------------

export function BrutalistBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Offscreen low-res buffers, one per layer, reused every frame.
  const buffersRef = useRef<
    {
      canvas: HTMLCanvasElement;
      ctx: CanvasRenderingContext2D;
      img: ImageData;
      cols: number;
      rows: number;
    }[]
  >([]);

  const pointerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = reduceQuery.matches;

    let tier: Tier =
      window.innerWidth < 640 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop";
    let layers = buildLayers(tier);

    let dpr = Math.min(window.devicePixelRatio || 1, tier === "mobile" ? 1.5 : 2);
    let width = 0;
    let height = 0;

    function setupBuffers() {
      const baseCols = tier === "mobile" ? 46 : tier === "tablet" ? 70 : 92;
      const aspect = width > 0 && height > 0 ? width / height : 16 / 9;
      const cols = baseCols;
      const rows = Math.max(18, Math.round(baseCols / aspect));

      buffersRef.current = layers.map(() => {
        const off = document.createElement("canvas");
        off.width = cols;
        off.height = rows;
        const offCtx = off.getContext("2d", { willReadFrequently: true }) as CanvasRenderingContext2D;
        return { canvas: off, ctx: offCtx, img: offCtx.createImageData(cols, rows), cols, rows };
      });
    }

    function resize() {
      const rect = container!.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));

      const nextTier: Tier = width < 640 ? "mobile" : width < 1024 ? "tablet" : "desktop";
      if (nextTier !== tier) {
        tier = nextTier;
        layers = buildLayers(tier);
        dpr = Math.min(window.devicePixelRatio || 1, tier === "mobile" ? 1.5 : 2);
      }

      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      // Resetting canvas.width/height clears all context state, so the
      // transform + smoothing flag must be re-applied after, in this order.
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.imageSmoothingEnabled = false;

      setupBuffers();
    }

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);
    resize();

    function handlePointerMove(e: PointerEvent) {
      if (reduceMotion) return;
      const rect = container!.getBoundingClientRect();
      pointerRef.current.targetX = (e.clientX - rect.left) / rect.width - 0.5;
      pointerRef.current.targetY = (e.clientY - rect.top) / rect.height - 0.5;
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    function handleReduceChange() {
      reduceMotion = reduceQuery.matches;
      if (reduceMotion) drawFrame(0);
    }
    reduceQuery.addEventListener("change", handleReduceChange);

    let rafId = 0;
    let lastDraw = 0;

    function drawFrame(timeSeconds: number) {
      const frameInterval = tier === "mobile" ? 1000 / 24 : 1000 / 30;
      void frameInterval; // referenced in loop(), kept local to drawFrame's closure scope

      ctx!.clearRect(0, 0, width, height);

      const p = pointerRef.current;
      p.x += (p.targetX - p.x) * 0.06;
      p.y += (p.targetY - p.y) * 0.06;

      // Mechanical, stepped "glitch clock" — cells snap rather than glide.
      const glitchStep = Math.floor(timeSeconds / 0.9);

      layers.forEach((layer, i) => {
        const buf = buffersRef.current[i];
        if (!buf) return;
        const { cols, rows, img, ctx: offCtx, canvas: offCanvas } = buf;
        const data = img.data;
        const [r, g, b] = layer.rgb;

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const nx = (col / cols) * layer.freq + layer.driftX * timeSeconds * layer.speed;
            const ny = (row / rows) * layer.freq + layer.driftY * timeSeconds * layer.speed;
            let value = blobField(nx, ny, timeSeconds * layer.speed, layer.seed);

            // Sparse, instant jump-cuts on a handful of cells per tick.
            const jitter = hash2(col + glitchStep * 3, row - glitchStep * 2, layer.seed + 5);
            if (jitter > 0.985) value += 0.4;
            else if (jitter < 0.012) value -= 0.4;

            const alpha = smoothstep(
              layer.threshold - layer.softness,
              layer.threshold + layer.softness,
              value,
            );

            const idx = (row * cols + col) * 4;
            data[idx] = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = Math.round(alpha * layer.maxAlpha * 255);
          }
        }

        offCtx.putImageData(img, 0, 0);

        ctx?.save();
        if (ctx) ctx.globalCompositeOperation = "multiply";
        const px = reduceMotion ? 0 : p.x * 26 * layer.depth;
        const py = reduceMotion ? 0 : p.y * 26 * layer.depth;
        ctx?.drawImage(offCanvas, px, py, width, height);
        ctx?.restore();
      });

      // Soft floating blurred blob — a slow, drifting system "eye".
      if (!reduceMotion) {
        const bx = width * 0.74 + Math.sin(timeSeconds * 0.12) * width * 0.05;
        const by = height * 0.42 + Math.cos(timeSeconds * 0.09) * height * 0.08;
        ctx!.save();
        ctx!.filter = "blur(36px)";
        ctx!.globalCompositeOperation = "multiply";
        const gradient = ctx!.createRadialGradient(bx, by, 0, bx, by, 70);
        gradient.addColorStop(0, "rgba(190,190,186,0.55)");
        gradient.addColorStop(1, "rgba(190,190,186,0)");
        ctx!.fillStyle = gradient;
        ctx!.fillRect(bx - 90, by - 90, 180, 180);
        ctx!.restore();
      }
    }

    function loop(t: number) {
      const frameInterval = tier === "mobile" ? 1000 / 24 : 1000 / 30;
      if (t - lastDraw >= frameInterval) {
        lastDraw = t;
        drawFrame(t / 1000);
      }
      rafId = requestAnimationFrame(loop);
    }

    if (reduceMotion) {
      drawFrame(0);
    } else {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      reduceQuery.removeEventListener("change", handleReduceChange);
    };
  }, []);

  const labels = useMemo(() => ["SYS://BOOT", "CORE::01", "//GRID", "0xBEEF", "NODE_4"], []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Sparse system labels — pure CSS blink, negligible DOM cost. */}
      <div className="absolute inset-0 hidden md:block">
        {labels.map((label, i) => (
          <span
            key={label}
            className="absolute font-mono text-[10px] font-bold tracking-widest text-ink/40"
            style={{
              left: `${12 + i * 19}%`,
              top: `${(i % 2 === 0 ? 14 : 78) + (i % 3) * 4}%`,
              animation: `bb-label-blink ${4 + i}s steps(1) infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Subtle grain overlay, matches the existing site's noise texture. */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <style jsx>{`
        @keyframes bb-label-blink {
          0%,
          55% {
            opacity: 0;
          }
          60%,
          100% {
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          span {
            animation: none !important;
            opacity: 0.5 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default BrutalistBackground;