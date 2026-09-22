import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Users,
  Star,
  CheckCircle2,
  MapPin,
  Play
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { NeonButton } from "../../components/ui/NeonButton";
import { StatCard } from "../../components/ui/StatCard";
import { ServiceCard } from "../../components/service/ServiceCard";
import { ProjectCard } from "../../components/project/ProjectCard";
import Reviews from "../../components/testimonial/Reviews";
import { GlassCard } from "../../components/ui/GlassCard";
import { Reveal } from "../../components/ui/Reveal";
import { FaqSection } from "../../components/faq/FaqSection";
import { profileData } from "../../data/profile";
import { coreServices } from "../../data/services";
import { projectsData } from "../../data/projects";
import {
  EASE,
  staggerContainer,
  staggerItem,
  staggerItemLeft,
  staggerDelay
} from "../../animation/motion";

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
          <motion.div
            className="home-hero-copy"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.09, 0.12)}
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span>Full Stack Web Developer</span>
            </motion.div>

            <motion.h1 variants={staggerItem}>
              I Build Custom Web Apps & CRM Systems That{" "}
              <span>Make Businesses Run Better.</span>
            </motion.h1>

            <motion.p variants={staggerItem}>
              {profileData.bio}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mt-6"
            >
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
            </motion.div>

            <motion.div
              className="home-highlights"
              variants={staggerContainer(0.06, 0.45)}
            >
              {["Custom Web Applications", "Bespoke CRM Systems", "Business Automation", "React & Laravel"].map((item) => (
                <motion.span key={item} variants={staggerItemLeft}>
                  <CheckCircle2 />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="home-hero-art"
            initial={{ opacity: 0, x: 44, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.3, ease: EASE }}
          >
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
          </motion.div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2 — TRUST / PROOF BAR                            */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.15} aria-label="Verified Track Record">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            <StatCard
              value="80+"
              label="Projects Completed"
              icon={Briefcase}
              delay={staggerDelay(0, 4)}
            />
            <StatCard
              value="50+"
              label="Happy Clients"
              icon={Users}
              delay={staggerDelay(1, 4)}
            />
            <StatCard
              value="7+"
              label="Years Experience"
              icon={Award}
              delay={staggerDelay(2, 4)}
            />
            <StatCard
              value="4.9"
              label="Google Rating (51 Reviews)"
              icon={Star}
              highlight={true}
              delay={staggerDelay(3, 4)}
            />
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* SECTION 3 — CORE SERVICES                                */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.1} id="services">
          <SectionHeading
            badge="CORE SERVICES"
            title="What I Build"
            subtitle="Commercial development focused on solving real operational friction and accelerating business efficiency."
            actionText="View All Services"
            actionTo="/services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.slice(0, 3).map((service, idx) => (
              <ServiceCard key={service.id} service={service} delay={staggerDelay(idx, 3, 0.09)} />
            ))}
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* SECTION 4 — FEATURED CASE STUDIES                        */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.1} id="case-studies">
          <SectionHeading
            badge="PROVEN IMPACT"
            title="Featured Case Studies"
            subtitle="Real software solutions engineered to eliminate manual bottlenecks and accelerate growth."
            actionText="Browse All Case Studies"
            actionTo="/projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                featuredLayout={true}
                delay={staggerDelay(idx, 3, 0.09)}
              />
            ))}
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* SECTION 5 — WHY WORK WITH ME                             */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.1}>
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
                delay={staggerDelay(idx, 4)}
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
        </Reveal>

        {/* ======================================================== */}
        {/* SECTION 6 — PROCESS                                      */}
        {/* ======================================================== */}
        <Reveal as="section" amount={0.1}>
          <SectionHeading
            badge="HOW IT WORKS"
            title="A Simple, Proven Process"
            subtitle="A disciplined 4-step workflow that delivers predictable results without surprises."
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
        {/* SECTION 7 — REVIEWS & TESTIMONIALS                       */}
        {/* ======================================================== */}
        <Reviews />

        {/* ======================================================== */}
        {/* SECTION 8 — ABOUT PREVIEW                                */}
        {/* ======================================================== */}
        <Reveal
          as="section"
          amount={0.12}
          className="p-6 sm:p-10 rounded-3xl border border-[#00E5FF]/25 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        >
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
        </Reveal>

        {/* ======================================================== */}
        {/* SECTION 9 — FAQ                                          */}
        {/* ======================================================== */}
        <FaqSection />
      </div>
    </PageLayout>
  );
};

export default Home;
