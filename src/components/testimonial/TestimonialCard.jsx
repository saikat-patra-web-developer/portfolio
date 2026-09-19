import React from "react";
import { Star, CheckCircle } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

export const TestimonialCard = ({ testimonial }) => {
  const { author, role, company, rating = 5, content, avatar, avatarBg, source } = testimonial;

  return (
    <GlassCard
      glow="cyan"
      className="p-6 sm:p-7 flex flex-col justify-between h-full border-[#00E5FF]/15 group transition-all duration-300"
    >
      <div>
        {/* Rating Stars */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          {source && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              <CheckCircle className="w-3 h-3" />
              <span>{source}</span>
            </span>
          )}
        </div>

        {/* Quote Content */}
        <p className="text-xs sm:text-sm text-white/85 italic leading-relaxed mb-4">
          &ldquo;{content}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${
              avatarBg || "from-blue-600 to-cyan-500"
            } flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}
          >
            {avatar || author.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
              {author}
            </div>
            <div className="text-[11px] text-white/60 truncate">
              {role ? `${role}, ` : ""}{company}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default TestimonialCard;
