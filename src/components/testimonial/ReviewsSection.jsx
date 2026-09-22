import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MapPin,
  CheckCircle2,
  Layers,
  LayoutGrid
} from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCard } from "./TestimonialCard";
import { ThreeDReviewsCarousel } from "./ThreeDReviewsCarousel";
import { testimonialsData, googleReviewStats } from "../../data/testimonials";
import { revealProps, staggerDelay } from "../../animation/motion";

const GoogleGIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

export const ReviewsSection = ({
  initialCount = 6,
  badge = "CLIENT FEEDBACK",
  title = "What Clients Say",
  subtitle = "Authentic feedback and verified reviews from business owners, founders, and teams."
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [viewMode, setViewMode] = useState("3d"); // '3d' | 'grid'

  const displayedReviews = isExpanded
    ? testimonialsData
    : testimonialsData.slice(0, initialCount);

  return (
    <motion.section id="reviews" className="space-y-8" {...revealProps({ amount: 0.08 })}>
      {/* Section Header with View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
        />

        {/* View Mode Toggle: 3D Rotating Showcase vs Grid View */}
        <div className="inline-flex items-center p-1 rounded-xl border border-white/10 self-start sm:self-auto shadow-inner">
          <button
            onClick={() => setViewMode("3d")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${viewMode === "3d"
              ? "bg-gradient-to-r from-[#00E5FF] to-[#2787FF] text-[#020B18] font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)]"
              : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            title="Showcase Slider"
            aria-label="Showcase Slider"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </button>

          <button
            onClick={() => setViewMode("grid")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${viewMode === "grid"
              ? "bg-gradient-to-r from-[#00E5FF] to-[#2787FF] text-[#020B18] font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)]"
              : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            title="Classic Grid View"
            aria-label="Classic Grid View"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Grid View</span>
          </button>
        </div>
      </div>

      {/* Google Business Credibility Banner */}
      <GlassCard
        glow="cyan"
        className="p-6 sm:p-7 border-[#00E5FF]/25 bg-gradient-to-r from-[#00E5FF]/[0.03] via-white/[0.02] to-[#7B3CFF]/[0.03]"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left: Google Rating Proof */}
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(66,133,244,0.3)] shrink-0">
              <GoogleGIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {googleReviewStats.rating}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>5.0 Star Rating</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/70 mt-1">
                <span className="font-semibold text-white">
                  {googleReviewStats.totalReviews} Verified Google Reviews
                </span>
                <span className="text-white/30">•</span>
                <span className="flex items-center gap-1 text-white/60">
                  <MapPin className="w-3 h-3 text-[#00E5FF]" />
                  <span>{googleReviewStats.location}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Direct Link Button to Google Reviews */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={googleReviewStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#00E5FF]/50 transition-all duration-200 shadow-md group w-full sm:w-auto"
            >
              <GoogleGIcon className="w-4 h-4" />
              <span>Verify on Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </GlassCard>

      {/* Main Review Content: 3D Showcase vs Grid View */}
      {viewMode === "3d" ? (
        <ThreeDReviewsCarousel reviews={testimonialsData} />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedReviews.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                delay={staggerDelay(idx, 3, 0.08)}
              />
            ))}
          </div>

          {/* Show More / Show Less Controls for Grid View */}
          {testimonialsData.length > initialCount && (
            <div className="text-center pt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#00E5FF] bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 border border-[#00E5FF]/30 transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span>
                  {isExpanded
                    ? "Show Fewer Reviews"
                    : `View All ${testimonialsData.length} Reviews`}
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                )}
              </button>
            </div>
          )}
        </>
      )}
    </motion.section>
  );
};

export default ReviewsSection;
