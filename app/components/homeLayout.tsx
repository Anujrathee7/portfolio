"use client";

import ProfileCard from "./profileCard";
import { motion } from "motion/react";

export default function HomeLayout() {
  const stats = [
    { number: "1+", label: "Years of industry experience" },
    { number: "10+", label: "Projects shipped" },
    { number: "3", label: "Companies worked at" },
  ];

  return (
    <div className="relative">

      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="/1.mp4" type="video/mp4" />
      </video>
      <div className="lg:h-full lg:flex lg:flex-row lg:items-start lg:justify-start lg:m-0 flex flex-col items-center justify-center gap-8 z-12">
        {/* Left side */}
        <aside className="lg:w-105 w-[80%] shrink-0 px-6 lg:px-8 lg:ml-30">
          <ProfileCard />
        </aside>

        {/* Right side */}
        <section className="w-full px-4 sm:px-6 lg:flex-1 lg:h-full lg:pr-2 lg:overflow-y-auto lg:w-[70%] custom-scroll lg:mr-10 lg:pt-2">

          {/* Intro block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase font-medium mb-5 text-center lg:text-left"
              style={{ color: "rgba(0,245,255,0.7)", fontFamily: "var(--font-orbitron-var), sans-serif" }}
            >
              Based in Espoo, Finland
            </p>
            <h1
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              className="text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-none tracking-tight text-center lg:text-left text-white"
            >
              Software
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #00f5ff 0%, #8b5cf6 50%, #ff00c8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.35,
                }}
              >
                Engineer
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeInOut" }}
            style={{ originX: 0, background: "linear-gradient(90deg, rgba(0,245,255,0.4), rgba(139,92,246,0.2), transparent)" }}
            className="mt-8 mb-7 h-px hidden lg:block"
          />

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:w-[68%] space-y-4"
          >
            <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-white/75 text-base leading-[1.8]">
              I build full-stack products that are fast, maintainable, and worth shipping.
              Currently studying Software &amp; Systems Engineering at LUT University while
              gaining real-world experience through internships.
            </p>
            <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-white/50 text-sm leading-[1.8]">
              Previously at{" "}
              <span className="text-cyan-400/80">VTT Technical Research Centre</span> and{" "}
              <span className="text-cyan-400/80">Seonali</span> — building dashboards, optimizing APIs, and
              working in agile teams.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-0 lg:w-[68%]"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex-1 py-5 px-4 first:pl-0 group transition-all duration-300"
                style={{ borderTop: "1px solid rgba(0,245,255,0.08)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget.style.borderTopColor = "rgba(0,245,255,0.3)");
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.style.borderTopColor = "rgba(0,245,255,0.08)");
                }}
              >
                <div
                  style={{ fontFamily: "var(--font-orbitron-var), var(--font-space-grotesk), sans-serif" }}
                  className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                >
                  {s.number}
                </div>
                <div style={{ fontFamily: "var(--font-inter), sans-serif" }} className="mt-1 text-xs text-white/45 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

        </section>
      </div>
    </div>
  );
}
