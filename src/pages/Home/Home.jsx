import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Heart,
  MapPin,
  MessageSquare,
  Play,
  ShieldCheck,
  Star,
  Users
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { NeonButton } from "../../components/ui/NeonButton";
import { StatCard } from "../../components/ui/StatCard";
import { ServiceCard } from "../../components/service/ServiceCard";
import { ProjectCard } from "../../components/project/ProjectCard";
import { TestimonialCard } from "../../components/testimonial/TestimonialCard";
import { profileData } from "../../data/profile";
import { servicesData } from "../../data/services";
import { projectsData } from "../../data/projects";
import { testimonialsData } from "../../data/testimonials";

const valueIcons = [Heart, MessageSquare, Star, Clock3];
const statIcons = [Award, BriefcaseBusiness, Users, ShieldCheck];
const technologies = [
  ["⚛", "React", "#61dafb"],
  ["◈", "Laravel", "#ff4d4d"],
  ["php", "PHP", "#a78bfa"],
  ["MySQL", "MySQL", "#38bdf8"],
  ["W", "WordPress", "#60a5fa"],
  ["JS", "JavaScript", "#fde047"],
  ["≈", "Tailwind CSS", "#22d3ee"],
  ["aws", "AWS", "#fb923c"],
  ["◆", "Git", "#f43f5e"],
  ["F", "Figma", "#d946ef"]
];

export const Home = () => {
  const projects = projectsData.filter((project) => project.featured).slice(0, 4);
  const services = servicesData.slice(0, 6);
  const reviews = testimonialsData.slice(0, 3);

  return (
    <PageLayout
      title="Saikat Patra | Full Stack Web Developer"
      description={profileData.bio}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="home-hero">
          <div className="home-hero-copy">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span>HELLO, I'M</span>
            </div>
            <h1>
              Saikat <span>Patra</span>
            </h1>
            <h2>Full Stack Web Developer</h2>
            <p>{profileData.bio}</p>

            <div className="flex flex-wrap items-center gap-3.5 mt-6">
              <NeonButton to="/contact" variant="primary">
                Let's Work Together
              </NeonButton>
              <NeonButton to="/projects" variant="secondary">
                View My Work
              </NeonButton>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 group"
              >
                <span className="w-5 h-5 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>My Story</span>
              </Link>
            </div>

            <div className="home-highlights">
              {profileData.highlights.map((item) => (
                <span key={item.title}>
                  <CheckCircle2 />
                  {item.title}
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
        {/* TECH STRIP                                               */}
        {/* ======================================================== */}
        <section className="home-tech-strip">
          <strong>TECHNOLOGIES I WORK WITH</strong>
          <div>
            {technologies.map(([mark, label, color]) => (
              <span key={label} style={{ "--tech": color }}>
                <b>{mark}</b>
                <small>{label}</small>
              </span>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SERVICES                                                 */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="SERVICES"
            title="What I Do"
            subtitle="I provide end-to-end web development solutions to help businesses grow online."
            actionText="View All Services"
            actionTo="/services"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* FEATURED PROJECTS                                        */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="FEATURED PROJECTS"
            title="Some of My Work"
            subtitle="Selected web applications, custom platforms, and high-performance digital products."
            actionText="View All Projects"
            actionTo="/projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* ABOUT ME                                                 */}
        {/* ======================================================== */}
        <section className="home-about">
          <div className="home-about-copy">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span>ABOUT ME</span>
            </div>
            <h2>
              A Passionate Developer
              <br />
              From Howrah, India
            </h2>
            <p>{profileData.aboutBio}</p>
            <NeonButton to="/about" variant="primary">
              More About Me
            </NeonButton>
          </div>

          <div className="home-portrait">
            <img
              src="/assets/images/saikat-portrait.webp"
              alt="Saikat Patra portrait"
            />
            <em>Saikat Patra</em>
            <span>
              📊 <b>Always Learning</b>
              <small>Always Improving</small>
            </span>
          </div>

          <div className="home-values">
            {profileData.values.slice(0, 4).map((value, index) => {
              const Icon = valueIcons[index];
              const copy = [
                "Your success is my priority.",
                "Regular updates & transparency.",
                "Clean, scalable and maintainable code.",
                "I'm here even after project delivery."
              ][index];
              return (
                <article key={value.title}>
                  <i>
                    <Icon />
                  </i>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* STATS                                                    */}
        {/* ======================================================== */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {profileData.stats.slice(0, 4).map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={Icon}
                  highlight={index === 3}
                />
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* TESTIMONIALS                                             */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="TESTIMONIALS"
            title="What Clients Say"
            subtitle="Genuine client feedback on working together."
            actionText="View All Reviews"
            actionTo="/about#testimonials"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <TestimonialCard key={review.id} testimonial={review} />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Home;
