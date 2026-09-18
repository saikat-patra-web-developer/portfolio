import {
  Award,
  Briefcase,
  Users,
  Smile,
  Globe2,
  CheckCircle2,
  HeartHandshake,
  MessageSquare,
  ShieldCheck,
  Clock,
  Lightbulb,
  Maximize2
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { GlassCard } from "../../components/ui/GlassCard";
import { NeonButton } from "../../components/ui/NeonButton";
import { StatCard } from "../../components/ui/StatCard";
import { TestimonialCard } from "../../components/testimonial/TestimonialCard";
import { profileData } from "../../data/profile";
import { testimonialsData } from "../../data/testimonials";

const valueIcons = [
  HeartHandshake,
  MessageSquare,
  ShieldCheck,
  Clock,
  Lightbulb,
  Maximize2
];

export const About = () => {
  return (
    <PageLayout
      title="About Saikat Patra | Full Stack Developer"
      description="Learn about Saikat Patra, a passionate full stack developer from Howrah, India with 7+ years of experience engineering custom web applications, CRMs, and APIs."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="relative pt-6 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>ABOUT ME</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                About <span className="text-gradient">Me</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-white/90">
                A passionate full stack developer from Howrah, India
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Specializing in building modern web applications, custom CRM platforms, robust WordPress websites, API integrations, and scalable digital products that deliver real measurable business impact.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <NeonButton to="/contact" variant="primary">
                  Get in Touch
                </NeonButton>
                <NeonButton to="/projects" variant="secondary" icon={false}>
                  Explore Projects
                </NeonButton>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-3xl p-1 bg-gradient-to-br from-[#00E5FF]/40 via-[#2787FF]/20 to-[#7B3CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#020B18]">
                  <img
                    src="/assets/images/saikat-hero.webp"
                    alt="Saikat Patra - About"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#020B18]/90 border-t border-[#00E5FF]/20 flex items-center justify-between">
                    <div className="text-xs font-bold text-white">Saikat Patra</div>
                    <div className="text-[11px] text-[#00E5FF] font-mono">Howrah, West Bengal</div>
                  </div>
                </div>

                {/* Floating pill badges matching specs */}
                <div className="absolute -top-4 -left-6 px-3 py-1.5 rounded-xl bg-gradient-to-br from-[#073658] via-[#072149] to-[#22136f] border border-[#00E5FF]/30 text-white text-xs font-semibold shadow-lg hidden sm:block">
                  Always Learning Always Improving
                </div>

                <div className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl bg-gradient-to-br from-[#073658] via-[#072149] to-[#22136f] border border-[#A855F7]/40 text-[#00E5FF] text-xs font-semibold shadow-lg hidden sm:block">
                  Business Focused
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* MY STORY (2-COLUMN EDITORIAL)                            */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="MY STORY"
            title="Behind the Code"
            subtitle="My journey, technical philosophy, and why I care deeply about building software that actually works."
          />

          <GlassCard className="p-5 sm:p-8 lg:p-10 border-[#00E5FF]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-white/80 leading-relaxed">
              <div className="space-y-4">
                <p>
                  {profileData.story[0]}
                </p>
                <p>
                  {profileData.story[1]}
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  {profileData.story[2]}
                </p>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#073658]/90 via-[#072149]/90 to-[#22136f]/90 border border-[#00E5FF]/30 mt-4 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00E5FF] uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                    <span>Philosophy</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/85 italic leading-relaxed">
                    &ldquo;Code should never be written for the sake of code. Great software solves human friction, accelerates workflows, and generates clear return on investment.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ======================================================== */}
        {/* MY JOURNEY (HORIZONTAL TIMELINE)                         */}
        {/* ======================================================== */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>CAREER MILESTONES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>My Journey</span>
                <span className="inline-block w-8 sm:w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7B3CFF] rounded-full" />
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/70">
                How I evolved from building my first dynamic website into engineering full-stack platforms.
              </p>
            </div>

            <div className="font-handwriting text-2xl text-[#00E5FF]/80 -rotate-3 select-none self-start md:self-end">
              Continuous Growth
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 xl:gap-4">
            {profileData.journey.map((item) => (
              <GlassCard
                key={item.year}
                glow="cyan"
                className="p-5 flex flex-col justify-between border-[#00E5FF]/20 text-center relative group"
              >
                <div>
                  {/* Step node indicator matching Services process badge */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 mx-auto mb-3 flex items-center justify-center font-mono font-bold text-xs text-[#00E5FF] group-hover:scale-110 group-hover:border-[#00E5FF] transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    {item.year}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors mt-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-white/60 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* CORE VALUES                                              */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="VALUES & PRINCIPLES"
            title="My Core Values"
            subtitle="The fundamental standards I uphold on every single project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {profileData.values.map((val, idx) => {
              const IconComp = valueIcons[idx] || ShieldCheck;
              return (
                <GlassCard key={val.title} glow="cyan" className="p-5 sm:p-6 lg:p-7 border-[#00E5FF]/15 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/15 to-[#7B3CFF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 group-hover:border-[#00E5FF] transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.15)] mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {val.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* WHY WORK WITH ME                                         */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="ADVANTAGES"
            title="Why Work With Me?"
            subtitle="Combining business intelligence with senior technical execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {profileData.whyWorkWithMe.map((item) => (
              <div
                key={item.title}
                className="p-5 sm:p-6 rounded-2xl bg-[#03152B]/70 border border-[#00E5FF]/15 space-y-2 hover:border-[#00E5FF]/35 hover:shadow-[0_0_25px_rgba(0,229,255,0.1)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] group-hover:scale-110 transition-transform" />
                  <h3 className="text-base font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* MY APPROACH                                              */}
        {/* ======================================================== */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>METHODOLOGY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>My Approach</span>
                <span className="inline-block w-8 sm:w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7B3CFF] rounded-full" />
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/70">
                A structured 5-step methodology delivering predictability and excellence.
              </p>
            </div>

            <div className="font-handwriting text-2xl text-[#00E5FF]/80 -rotate-3 select-none self-start md:self-end">
              From Concept to Launch
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {profileData.approach.map((app) => (
              <GlassCard
                key={app.step}
                className="p-5 sm:p-6 border-[#00E5FF]/20 text-center flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 mx-auto mb-3 flex items-center justify-center font-mono font-bold text-sm text-[#00E5FF] group-hover:scale-110 group-hover:border-[#00E5FF] transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    {app.step}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-2">
                    {app.title}
                  </h4>
                  <p className="text-xs text-white/65 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* BY THE NUMBERS                                           */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="PROVEN TRACK RECORD"
            title="By The Numbers"
            subtitle="Proven metrics accumulated over 7+ years of professional development."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 [&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1 lg:[&>*:last-child]:col-span-1">
            <StatCard value="7+" label="Years Experience" icon={Award} />
            <StatCard value="500+" label="Projects Completed" icon={Briefcase} />
            <StatCard value="100+" label="Happy Clients" icon={Users} />
            <StatCard value="99%" label="Client Satisfaction" icon={Smile} highlight={true} />
            <StatCard value="20+" label="Industries Served" icon={Globe2} />
          </div>
        </section>

        {/* ======================================================== */}
        {/* TESTIMONIALS                                             */}
        {/* ======================================================== */}
        <section id="testimonials">
          <SectionHeading
            badge="TESTIMONIALS"
            title="What Clients Say"
            subtitle="Genuine client feedback on working together."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonialsData.map((review) => (
              <TestimonialCard key={review.id} testimonial={review} />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
