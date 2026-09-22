import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { ProjectCard } from "../../components/project/ProjectCard";
import { Reveal, Stagger, StaggerItem } from "../../components/ui/Reveal";
import {
  projectsData,
  projectImpactStats
} from "../../data/projects";
import { staggerContainer, staggerItem } from "../../animation/motion";

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
        <motion.section
          className="relative pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08, 0.08)}
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span>CASE STUDY LIBRARY</span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Selected Projects &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2787FF] to-[#A855F7]">
              Commercial Solutions.
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg text-white/80 leading-relaxed"
          >
            A library of real-world web applications, custom CRM platforms, and high-performance business websites. Each case study details the client's challenge, the technical solution, and measurable business outcomes.
          </motion.p>

          {/* NDA note */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-start gap-2 px-4 py-2.5 rounded-xl bg-[#00E5FF]/[0.06] border border-[#00E5FF]/20 text-left max-w-2xl mx-auto"
          >
            <Lock className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed">
              <span className="font-semibold text-white/90">Note:</span> Not all projects can be showcased here — some are under NDA (Non-Disclosure Agreement) and cannot be publicly disclosed. Detailed walkthroughs of those can be shared privately on request.
            </p>
          </motion.div>
        </motion.section>

        {/* ======================================================== */}
        {/* PROJECT GRID                                             */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={(idx % 3) * 0.09}
              />
            ))}
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* PROOF METRICS BANNER                                     */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.2}>
          <Stagger
            as="div"
            className="p-8 sm:p-10 rounded-3xl border border-[#00E5FF]/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            amount={0.25}
            stagger={0.07}
          >
            {projectImpactStats.map((stat, i) => (
              <StaggerItem key={i} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00E5FF] font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-white/70 font-medium">
                  {stat.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </PageLayout>
  );
};

export default Projects;
