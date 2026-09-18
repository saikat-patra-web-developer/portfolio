import React from "react";

export const GlowOrbs = ({ mousePos = { x: 0.5, y: 0.5 } }) => {
  // mousePos ranges from 0 to 1
  const shiftX = (mousePos.x - 0.5) * 40;
  const shiftY = (mousePos.y - 0.5) * 40;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep base darkness */}
      <div className="absolute inset-0 bg-[#020B18]" />

      {/* Left Cyan / Turquoise ambient illumination */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[65vw] h-[75vh] rounded-full blur-[140px] opacity-40 transition-transform duration-1000 ease-out animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.35) 0%, rgba(39, 135, 255, 0.15) 50%, transparent 75%)",
          transform: `translate(${shiftX * 0.8}px, ${shiftY * 0.8}px)`,
          animationDuration: "12s"
        }}
      />

      {/* Center Deep Navy / Blue depth */}
      <div
        className="absolute top-[20%] left-[25%] w-[50vw] h-[60vh] rounded-full blur-[120px] opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(5, 42, 74, 0.6) 0%, rgba(3, 21, 43, 0.3) 60%, transparent 80%)",
        }}
      />

      {/* Right Violet / Purple illumination */}
      <div
        className="absolute -bottom-[10%] -right-[10%] w-[65vw] h-[80vh] rounded-full blur-[150px] opacity-45 transition-transform duration-1000 ease-out animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(123, 60, 255, 0.2) 45%, transparent 75%)",
          transform: `translate(${-shiftX * 0.7}px, ${-shiftY * 0.7}px)`,
          animationDuration: "16s"
        }}
      />

      {/* Top right secondary violet accent */}
      <div
        className="absolute -top-[10%] right-[10%] w-[45vw] h-[55vh] rounded-full blur-[130px] opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(123, 60, 255, 0.25) 0%, rgba(39, 135, 255, 0.1) 50%, transparent 70%)",
        }}
      />

      {/* Subtle digital vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 40%, rgba(2, 11, 24, 0.85) 100%)"
        }}
      />
    </div>
  );
};
