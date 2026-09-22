import React from "react";
import { motion } from "framer-motion";
import { NeonButton } from "./NeonButton";
import {
  EASE,
  staggerContainer,
  staggerItem
} from "../../animation/motion";

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  actionText,
  actionTo,
  centered = false,
  className = ""
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.08, 0.05)}
      className={`flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 ${centered ? "text-center md:text-center items-center justify-center" : ""
        } ${className}`}
    >
      {/* Plain div — Framer variant labels travel through it via context */}
      <div className={centered ? "max-w-2xl mx-auto" : "max-w-2xl"}>
        {badge && (
          <motion.div
            variants={staggerItem}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5 ${centered ? "mx-auto" : ""
              }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            {badge}
          </motion.div>
        )}

        <motion.h2
          variants={staggerItem}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex flex-wrap items-center gap-2.5 sm:gap-3"
        >
          <span>{title}</span>
          <motion.span
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.7, delay: 0.15, ease: EASE }
              }
            }}
            style={{ transformOrigin: "left center" }}
            className="inline-block w-8 sm:w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7B3CFF] rounded-full shrink-0"
          />
        </motion.h2>

        {subtitle && (
          <motion.p
            variants={staggerItem}
            className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {actionText && actionTo && (
        <motion.div variants={staggerItem} className="self-start md:self-end shrink-0">
          <NeonButton to={actionTo} variant="secondary" size="md">
            {actionText}
          </NeonButton>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionHeading;
