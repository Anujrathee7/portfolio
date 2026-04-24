"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1 (left to right)
  normalizedY: number; // -1 to 1 (top to bottom)
}

/**
 * Tracks mouse position with normalized values relative to viewport center.
 * Uses passive event listeners for performance.
 */
export function useMousePosition(): MousePosition {
  const [pos, setPos] = useState<MousePosition>({
    x: 0, y: 0, normalizedX: 0, normalizedY: 0,
  });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPos({
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
        normalizedY: (e.clientY / window.innerHeight) * 2 - 1,
      });
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return pos;
}
