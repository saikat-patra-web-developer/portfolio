import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Layers,
  Calendar,
  User,
  Building2,
  Tag,
  ChevronRight
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { GlassCard } from "../../components/ui/GlassCard";
import { NeonButton } from "../../components/ui/NeonButton";
import { projectsData } from "../../data/projects";

export const ProjectDetails = () => {
  const { slug } = useParams();

  const slugAliases = {
    "custom-crm-system": "quote-my-blinds",
    "ivc-valves-client-project": "sspr-valve-manufacturing",
    "real-estate-listing-platform": "dream-big-group"
  };
  const resolvedSlug = slugAliases[slug] || slug;

  const projectIndex = projectsData.findIndex((p) => p.slug === resolvedSlug);
  const project = projectsData[projectIndex];

  if (!project) {
    return (
      <PageLayout title="Case Study Not Found | Saikat Patra">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 space-y-4">
          <h1 className="text-3xl font-bold text-white">Case Study Not Found</h1>
          <p className="text-white/60 text-sm">
            The project case study you are looking for does not exist or has been relocated.
          </p>
          <div className="pt-2 flex justify-center">
            <NeonButton to="/projects" variant="primary">
              Return to Project Library
            </NeonButton>
          </div>
        </div>
      </PageLayout>
    );
  }

  const prevProject = projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <PageLayout
      title={`${project.title} | Case Study | Saikat Patra`}
      description={project.shortSolution || project.description}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-14">

        {/* ============================================================ */}
        {/* BREADCRUMB                                                    */}
        {/* ============================================================ */}
        <nav className="flex items-center gap-1.5 text-xs text-white/45 pt-1">
          <Link to="/" className="hover:text-[#00E5FF] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link to="/projects" className="hover:text-[#00E5FF] transition-colors">Projects</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-white/70 truncate">{project.title}</span>
        </nav>

        {/* ============================================================ */}
        {/* HERO — Left: text  |  Right: image                           */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT — Title block */}
          <div className="space-y-6">
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[11px] font-bold tracking-widest uppercase">
              {project.category}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {project.description}
            </p>

            {/* Meta — inline row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2 border-t border-white/10">
              {project.client && (
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-white/38 uppercase tracking-wider">Client</div>
                    <div className="text-sm font-semibold text-white leading-snug">{project.client}</div>
                  </div>
                </div>
              )}
              {project.industry && (
                <div className="flex items-start gap-2.5">
                  <Tag className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-white/38 uppercase tracking-wider">Industry</div>
                    <div className="text-sm font-semibold text-white leading-snug">{project.industry}</div>
                  </div>
                </div>
              )}
              {project.role && (
                <div className="flex items-start gap-2.5">
                  <User className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-white/38 uppercase tracking-wider">My Role</div>
                    <div className="text-sm font-semibold text-white leading-snug">{project.role}</div>
                  </div>
                </div>
              )}
              {project.year && (
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-white/38 uppercase tracking-wider">Year</div>
                    <div className="text-sm font-semibold text-white">{project.year}</div>
                  </div>
                </div>
              )}
            </div>


          </div>

          {/* RIGHT — Screenshot */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#00E5FF]/25 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(0,229,255,0.12)] bg-[#03152B]">
            <img
              src={project.thumbnail}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </section>


        {/* ============================================================ */}
        {/* CHALLENGE & SOLUTION                                          */}
        {/* ============================================================ */}
        <section className="space-y-5">
          <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
            Challenge &amp; Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Challenge */}
            <GlassCard className="p-6 border-rose-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">The Problem</h3>
              </div>
              <p className="text-sm text-white/72 leading-relaxed">
                {project.challenge || project.shortChallenge}
              </p>
            </GlassCard>

            {/* Solution */}
            <GlassCard className="p-6 border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">The Solution</h3>
              </div>
              <p className="text-sm text-white/72 leading-relaxed">
                {project.solution || project.shortSolution}
              </p>
            </GlassCard>
          </div>
        </section>

        {/* ============================================================ */}
        {/* KEY FEATURES                                                  */}
        {/* ============================================================ */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="space-y-5">
            <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#03152B]/70 border border-[#00E5FF]/10 hover:border-[#00E5FF]/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/78 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* TECHNICAL ARCHITECTURE                                        */}
        {/* ============================================================ */}
        {project.architecture && (
          <section className="space-y-5">
            <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
              Technical Architecture
            </h2>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0d1a30]/90 to-[#0b0720]/90 border border-[#7B3CFF]/25 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#7B3CFF]/08 blur-3xl pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7B3CFF]/20 border border-[#7B3CFF]/35 flex items-center justify-center text-[#A855F7] shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">Under The Hood</h3>
                  <p className="text-sm text-white/72 leading-relaxed">{project.architecture}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* BUSINESS IMPACT                                               */}
        {/* ============================================================ */}
        {(project.results || project.result) && (
          <section className="space-y-5">
            <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
              Business Impact
            </h2>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#031c38]/90 to-[#050d1a]/90 border border-[#00E5FF]/25 overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#00E5FF]/08 blur-3xl pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/12 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0 mt-0.5">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">Real Business Results</h3>
                  <p className="text-sm sm:text-base text-white/78 leading-relaxed">
                    {project.results || project.result}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* TECHNOLOGIES                                                  */}
        {/* ============================================================ */}
        <section className="space-y-5">
          <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
            Technologies &amp; Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-lg bg-[#03152B] border border-[#00E5FF]/20 hover:border-[#00E5FF]/50 text-white/85 text-xs font-semibold transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* PREV / NEXT NAVIGATION                                        */}
        {/* ============================================================ */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="group flex items-center gap-4 p-5 rounded-2xl bg-[#03152B]/50 border border-white/10 hover:border-[#00E5FF]/40 hover:bg-[#031c38]/60 transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] shrink-0 group-hover:bg-[#00E5FF]/20 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-white/38 uppercase tracking-widest mb-0.5">Previous</div>
              <div className="text-sm font-bold text-white truncate group-hover:text-[#00E5FF] transition-colors">
                {prevProject.title}
              </div>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-end gap-4 p-5 rounded-2xl bg-[#03152B]/50 border border-white/10 hover:border-[#00E5FF]/40 hover:bg-[#031c38]/60 transition-all duration-300 text-right"
          >
            <div className="min-w-0">
              <div className="text-[10px] text-white/38 uppercase tracking-widest mb-0.5">Next</div>
              <div className="text-sm font-bold text-white truncate group-hover:text-[#00E5FF] transition-colors">
                {nextProject.title}
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] shrink-0 group-hover:bg-[#00E5FF]/20 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

      </div>
    </PageLayout>
  );
};

export default ProjectDetails;
