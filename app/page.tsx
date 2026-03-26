"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import HomeLayout from "./components/homeLayout";
import ExperienceLayout from "./components/experienceLayout";
import ProjectsLayout from "./components/projectsLayout";
import SkillsLayout from "./components/skillsLayout";
import EducationLayout from "./components/educationLayout";

type Section = "home" | "projects" | "experience" | "skills" | "education";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const };

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  const navItems: {
    id: Section;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: "home",
      label: "Home",
      icon: (
        <svg className="transition-transform duration-200 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      icon: (
        <svg className="transition-transform duration-200 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      icon: (
        <svg className="transition-transform duration-200 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: "skills",
      label: "Skills",
      icon: (
        <svg className="transition-transform duration-200 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: "education",
      label: "Education",
      icon: (
        <svg className="transition-transform duration-200 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9l10-5 10 5-10 5-10-5z" />
          <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
          <path d="M22 9v6" />
        </svg>
      ),
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeLayout key="home" />;
      case "projects":
        return <ProjectsLayout key="projects" />;
      case "experience":
        return <ExperienceLayout key="experience" />;
      case "skills":
        return <SkillsLayout key="skills" />;
      case "education":
        return <EducationLayout key="education" />;
    }
  };

  return (
    <div className="lg:h-screen overflow-hidden min-h-screen">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
      </div>

      {/* Nav */}
      <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-50 mt-4 px-2">
        <div className="flex items-center gap-8 px-8 py-4 rounded-2xl bg-[#262423]/90 backdrop-blur-md shadow-lg shadow-black/30">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`nav-icon group relative flex-col items-center transition-colors duration-200 ${
                  isActive ? "text-orange-400" : "text-white hover:text-white"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                aria-label={item.label}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-400"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
                {item.icon}
                <span className="
                  absolute top-full mt-5
                  bg-[#262423]/70 px-4 py-2
                  rounded-xl
                  left-1/2 -translate-x-1/2
                  text-xs text-white whitespace-nowrap
                  font-semibold
                  opacity-0 -translate-y-3
                  transition-all duration-200
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  pointer-events-none
                ">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Main content with AnimatePresence for cross-fade transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="h-full pt-32"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
