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
      className={`p-5 sm:p-6 flex items-center gap-4 ${
        highlight
          ? "border-[#00E5FF]/40 bg-[#031c38]/70 shadow-[0_0_30px_rgba(0,229,255,0.15)]"
          : "border-[#00E5FF]/15"
      } ${className}`}
      hoverEffect={true}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          <AnimatedCounter target={value} />
        </div>
        <div className="text-xs sm:text-sm text-white/70 font-medium mt-0.5">
          {label}
        </div>
      </div>
    </GlassCard>
  );
};

export default StatCard;
