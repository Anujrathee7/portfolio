"use client";

import ProfileCard from "./profileCard";
import { motion } from "motion/react";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    label: "Backend & Data",
    skills: ["Express.js", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Tooling",
    skills: ["Git", "Linux", "Vercel", "pgAdmin"],
  },
  {
    label: "Collaboration",
    skills: ["Agile / Scrum", "Technical Communication", "Problem Solving", "Pair Programming"],
  },
];

export default function SkillsLayout() {
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
            Technical toolkit
          </p>
          <h1
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            className="text-[clamp(2.2rem,6vw,3.8rem)] font-bold leading-none tracking-tight text-white text-center lg:text-left"
          >
            Skills &
            <br />
            <span className="text-white/20">Tools</span>
          </h1>
        </motion.div>

        <div className="mt-10 lg:w-[82%]">
          <div className="flex flex-col gap-0">
            {skillGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 border-t border-white/8 py-5 hover:border-orange-500/20 transition-colors duration-300"
              >
                {/* Category label — left column */}
                <div className="sm:w-36 shrink-0">
                  <span
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    className="text-xs text-white/45 uppercase tracking-widest group-hover:text-orange-400/70 transition-colors duration-300"
                  >
                    {group.label}
                  </span>
                </div>

                {/* Skills — right column as inline text */}
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: j * 0.04 + i * 0.05, duration: 0.3 }}
                      style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                      className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
            {/* Close rule */}
            <div className="border-t border-white/8" />
          </div>
        </div>

      </section>
    </div>
  );
}
