"use client";

import { motion, useScroll, useTransform } from "motion/react";

/**
 * CinematicBackground — gradient-only version.
 *
 * Five scroll-driven gradient layers that crossfade as the user scrolls,
 * creating a sense of progression without any image assets.
 *
 * Gradient palette progression:
 *   Home       → deep indigo / cyan
 *   Projects   → dark teal / cyan-purple
 *   Experience → navy / magenta
 *   Skills     → deep violet / fuchsia
 *   Education  → dark purple / aurora cyan
 */

const GRADIENTS = [
  // Home — black → cyan glow
  "radial-gradient(ellipse 120% 80% at 50% 60%, rgba(0,245,255,0.08) 0%, rgba(0,0,0,1) 70%)",

  // Projects — black → teal/cyan
  "radial-gradient(ellipse 100% 100% at 80% 20%, rgba(0,200,220,0.1) 0%, rgba(0,0,0,1) 60%)",

  // Experience — black → magenta
  "radial-gradient(ellipse 100% 100% at 20% 80%, rgba(200,0,180,0.09) 0%, rgba(0,0,0,1) 65%)",

  // Skills — black → violet
  "radial-gradient(ellipse 90% 90% at 50% 50%, rgba(139,92,246,0.1) 0%, rgba(0,0,0,1) 60%)",

  // Education — black → dual aurora glow
  "radial-gradient(ellipse 140% 60% at 30% 10%, rgba(0,245,255,0.07) 0%, transparent 50%)"
];
function useLayerOpacity(scrollY: ReturnType<typeof useTransform<number, number>>, index: number, total: number) {
  const band = 1 / total;
  const fade = band * 0.5;
  const center = index * band + band / 2;

  const fadeIn = Math.max(0, center - band / 2 - fade);
  const solidIn = center - band / 2 + fade * 0.3;
  const solidOut = center + band / 2 - fade * 0.3;
  const fadeOut = Math.min(1, center + band / 2 + fade);

  const inputRange = index === 0
    ? [0, solidOut, fadeOut]
    : index === total - 1
      ? [fadeIn, solidIn, 1]
      : [fadeIn, solidIn, solidOut, fadeOut];

  const outputRange = index === 0
    ? [1, 1, 0]
    : index === total - 1
      ? [0, 1, 1]
      : [0, 1, 1, 0];

  return useTransform(scrollY, inputRange, outputRange);
}

export default function CinematicBackground() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base dark */}
      <div className="absolute inset-0" style={{ background: "#000000" }} />
      {/* Scroll-driven gradient layers */}
      {GRADIENTS.map((gradient, i) => (
        <GradientLayer
          key={i}
          gradient={gradient}
          scrollY={scrollYProgress}
          index={i}
          total={GRADIENTS.length}
        />
      ))}

      {/* Animated grid */}
      <div className="absolute inset-0 cyber-grid opacity-15" />

      {/* Ambient neon orbs — subtle floating color */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full blur-[160px]"
        style={{
          top: "-10%", left: "-5%",
          background: "rgba(0,245,255,0.04)",
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full blur-[160px]"
        style={{
          bottom: "-10%", right: "-5%",
          background: "rgba(255,0,200,0.035)",
        }}
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full blur-[180px]"
        style={{
          top: "40%", left: "45%",
          transform: "translate(-50%, -50%)",
          background: "rgba(139,92,246,0.025)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function GradientLayer({
  gradient,
  scrollY,
  index,
  total,
}: {
  gradient: string;
  scrollY: ReturnType<typeof useTransform<number, number>>;
  index: number;
  total: number;
}) {
  const opacity = useLayerOpacity(scrollY, index, total);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity, background: gradient, willChange: "opacity" }}
    />
  );
}
