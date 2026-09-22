import React, { useEffect, useState, useRef } from "react";
import { GlassCard } from "./GlassCard";

export const AnimatedCounter = ({ target, suffix = "", duration = 1200 }) => {
  const [displayVal, setDisplayVal] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const isDecimal = target.includes(".");
  const isPlus = target.includes("+");
  const isPercent = target.includes("%");

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
    if (!hasAnimated) return;

    if (isDecimal) {
      // For decimal numbers like 5.0
      const targetNum = parseFloat(target) || 5.0;
      let start = 0;
      const timer = setInterval(() => {
        start += 0.5;
        if (start >= targetNum) {
          setDisplayVal(targetNum.toFixed(1));
          clearInterval(timer);
        } else {
          setDisplayVal(start.toFixed(1));
        }
      }, 80);
      return () => clearInterval(timer);
    }

    const numericVal = parseInt(target.replace(/[^0-9]/g, ""), 10) || 0;
    if (numericVal === 0) return;

    let start = 0;
    const step = Math.max(1, Math.ceil(numericVal / 25));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericVal) {
        setDisplayVal(numericVal.toString());
        clearInterval(timer);
      } else {
        setDisplayVal(start.toString());
      }
    }, 40);

    return () => clearInterval(timer);
  }, [hasAnimated, target, isDecimal, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight font-mono">
      {hasAnimated ? displayVal : target.replace(/[^0-9.]/g, "")}
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
  highlight = false,
  delay = 0,
  href
}) => {
  const CardContent = (
    <GlassCard
      delay={delay}
      className={`p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 transition-all duration-300 ${
        highlight
          ? "border-[#00E5FF]/40 bg-[#031c38]/75 shadow-[0_0_25px_rgba(0,229,255,0.15)]"
          : "border-[#00E5FF]/20"
      } ${href ? "hover:border-[#00E5FF] cursor-pointer" : ""} ${className}`}
      hoverEffect={true}
    >
      {Icon && (
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div className="min-w-0 w-full sm:w-auto">
        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          <AnimatedCounter target={value} />
        </div>
        <div className="text-xs sm:text-sm text-white/70 font-medium mt-0.5 leading-snug">
          {label}
        </div>
      </div>
    </GlassCard>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-[#00E5FF] rounded-2xl"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default StatCard;
