import { Briefcase, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const heroContent = {
  "/about": { badge: "ABOUT ME", title: "About Me", heading: "A Passionate Developer Building Digital Solutions", copy: "Discover my journey, experience and approach to creating modern, scalable products that help businesses grow." },
  "/services": { badge: "SERVICES", title: "Services", heading: "Custom Web Solutions to Help Your Business Grow", copy: "From idea to impact, I build modern, scalable and high-performing web solutions tailored to your business goals. Let's turn your vision into a powerful digital product." },
  "/projects": { badge: "PORTFOLIO", title: "Projects", heading: "Selected Web Development Work", copy: "Explore modern websites, custom applications and business platforms built with a focus on performance, user experience and measurable impact." },
  "/skills": { badge: "MY EXPERTISE", title: "Skills & Technologies", heading: "Building Modern, Scalable Web Solutions", copy: "I combine modern technologies, clean code and creative thinking to build high-performance web applications that solve real business problems." },
  "/contact": { badge: "GET IN TOUCH", title: "Let's Talk", heading: "Have a Project in Mind?", copy: "I'm always open to discussing new opportunities, freelance projects and collaborations. Let's create something amazing together." }
};

const benefits = [
  { title: "Business Focused", subtitle: "Solutions that solve real problems", icon: Briefcase },
  { title: "Modern & Scalable", subtitle: "Built for today and tomorrow", icon: Zap },
  { title: "Ongoing Support", subtitle: "Your success is my priority", icon: ShieldCheck }
];

export const InnerPageHero = ({ pathname }) => {
  const content = heroContent[pathname];
  if (!content) return null;

  return <div className="shared-hero-wrap">
    <section className="services-hero shared-page-hero">
      <div className="services-hero-copy">
        <div className="services-hero-pill"><span />{content.badge}</div>
        <h1>{content.title}</h1>
        <h2>{content.heading}</h2>
        <p>{content.copy}</p>
        <div className="services-hero-badges">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return <article key={benefit.title}><i><Icon /></i><div><strong>{benefit.title}</strong><small>{benefit.subtitle}</small></div></article>;
          })}
        </div>
      </div>
      <div className="services-hero-visual">
        <span className="services-code-note" aria-hidden="true">Code...</span>
        <img src="/assets/images/services-laptop-cutout.png" alt="Laptop displaying modern web application code" />
        <div className="services-idea-card" aria-hidden="true">Ideas<br />Build<br />Scale<br />Grow</div>
        <div className="services-vision-card"><b>“</b><span>Your Vision<br />Our Code<br />Real Results</span><b>”</b></div>
        <div className="services-quality-card">
          {["Clean Code", "Modern Technology", "On-Time Delivery", "Long-Term Partnership"].map((item) => <span key={item}><CheckCircle2 />{item}</span>)}
        </div>
      </div>
    </section>
  </div>;
};

export default InnerPageHero;
