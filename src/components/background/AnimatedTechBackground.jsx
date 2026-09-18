import React, { useState, useEffect, useCallback } from "react";
import { GlowOrbs } from "./GlowOrbs";
import { HexGrid } from "./HexGrid";
import { HudRings } from "./HudRings";
import { Particles } from "./Particles";

export const AnimatedTechBackground = () => {
  const [mousePos, setMousePos] = useState({
    x: 0.5,
    y: 0.5,
    pixelX: 0,
    pixelY: 0
  });

  const handleMouseMove = useCallback((e) => {
    // Only track if screen is desktop (> 768px)
    if (window.innerWidth >= 768) {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
        pixelX: e.clientX,
        pixelY: e.clientY
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Dynamic gradient lighting atmosphere */}
      <GlowOrbs mousePos={mousePos} />

      {/* Hexagonal cyber grid */}
      <HexGrid />

      {/* Futuristic rotating technical HUD elements */}
      <HudRings />

      {/* Interactive connected particle network */}
      <Particles mousePos={mousePos} />

      {/* Subtle scanline overlay for high-tech SaaS feel */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 229, 255, 0.2) 3px, transparent 4px)"
        }}
      />
    </div>
  );
};

export default AnimatedTechBackground;
