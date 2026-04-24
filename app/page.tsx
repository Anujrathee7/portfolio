"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// ── Section + background + character imports ───────────────────
import CinematicBackground from "./components/CinematicBackground";
import CyberCharacter from "./components/CyberCharacter";
import ProjectsSection from "./components/projectsLayout";
import ExperienceSection from "./components/experienceLayout";
import SkillsSection from "./components/skillsLayout";
import EducationSection from "./components/educationLayout";

// ── Section IDs for smooth‑scroll nav ────────────────────────────
const NAV = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ── Shared section‑reveal wrapper ─────────────────────────────────
export function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Hero Section ───────────────────────────────────────────────────
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} id="home" className="relative h-screen overflow-hidden flex items-center justify-center z-10">
      {/* ── Background Video Layer ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: videoOpacity, scale: videoScale, y: videoY }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* ── Bottom Transition Mask ── */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="relative z-20">
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          style={{ y: textY, opacity }}
        >

          {/* Location tag */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.3em] uppercase mb-6 font-medium"
            style={{ color: "rgba(0,245,255,0.75)", fontFamily: "var(--font-orbitron-var), sans-serif" }}
          >
            ⟨ Based in Espoo, Finland ⟩
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{ fontFamily: "var(--font-orbitron-var), var(--font-space-grotesk), sans-serif" }}
            className="text-[clamp(3rem,10vw,7rem)] font-black leading-none tracking-tight text-white mb-4"
          >
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #00f5ff 40%, #8b5cf6 70%, #ff00c8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Anuj Rathee
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xl md:text-2xl mb-3 font-light tracking-widest uppercase"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Software Engineer{" "}
            <span style={{ color: "rgba(0,245,255,0.5)" }}>·</span>{" "}
            Full-stack Developer
          </motion.p>

          {/* Social + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a href="https://github.com/Anujrathee7" target="_blank" rel="noopener noreferrer"
                className="text-white/80 hover:text-cyan-400 transition-all duration-200"
                onMouseEnter={(e) => { e.currentTarget.style.filter = "drop-shadow(0 0 6px rgba(0,245,255,0.7))"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/anuj-rathee-061401279/" target="_blank" rel="noopener noreferrer"
                className="text-white/80 hover:text-[#0A66C2] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=ratheeanuj2005@gmail.com" target="_blank" rel="noopener noreferrer"
                className="text-white/80 hover:text-fuchsia-400 transition-all duration-200"
                onMouseEnter={(e) => { e.currentTarget.style.filter = "drop-shadow(0 0 6px rgba(255,0,200,0.7))"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-14 flex justify-center gap-12"
          >
            {[
              { n: "1+", l: "Years exp." },
              { n: "10+", l: "Projects" },
              { n: "3", l: "Companies" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div
                  style={{ fontFamily: "var(--font-orbitron-var), sans-serif", color: "#00f5ff" }}
                  className="text-2xl font-bold"
                >
                  {s.n}
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute mt-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-cyan-400/60" />
        </motion.div>
      </div>
    </section>

  );
}

// ── Navbar ─────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2">
      <div
        className="flex items-center gap-1 px-6 py-3 rounded-2xl backdrop-blur-md"
        style={{
          background: "rgba(8, 11, 20, 0.88)",
          border: "1px solid rgba(0, 245, 255, 0.12)",
          boxShadow: "0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,245,255,0.04)",
        }}
      >
        {NAV.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group px-4 py-2 rounded-lg text-xs text-white/50 hover:text-cyan-400 transition-all duration-200 tracking-widest uppercase font-medium"
            style={{ fontFamily: "var(--font-orbitron-var), sans-serif", fontSize: "0.6rem" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,245,255,0.07)";
              e.currentTarget.style.color = "#00f5ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ── Page ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
      {/* ── Unified cinematic background (scroll-driven crossfade) ── */}
      <CinematicBackground />

      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
