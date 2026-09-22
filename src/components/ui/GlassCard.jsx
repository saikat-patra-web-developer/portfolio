import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../../animation/motion";

export const GlassCard = ({
  children,
  className = "",
  glow = "cyan", // 'cyan' | 'purple' | 'both' | 'none'
  hoverEffect = true,
  reveal = true, // scroll-in fade/rise
  delay = 0, // cascade delay within a grid
  onClick,
  ...props
}) => {
  const reduceMotion = useReducedMotion();

  const glowStyles = {
    cyan: "hover:border-[#00E5FF]/40 hover:shadow-[0_10px_35px_-10px_rgba(0,229,255,0.25)]",
    purple: "hover:border-[#A855F7]/40 hover:shadow-[0_10px_35px_-10px_rgba(168,85,247,0.25)]",
    both: "hover:border-[#00E5FF]/40 hover:shadow-[0_12px_40px_-10px_rgba(0,229,255,0.2),0_0_20px_rgba(123,60,255,0.15)]",
    none: ""
  };

  const shouldReveal = reveal && !reduceMotion;

  const motionProps = {
    // Scroll reveal — one consistent curve for every card on the site.
    ...(shouldReveal
      ? {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 }
      }
      : {}),
    // Hover lift stays snappy and independent of the reveal timing.
    ...(hoverEffect && !reduceMotion
      ? {
        whileHover: { y: -5 },
        whileTap: { scale: 0.99 }
      }
      : {}),
    transition: { duration: 0.55, delay, ease: EASE }
  };

  return (
    <motion.div
      onClick={onClick}
      className={`relative rounded-2xl shadow-[inset_0_0_25px_rgba(15,184,255,0.05),0_0_15px_rgba(0,207,255,0.08)] border border-[#00E5FF]/20 transition-all duration-300 ${glowStyles[glow] || glowStyles.cyan
        } ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
