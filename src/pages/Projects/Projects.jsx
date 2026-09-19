import { PageLayout } from "../../components/layout/PageLayout";
import { ProjectCard } from "../../components/project/ProjectCard";
import {
  projectsData,
  projectImpactStats
} from "../../data/projects";

export const Projects = () => {
  return (
    <PageLayout
      title="Case Study Library & Web Projects | Saikat Patra"
      description="Explore full-stack case studies, custom CRM systems, e-commerce platforms, and high-performance business applications built by Saikat Patra."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="relative pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span>CASE STUDY LIBRARY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Selected Projects &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2787FF] to-[#A855F7]">
              Commercial Solutions.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            A library of real-world web applications, custom CRM platforms, and high-performance business websites. Each case study details the client's challenge, the technical solution, and measurable business outcomes.
          </p>
        </section>

        {/* ======================================================== */}
        {/* PROJECT GRID                                             */}
        {/* ======================================================== */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* PROOF METRICS BANNER                                     */}
        {/* ======================================================== */}
        <section>
          <div className="p-8 sm:p-10 rounded-3xl border border-[#00E5FF]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {projectImpactStats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00E5FF] font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Projects;
