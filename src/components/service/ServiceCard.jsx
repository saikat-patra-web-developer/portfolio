import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Database,
  Globe,
  Link as LinkIcon,
  ShoppingCart,
  Settings,
  Bot,
  Layout,
  Check,
  ArrowRight
} from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

const iconMap = {
  code: Code,
  database: Database,
  wordpress: Globe,
  link: LinkIcon,
  "shopping-cart": ShoppingCart,
  settings: Settings,
  bot: Bot,
  layout: Layout
};

export const ServiceCard = ({ service }) => {
  const { number, title, shortDesc, features = [], icon, id } = service;
  const IconComponent = iconMap[icon] || Code;

  return (
    <GlassCard
      glow="cyan"
      className="p-6 sm:p-7 flex flex-col justify-between h-full border-[#00E5FF]/20 group"
    >
      <div>
        {/* Header with Icon and Service Number */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/15 to-[#7B3CFF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 group-hover:border-[#00E5FF] transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <IconComponent className="w-6 h-6" />
          </div>
          {number && (
            <span className="text-sm font-mono font-bold text-white/30 group-hover:text-[#00E5FF]/70 transition-colors duration-200">
              {number}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-200 mb-2.5">
          {title}
        </h3>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-5">
          {shortDesc}
        </p>

        {/* Features bullet list with checkmarks */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs sm:text-sm text-white/80"
            >
              <Check className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action button */}
      <div className="pt-4 border-t border-white/5">
        <Link
          to={`/contact?service=${id}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00E5FF] group-hover:text-white transition-colors duration-200"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </GlassCard>
  );
};

export default ServiceCard;
