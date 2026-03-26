"use client";

import ProfileCard from "./profileCard";
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

export default function EducationLayout() {
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
            Education
          </p>
          <h1
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            className="text-[clamp(2.2rem,6vw,3.8rem)] font-bold leading-none tracking-tight text-white text-center lg:text-left"
          >
            LUT University
            <br />
            <span className="text-white/20">Lahti, Finland</span>
          </h1>
        </motion.div>

        <div className="mt-10 lg:w-[85%]">

          {/* Degree block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="mb-8"
          >
            <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-white/70 text-base leading-relaxed">
              Bachelor&apos;s degree in{" "}
              <span className="text-white/85 font-medium">Software &amp; Systems Engineering</span>
            </p>
            <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-white/45 text-sm mt-1">
              August 2023 – Present
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-wrap gap-0 border-t border-white/8 mb-10"
          >
            {[
              { label: "GPA", value: "4.65 / 5" },
              { label: "Credits", value: "192 ECTS" },
              { label: "Course avg.", value: "5 / 5" },
            ].map((stat, i) => (
              <div key={i} className="flex-1 min-w-[100px] py-5 px-4 border-b border-white/8 first:pl-0">
                <div
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  className="text-2xl font-bold text-white"
                >
                  {stat.value}
                </div>
                <div style={{ fontFamily: "var(--font-inter), sans-serif" }} className="mt-0.5 text-[11px] text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p style={{ fontFamily: "var(--font-inter), sans-serif" }} className="text-xs text-white/40 uppercase tracking-widest mb-4">
              Courses completed
            </p>
            <div className="flex flex-col gap-0">
              {courses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="group flex items-center justify-between border-t border-white/6 py-3 hover:border-orange-500/20 transition-colors duration-200"
                >
                  <span
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    className="text-sm text-white/65 group-hover:text-white/90 transition-colors duration-200"
                  >
                    {course}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    className="text-xs font-semibold text-emerald-400/70 group-hover:text-emerald-400 transition-colors duration-200 tabular-nums ml-6"
                  >
                    5 / 5
                  </span>
                </motion.div>
              ))}
              <div className="border-t border-white/6" />
            </div>
          </motion.div>

        </div>

      </section>
    </div>
  );
}
