import React from "react";
import {
  Monitor,
  Server,
  Globe,
  Database,
  Settings,
  Palette,
  Link as LinkIcon
} from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

const iconMap = {
  monitor: Monitor,
  server: Server,
  globe: Globe,
  database: Database,
  settings: Settings,
  palette: Palette,
  link: LinkIcon
};

export const SkillCard = ({ cluster, delay = 0 }) => {
  const { title, description, icon, technologies = [] } = cluster;
  const IconComponent = iconMap[icon] || Monitor;

  return (
    <GlassCard
      glow="both"
      delay={delay}
      className="p-6 sm:p-7 flex flex-col justify-between h-full border-[#00E5FF]/20 group transition-all duration-300"
    >
      <div>
        {/* Header */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.15)] group-hover:scale-105 transition-transform">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#00E5FF] transition-colors">
              {title}
            </h3>
          </div>
        </div>

        {description && (
          <p className="text-xs text-white/65 mb-5 leading-relaxed">
            {description}
          </p>
        )}

        {/* Technology Capabilities List (Clean & Without Fake Percentages) */}
        <div className="space-y-3 pt-1">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-3 rounded-xl bg-[#020B18]/70 border border-white/5 hover:border-[#00E5FF]/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                <strong className="text-xs sm:text-sm font-semibold text-white">
                  {tech.name}
                </strong>
              </div>
              {tech.description && (
                <p className="text-[11px] text-white/60 mt-1 pl-3.5 leading-relaxed">
                  {tech.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default SkillCard;
