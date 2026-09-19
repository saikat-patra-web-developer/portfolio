import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Briefcase,
  Users,
  Star,
  CheckCircle2,
  Mail,
  MapPin,
  Play,
  Sparkles
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { NeonButton } from "../../components/ui/NeonButton";
import { StatCard } from "../../components/ui/StatCard";
import { ServiceCard } from "../../components/service/ServiceCard";
import { ProjectCard } from "../../components/project/ProjectCard";
import { TestimonialCard } from "../../components/testimonial/TestimonialCard";
import { GlassCard } from "../../components/ui/GlassCard";
import { FaqSection } from "../../components/faq/FaqSection";
import { profileData } from "../../data/profile";
import { coreServices } from "../../data/services";
import { projectsData } from "../../data/projects";
import { featuredTestimonials } from "../../data/testimonials";

export const Home = () => {
  // Top 3 featured case studies
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <PageLayout
      title="Saikat Patra | Full Stack Web Developer – React, Laravel & Custom CRM"
      description="Full Stack Web Developer specializing in React, Laravel, custom CRM systems, business automation and high-performance web applications."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* ======================================================== */}
        {/* SECTION 1 — HERO                                         */}
        {/* ======================================================== */}
        <section className="home-hero">
          <div className="home-hero-copy">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span>Full Stack Web Developer</span>
            </div>
            <h1>
              I Build Custom Web Apps & CRM Systems That{" "}
              <span>Make Businesses Run Better.</span>
            </h1>
            <p>
              I design and develop fast, scalable web applications, CRM platforms and automated business systems using modern technologies such as React and Laravel.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mt-6">
              <NeonButton to="/contact" variant="primary" className="w-full sm:w-auto">
                Discuss Your Project
              </NeonButton>
              <NeonButton to="/projects" variant="secondary" className="w-full sm:w-auto">
                View My Work
              </NeonButton>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] rounded-xl text-xs sm:text-sm font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 group w-full sm:w-auto"
              >
                <span className="w-5 h-5 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>My Story</span>
              </Link>
            </div>

            <div className="home-highlights">
              {["Custom Web Applications", "Bespoke CRM Systems", "Business Automation", "React & Laravel"].map((item) => (
                <span key={item}>
                  <CheckCircle2 />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="home-hero-art">
            <div className="home-art-glow" aria-hidden="true" />
            <div className="home-orbit home-orbit-one" aria-hidden="true" />
            <div className="home-orbit home-orbit-two" aria-hidden="true" />
            <span className="home-build-note" aria-hidden="true">
              Build
              <br />
              Develop
              <br />
              Scale
              <br />
              Grow
            </span>
            <img
              src="/assets/images/saikat-hero-cutout.png"
              alt="Saikat Patra working on a web development project"
            />
            <div className="home-quote">
              <i aria-hidden="true" />
              Ideas
              <br />
              Websites
              <br />
              Solutions
              <b aria-hidden="true" />
            </div>
            <div className="home-availability">
              <i />
              <span>Available for new projects</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#00E5FF]" /> Howrah, India
              </span>
              <ArrowRight className="w-3 h-3 text-[#00E5FF]" />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2 — TRUST / PROOF BAR                            */}
        {/* ======================================================== */}
        <section aria-label="Verified Track Record">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            <StatCard
              value="80+"
              label="Projects Completed"
              icon={Briefcase}
            />
            <StatCard
              value="50+"
              label="Happy Clients"
              icon={Users}
            />
            <StatCard
              value="7+"
              label="Years Experience"
              icon={Award}
            />
            <StatCard
              value="5.0"
              label="Google Review Rating"
              icon={Star}
              highlight={true}
            />
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3 — CORE SERVICES                                */}
        {/* ======================================================== */}
        <section id="services">
          <SectionHeading
            badge="CORE SERVICES"
            title="What I Build"
            subtitle="Commercial development focused on solving real operational friction and accelerating business efficiency."
            actionText="View All Services"
            actionTo="/services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4 — FEATURED CASE STUDIES                        */}
        {/* ======================================================== */}
        <section id="case-studies">
          <SectionHeading
            badge="PROVEN IMPACT"
            title="Featured Case Studies"
            subtitle="Real software solutions engineered to eliminate manual bottlenecks and accelerate growth."
            actionText="Browse All Case Studies"
            actionTo="/projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featuredLayout={true} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <NeonButton to="/projects" variant="secondary" size="md">
              View Complete Project Library
            </NeonButton>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 5 — WHY WORK WITH ME                             */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="WHY CHOOSE ME"
            title="Why Work With Me"
            subtitle="Combining business intelligence with senior full-stack technical execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profileData.differentiators.map((diff, idx) => (
              <GlassCard
                key={diff.title}
                glow="cyan"
                className="p-6 flex flex-col justify-between border-[#00E5FF]/20"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 flex items-center justify-center font-mono font-bold text-sm text-[#00E5FF] mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 6 — PROCESS                                      */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="HOW IT WORKS"
            title="A Simple, Proven Process"
            subtitle="A disciplined 4-step workflow that delivers predictable results without surprises."
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
        {/* SECTION 7 — TESTIMONIALS                                 */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="CLIENT FEEDBACK"
            title="What Clients Say"
            subtitle="Authentic feedback from business owners and founders."
            actionText="View About & Reviews"
            actionTo="/about"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 8 — ABOUT PREVIEW                                */}
        {/* ======================================================== */}
        <section className="p-6 sm:p-10 rounded-3xl border border-[#00E5FF]/25 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden border-2 border-[#00E5FF]/30 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <img
                  src="/assets/images/saikat-portrait.webp"
                  alt="Saikat Patra Portrait"
                  width="300"
                  height="300"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase">
                <span>ABOUT SAIKAT PATRA</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Full Stack Developer with 7+ Years Experience
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                {profileData.aboutBio}
              </p>
              <div className="pt-2">
                <NeonButton to="/about" variant="primary" size="md">
                  Read My Full Story & Background
                </NeonButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 9 — FAQ                                          */}
        {/* ======================================================== */}
        <FaqSection />

        {/* ======================================================== */}
        {/* SECTION 10 — FINAL HIGH-CONVERSION CTA                   */}
        {/* ======================================================== */}
        <section className="text-center">
          <GlassCard
            glow="both"
            className="p-8 sm:p-12 lg:p-16 border-[#00E5FF]/30 relative overflow-hidden"
          >
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/35 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>READY TO GET STARTED?</span>
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Have a Project That Needs a Better System?
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Tell me what you are trying to build or improve, and we can discuss the best technical approach for your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
                <NeonButton to="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  Discuss Your Project
                </NeonButton>
                <a
                  href={`mailto:${profileData.email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white/90 bg-[#03152B]/90 hover:bg-[#052A4A] border border-[#00E5FF]/30 hover:border-[#00E5FF] transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-[#00E5FF]" />
                  <span>Email Me</span>
                </a>
              </div>

              <div className="text-xs text-white/50 pt-2">
                Usually responds within 24 hours &bull; No obligation consultation
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageLayout>
  );
};

export default Home;
