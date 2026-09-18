import {
  Download,
  Award,
  CheckCircle2,
  Layers
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { GlassCard } from "../../components/ui/GlassCard";
import { SkillCard } from "../../components/skills/SkillCard";
import { skillsData } from "../../data/skills";

export const Skills = () => {
  return (
    <PageLayout
      title="Skills & Technologies | Saikat Patra"
      description="Explore the technical skills, frameworks, and architecture patterns mastered by Saikat Patra: React, Laravel, PHP, WordPress, Tailwind, MySQL, and cloud tooling."
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
                <span>MY EXPERTISE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Skills & <span className="text-gradient">Technologies</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-white/90">
                Building Modern, Scalable Web Solutions
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I combine modern technologies, clean code and creative thinking to build high-performance web applications that solve real business problems and create real impact.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                {skillsData.heroStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#03152B]/70 border border-[#00E5FF]/20 text-center"
                  >
                    <div className="text-xl sm:text-2xl font-black text-[#00E5FF]">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-white/70 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-3xl p-1 bg-gradient-to-br from-[#00E5FF]/40 via-[#2787FF]/20 to-[#7B3CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#020B18]">
                  <img
                    src="/assets/images/saikat-hero.jpg"
                    alt="Saikat Patra Developer Visual"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#020B18]/90 border-t border-[#00E5FF]/20 flex items-center justify-between">
                    <div className="text-xs font-bold text-white">Full Stack Arsenal</div>
                    <div className="text-[11px] text-[#00E5FF] font-mono">Clean Architecture</div>
                  </div>
                </div>

                {/* Floating Quote Card */}
                <div className="absolute -top-5 -right-5 sm:-right-8 p-3.5 rounded-2xl bg-[#03152B]/90 backdrop-blur-xl border border-[#A855F7]/40 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(168,85,247,0.2)] hidden sm:block">
                  <div className="text-[10px] text-white/50 italic font-mono">&ldquo;</div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    Technology <br /> Turns Ideas <br /> Into Impact
                  </div>
                  <div className="text-[10px] text-white/50 italic font-mono text-right">&rdquo;</div>
                </div>

                {/* Handwritten Note */}
                <div className="absolute -bottom-6 -left-6 font-handwriting text-2xl text-[#00E5FF]/85 -rotate-6 hidden sm:block pointer-events-none select-none">
                  Build Develop <br /> Solve Grow
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* TECHNICAL SKILLS GRID                                    */}
        {/* ======================================================== */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>TECHNICAL ARSENAL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>Technical Skills</span>
                <span className="inline-block w-8 sm:w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7B3CFF] rounded-full" />
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/70">
                A complete toolkit to design, develop, deploy and scale your digital ideas.
              </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download can be linked to your uploaded PDF in public/resume.pdf");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#03152B]/80 hover:bg-[#052A4A] border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all duration-200 self-start md:self-end"
            >
              <Download className="w-4 h-4 text-[#00E5FF]" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.categories.map((cat) => (
              <SkillCard key={cat.id} category={cat} />
            ))}

            {/* Card 8: My Core Stack Card matching mockup */}
            <GlassCard
              glow="both"
              className="p-6 sm:p-7 flex flex-col justify-between h-full border-[#00E5FF]/25 bg-gradient-to-br from-[#031c38]/70 to-[#0e0728]/70"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      My Core Stack
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-white/60 mb-5 leading-relaxed">
                  Technologies I use most often in real production projects.
                </p>

                {/* Core Stack Icons Grid */}
                <div className="grid grid-cols-4 gap-3 py-2">
                  {skillsData.coreStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-2.5 rounded-xl bg-[#020B18]/70 border border-[#00E5FF]/15 hover:border-[#00E5FF]/50 flex flex-col items-center justify-center text-center group transition-colors duration-200"
                      title={tech.name}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] mb-1 group-hover:scale-125 transition-transform" />
                      <span className="text-[10px] font-bold text-white/80 group-hover:text-white truncate w-full">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <span className="font-handwriting text-xl text-[#00E5FF]/80 select-none">
                  Tools for a Better Web
                </span>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DEVELOPMENT PROCESS                                      */}
        {/* ======================================================== */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>STRUCTURED LIFECYCLE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>Development Process</span>
                <span className="inline-block w-8 sm:w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7B3CFF] rounded-full" />
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/70">
                A structured and transparent approach from idea to launch.
              </p>
            </div>

            <div className="font-handwriting text-2xl text-[#00E5FF]/80 -rotate-3 select-none self-start md:self-end">
              Good Process Great Results
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {skillsData.process.map((step) => (
              <GlassCard
                key={step.step}
                className="p-5 flex flex-col justify-between border-[#00E5FF]/20 text-center relative group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/40 mx-auto mb-3 flex items-center justify-center font-mono font-bold text-sm text-[#00E5FF]">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-white/60 text-left">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#00E5FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* CERTIFICATIONS & LEARNING                                */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="CONTINUOUS GROWTH"
            title="Certifications & Learning"
            subtitle="I keep learning to stay updated with the latest technologies and best practices."
            actionText="View Certificates"
            actionTo="/about"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillsData.certifications.map((cert) => (
              <GlassCard key={cert.id} className="p-5 sm:p-6 border-[#00E5FF]/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00E5FF]">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-white/50">{cert.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-white/60 mb-4">{cert.issuer}</p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{cert.status}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* REAL-WORLD IMPACT CASE STUDY                             */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="CASE STUDY"
            title="Real-World Impact"
            subtitle="How my technology stack solves real client problems."
            actionText="View All Projects"
            actionTo="/projects"
          />

          <GlassCard className="p-6 sm:p-10 border-[#00E5FF]/30 bg-gradient-to-br from-[#03152B]/80 via-[#032042]/70 to-[#0e0728]/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Case Image */}
              <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-[#00E5FF]/30 relative aspect-[16/10] bg-[#020B18]">
                <img
                  src={skillsData.realWorldImpact.image}
                  alt={skillsData.realWorldImpact.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#020B18]/90 border border-[#00E5FF]/30 text-xs font-semibold text-[#00E5FF]">
                  Real Estate Platform
                </div>
              </div>

              {/* Middle Description */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-bold text-[#00E5FF] tracking-wider uppercase font-mono">
                  {skillsData.realWorldImpact.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {skillsData.realWorldImpact.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {skillsData.realWorldImpact.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {skillsData.realWorldImpact.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#020B18] text-white/80 border border-[#00E5FF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Metrics Grid */}
              <div className="lg:col-span-3 grid grid-cols-2 gap-3">
                {skillsData.realWorldImpact.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#020B18]/80 border border-[#00E5FF]/20 text-center"
                  >
                    <div className="text-lg sm:text-xl font-black text-[#00E5FF]">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-white/70 mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageLayout>
  );
};

export default Skills;
