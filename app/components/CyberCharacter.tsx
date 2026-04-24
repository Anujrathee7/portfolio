"use client";

import { useState, useCallback, useEffect } from "react";
import { useMousePosition } from "../hooks/useMousePosition";
import "./CyberCharacter.css";

// ── Speech lines (rotated on click) ──────────────────────────────
const LINES = [
  "SYSTEM ONLINE",
  "SCROLL TO EXPLORE",
  "NICE CLICK, HUMAN",
  "COMPILING...",
  "ACCESS GRANTED",
  "WELCOME BACK",
  "01001000 01001001",
  "INITIALIZING...",
];

/**
 * CyberCharacter — an interactive SVG cyberpunk robot companion.
 *
 * Behaviors:
 *  - Idle: floats gently via CSS animation
 *  - Reactive: eyes track mouse position
 *  - Click: glitch effect + random speech bubble
 *  - Visual: neon glow, scan lines overlay, pulsing glow ring
 */
export default function CyberCharacter() {
  const mouse = useMousePosition();
  const [isGlitching, setIsGlitching] = useState(false);
  const [bubble, setBubble] = useState<string | null>(null);
  const [lineIndex, setLineIndex] = useState(0);

  // ── Eye offset from mouse (clamped ±3px) ───────────────────────
  const eyeOffsetX = mouse.normalizedX * 3;
  const eyeOffsetY = mouse.normalizedY * 2;

  // ── Click handler ──────────────────────────────────────────────
  const handleClick = useCallback(() => {
    // Trigger glitch
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);

    // Show speech bubble
    setBubble(LINES[lineIndex % LINES.length]);
    setLineIndex((i) => i + 1);

    // Auto-dismiss bubble
    setTimeout(() => setBubble(null), 2500);
  }, [lineIndex]);

  // ── Subtle body tilt toward mouse ──────────────────────────────
  const bodyTilt = mouse.normalizedX * 3; // degrees

  return (
    <div
      className={`cyber-character ${isGlitching ? "cyber-character--glitching" : ""}`}
      onClick={handleClick}
      role="button"
      aria-label="Interactive cyberpunk companion"
      tabIndex={0}
    >
      {/* Speech bubble */}
      {bubble && (
        <div key={bubble + lineIndex} className="cyber-character__bubble">
          {bubble}
        </div>
      )}

      {/* Character body */}
      <div
        className="cyber-character__body"
        style={{ transform: `rotate(${bodyTilt}deg)` }}
      >
        <svg
          viewBox="0 0 100 120"
          width="90"
          height="108"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          {/* ── Antenna ── */}
          <line x1="50" y1="8" x2="50" y2="0" stroke="#00f5ff" strokeWidth="1.5" opacity="0.6" />
          <circle cx="50" cy="0" r="2.5" fill="#00f5ff" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* ── Head ── */}
          <rect x="25" y="8" width="50" height="40" rx="8" ry="8"
            fill="none" stroke="#00f5ff" strokeWidth="1.8" opacity="0.9" />
          {/* Head fill */}
          <rect x="26" y="9" width="48" height="38" rx="7" ry="7"
            fill="rgba(8,11,20,0.85)" />

          {/* ── Visor ── */}
          <rect x="30" y="18" width="40" height="16" rx="4" ry="4"
            fill="rgba(0,245,255,0.05)" stroke="#00f5ff" strokeWidth="0.8" opacity="0.5" />

          {/* ── Eyes (track mouse) ── */}
          <g className="cyber-character__eye"
            style={{ transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)` }}>
            {/* Left eye */}
            <rect x="34" y="22" width="10" height="8" rx="2"
              fill="#00f5ff" opacity="0.9">
              <animate attributeName="opacity" values="0.9;0.5;0.9" dur="4s" repeatCount="indefinite" />
            </rect>
            {/* Right eye */}
            <rect x="56" y="22" width="10" height="8" rx="2"
              fill="#ff00c8" opacity="0.85">
              <animate attributeName="opacity" values="0.85;0.45;0.85" dur="4s" begin="0.5s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* ── Mouth / indicator ── */}
          <rect x="42" y="38" width="16" height="2" rx="1"
            fill="#00f5ff" opacity="0.3" />

          {/* ── Neck ── */}
          <rect x="45" y="48" width="10" height="6" rx="1"
            fill="none" stroke="#00f5ff" strokeWidth="0.8" opacity="0.3" />

          {/* ── Body ── */}
          <rect x="20" y="54" width="60" height="44" rx="6" ry="6"
            fill="none" stroke="#00f5ff" strokeWidth="1.5" opacity="0.7" />
          <rect x="21" y="55" width="58" height="42" rx="5" ry="5"
            fill="rgba(8,11,20,0.8)" />

          {/* ── Chest panel ── */}
          <rect x="35" y="62" width="30" height="18" rx="3" ry="3"
            fill="rgba(0,245,255,0.04)" stroke="#00f5ff" strokeWidth="0.6" opacity="0.4" />
          {/* Heart core */}
          <circle cx="50" cy="71" r="4"
            fill="none" stroke="#ff00c8" strokeWidth="1.2" opacity="0.7">
            <animate attributeName="r" values="3.5;4.5;3.5" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="71" r="1.8" fill="#ff00c8" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* ── Arm stubs ── */}
          <rect x="10" y="60" width="10" height="5" rx="2"
            fill="none" stroke="#00f5ff" strokeWidth="1" opacity="0.3" />
          <rect x="80" y="60" width="10" height="5" rx="2"
            fill="none" stroke="#00f5ff" strokeWidth="1" opacity="0.3" />

          {/* ── Leg indicators ── */}
          <rect x="30" y="98" width="14" height="8" rx="2"
            fill="none" stroke="#00f5ff" strokeWidth="0.8" opacity="0.25" />
          <rect x="56" y="98" width="14" height="8" rx="2"
            fill="none" stroke="#00f5ff" strokeWidth="0.8" opacity="0.25" />

          {/* ── Decorative circuit lines ── */}
          <line x1="26" y1="85" x2="40" y2="85" stroke="#00f5ff" strokeWidth="0.5" opacity="0.15" />
          <line x1="60" y1="85" x2="74" y2="85" stroke="#00f5ff" strokeWidth="0.5" opacity="0.15" />
          <line x1="26" y1="90" x2="35" y2="90" stroke="#ff00c8" strokeWidth="0.5" opacity="0.1" />
          <line x1="65" y1="90" x2="74" y2="90" stroke="#ff00c8" strokeWidth="0.5" opacity="0.1" />
        </svg>

        {/* Scan lines overlay */}
        <div className="cyber-character__scanlines" />
      </div>

      {/* Glow ring under character */}
      <div className="cyber-character__glow" />
    </div>
  );
}
