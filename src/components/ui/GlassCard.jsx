import React from "react";
import { motion } from "framer-motion";

export const GlassCard = ({
  children,
  className = "",
  glow = "cyan", // 'cyan' | 'purple' | 'both' | 'none'
  hoverEffect = true,
  onClick,
  ...props
}) => {
  const glowStyles = {
    cyan: "hover:border-[#00E5FF]/40 hover:shadow-[0_10px_35px_-10px_rgba(0,229,255,0.25)]",
    purple: "hover:border-[#A855F7]/40 hover:shadow-[0_10px_35px_-10px_rgba(168,85,247,0.25)]",
    both: "hover:border-[#00E5FF]/40 hover:shadow-[0_12px_40px_-10px_rgba(0,229,255,0.2),0_0_20px_rgba(123,60,255,0.15)]",
    none: ""
  };

  const Component = hoverEffect ? motion.div : "div";
  const motionProps = hoverEffect
    ? {
        whileHover: { y: -4 },
        transition: { duration: 0.25, ease: "easeOut" }
      }
    : {};

  return (
    <Component
      onClick={onClick}
      className={`relative rounded-2xl bg-[#031428]/60 backdrop-blur-md border border-[#00E5FF]/15 transition-all duration-300 ${
        glowStyles[glow] || glowStyles.cyan
      } ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;
