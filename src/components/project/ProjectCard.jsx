import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

export const ProjectCard = ({ project, compact = false }) => {
  const {
    title,
    slug,
    category,
    description,
    thumbnail,
    technologies = [],
    metrics = [],
    website,
    featured
  } = project;

  return (
    <GlassCard
      glow="both"
      className="overflow-hidden flex flex-col h-full border-[#00E5FF]/20 group transition-all duration-300"
    >
      {/* Thumbnail with overlay badges */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#05182d]">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020B18] via-transparent to-transparent opacity-80" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-[#020B18]/85 text-[#00E5FF] border border-[#00E5FF]/30 backdrop-blur-md">
            {category}
          </span>
        </div>

        {/* Featured indicator */}
        {featured && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide bg-[#7B3CFF]/85 text-white border border-[#A855F7]/40 backdrop-blur-md">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`${compact ? "p-3.5 gap-2" : "p-5 sm:p-6 gap-4"} flex flex-col flex-grow justify-between`}>
        <div>
          <h3 className={`${compact ? "text-sm" : "text-lg sm:text-xl"} font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-200`}>
            <Link to={`/projects/${slug}`}>
              {title}
            </Link>
          </h3>

          <p className={`mt-2 ${compact ? "text-[11px] line-clamp-2" : "text-xs sm:text-sm line-clamp-3"} text-white/70 leading-relaxed`}>
            {description}
          </p>

          {/* Tech tags */}
          {!compact && <div className="flex flex-wrap gap-1.5 mt-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#021832] text-white/80 border border-[#00E5FF]/15"
              >
                {tech}
              </span>
            ))}
          </div>}
        </div>

        {/* Optional metrics row */}
        {!compact && metrics && metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-[#02152c]/70 border border-[#00E5FF]/10 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-sm sm:text-base font-extrabold text-[#00E5FF]">
                  {m.value}
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/60 truncate">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Action links */}
        <div className="flex items-center gap-2.5 pt-2 border-t border-white/5">
          <Link
            to={`/projects/${slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#2787FF]/80 to-[#00E5FF]/80 hover:from-[#2787FF] hover:to-[#00E5FF] text-white transition-all duration-200 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {!compact && <Link
            to={`/projects/${slug}`}
            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
          >
            <span>Case Study</span>
          </Link>}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-white/60 hover:text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-colors duration-200"
              title="Visit live website"
              aria-label={`Visit live website for ${title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
