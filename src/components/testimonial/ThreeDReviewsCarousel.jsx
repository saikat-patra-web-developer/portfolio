import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const GoogleGIcon = ({ className = "w-3.5 h-3.5" }) => (
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

export const ThreeDReviewsCarousel = ({ reviews = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAutoPlaying = true;
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  // Responsive window width tracking for 3D spacing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const count = reviews.length;

  const next = useCallback(() => {
    if (count === 0) return;
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    if (count === 0) return;
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Autoplay loop with auto-pause on hover/interaction
  useEffect(() => {
    if (!isAutoPlaying || isHovered || count <= 1) return;
    const timer = setInterval(() => {
      next();
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, count, next]);


  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prev();
    } else if (e.key === "ArrowRight") {
      next();
    }
  };

  // Interactive 3D tilt tracking for the active center card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
    const rotateY = ((x - centerX) / centerX) * 9;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  if (count === 0) {
    return (
      <div className="text-center py-12 text-white/50 text-sm">
        No reviews available for this filter.
      </div>
    );
  }

  // Calculate 3D transformation values for each card relative to activeIndex
  const getCardStyle = (index) => {
    let offset = (index - activeIndex + count) % count;
    if (offset > count / 2) offset -= count;

    const absOffset = Math.abs(offset);
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth < 1024;

    // Lateral distance between 3D cards
    const stepX = isMobile ? 180 : isTablet ? 260 : 340;
    const translateX = offset * stepX;

    // Depth pushback into Z space
    const translateZ = -absOffset * (isMobile ? 100 : 150);

    // 3D Y-axis rotation angle: cards face inward toward active card
    const rotateY = offset * (isMobile ? -20 : -26);

    // Scale down cards as they recede
    const scale = Math.max(0.65, 1 - absOffset * 0.15);

    // Opacity fade based on distance: smooth buffer at slot 3
    const opacity =
      absOffset === 0
        ? 1
        : absOffset === 1
        ? 0.65
        : absOffset === 2
        ? 0.25
        : 0;

    // Stacking order (active is topmost)
    const zIndex = 30 - absOffset * 10;

    const isVisible = absOffset <= 3;

    return {
      translateX,
      translateZ,
      rotateY,
      scale,
      opacity,
      zIndex,
      isVisible,
      offset
    };
  };

  return (
    <motion.div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      onPanEnd={(_e, info) => {
        if (info.offset.x > 30 || info.velocity.x > 200) {
          prev();
        } else if (info.offset.x < -30 || info.velocity.x < -200) {
          next();
        }
      }}
      className="relative w-full select-none focus:outline-none py-6 sm:py-10 touch-pan-y cursor-grab active:cursor-grabbing"
      aria-label="3D Rotating Reviews Showcase"
    >
      {/* 3D Perspective Stage */}
      <div
        className="relative w-full h-[480px] sm:h-[460px] flex items-center justify-center overflow-visible"
        style={{
          perspective: windowWidth < 640 ? "800px" : "1200px",
          perspectiveOrigin: "50% 50%"
        }}
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#00E5FF]/10 via-[#2787FF]/10 to-[#7B3CFF]/15 blur-3xl pointer-events-none -z-10" />

        {/* 3D Cards Stack */}
        <div
          className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] h-[390px] sm:h-[370px] flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {reviews.map((testimonial, index) => {
            const {
              translateX,
              translateZ,
              rotateY,
              scale,
              opacity,
              zIndex,
              isVisible,
              offset
            } = getCardStyle(index);

            if (!isVisible) return null;

            const isActive = offset === 0;
            const isGoogle = testimonial.source === "Google Review";

            // If active, combine base transform with mouse interactive tilt
            const finalRotateX = isActive ? tilt.x : 0;
            const finalRotateY = isActive ? rotateY + tilt.y : rotateY;

            return (
              <motion.div
                key={testimonial.id}
                ref={isActive ? cardRef : null}
                initial={false}
                onClick={() => {
                  if (offset < 0) {
                    prev();
                  } else if (offset > 0) {
                    next();
                  }
                }}
                onMouseMove={isActive ? handleMouseMove : undefined}
                animate={{
                  x: translateX,
                  z: translateZ,
                  rotateY: finalRotateY,
                  rotateX: finalRotateX,
                  scale: scale,
                  opacity: opacity
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 30,
                  mass: 0.8
                }}
                style={{
                  zIndex,
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                  pointerEvents: Math.abs(offset) > 2 ? "none" : "auto",
                  cursor: isActive ? "default" : "pointer"
                }}
                className={`absolute inset-0 rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-colors duration-300 backdrop-blur-xl ${
                  isActive
                    ? "bg-[#03152B]/95 border-[#00E5FF]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.25),inset_0_0_30px_rgba(0,229,255,0.06)]"
                    : "bg-[#03152B]/75 border-white/10 hover:border-[#00E5FF]/30 shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                }`}
              >
                {/* Specular Glare Reflection on Active Card */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-60"
                    style={{
                      background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(0,229,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)`
                    }}
                  />
                )}

                {/* 3D Pop-out Layer: Header (Stars + Source Badge) */}
                <div
                  className="space-y-3.5"
                  style={{ transform: isActive ? "translateZ(20px)" : "none" }}
                >
                  <div className="flex items-center justify-between gap-2">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                        />
                      ))}
                      <span className="text-xs font-bold text-amber-400 ml-1.5 font-mono">
                        5.0
                      </span>
                    </div>

                    {/* Source Pill */}
                    {isGoogle ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/90 bg-white/5 border border-white/15 px-2.5 py-1 rounded-full shadow-sm">
                        <GoogleGIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>Google Review</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-1 rounded-full shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{testimonial.source || "Verified Client"}</span>
                      </span>
                    )}
                  </div>

                  {/* Quote Content with 3D Depth */}
                  <div className="relative pt-1">
                    <Quote className="w-8 h-8 text-[#00E5FF]/20 absolute -top-3 -left-2 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic relative z-10 line-clamp-5">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>

                  {/* Project Case Study Link */}
                  {testimonial.projectSlug && (
                    <div className="pt-1">
                      <Link
                        to={`/projects/${testimonial.projectSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00E5FF] hover:text-white transition-colors group/link"
                      >
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#00E5FF] group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* 3D Pop-out Layer: Author Footer */}
                <div
                  className="pt-4 border-t border-white/10 flex items-center justify-between gap-3"
                  style={{ transform: isActive ? "translateZ(25px)" : "none" }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                        testimonial.avatarBg || "from-blue-600 to-cyan-500"
                      } flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(0,229,255,0.3)] shrink-0 border border-white/25`}
                    >
                      {testimonial.avatar || testimonial.author?.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-white tracking-tight truncate">
                        {testimonial.author}
                      </h4>
                      <p className="text-[11px] text-white/60 truncate">
                        {testimonial.badge || (testimonial.role ? `${testimonial.role} · ${testimonial.company}` : testimonial.company)}
                      </p>
                    </div>
                  </div>

                  {testimonial.timeAgo && (
                    <span className="text-[10px] text-white/40 font-mono shrink-0">
                      {testimonial.timeAgo}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Centered Dynamic Pagination Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-6 py-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex
                ? "w-7 bg-gradient-to-r from-[#00E5FF] to-[#2787FF] shadow-[0_0_12px_rgba(0,229,255,0.7)]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            title={`Go to review ${idx + 1}`}
            aria-label={`Go to review ${idx + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ThreeDReviewsCarousel;
