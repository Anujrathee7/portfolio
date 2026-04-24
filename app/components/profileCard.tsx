export default function ProfileCard() {
  return (
    <div
      className="relative lg:w-85 rounded-3xl backdrop-blur-xl p-8 transition hover:-translate-y-1"
      style={{
        background: "rgba(8, 11, 20, 0.80)",
        border: "1px solid rgba(0, 245, 255, 0.15)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,245,255,0.04), inset 0 1px 0 rgba(0,245,255,0.08)",
      }}
    >
      {/* top accent — cyan to magenta gradient */}
      <div
        className="absolute left-7 right-7 top-4 h-1.5 rounded-full"
        style={{ background: "linear-gradient(90deg, #00f5ff, #8b5cf6, #ff00c8)" }}
      />

      {/* Image */}
      <div
        className="mt-6 mx-auto w-full overflow-hidden rounded-2xl"
        style={{ border: "1px solid rgba(0,245,255,0.12)" }}
      >
        <div className="relative">
          <img
            src="https://wallpapercave.com/wp/wp11058311.jpg"
            alt="Profile"
            className="h-56 w-full object-cover"
          />
          {/* image overlay for depth */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0" />
          {/* badge */}
          <div
            className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold"
            style={{
              background: "rgba(8,11,20,0.9)",
              border: "1px solid rgba(0,245,255,0.2)",
              color: "#00f5ff",
            }}
          >
            <span
              className="grid h-6 w-6 place-items-center rounded-full text-white text-xs"
              style={{ background: "linear-gradient(135deg, #00f5ff, #8b5cf6)" }}
            >
              ⚡
            </span>
          </div>
        </div>
      </div>

      {/* Name + role */}
      <div className="mt-5 text-center">
        <h2
          className="text-3xl font-extrabold tracking-tight text-white"
          style={{ fontFamily: "var(--font-orbitron-var), var(--font-space-grotesk), sans-serif" }}
        >
          Anuj Rathee
        </h2>
        <p className="mt-1 text-sm font-medium text-white/50">
          Software Engineer •{" "}
          <span className="text-cyan-400/80">Full-stack Developer</span>
        </p>
      </div>

      {/* Description */}
      <p className="mt-4 text-center text-sm leading-relaxed text-white/45">
        Software &amp; Systems Engineering student building real-world full-stack applications with React, Next.js, and PostgreSQL, with hands-on industry experience.
      </p>

      {/* Social links */}
      <div className="mt-8 flex items-center justify-center gap-5">
        {/* GitHub */}
        <a
          href="https://github.com/Anujrathee7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/35 transition-all duration-200 hover:text-cyan-400"
          style={{ filter: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "drop-shadow(0 0 6px rgba(0,245,255,0.7))")}
          onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anuj-rathee-061401279/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/35 transition-all duration-200 hover:text-[#0A66C2]"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=ratheeanuj2005@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/35 transition-all duration-200 hover:text-fuchsia-400"
          style={{ filter: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "drop-shadow(0 0 6px rgba(255,0,200,0.7))")}
          onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
          aria-label="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
