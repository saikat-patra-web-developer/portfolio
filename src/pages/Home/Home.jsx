import { Link } from "react-router-dom";
import {
  Play,
  Sparkles,
  MapPin,
  CheckCircle,
  Clock,
  HeartHandshake,
  MessageSquare,
  Award,
  ShieldCheck,
  Briefcase,
  Users,
  Smile
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { NeonButton } from "../../components/ui/NeonButton";
import { StatCard } from "../../components/ui/StatCard";
import { ProjectCard } from "../../components/project/ProjectCard";
import { ServiceCard } from "../../components/service/ServiceCard";
import { TestimonialCard } from "../../components/testimonial/TestimonialCard";
import { profileData } from "../../data/profile";
import { servicesData } from "../../data/services";
import { projectsData } from "../../data/projects";
import { testimonialsData } from "../../data/testimonials";

export const Home = () => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);
  const previewServices = servicesData.slice(0, 6);
  const previewReviews = testimonialsData.slice(0, 3);

  return (
    <PageLayout
      title="Saikat Patra | Full Stack Web Developer"
      description="I build modern, high-performance web applications that help businesses grow. Specializing in React, Laravel, Custom CRM, WordPress and API integrations."
    >
      <div className="home-page max-w-7xl mx-auto px-4 sm:px-6 space-y-24 sm:space-y-32">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="relative pt-6 sm:pt-10 lg:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>HELLO, I'M</span>
              </div>

              {/* Title & Role */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08]">
                  Saikat <span className="text-gradient">Patra</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 tracking-tight">
                  Full Stack Web Developer
                </h2>
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {profileData.bio}
              </p>

              {/* CTA Buttons & Watch My Story */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <NeonButton to="/contact" size="lg" variant="primary">
                  Let's Work Together
                </NeonButton>

                <NeonButton to="/projects" size="lg" variant="secondary" icon={false}>
                  View My Work
                </NeonButton>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-[#00E5FF]/15 border border-[#00E5FF]/20 text-white text-xs sm:text-sm font-semibold transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/50 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform duration-200 shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                    <Play className="w-3.5 h-3.5 fill-[#00E5FF]" />
                  </div>
                  <span>Watch My Story</span>
                </Link>
              </div>

              {/* Mini Feature Chips Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
                {profileData.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#03152B]/80 border border-[#00E5FF]/20 text-white/80 text-xs font-medium backdrop-blur-md"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual (Cols 8-12) */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Decorative Tech Rings / Backlight */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#7B3CFF]/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#00E5FF]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Frame with developer image */}
              <div className="relative w-full max-w-[420px] rounded-3xl p-1 bg-gradient-to-br from-[#00E5FF]/40 via-[#2787FF]/20 to-[#7B3CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#020B18]">
                  <img
                    src="/assets/images/saikat-hero.webp"
                    alt="Saikat Patra - Full Stack Web Developer"
                    className="w-full h-auto object-cover object-center rounded-[22px]"
                  />

                  {/* Gradient bottom shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B18] via-transparent to-transparent opacity-60" />

                  {/* Floating Availability Badge matching mockup */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#020B18]/90 backdrop-blur-xl border border-[#00E5FF]/30 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-semibold text-white">
                        {profileData.availabilityStatus}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#00E5FF] font-medium">
                      <MapPin className="w-3 h-3" />
                      <span>{profileData.shortLocation}</span>
                    </div>
                  </div>
                </div>

                {/* Floating Quote Card */}
                <div className="absolute -top-5 -right-5 sm:-right-8 p-3.5 rounded-2xl bg-[#03152B]/90 backdrop-blur-xl border border-[#A855F7]/40 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(168,85,247,0.2)] hidden sm:block">
                  <div className="text-[11px] text-white/50 italic font-mono">&ldquo;</div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    Ideas <br /> Websites <br /> Solutions
                  </div>
                  <div className="text-[11px] text-white/50 italic font-mono text-right">&rdquo;</div>
                </div>

                {/* Handwritten accent */}
                <div className="absolute -top-6 -left-6 font-handwriting text-2xl text-[#00E5FF]/85 -rotate-12 hidden sm:block pointer-events-none select-none">
                  Build Develop <br /> Scale Grow
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* TECHNOLOGIES STRIP                                       */}
        {/* ======================================================== */}
        <section>
          <div className="rounded-2xl sm:rounded-full bg-[#03152B]/60 backdrop-blur-xl border border-[#00E5FF]/20 p-4 sm:px-8 sm:py-5 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,229,255,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white/50 shrink-0 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00E5FF]" />
              <span>TECHNOLOGIES I WORK WITH</span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-5 text-xs sm:text-sm font-semibold text-white/80">
              {[
                { name: "React", color: "text-[#00E5FF]" },
                { name: "Laravel", color: "text-[#FF2D20]" },
                { name: "PHP", color: "text-[#777BB4]" },
                { name: "MySQL", color: "text-[#00758F]" },
                { name: "WordPress", color: "text-[#21759B]" },
                { name: "JavaScript", color: "text-[#F7DF1E]" },
                { name: "Tailwind CSS", color: "text-[#38BDF8]" },
                { name: "AWS", color: "text-[#FF9900]" },
                { name: "Git", color: "text-[#F05032]" },
                { name: "Figma", color: "text-[#F24E1E]" }
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#020B18]/60 border border-white/5 hover:border-[#00E5FF]/40 hover:text-white transition-all duration-200"
                >
                  <span className={`w-2 h-2 rounded-full ${tech.color} bg-current`} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SERVICES PREVIEW                                         */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="SERVICES"
            title="What I Do"
            subtitle="I provide end-to-end web development solutions to help businesses grow online."
            actionText="View All Services"
            actionTo="/services"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {previewServices.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* FEATURED PROJECTS PREVIEW                                */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="FEATURED PROJECTS"
            title="Some of My Work"
            subtitle="In-depth case studies of some of my best web development work."
            actionText="View All Projects"
            actionTo="/projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featuredLayout={true} compact />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* ABOUT PREVIEW                                            */}
        {/* ======================================================== */}
        <section>
          <div className="rounded-3xl bg-[#03152B]/60 backdrop-blur-xl border border-[#00E5FF]/20 p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(0,229,255,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (Bio + CTA) */}
              <div className="lg:col-span-4 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase">
                  <span>ABOUT ME</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  A Passionate Developer From Howrah, India
                </h2>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {profileData.aboutBio}
                </p>

                <div className="pt-2">
                  <NeonButton to="/about" size="md" variant="primary">
                    More About Me
                  </NeonButton>
                </div>
              </div>

              {/* Center Column (Saikat Portrait with Signature overlay) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-[#00E5FF]/30 p-1 bg-gradient-to-b from-[#00E5FF]/30 to-[#7B3CFF]/30 shadow-[0_0_30px_rgba(0,229,255,0.2)] max-w-[280px]">
                  <div className="relative rounded-xl overflow-hidden bg-[#020B18]">
                    <img
                      src="/assets/images/saikat-portrait.webp"
                      alt="Saikat Patra Portrait"
                      className="w-full h-auto object-cover"
                    />

                    {/* Badge */}
                    <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-[#020B18]/85 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-[11px] font-bold text-[#00E5FF] flex items-center justify-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span>Always Learning Always Improving</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (4 Mini Value Cards) */}
              <div className="lg:col-span-4 grid grid-cols-1 gap-3.5">
                {[
                  {
                    icon: HeartHandshake,
                    title: "Client Focused",
                    desc: "Your success is my priority."
                  },
                  {
                    icon: MessageSquare,
                    title: "Clear Communication",
                    desc: "Regular updates & transparency."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Quality Work",
                    desc: "Clean, scalable and maintainable code."
                  },
                  {
                    icon: Clock,
                    title: "Long-Term Support",
                    desc: "I'm here even after project delivery."
                  }
                ].map((val) => (
                  <div
                    key={val.title}
                    className="p-3.5 rounded-xl bg-[#020B18]/70 border border-[#00E5FF]/15 flex items-center gap-3 hover:border-[#00E5FF]/40 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0">
                      <val.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {val.title}
                      </h4>
                      <p className="text-[11px] text-white/60">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Numbers Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
              <StatCard value="7+" label="Years Experience" icon={Award} />
              <StatCard value="500+" label="Projects Completed" icon={Briefcase} />
              <StatCard value="100+" label="Happy Clients" icon={Users} />
              <StatCard value="99%" label="Client Satisfaction" icon={Smile} highlight={true} />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* TESTIMONIALS PREVIEW                                     */}
        {/* ======================================================== */}
        <section id="testimonials">
          <SectionHeading
            badge="TESTIMONIALS"
            title="What Clients Say"
            subtitle="Verified reviews and real feedback from business owners and founders."
            actionText="View All Reviews"
            actionTo="/about#testimonials"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewReviews.map((review) => (
              <TestimonialCard key={review.id} testimonial={review} />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Home;
