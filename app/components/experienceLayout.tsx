"use client";

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

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 py-28 px-6 md:px-16 lg:px-32">
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium mb-4"
            style={{ color: "rgba(0,245,255,0.7)", fontFamily: "var(--font-orbitron-var), sans-serif" }}
          >
            Work Experience
          </p>
          <h2
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-none tracking-tight text-white"
          >
            Where I&apos;ve
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #00f5ff, #8b5cf6, #ff00c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.4,
              }}
            >
              worked
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, rgba(0,245,255,0.4), rgba(139,92,246,0.2), transparent)" }}
          />

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative md:pl-12 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full hidden md:block"
                  style={{ border: "1px solid rgba(0,245,255,0.5)", background: "#080b14" }}
                  whileInView={{ boxShadow: ["0 0 0px rgba(0,245,255,0)", "0 0 12px rgba(0,245,255,0.6)", "0 0 4px rgba(0,245,255,0.3)"] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                />

                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-[10px] md:text-xs text-white/40 tabular-nums">
                    {exp.period}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/15 hidden sm:block" />
                  <span style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-[10px] md:text-xs text-white/30">
                    {exp.location}
                  </span>
                </div>

                <h3
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  className="text-lg md:text-2xl font-semibold text-white group-hover:text-cyan-200 transition-colors duration-300"
                >
                  {exp.company}
                </h3>
                <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-xs md:text-sm text-white/45 mt-0.5 mb-3">
                  {exp.role}
                </p>
                <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-white/55 text-sm leading-[1.85] max-w-2xl">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.stack.map((s, j) => (
                    <span key={j} className="cyber-tag">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
