"use client";

import ProfileCard from "./profileCard";
import { motion } from "motion/react";

const experiences = [
  {
    period: "Jul – Dec 2025",
    company: "Seonali",
    location: "Czech Republic (Remote)",
    role: "Full-stack Developer",
    description:
      "Built and maintained a production Next.js + TypeScript application. Improved API response times by 10% through PostgreSQL query optimization and well-structured REST endpoints. Delivered responsive UI using Tailwind CSS with secure coding practices.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vercel"],
  },
  {
    period: "Jan – Apr 2025",
    company: "VTT Technical Research Centre",
    location: "Finland",
    role: "Front-end Developer",
    description:
      "Developed an internal AI performance dashboard in a team of 6, enabling researchers to visualize complex model metrics at a glance. Followed Agile/Scrum with iterative delivery and continuous code review.",
    stack: ["React", "Vite", "Tailwind CSS", "Agile"],
  },
  {
    period: "Jan – May 2025",
    company: "LUT University",
    location: "Lahti, Finland",
    role: "Teaching Assistant",
    description:
      "Facilitated weekly exercise sessions for multiple software engineering courses. Helped students debug code, clarified algorithmic concepts, and evaluated assignments.",
    stack: ["Software Engineering", "Communication", "Problem Solving"],
  },
];

export default function ExperienceLayout() {
  return (
    <div className="lg:h-full lg:flex lg:flex-row lg:items-start lg:justify-start lg:m-0 flex flex-col items-center justify-center gap-8">
      {/* Left side */}
      <aside className="lg:w-105 w-[80%] shrink-0 px-6 lg:px-8 lg:ml-30">
        <ProfileCard />
      </aside>

      {/* Right side */}
      <section className="w-full px-4 sm:px-6 lg:flex-1 lg:h-full lg:pr-2 lg:overflow-y-auto lg:w-[70%] custom-scroll lg:mr-10 lg:pt-2">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-orange-400/80 font-medium mb-5 text-center lg:text-left">
            Work Experience
          </p>
          <h1
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            className="text-[clamp(2.2rem,6vw,3.8rem)] font-bold leading-none tracking-tight text-white text-center lg:text-left"
          >
            Where I&apos;ve
            <br />
            <span className="text-white/20">worked</span>
          </h1>
        </motion.div>

        <div className="mt-10 lg:w-[85%] relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/8 hidden lg:block" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative lg:pl-10 pb-10 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full border border-orange-500/50 bg-[#151312] hidden lg:block group-hover:bg-orange-500/30 transition-colors duration-300" />

                {/* Period + location row */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-xs text-white/50 tabular-nums">
                    {exp.period}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/15 hidden sm:block" />
                  <span style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-xs text-white/40 hidden sm:block">
                    {exp.location}
                  </span>
                </div>

                {/* Company + role */}
                <h3
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  className="text-xl font-semibold text-white group-hover:text-orange-200 transition-colors duration-300"
                >
                  {exp.company}
                </h3>
                <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-sm text-white/55 mt-0.5 mb-3">
                  {exp.role}
                </p>

                {/* Description */}
                <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-white/65 text-sm leading-[1.85] sm:max-w-[90%]">
                  {exp.description}
                </p>

                {/* Stack tags — minimal, no borders */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.stack.map((s, j) => (
                    <span
                      key={j}
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      className="text-[11px] text-white/35 hover:text-white/70 transition-colors duration-200 cursor-default"
                    >
                      {s}{j < exp.stack.length - 1 && <span className="ml-2 text-white/15">·</span>}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
