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

export const SkillCard = ({ category }) => {
  const { title, subtitle, icon, skills = [] } = category;
  const IconComponent = iconMap[icon] || Monitor;

  return (
    <GlassCard
      glow="both"
      className="p-6 sm:p-7 flex flex-col justify-between h-full border-[#00E5FF]/20"
    >
      <div>
        {/* Header */}
        <div className="flex items-center gap-3.5 mb-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {title}
            </h3>
          </div>
        </div>

        {subtitle && (
          <p className="text-xs text-white/60 mb-5 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Skill Bars */}
        <div className="space-y-3.5">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="text-white/85 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  {skill.name}
                </span>
                <span className="text-[#00E5FF] font-mono">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-[#03152B] border border-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#A855F7] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default SkillCard;
