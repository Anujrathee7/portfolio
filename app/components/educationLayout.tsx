"use client";

import { motion } from "motion/react";

const courses = [
  "Data Structures & Algorithms",
  "Web Application Development",
  "Database Systems",
  "Operating Systems",
  "Object-Oriented Programming",
  "Software Project Management",
  "Computer Networks",
  "Software Testing & Quality",
];

export default function EducationSection() {
  return (
    <section id="education" className="relative z-10 py-28 px-6 md:px-16 lg:px-32">
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
            Education
          </p>
          <h2
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-none tracking-tight text-white"
          >
            LUT University
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
              Lahti, Finland
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-white/60 text-base leading-relaxed">
            Bachelor&apos;s degree in{" "}
            <span className="text-white/80 font-medium">Software &amp; Systems Engineering</span>
          </p>
          <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-white/35 text-sm mt-1">
            August 2023 – Present
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:flex md:flex-wrap gap-0 mb-14"
          style={{ borderTop: "1px solid rgba(0,245,255,0.08)" }}
        >
          {[
            { label: "GPA", value: "4.65 / 5" },
            { label: "Credits", value: "192 ECTS" },
            { label: "Course avg.", value: "5 / 5" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
              className={`py-6 px-4 first:pl-0 border-b border-[rgba(0,245,255,0.06)] ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div
                style={{ fontFamily: "var(--font-orbitron-var), var(--font-space-grotesk), sans-serif", color: "#00f5ff" }}
                className="text-xl md:text-3xl font-bold"
              >
                {stat.value}
              </div>
              <div style={{ fontFamily: "var(--font-inter), sans-serif" }} className="mt-1 text-[10px] md:text-[11px] text-white/40 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Courses */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(0,245,255,0.4)" }}
            className="text-[10px] md:text-xs uppercase tracking-widest mb-5"
          >
            Courses completed
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="group flex items-center justify-between py-3 md:pr-4 transition-colors duration-200"
                style={{ borderTop: "1px solid rgba(0,245,255,0.05)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = "rgba(0,245,255,0.22)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = "rgba(0,245,255,0.05)"; }}
              >
                <span
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  className="text-xs md:text-sm text-white/55 group-hover:text-white/85 transition-colors duration-200"
                >
                  {course}
                </span>
                <span
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  className="text-[10px] md:text-xs font-semibold text-emerald-400/60 group-hover:text-emerald-400 transition-colors duration-200 tabular-nums ml-4"
                >
                  5 / 5
                </span>
              </motion.div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(0,245,255,0.05)" }} className="mt-0 sm:col-span-2" />
        </motion.div>
      </div>
    </section>
  );
}
