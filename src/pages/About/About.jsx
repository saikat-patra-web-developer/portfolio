import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Users,
  Star,
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { GlassCard } from "../../components/ui/GlassCard";
import { NeonButton } from "../../components/ui/NeonButton";
import { StatCard } from "../../components/ui/StatCard";
import { Reveal } from "../../components/ui/Reveal";
import Reviews from "../../components/testimonial/Reviews";
import { profileData } from "../../data/profile";
import { skillsData } from "../../data/skills";
import {
  staggerContainer,
  staggerItem,
  staggerDelay
} from "../../animation/motion";

export const About = () => {
  return (
    <PageLayout
      title="About Saikat Patra | Full Stack Web Developer"
      description="Learn about Saikat Patra, a Full Stack Web Developer with 7+ years of experience engineering custom web applications, bespoke CRM platforms, and business automation."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* ======================================================== */}
        {/* HERO / INTRODUCTION                                      */}
        {/* ======================================================== */}
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
            <span>ABOUT SAIKAT PATRA</span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Full Stack Developer Specializing in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2787FF] to-[#A855F7]">
              Custom Business Systems.
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            {profileData.aboutBio}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70"
          >
            {["7+ Years Experience", "80+ Projects Completed", "Direct Senior Engineer", "Based in Howrah, India"].map((item) => (
              <span key={item} className="px-3 py-1 rounded-full bg-[#03152B] border border-white/10">
                &bull; {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="pt-3 flex flex-wrap items-center justify-center gap-3"
          >
            <NeonButton to="/contact" variant="primary" size="md">
              Discuss Your Project
            </NeonButton>
            <NeonButton to="/projects" variant="secondary" size="md">
              View My Work
            </NeonButton>
          </motion.div>
        </motion.section>

        {/* ======================================================== */}
        {/* SHORT STORY & BACKGROUND                                 */}
        {/* ======================================================== */}
        <Reveal as="section" id="story" amount={0.1}>
          <SectionHeading
            badge="MY BACKGROUND"
            title="Behind the Code"
            subtitle="My philosophy, what I do, and why I focus on practical business impact."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Visual Photo Card (Cols 1-5) */}
            <Reveal as="div" delay={0.08} amount={0.25} className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] rounded-3xl p-1 bg-gradient-to-br from-[#00E5FF]/40 via-[#2787FF]/20 to-[#7B3CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#020B18]">
                  <img
                    src="/assets/images/saikat-hero.webp"
                    alt="Saikat Patra - Full Stack Engineer"
                    width="600"
                    height="700"
                    fetchPriority="high"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#020B18]/95 border-t border-[#00E5FF]/20 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Saikat Patra</div>
                      <div className="text-[11px] text-[#00E5FF] font-mono">Full Stack Engineer</div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-white/60 font-mono">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      <span>Howrah, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Story & Philosophy (Cols 6-12) */}
            <div className="lg:col-span-7">
              <GlassCard className="p-6 sm:p-8 border-[#00E5FF]/20 space-y-4">
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">{profileData.story[0]}</p>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">{profileData.story[1]}</p>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">{profileData.story[2]}</p>

                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#073658]/90 via-[#072149]/90 to-[#22136f]/90 border border-[#00E5FF]/30 mt-4 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00E5FF] uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>My Development Philosophy</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                    &ldquo;Code should solve human friction and accelerate business operations. Clean architecture and modular components exist to ensure the software remains fast, dependable, and simple to maintain over time.&rdquo;
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* PROVEN TRACK RECORD & CREDIBILITY                        */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.1}>
          <SectionHeading
            badge="CREDIBILITY"
            title="By the Numbers"
            subtitle="Verified professional metrics accumulated across 7+ years of delivering software."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            <StatCard value="80+" label="Projects Completed" icon={Briefcase} delay={staggerDelay(0, 4)} />
            <StatCard value="50+" label="Happy Clients" icon={Users} delay={staggerDelay(1, 4)} />
            <StatCard value="7+" label="Years Experience" icon={Award} delay={staggerDelay(2, 4)} />
            <StatCard value="4.9" label="Google Rating (51 Reviews)" icon={Star} highlight={true} delay={staggerDelay(3, 4)} />
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* CORE STRENGTHS / DIFFERENTIATORS                         */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.1}>
          <SectionHeading
            badge="STRENGTHS"
            title="Why Work With Me"
            subtitle="A collaborative, senior engineering approach centered on your business outcomes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profileData.differentiators.map((item, idx) => (
              <GlassCard
                key={item.title}
                glow="cyan"
                delay={staggerDelay(idx, 4)}
                className="p-6 border-[#00E5FF]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 flex items-center justify-center font-mono font-bold text-sm text-[#00E5FF] mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* INTEGRATED CORE TECHNOLOGY STACK                         */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.1}>
          <Reveal amount={0.3} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3">
                <span>TECHNICAL CAPABILITIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>Core Technology Stack</span>
                <span className="inline-block w-8 sm:w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7B3CFF] rounded-full" />
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-white/70">
                A focused, production-proven stack chosen for speed, reliability, and long-term maintainability.
              </p>
            </div>

            <Link
              to="/skills"
              className="text-xs sm:text-sm font-semibold text-[#00E5FF] hover:underline inline-flex items-center gap-1 self-start md:self-end"
            >
              <span>View Full Technical Arsenal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {skillsData.coreStack.map((tech, idx) => (
              <GlassCard
                key={tech.name}
                hoverEffect={true}
                delay={staggerDelay(idx, 4)}
                className="p-4 border-[#00E5FF]/20 text-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] mx-auto mb-2" />
                <strong className="text-sm font-bold text-white block">
                  {tech.name}
                </strong>
                <span className="text-[11px] text-white/60 font-mono">
                  {tech.role}
                </span>
              </GlassCard>
            ))}
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* MY WORKING APPROACH (4 STEPS)                            */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.1}>
          <SectionHeading
            badge="METHODOLOGY"
            title="My Working Approach"
            subtitle="A structured 4-step workflow that delivers predictability, transparency, and high quality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profileData.process.map((step, idx) => (
              <GlassCard
                key={step.step}
                delay={staggerDelay(idx, 4)}
                className="p-6 text-center border-[#00E5FF]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 mx-auto mb-3.5 flex items-center justify-center font-mono font-bold text-sm text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#00E5FF] mb-2">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-white/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* REVIEWS & TESTIMONIALS                                   */}
        {/* ======================================================== */}
        <Reviews />
      </div>
    </PageLayout>
  );
};

export default About;
