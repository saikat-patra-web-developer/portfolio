import { Sparkles, Layers } from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { SkillCard } from "../../components/skills/SkillCard";
import { GlassCard } from "../../components/ui/GlassCard";
import { NeonButton } from "../../components/ui/NeonButton";
import { skillsData } from "../../data/skills";

export const Skills = () => {
  return (
    <PageLayout
      title="Technical Skills & Architecture | Saikat Patra"
      description="Full stack technical skills, engineering frameworks, and architecture specializations mastered by Saikat Patra: React, Next.js, Laravel, PHP, MySQL, and Tailwind CSS."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="relative pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Skills, Frameworks &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2787FF] to-[#A855F7]">
              Architecture Patterns.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            I believe in deep practical mastery over arbitrary percentages. Every framework and tool in my stack has been proven across hundreds of real-world production deployments.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            {skillsData.heroStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-[#00E5FF]/20 text-center"
              >
                <div className="text-xl sm:text-2xl font-black text-[#00E5FF] font-mono">
                  {stat.value}
                </div>
                <div className="text-[11px] text-white/70 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SKILLS CLUSTERS GRID                                     */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="TECHNOLOGY CLUSTERS"
            title="Core Technical Arsenal"
            subtitle="Organized by specialization with an emphasis on production capability and maintainability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillsData.clusters.map((cluster) => (
              <SkillCard key={cluster.id} cluster={cluster} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* CORE PRODUCTION STACK SUMMARY                            */}
        {/* ======================================================== */}
        <section>
          <GlassCard className="p-6 sm:p-10 border-[#00E5FF]/25 ">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  My Primary Production Stack
                </h2>
                <p className="text-xs text-white/60">
                  Technologies I leverage daily for commercial applications.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              {skillsData.coreStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl bg-[#020B18]/70 border border-white/10 flex flex-col items-center justify-center text-center"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] mb-2" />
                  <strong className="text-sm font-bold text-white">
                    {tech.name}
                  </strong>
                  <span className="text-[11px] text-white/60 font-mono mt-0.5">
                    {tech.role}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* ======================================================== */}
        {/* FINAL CTA                                                */}
        {/* ======================================================== */}
        <section className="text-center">
          <GlassCard
            glow="both"
            className="p-8 sm:p-12 border-[#00E5FF]/30 relative overflow-hidden"
          >
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/35 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TECHNICAL COLLABORATION</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Have a Technical Project in Mind?
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Let's discuss which architecture, database schema, and frontend framework best fit your business objectives.
              </p>

              <div className="pt-3">
                <NeonButton to="/contact" variant="primary" size="lg">
                  Discuss Your Project
                </NeonButton>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageLayout>
  );
};

export default Skills;
