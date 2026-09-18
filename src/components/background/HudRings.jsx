import React from "react";

export const HudRings = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Top Right HUD Ring Behind Hero/Visual */}
      <div className="absolute -top-24 -right-24 md:top-[-5%] md:right-[5%] w-[480px] h-[480px] md:w-[680px] md:h-[680px] opacity-[0.14] pointer-events-none">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full animate-[spin_60s_linear_infinite]"
        >
          {/* Outer dashed ring */}
          <circle
            cx="250"
            cy="250"
            r="230"
            fill="none"
            stroke="#7B3CFF"
            strokeWidth="1.2"
            strokeDasharray="8 12"
          />
          {/* Solid middle ring with notches */}
          <circle
            cx="250"
            cy="250"
            r="190"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="0.8"
            strokeOpacity="0.8"
          />
          {/* Segmented arc */}
          <circle
            cx="250"
            cy="250"
            r="150"
            fill="none"
            stroke="#2787FF"
            strokeWidth="2"
            strokeDasharray="60 180"
          />
          {/* Small orbital dots */}
          <circle cx="250" cy="20" r="3" fill="#00E5FF" />
          <circle cx="480" cy="250" r="2.5" fill="#A855F7" />
          <circle cx="250" cy="480" r="3.5" fill="#00E5FF" />
        </svg>

        {/* Counter-rotating inner compass */}
        <svg
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite_reverse]"
        >
          <circle
            cx="250"
            cy="250"
            r="110"
            fill="none"
            stroke="#A855F7"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            cx="250"
            cy="250"
            r="70"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="0.6"
          />
          {/* Crosshairs */}
          <line x1="250" y1="130" x2="250" y2="150" stroke="#00E5FF" strokeWidth="1" />
          <line x1="250" y1="350" x2="250" y2="370" stroke="#00E5FF" strokeWidth="1" />
          <line x1="130" y1="250" x2="150" y2="250" stroke="#00E5FF" strokeWidth="1" />
          <line x1="350" y1="250" x2="370" y2="250" stroke="#00E5FF" strokeWidth="1" />
        </svg>
      </div>

      {/* Top Left Subtler Cyan Orbit Ring */}
      <div className="absolute top-[8%] -left-[180px] md:top-[12%] md:-left-[120px] w-[420px] h-[420px] opacity-[0.12] pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full animate-[spin_50s_linear_infinite]"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1"
            strokeDasharray="12 24"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="none"
            stroke="#2787FF"
            strokeWidth="0.8"
            strokeDasharray="4 8"
          />
          <circle
            cx="200"
            cy="200"
            r="90"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="0.5"
          />
          <circle cx="200" cy="20" r="2.5" fill="#00E5FF" />
          <circle cx="340" cy="200" r="3" fill="#2787FF" />
        </svg>
      </div>

      {/* Bottom Center Secondary Technical Radar */}
      <div className="absolute bottom-[-100px] left-[30%] w-[380px] h-[380px] opacity-[0.08] pointer-events-none hidden lg:block">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full animate-[spin_80s_linear_infinite]"
        >
          <circle
            cx="150"
            cy="150"
            r="135"
            fill="none"
            stroke="#7B3CFF"
            strokeWidth="1"
            strokeDasharray="10 20"
          />
          <circle
            cx="150"
            cy="150"
            r="95"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="0.7"
          />
        </svg>
      </div>
    </div>
  );
};
