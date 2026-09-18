import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 ${
        centered ? "text-center md:text-center items-center justify-center" : ""
      } ${className}`}
    >
      <div className={centered ? "max-w-2xl mx-auto" : "max-w-2xl"}>
        {badge && (
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5 ${
            centered ? "mx-auto" : ""
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            {badge}
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span>{title}</span>
          <span className="inline-block w-8 sm:w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7B3CFF] rounded-full" />
        </h2>

        {subtitle && (
          <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && actionTo && (
        <Link
          to={actionTo}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00E5FF] hover:text-white bg-[#03152B]/60 hover:bg-[#00E5FF]/20 px-4 py-2 rounded-xl border border-[#00E5FF]/30 transition-all duration-200 group self-start md:self-end shrink-0"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
