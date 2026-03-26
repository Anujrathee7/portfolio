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
    <div className="lg:h-full lg:flex lg:flex-row lg:items-start lg:justify-start lg:m-0 flex flex-col items-center justify-center gap-8">
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
          <p className="text-xs tracking-[0.2em] uppercase text-orange-400/80 font-medium mb-5 text-center lg:text-left">
            Based in Espoo, Finland
          </p>
          <h1
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            className="text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-none tracking-tight text-center lg:text-left text-white"
          >
            Software
            <br />
            <span className="text-white/20">Engineer</span>
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeInOut" }}
          style={{ originX: 0 }}
          className="mt-8 mb-7 h-px bg-gradient-to-r from-orange-500/40 via-white/10 to-transparent hidden lg:block"
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
            Currently studying Software & Systems Engineering at LUT University while
            gaining real-world experience through internships.
          </p>
          <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-white/55 text-sm leading-[1.8]">
            Previously at <span className="text-white/85">VTT Technical Research Centre</span> and{" "}
            <span className="text-white/85">Seonali</span> — building dashboards, optimizing APIs, and
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
              className="flex-1 py-5 px-4 border-t border-white/8 first:pl-0 group hover:border-orange-500/30 transition-colors duration-300"
            >
              <div
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                className="text-3xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300"
              >
                {s.number}
              </div>
              <div style={{ fontFamily: "var(--font-inter), sans-serif" }} className="mt-1 text-xs text-white/50 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </section>
    </div>
  );
}
