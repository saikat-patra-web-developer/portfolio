import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Building,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { GlassCard } from "../../components/ui/GlassCard";
import { NeonButton } from "../../components/ui/NeonButton";
import { projectsData } from "../../data/projects";

export const ProjectDetails = () => {
  const { slug } = useParams();

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return (
      <PageLayout title="Project Not Found | Saikat Patra">
        <div className="max-w-4xl mx-auto px-4 text-center py-20">
          <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
          <p className="text-white/60 mt-3">
            The project case study you are looking for does not exist or has been relocated.
          </p>
          <div className="mt-6">
            <NeonButton to="/projects" variant="primary">
              Back to Projects
            </NeonButton>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Next and previous project calculation
  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  return (
    <PageLayout
      title={`${project.title} | Case Study - Saikat Patra`}
      description={project.description}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
        {/* Back Link */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00E5FF] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-[#7B3CFF]/20 text-[#A855F7] border border-[#A855F7]/40">
                Featured Case Study
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Metadata Pills */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-white/70 border-y border-white/10 py-4">
            {project.client && (
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-white/50">Client:</span>
                <span className="text-white font-medium">{project.client}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-white/50">Timeline:</span>
                <span className="text-white font-medium">{project.year}</span>
              </div>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#00E5FF] hover:underline font-medium"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00E5FF]/30 aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.15)] bg-[#03152B]">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </section>

        {/* ======================================================== */}
        {/* METRICS ROW (IF AVAILABLE)                               */}
        {/* ======================================================== */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {project.metrics.map((m, idx) => (
              <GlassCard key={idx} glow="cyan" className="p-6 text-center border-[#00E5FF]/20">
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
        {/* CHALLENGE & SOLUTION                                     */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge */}
          <GlassCard className="p-6 sm:p-8 border-[#00E5FF]/20">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              The Challenge
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              {project.challenge ||
                "Legacy software and manual operations caused severe bottlenecks, customer abandonment, and lack of real-time pipeline visibility."}
            </p>
          </GlassCard>

          {/* Solution */}
          <GlassCard className="p-6 sm:p-8 border-[#00E5FF]/20">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              The Engineering Solution
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              {project.solution ||
                "Architected a custom full-stack web application tailored precisely to operational workflows, leveraging modern reactive state and performant backend APIs."}
            </p>
          </GlassCard>
        </section>

        {/* ======================================================== */}
        {/* KEY FEATURES                                             */}
        {/* ======================================================== */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span>Key Features & Capabilities</span>
              <span className="w-10 h-1 bg-[#00E5FF] rounded-full" />
            </h3>

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
          <h3 className="text-xl font-bold text-white">
            Technologies & Tools Used
          </h3>
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
        {project.results && (
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#031c38]/90 to-[#0e0728]/90 border border-[#00E5FF]/35">
            <div className="flex items-center gap-3 text-[#00E5FF] mb-2 font-bold text-sm uppercase tracking-wider">
              <TrendingUp className="w-5 h-5" />
              <span>Measurable Outcome</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Real Business Results
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {project.results}
            </p>
          </section>
        )}

        {/* ======================================================== */}
        {/* NEXT & PREVIOUS NAVIGATION                               */}
        {/* ======================================================== */}
        <section className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 p-4 rounded-2xl bg-[#03152B]/60 border border-[#00E5FF]/15 hover:border-[#00E5FF]/40 text-left w-full sm:w-1/2 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#00E5FF] shrink-0" />
            <div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider">
                Previous Project
              </div>
              <div className="text-sm font-bold text-white truncate">
                {prevProject.title}
              </div>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center justify-end gap-3 p-4 rounded-2xl bg-[#03152B]/60 border border-[#00E5FF]/15 hover:border-[#00E5FF]/40 text-right w-full sm:w-1/2 transition-colors"
          >
            <div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider">
                Next Project
              </div>
              <div className="text-sm font-bold text-white truncate">
                {nextProject.title}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#00E5FF] shrink-0" />
          </Link>
        </section>

        {/* CTA */}
        <section className="text-center pt-6">
          <GlassCard className="p-8 sm:p-12 border-[#00E5FF]/30">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Interested in a Similar Solution?
            </h3>
            <p className="text-sm text-white/70 max-w-xl mx-auto mt-2 mb-6">
              Let's talk about your business requirements and how we can architect a scalable solution for you.
            </p>
            <NeonButton to="/contact" variant="primary" size="lg">
              Start a Conversation
            </NeonButton>
          </GlassCard>
        </section>
      </div>
    </PageLayout>
  );
};

export default ProjectDetails;
