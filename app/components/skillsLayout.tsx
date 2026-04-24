"use client";

import { motion } from "motion/react";

const skillGroups = [
  { label: "Languages",       skills: ["Java", "Python", "C++", "JavaScript", "TypeScript"] },
  { label: "Frontend",        skills: ["React.js", "Next.js", "Tailwind CSS", "HTML & CSS"] },
  { label: "Backend & Data",  skills: ["Express.js", "REST APIs", "PostgreSQL", "MongoDB"] },
  { label: "Tooling",         skills: ["Git", "Linux", "Vercel", "pgAdmin"] },
  { label: "Collaboration",   skills: ["Agile / Scrum", "Technical Communication", "Problem Solving", "Pair Programming"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-28 px-6 md:px-16 lg:px-32">
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
            Technical toolkit
          </p>
          <h2
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-none tracking-tight text-white"
          >
            Skills &amp;
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
              Tools
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-6 transition-all duration-300"
              style={{ borderTop: "1px solid rgba(0,245,255,0.06)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = "rgba(0,245,255,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = "rgba(0,245,255,0.06)"; }}
            >
              <div className="sm:w-40 shrink-0">
                <span
                  style={{ fontFamily: "var(--font-orbitron-var), sans-serif", color: "rgba(0,245,255,0.4)", fontSize: "0.6rem" }}
                  className="uppercase tracking-widest group-hover:text-cyan-400 transition-colors duration-300"
                >
                  {group.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.05 + i * 0.04, duration: 0.3 }}
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                    className="text-sm font-medium text-white/70 hover:text-cyan-300 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(0,245,255,0.06)" }} />
        </div>
      </div>
    </section>
  );
}
