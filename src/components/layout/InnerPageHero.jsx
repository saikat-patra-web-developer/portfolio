import { Briefcase, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const heroContent = {
  "/about": {
    badge: "ABOUT ME", title: "About Me", heading: "A Passionate Full Stack Developer from Howrah, India",
    copy: "Specializing in modern web applications, custom CRM platforms, WordPress websites, API integrations and scalable products that deliver measurable business impact.",
    codeNote: "Always learning...", idea: ["Learn", "Build", "Improve", "Grow"], vision: ["Passion", "Experience", "Real Impact"],
    quality: ["7+ Years Experience", "500+ Projects", "100+ Happy Clients", "Based in Howrah"],
    benefits: [["Experienced Developer", "7+ years building solutions"], ["Always Improving", "Learning modern technologies"], ["Business Focused", "Creating measurable impact"]]
  },
  "/services": {
    badge: "SERVICES", title: "Services", heading: "Custom Web Solutions to Help Your Business Grow",
    copy: "From idea to impact, I build modern, scalable and high-performing web solutions tailored to your business goals. Let's turn your vision into a powerful digital product.",
    codeNote: "Code...", idea: ["Ideas", "Build", "Scale", "Grow"], vision: ["Your Vision", "Our Code", "Real Results"],
    quality: ["Clean Code", "Modern Technology", "On-Time Delivery", "Long-Term Partnership"],
    benefits: [["Business Focused", "Solutions that solve real problems"], ["Modern & Scalable", "Built for today and tomorrow"], ["Ongoing Support", "Your success is my priority"]]
  },
  "/projects": {
    badge: "PORTFOLIO", title: "Projects", heading: "Selected Web Development Work",
    copy: "Here are some of my recent projects, ranging from business websites to custom web applications, each built for performance, usability and real business impact.",
    codeNote: "Create...", idea: ["Ideas", "Design", "Develop", "Deliver"], vision: ["Every Project", "Solves a Real", "Problem"],
    quality: ["Real Projects", "Happy Clients", "Modern Tech Stack", "Business Focus"],
    benefits: [["Proven Results", "Solutions with real impact"], ["Modern Engineering", "Reliable technology stacks"], ["Quality Delivery", "Built around client goals"]]
  },
  "/skills": {
    badge: "MY EXPERTISE", title: "Skills & Technologies", heading: "Building Modern, Scalable Web Solutions",
    copy: "I combine modern technologies, clean code and creative thinking to build high-performance web applications that solve real business problems and create real impact.",
    codeNote: "Build...", idea: ["Build", "Develop", "Solve", "Grow"], vision: ["Technology", "Turns Ideas", "Into Impact"],
    quality: ["7+ Years Experience", "50+ Technologies", "100+ Projects", "Always Learning"],
    benefits: [["Frontend Expertise", "Responsive modern interfaces"], ["Backend Architecture", "Secure scalable systems"], ["Full Stack Delivery", "From concept to deployment"]]
  },
  "/contact": {
    badge: "GET IN TOUCH", title: "Let's Talk", heading: "Have a Project in Mind?",
    copy: "I'm always open to discussing new opportunities, freelance projects, collaborations or a friendly chat about web development. Let's create something amazing together!",
    codeNote: "Let's talk...", idea: ["Connect", "Discuss", "Plan", "Create"], vision: ["Great Ideas", "Start With a", "Conversation"],
    quality: ["New Projects", "Freelance Work", "Collaboration", "Currently Available"],
    benefits: [["Quick Response", "Usually within 24 hours"], ["Clear Communication", "Transparent from day one"], ["Friendly Consultation", "Let's explore your idea"]]
  }
};

const benefitIcons = [Briefcase, Zap, ShieldCheck];

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
          {content.benefits.map(([title, subtitle], index) => {
            const Icon = benefitIcons[index];
            return <article key={title}><i><Icon /></i><div><strong>{title}</strong><small>{subtitle}</small></div></article>;
          })}
        </div>
      </div>
      <div className="services-hero-visual">
        <span className="services-code-note" aria-hidden="true">{content.codeNote}</span>
        <img src="/assets/images/services-laptop-cutout.png" alt="Laptop displaying modern web application code" />
        <div className="services-idea-card" aria-hidden="true">{content.idea.map((line) => <span key={line}>{line}<br /></span>)}</div>
        <div className="services-vision-card"><b>“</b><span>{content.vision.map((line) => <span key={line}>{line}<br /></span>)}</span><b>”</b></div>
        <div className="services-quality-card">
          {content.quality.map((item) => <span key={item}><CheckCircle2 />{item}</span>)}
        </div>
      </div>
    </section>
  </div>;
};

export default InnerPageHero;
