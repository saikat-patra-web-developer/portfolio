import { Link } from "react-router-dom";
import { ArrowRight, Award, BriefcaseBusiness, CheckCircle2, Clock3, Code2, Database, Globe2, Heart, Link2, MapPin, MessageSquare, Play, Settings, ShieldCheck, ShoppingCart, Star, Users } from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { profileData } from "../../data/profile";
import { servicesData } from "../../data/services";
import { projectsData } from "../../data/projects";
import { testimonialsData } from "../../data/testimonials";

const serviceIcons = [Code2, Database, Globe2, Link2, ShoppingCart, Settings];
const valueIcons = [Heart, MessageSquare, Star, Clock3];
const statIcons = [Award, BriefcaseBusiness, Users, ShieldCheck];
const technologies = [["⚛", "React", "#61dafb"], ["◈", "Laravel", "#ff4d4d"], ["php", "PHP", "#a78bfa"], ["MySQL", "MySQL", "#38bdf8"], ["W", "WordPress", "#60a5fa"], ["JS", "JavaScript", "#fde047"], ["≈", "Tailwind CSS", "#22d3ee"], ["aws", "AWS", "#fb923c"], ["◆", "Git", "#f43f5e"], ["F", "Figma", "#d946ef"]];

const HomeHeading = ({ eyebrow, title, to, action }) => <div className="home-heading"><div><span className="home-eyebrow">{eyebrow}</span><h2>{title}<i /></h2></div>{to && <Link className="home-outline-button" to={to}>{action}<ArrowRight /></Link>}</div>;

export const Home = () => {
  const projects = projectsData.filter((project) => project.featured).slice(0, 4);
  const services = servicesData.slice(0, 6);
  const reviews = testimonialsData.slice(0, 3);

  return <PageLayout title="Saikat Patra | Full Stack Web Developer" description={profileData.bio}>
    <div className="home-mockup">
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-pill">👋 HELLO, I'M</span>
          <h1>Saikat <span>Patra</span></h1><h2>Full Stack Web Developer</h2><p>{profileData.bio}</p>
          <div className="home-actions"><Link className="home-primary-button" to="/contact">Let's Work Together <ArrowRight /></Link><Link className="home-outline-button" to="/projects"><Play /> View My Work</Link><Link className="home-story" to="/about"><b><Play /></b><span>Watch My Story</span></Link></div>
          <div className="home-highlights">{profileData.highlights.map((item) => <span key={item.title}><CheckCircle2 />{item.title}</span>)}</div>
        </div>
        <div className="home-hero-art">
          <div className="home-art-glow" aria-hidden="true" />
          <div className="home-orbit home-orbit-one" aria-hidden="true" /><div className="home-orbit home-orbit-two" aria-hidden="true" />
          <span className="home-build-note" aria-hidden="true">Build<br />Develop<br />Scale<br />Grow</span>
          <img src="/assets/images/saikat-hero-cutout.png" alt="Saikat Patra working on a web development project" />
          <div className="home-quote"><i aria-hidden="true" />“Ideas<br />Websites<br />Solutions”<b aria-hidden="true" /></div>
          <div className="home-availability"><i />Available for new projects <span><MapPin />Howrah, India</span><ArrowRight /></div>
        </div>
      </section>

      <section className="home-tech-strip"><strong>TECHNOLOGIES I WORK WITH</strong><div>{technologies.map(([mark, label, color]) => <span key={label} style={{ "--tech": color }}><b>{mark}</b><small>{label}</small></span>)}</div></section>

      <section><HomeHeading eyebrow="SERVICES" title="What I Do" to="/services" action="View All Services" /><p className="home-section-intro">I provide end-to-end web development solutions to help businesses grow online.</p><div className="home-services-grid">{services.map((service, index) => { const Icon = serviceIcons[index]; return <article className="home-card home-service" key={service.id}><div className="home-icon"><Icon /></div><h3>{service.title}</h3><p>{service.shortDesc}</p></article>; })}</div></section>

      <section><HomeHeading eyebrow="FEATURED PROJECTS" title="Some of My Work" to="/projects" action="View All Projects" /><div className="home-projects-grid">{projects.map((project) => <article className="home-card home-project" key={project.id}><div className="home-project-image"><img src={project.thumbnail} alt={project.title} /><span>{project.category}</span></div><div className="home-project-copy"><h3>{project.title}</h3><p>{project.description}</p><Link to={`/projects/${project.slug}`}>View Project <ArrowRight /></Link></div></article>)}</div></section>

      <section className="home-about"><div className="home-about-copy"><span className="home-eyebrow">ABOUT ME</span><h2>A Passionate Developer<br />From Howrah, India</h2><p>{profileData.aboutBio}</p><Link className="home-primary-button" to="/about">More About Me <ArrowRight /></Link></div><div className="home-portrait"><img src="/assets/images/saikat-portrait.webp" alt="Saikat Patra portrait" /><em>Saikat Patra</em><span>📊 <b>Always Learning</b><small>Always Improving</small></span></div><div className="home-values">{profileData.values.slice(0, 4).map((value, index) => { const Icon = valueIcons[index]; const copy = ["Your success is my priority.", "Regular updates & transparency.", "Clean, scalable and maintainable code.", "I'm here even after project delivery."][index]; return <article key={value.title}><i><Icon /></i><div><h3>{value.title}</h3><p>{copy}</p></div></article>; })}</div></section>

      <section className="home-stats">{profileData.stats.slice(0, 4).map((stat, index) => { const Icon = statIcons[index]; return <article key={stat.label}><i><Icon /></i><div><b>{stat.value}</b><span>{stat.label}</span></div></article>; })}</section>

      <section><HomeHeading eyebrow="TESTIMONIALS" title="What Clients Say" to="/about#testimonials" action="View All Reviews" /><div className="home-reviews-grid">{reviews.map((review) => <article className="home-card home-review" key={review.id}><p>“{review.content}”</p><div className="home-stars">★★★★★</div><footer><span>{review.avatar}</span><div><b>{review.author}</b><small>{review.company}</small></div><strong>G</strong></footer></article>)}</div></section>
    </div>
  </PageLayout>;
};

export default Home;
