import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { GlassCard } from "../../components/ui/GlassCard";
import { ProjectCard } from "../../components/project/ProjectCard";
import { ProjectFilter } from "../../components/project/ProjectFilter";
import { TestimonialCard } from "../../components/testimonial/TestimonialCard";
import {
  projectsData,
  projectImpactStats
} from "../../data/projects";
import { testimonialsData } from "../../data/testimonials";

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category match
      const matchesCategory =
        activeCategory === "all"
          ? true
          : activeCategory === "featured"
          ? project.featured
          : project.filterCategory === activeCategory;

      // Search match
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured 4 projects vs other projects
  const featured = filteredProjects.filter((p) => p.featured);
  const others = filteredProjects.filter((p) => !p.featured);

  return (
    <PageLayout
      title="Projects | Saikat Patra - Portfolio"
      description="Selected full stack web development projects, bespoke CRM systems, and high-performance applications built by Saikat Patra."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24 sm:space-y-32">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="relative pt-6 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>PORTFOLIO</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Projects & <span className="text-gradient">Case Studies</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-white/90">
                Selected Web Development Work
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Here are some of my recent projects, ranging from business websites to custom web applications. Each project is built with a focus on performance, user experience and real business impact.
              </p>

              {/* Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
                {["Real Projects", "Happy Clients", "Modern Tech Stack", "Business Focus"].map(
                  (chip) => (
                    <div
                      key={chip}
                      className="px-3.5 py-1.5 rounded-lg bg-[#03152B]/80 border border-[#00E5FF]/20 text-white/80 text-xs font-medium"
                    >
                      {chip}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-3xl p-1 bg-gradient-to-br from-[#00E5FF]/40 via-[#2787FF]/20 to-[#7B3CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#020B18]">
                  <img
                    src="/src/assets/images/saikat-hero.jpg"
                    alt="Saikat Patra Portfolio Visual"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#020B18]/90 border-t border-[#00E5FF]/20 flex items-center justify-between">
                    <div className="text-xs font-bold text-white">Engineering Excellence</div>
                    <div className="text-[11px] text-[#00E5FF] font-mono">500+ Delivered</div>
                  </div>
                </div>

                {/* Floating Quote */}
                <div className="absolute -top-5 -right-5 sm:-right-8 p-3.5 rounded-2xl bg-[#03152B]/90 backdrop-blur-xl border border-[#A855F7]/40 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(168,85,247,0.2)] hidden sm:block">
                  <div className="text-[10px] text-white/50 italic font-mono">&ldquo;</div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    Every Project <br /> Solves a Real <br /> Problem
                  </div>
                  <div className="text-[10px] text-white/50 italic font-mono text-right">&rdquo;</div>
                </div>

                {/* Handwritten text */}
                <div className="absolute -bottom-6 -left-6 font-handwriting text-2xl text-[#00E5FF]/85 -rotate-6 hidden sm:block pointer-events-none select-none">
                  Turning Ideas Into <br /> Real Web Solutions
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FILTER & SEARCH                                          */}
        {/* ======================================================== */}
        <section>
          <ProjectFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Results count feedback */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-[#03152B]/40 rounded-3xl border border-[#00E5FF]/15">
              <h3 className="text-xl font-bold text-white">No projects found</h3>
              <p className="text-sm text-white/60 mt-2">
                Try searching for a different technology or category keyword.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Featured Projects Grid */}
              {featured.length > 0 && (
                <div>
                  <SectionHeading
                    badge="FEATURED CASE STUDIES"
                    title="Featured Projects"
                    subtitle="In-depth case studies of some of my best client work."
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featured.map((p) => (
                      <ProjectCard key={p.id} project={p} featuredLayout={true} />
                    ))}
                  </div>
                </div>
              )}

              {/* More Projects Grid */}
              {others.length > 0 && (
                <div>
                  <SectionHeading
                    badge="MORE WORK"
                    title="More Projects"
                    subtitle="A selection of other websites and web applications I've worked on."
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {others.map((p) => (
                      <ProjectCard key={p.id} project={p} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ======================================================== */}
        {/* HOW I TURN PROJECTS INTO SUCCESS                         */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Steps (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3">
                <span>EXECUTION BLUEPRINT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                How I Turn Projects Into Success
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                A simple, proven process from idea to a fully functional solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {[
                { step: "01", title: "Discover", desc: "Understand your goals, requirements and target audience." },
                { step: "02", title: "Plan", desc: "Create strategy, tech stack and project roadmap." },
                { step: "03", title: "Develop", desc: "Build, test and iterate with regular updates." },
                { step: "04", title: "Deploy", desc: "Launch and provide ongoing support and maintenance." }
              ].map((s) => (
                <GlassCard key={s.step} className="p-5 border-[#00E5FF]/20 text-center">
                  <div className="w-9 h-9 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/40 text-[#00E5FF] font-mono font-bold text-xs mx-auto mb-2 flex items-center justify-center">
                    {s.step}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-[11px] text-white/60 leading-relaxed">{s.desc}</p>
                </GlassCard>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00E5FF] hover:underline"
              >
                <span>Let's Work Together on Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Project Impact in Numbers (Cols 9-12) */}
          <div className="lg:col-span-4">
            <GlassCard glow="both" className="p-6 sm:p-8 h-full border-[#00E5FF]/30 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Project Impact in Numbers
                </h4>
                <p className="text-xs text-white/60 mb-6">
                  Measurable track record delivering results across hundreds of deployments.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {projectImpactStats.map((stat, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-[#020B18]/70 border border-[#00E5FF]/15 text-center">
                      <div className="text-2xl font-black text-[#00E5FF] font-mono">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-white/70 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <span className="text-xs text-white/50">
                  Reliable engineering for international clients
                </span>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ======================================================== */}
        {/* TESTIMONIALS                                             */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="PROJECT FEEDBACK"
            title="What Clients Say About My Projects"
            subtitle="Real feedback from real clients who trust me with their business applications."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((review) => (
              <TestimonialCard key={review.id} testimonial={review} />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Projects;
