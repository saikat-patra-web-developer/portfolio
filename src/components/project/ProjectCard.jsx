import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { NeonButton } from "../ui/NeonButton";

export const ProjectCard = ({ project, featuredLayout = false, delay = 0 }) => {
  const {
    title,
    slug,
    client,
    industry,
    category,
    thumbnail,
    shortChallenge,
    shortSolution,
    result,
    technologies = [],
    featured
  } = project;

  return (
    <GlassCard
      glow="both"
      delay={delay}
      className={`overflow-hidden flex flex-col h-full border-[#00E5FF]/20 group transition-all duration-300 ${featuredLayout ? "" : ""
        }`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#05182d]">
        <img
          src={thumbnail}
          alt={title}
          width="640"
          height="360"
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020B18] via-transparent to-transparent opacity-80" />

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-[#020B18]/90 text-[#00E5FF] border border-[#00E5FF]/30 shadow-md">
            {category}
          </span>
        </div>

        {/* Featured indicator */}
        {featured && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-gradient-to-r from-[#7B3CFF] to-[#A855F7] text-white border border-[#A855F7]/40 shadow-md">
              Featured Case Study
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-4">
        <div>
          {/* Client & Industry */}
          {(client || industry) && (
            <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-1">
              {client} {industry && `• ${industry}`}
            </div>
          )}

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-200">
            <Link to={`/projects/${slug}`}>
              {title}
            </Link>
          </h3>

          {/* Challenge & Solution */}
          <div className="mt-3 space-y-2 text-xs text-white/75 leading-relaxed">
            {shortChallenge && (
              <div>
                <strong className="text-rose-400 font-semibold">Problem: </strong>
                <span>{shortChallenge}</span>
              </div>
            )}
            {shortSolution && (
              <div>
                <strong className="text-emerald-400 font-semibold">Solution: </strong>
                <span>{shortSolution}</span>
              </div>
            )}
          </div>

          {/* Measurable Business Result */}
          {result && (
            <div className="mt-3.5 p-3 rounded-xl bg-[#021832] border border-[#00E5FF]/20 flex items-start gap-2 text-xs">
              <TrendingUp className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#00E5FF] font-semibold block text-[11px] uppercase tracking-wider">
                  Result:
                </strong>
                <span className="text-white/90 leading-snug">{result}</span>
              </div>
            </div>
          )}

          {/* Tech Badges */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#03152B] text-white/80 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Link */}
        <div className="pt-3 border-t border-white/5">
          <NeonButton
            to={`/projects/${slug}`}
            variant="primary"
            size="sm"
            className="w-full"
          >
            View Case Study
          </NeonButton>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
