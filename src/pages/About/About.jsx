import { Link } from "react-router-dom";
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
import { ReviewsSection } from "../../components/testimonial/ReviewsSection";
import { profileData } from "../../data/profile";
import { skillsData } from "../../data/skills";

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
        <section className="relative pt-4 sm:pt-8 lg:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>ABOUT SAIKAT PATRA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.15]">
                Full Stack Developer Specializing in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2787FF] to-[#A855F7]">
                  Custom Business Systems.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {profileData.aboutBio}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <NeonButton to="/contact" variant="primary" size="md">
                  Discuss Your Project
                </NeonButton>
                <NeonButton to="/projects" variant="secondary" size="md">
                  View My Work
                </NeonButton>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[360px] rounded-3xl p-1 bg-gradient-to-br from-[#00E5FF]/40 via-[#2787FF]/20 to-[#7B3CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#020B18]">
                  <img
                    src="/assets/images/saikat-hero.webp"
                    alt="Saikat Patra - About"
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
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SHORT STORY & BACKGROUND                                 */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="MY BACKGROUND"
            title="Behind the Code"
            subtitle="My philosophy, what I do, and why I focus on practical business impact."
          />

          <GlassCard className="p-6 sm:p-10 border-[#00E5FF]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-white/80 leading-relaxed">
              <div className="space-y-4">
                <p>{profileData.story[0]}</p>
                <p>{profileData.story[1]}</p>
              </div>
              <div className="space-y-4">
                <p>{profileData.story[2]}</p>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#073658]/90 via-[#072149]/90 to-[#22136f]/90 border border-[#00E5FF]/30 mt-4 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00E5FF] uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>My Development Philosophy</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                    &ldquo;Code should solve human friction and accelerate business operations. Clean architecture and modular components exist to ensure the software remains fast, dependable, and simple to maintain over time.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ======================================================== */}
        {/* PROVEN TRACK RECORD & CREDIBILITY                        */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="CREDIBILITY"
            title="By the Numbers"
            subtitle="Verified professional metrics accumulated across 7+ years of delivering software."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            <StatCard value="80+" label="Projects Completed" icon={Briefcase} />
            <StatCard value="50+" label="Happy Clients" icon={Users} />
            <StatCard value="7+" label="Years Experience" icon={Award} />
            <StatCard value="4.9" label="Google Rating (51 Reviews)" icon={Star} highlight={true} />
          </div>
        </section>

        {/* ======================================================== */}
        {/* CORE STRENGTHS / DIFFERENTIATORS                         */}
        {/* ======================================================== */}
        <section>
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
        </section>

        {/* ======================================================== */}
        {/* INTEGRATED CORE TECHNOLOGY STACK                         */}
        {/* ======================================================== */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
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
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {skillsData.coreStack.map((tech) => (
              <GlassCard
                key={tech.name}
                hoverEffect={true}
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
        </section>

        {/* ======================================================== */}
        {/* MY WORKING APPROACH (4 STEPS)                            */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="METHODOLOGY"
            title="My Working Approach"
            subtitle="A structured 4-step workflow that delivers predictability, transparency, and high quality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profileData.process.map((step) => (
              <GlassCard
                key={step.step}
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
        </section>

        {/* ======================================================== */}
        {/* REVIEWS & TESTIMONIALS                                   */}
        {/* ======================================================== */}
        <ReviewsSection
          initialCount={6}
          showFilters={true}
          badge="AUTHENTIC FEEDBACK"
          title="Client Reviews & Testimonials"
          subtitle="Real reviews and verifiable feedback from Google Business Profile and direct project clients."
        />

        {/* ======================================================== */}
        {/* FINAL CTA                                                */}
        {/* ======================================================== */}
        <section className="text-center">
          <GlassCard
            glow="both"
            className="p-8 sm:p-12 lg:p-14 border-[#00E5FF]/30 relative overflow-hidden"
          >
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/35 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET'S CONNECT</span>
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Let's Discuss How We Can Work Together
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Whether you have an established product that needs senior engineering or a new application waiting to be built, I'd love to hear about it.
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

export default About;
