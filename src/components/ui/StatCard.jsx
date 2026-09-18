import React, { useEffect, useState, useRef } from "react";
import { GlassCard } from "./GlassCard";

export const AnimatedCounter = ({ target, suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Parse numeric portion
  const numericVal = parseInt(target.replace(/[^0-9]/g, ""), 10) || 0;
  const isPercent = target.includes("%");
  const isPlus = target.includes("+");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || numericVal === 0) return;

    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / numericVal)) || 16;
    const timer = setInterval(() => {
      start += Math.ceil(numericVal / 30);
      if (start >= numericVal) {
        setCount(numericVal);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, numericVal, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {hasAnimated ? count : numericVal}
      {isPlus && "+"}
      {isPercent && "%"}
      {suffix}
    </span>
  );
};

export const StatCard = ({
  value,
  label,
  icon: Icon,
  className = "",
  highlight = false
}) => {
  return (
    <GlassCard
      className={`p-3.5 sm:p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 ${
        highlight
          ? "border-[#00E5FF]/40 bg-[#031c38]/70 shadow-[0_0_30px_rgba(0,229,255,0.15)]"
          : "border-[#00E5FF]/15"
      } ${className}`}
      hoverEffect={true}
    >
      {Icon && (
        <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
      )}
      <div className="min-w-0 w-full sm:w-auto">
        <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          <AnimatedCounter target={value} />
        </div>
        <div className="text-[11px] sm:text-xs md:text-sm text-white/70 font-medium mt-0.5 leading-snug break-words">
          {label}
        </div>
      </div>
    </GlassCard>
  );
};

export default StatCard;
