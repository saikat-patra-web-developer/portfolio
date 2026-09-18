import React from "react";

export const HexGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-screen overflow-hidden">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="hex-pattern"
            width="56"
            height="96.99"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
          >
            {/* Hexagon shape paths */}
            <path
              d="M28 0 L56 16.16 L56 48.49 L28 64.66 L0 48.49 L0 16.16 Z"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.7"
              strokeOpacity="0.8"
            />
            <path
              d="M28 96.99 L56 80.82 L56 48.49 L28 64.66 L0 48.49 L0 80.82 Z"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="0.7"
              strokeOpacity="0.8"
            />
            {/* Center nodes */}
            <circle cx="28" cy="64.66" r="1" fill="#00E5FF" opacity="0.4" />
            <circle cx="0" cy="16.16" r="1" fill="#7B3CFF" opacity="0.4" />
            <circle cx="56" cy="16.16" r="1" fill="#7B3CFF" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>
    </div>
  );
};
