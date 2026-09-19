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
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMotionAndScreen = () => {
      setIsMobile(window.innerWidth < 768);
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    };

    checkMotionAndScreen();
    window.addEventListener("resize", checkMotionAndScreen, { passive: true });
    return () => window.removeEventListener("resize", checkMotionAndScreen);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      // Only track mouse if desktop and user hasn't requested reduced motion
      if (!isMobile && !prefersReducedMotion) {
        setMousePos({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
          pixelX: e.clientX,
          pixelY: e.clientY
        });
      }
    },
    [isMobile, prefersReducedMotion]
  );

  useEffect(() => {
    if (!isMobile && !prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove, isMobile, prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
    >
      {/* 1. Dynamic atmospheric lighting with controlled opacity */}
      <GlowOrbs mousePos={mousePos} />

      {/* 2. Hexagonal cyber grid */}
      <HexGrid />

      {/* 3. Subtle HUD rings (desktop only, disabled in reduced motion) */}
      {!isMobile && !prefersReducedMotion && <HudRings />}

      {/* 4. Connected particle network (scaled down for performance) */}
      <Particles mousePos={mousePos} isMobile={isMobile} prefersReducedMotion={prefersReducedMotion} />

      {/* 5. Clean vignette overlay ensuring high text readability */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 229, 255, 0.2) 3px, transparent 4px)"
        }}
      />
    </div>
  );
};

export default AnimatedTechBackground;
