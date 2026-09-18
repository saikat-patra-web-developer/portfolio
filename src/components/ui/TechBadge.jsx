import React from "react";

export const TechBadge = ({ name, icon, size = "md", variant = "pill" }) => {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs gap-1.5",
    md: "px-3.5 py-1.5 text-xs sm:text-sm gap-2",
    lg: "px-4 py-2 text-sm gap-2.5"
  };

  return (
    <div
      className={`inline-flex items-center rounded-lg bg-[#03152B]/70 border border-[#00E5FF]/20 text-white/90 font-medium backdrop-blur-sm hover:border-[#00E5FF]/50 hover:bg-[#052A4A]/70 transition-all duration-200 select-none ${
        sizeClasses[size] || sizeClasses.md
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/80" />
      <span>{name}</span>
    </div>
  );
};

export default TechBadge;
