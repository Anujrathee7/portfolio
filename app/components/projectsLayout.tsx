"use client";

import { motion } from "motion/react";

const projects = [
  {
    index: "01",
    title: "Distributed Medical Appointment System",
    description:
      "Microservices architecture for managing medical appointments, doctors, notifications, and users. Separate backend services communicate via REST, paired with a React + Vite frontend for scheduling and real-time notifications.",
    stack: ["Python", "Flask", "React", "Vite", "Tailwind CSS", "Microservices"],
    repoLink: "https://github.com/Anujrathee7/Distributed_backend",
    frontendLink: "https://github.com/Anujrathee7/Distributed_System_Front_end-",
    status: "Completed",
  },
  {
    index: "02",
    title: "Full-Stack Kanban Board",
    description:
      "Collaborative task management app with JWT authentication, real-time board updates, and drag-and-drop task flow across stages. Full TypeScript frontend with a Node.js/Express backend and MongoDB persistence.",
    stack: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "JWT"],
    repoLink: "https://github.com/Anujrathee7/Kanban-board",
    frontendLink: null,
    status: "Completed",
  },
  {
    index: "03",
    title: "Garbage Classifier — CNN Backend",
    description:
      "Deep learning API that classifies waste images into recyclable categories using a Convolutional Neural Network built with TensorFlow/Keras. Accepts image uploads and returns classification results via a Flask REST endpoint.",
    stack: ["Python", "Flask", "TensorFlow", "Keras", "NumPy", "PIL"],
    repoLink: "https://github.com/Anujrathee7/trash_backend",
    frontendLink: null,
    status: "Completed",
  },
  {
    index: "04",
    title: "Weather & Statistics Android App",
    description:
      "Native Android app delivering global weather forecasts and interactive demographic data for Finnish cities. Integrates multiple external APIs and includes population statistics quizzes.",
    stack: ["Java", "Android SDK", "XML", "Gradle", "REST APIs"],
    repoLink: "https://github.com/Anujrathee7/Android-App",
    frontendLink: null,
    status: "Completed",
  },
];

function SectionHeader({ label, title, ghost }: { label: string; title: string; ghost: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65 }}
      className="mb-14"
    >
      <p
        className="text-xs tracking-[0.3em] uppercase font-medium mb-4"
        style={{ color: "rgba(0,245,255,0.7)", fontFamily: "var(--font-orbitron-var), sans-serif" }}
      >
        {label}
      </p>
      <h2
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-none tracking-tight text-white"
      >
        {title}
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
          {ghost}
        </span>
      </h2>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6 md:px-16 lg:px-32">
      <div className="relative max-w-5xl mx-auto">
        <SectionHeader label="Project work" title="Things I've" ghost="built" />

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative pt-7 pb-8 transition-all duration-300"
              style={{ borderTop: "1px solid rgba(0,245,255,0.07)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = "rgba(0,245,255,0.35)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = "rgba(0,245,255,0.07)"; }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  style={{ color: "rgba(0,245,255,0.3)", fontFamily: "var(--font-orbitron-var), sans-serif" }}
                  className="text-xs font-medium tracking-widest"
                >
                  {project.index}
                </span>
                <span
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  className="flex items-center gap-1.5 text-[11px] font-medium text-white/25 before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/25"
                >
                  {project.status}
                </span>
              </div>

              <h3
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                className="text-xl md:text-2xl font-semibold text-white group-hover:text-cyan-200 transition-colors duration-300 mb-2"
              >
                {project.title}
              </h3>

              <p
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
                className="text-sm text-white/50 leading-[1.85] max-w-2xl"
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((s, j) => (
                  <span key={j} className="cyber-tag">{s}</span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-5">
                <a
                  href={project.repoLink} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-cyan-400 transition-colors duration-200 group/link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {project.frontendLink ? "Backend" : "GitHub"}
                  <svg className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                {project.frontendLink && (
                  <a
                    href={project.frontendLink} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-cyan-400 transition-colors duration-200 group/link2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Frontend
                    <svg className="transition-transform duration-200 group-hover/link2:translate-x-0.5 group-hover/link2:-translate-y-0.5" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(0,245,255,0.07)" }} />
        </div>
      </div>
    </section>
  );
}
