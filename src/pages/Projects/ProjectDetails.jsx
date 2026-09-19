import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Layers
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
        <div className="max-w-3xl mx-auto px-4 text-center py-20 space-y-4">
          <h1 className="text-3xl font-bold text-white">Case Study Not Found</h1>
          <p className="text-white/60 text-sm">
            The project case study you are looking for does not exist or has been relocated.
          </p>
          <div className="pt-2">
            <NeonButton to="/projects" variant="primary">
              Return to Project Library
            </NeonButton>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Next and previous project navigation
  const prevProject =
    projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject =
    projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <PageLayout
      title={`${project.title} | Case Study | Saikat Patra`}
      description={project.shortSolution || project.description}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ======================================================== */}
        {/* BREADCRUMB & BACK BUTTON                                 */}
        {/* ======================================================== */}
        <div className="pt-2 sm:pt-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/70 hover:text-[#00E5FF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Study Library</span>
          </Link>
        </div>

        {/* ======================================================== */}
        {/* PROJECT HERO                                             */}
        {/* ======================================================== */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold tracking-wider uppercase">
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-y border-white/10 py-4 text-xs sm:text-sm text-white/75">
            {project.client && (
              <div>
                <span className="text-white/40 block text-[11px] uppercase tracking-wider">Client</span>
                <span className="text-white font-medium">{project.client}</span>
              </div>
            )}
            {project.industry && (
              <div>
                <span className="text-white/40 block text-[11px] uppercase tracking-wider">Industry</span>
                <span className="text-white font-medium">{project.industry}</span>
              </div>
            )}
            {project.role && (
              <div>
                <span className="text-white/40 block text-[11px] uppercase tracking-wider">My Role</span>
                <span className="text-white font-medium">{project.role}</span>
              </div>
            )}
          </div>

          {/* Hero Screenshot */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00E5FF]/30 aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(0,229,255,0.15)] bg-[#03152B]">
            <img
              src={project.thumbnail}
              alt={`${project.title} screenshot`}
              width="1280"
              height="720"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </section>

        {/* ======================================================== */}
        {/* QUANTITATIVE METRICS (IF AVAILABLE)                      */}
        {/* ======================================================== */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {project.metrics.map((m, idx) => (
              <GlassCard key={idx} glow="cyan" className="p-6 text-center border-[#00E5FF]/25">
                <div className="text-3xl sm:text-4xl font-black text-[#00E5FF] font-mono">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-semibold mt-1">
                  {m.label}
                </div>
              </GlassCard>
            ))}
          </section>
        )}

        {/* ======================================================== */}
        {/* PROBLEM & SOLUTION SECTION                               */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Challenge */}
          <GlassCard className="p-6 sm:p-8 border-rose-500/30  space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-2">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">
              The Problem & Operational Challenge
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {project.challenge || project.shortChallenge}
            </p>
          </GlassCard>

          {/* Engineering Solution */}
          <GlassCard className="p-6 sm:p-8 border-emerald-500/30  space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">
              The Engineering Solution
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {project.solution || project.shortSolution}
            </p>
          </GlassCard>
        </section>

        {/* ======================================================== */}
        {/* TECHNICAL ARCHITECTURE                                   */}
        {/* ======================================================== */}
        {project.architecture && (
          <section className="p-6 sm:p-8 rounded-3xl border border-[#00E5FF]/25 space-y-3">
            <div className="flex items-center gap-2 text-[#00E5FF] font-bold text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Technical Architecture</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Under The Hood
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {project.architecture}
            </p>
          </section>
        )}

        {/* ======================================================== */}
        {/* KEY FEATURES                                             */}
        {/* ======================================================== */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span>Key Features & Functional Capabilities</span>
              <span className="w-10 h-1 bg-[#00E5FF] rounded-full" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, i) => (
                <GlassCard key={i} className="p-4 sm:p-5 border-[#00E5FF]/15 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white/85 leading-relaxed">
                    {feat}
                  </span>
                </GlassCard>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* TECHNOLOGIES USED                                        */}
        {/* ======================================================== */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">
            Technologies & Tools Employed
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-xl bg-[#03152B] border border-[#00E5FF]/30 text-white text-xs sm:text-sm font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* RESULTS & BUSINESS IMPACT                                */}
        {/* ======================================================== */}
        {(project.results || project.result) && (
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#031c38]/95 to-[#0e0728]/95 border border-[#00E5FF]/35 space-y-3">
            <div className="flex items-center gap-2 text-[#00E5FF] font-bold text-xs uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Measurable Outcome</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Real Business Results
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              {project.results || project.result}
            </p>
          </section>
        )}

        {/* ======================================================== */}
        {/* NEXT & PREVIOUS NAVIGATION                               */}
        {/* ======================================================== */}
        <section className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 p-4 rounded-2xl bg-[#03152B]/60 border border-[#00E5FF]/15 hover:border-[#00E5FF]/40 text-left w-full sm:w-1/2 transition-colors min-w-0"
          >
            <ArrowLeft className="w-5 h-5 text-[#00E5FF] shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-[11px] text-white/50 uppercase tracking-wider">
                Previous Case Study
              </div>
              <div className="text-sm font-bold text-white truncate">
                {prevProject.title}
              </div>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center justify-end gap-3 p-4 rounded-2xl bg-[#03152B]/60 border border-[#00E5FF]/15 hover:border-[#00E5FF]/40 text-right w-full sm:w-1/2 transition-colors min-w-0"
          >
            <div className="min-w-0 flex-1">
              <div className="text-[11px] text-white/50 uppercase tracking-wider">
                Next Case Study
              </div>
              <div className="text-sm font-bold text-white truncate">
                {nextProject.title}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#00E5FF] shrink-0" />
          </Link>
        </section>
      </div>
    </PageLayout>
  );
};

export default ProjectDetails;
