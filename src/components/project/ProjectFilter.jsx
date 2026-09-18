import React from "react";
import { Search } from "lucide-react";
import { projectCategories } from "../../data/projects";

export const ProjectFilter = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                isActive
                  ? "bg-gradient-to-r from-[#2787FF] to-[#00E5FF] text-white shadow-[0_0_20px_rgba(0,229,255,0.4)] border border-white/25 scale-[1.02]"
                  : "bg-[#03152B]/80 text-white/70 hover:text-white hover:bg-[#052A4A]/80 border border-[#00E5FF]/15"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#03152B]/80 border border-[#00E5FF]/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectFilter;
