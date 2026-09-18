import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Clock,
  Briefcase,
  Home,
  Heart,
  GraduationCap,
  ShoppingBag,
  Plane,
  TrendingUp,
  Store,
  Rocket
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { GlassCard } from "../../components/ui/GlassCard";
import { ServiceCard } from "../../components/service/ServiceCard";
import { TestimonialCard } from "../../components/testimonial/TestimonialCard";
import {
  servicesData,
  developmentProcess,
  industriesServed,
  faqList
} from "../../data/services";
import { testimonialsData } from "../../data/testimonials";

const industryIcons = {
  home: Home,
  heart: Heart,
  "graduation-cap": GraduationCap,
  "shopping-bag": ShoppingBag,
  plane: Plane,
  "trending-up": TrendingUp,
  store: Store,
  rocket: Rocket,
  cpu: Zap,
  briefcase: Briefcase
};

export const Services = () => {
  const [openFaqIndexes, setOpenFaqIndexes] = useState([0]);

  const toggleFaq = (index) => {
    setOpenFaqIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <PageLayout
      title="Web Development Services | Saikat Patra"
      description="Custom web applications, bespoke CRM software, responsive WordPress development, API integrations, and ongoing support engineered by Saikat Patra."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="services-hero">
          <div className="services-hero-copy">
            <div className="services-hero-pill"><span /> SERVICES</div>
            <h1>Services</h1>
            <h2>Custom Web Solutions to Help Your<br className="services-desktop-break" /> Business Grow</h2>
            <p>From idea to impact, I build modern, scalable and high-performing web solutions tailored to your business goals. Let's turn your vision into a powerful digital product.</p>

            <div className="services-hero-badges">
              {[
                { title: "Business Focused", subtitle: "Solutions that solve real problems", icon: Briefcase },
                { title: "Modern & Scalable", subtitle: "Built for today and tomorrow", icon: Zap },
                { title: "Ongoing Support", subtitle: "Your success is my priority", icon: ShieldCheck }
              ].map((badge) => {
                const Icon = badge.icon;
                return <article key={badge.title}><i><Icon /></i><div><strong>{badge.title}</strong><small>{badge.subtitle}</small></div></article>;
              })}
            </div>
          </div>

          <div className="services-hero-visual">
            <span className="services-code-note" aria-hidden="true">Code...</span>
            <img src="/assets/images/services-laptop-cutout.png" alt="Laptop displaying modern web application code" />
            <div className="services-vision-card"><span>Your Vision<br />Our Code<br />Real Results</span></div>
            <div className="services-quality-card">
              {["Clean Code", "Modern Technology", "On-Time Delivery", "Long-Term Partnership"].map((item) => <span key={item}><CheckCircle2 />{item}</span>)}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* COMPREHENSIVE SERVICES GRID                              */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="OUR SERVICES"
            title="Comprehensive Web Development Services"
            subtitle="End-to-end solutions to transform your ideas into powerful digital experiences."
            actionText="Get a Custom Quote"
            actionTo="/contact"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* DEVELOPMENT PROCESS                                      */}
        {/* ======================================================== */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>HOW IT WORKS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>My Development Process</span>
                <span className="inline-block w-8 sm:w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7B3CFF] rounded-full" />
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/70">
                A simple, transparent process to bring your project to life.
              </p>
            </div>

            <div className="font-handwriting text-2xl text-[#00E5FF]/80 -rotate-3 select-none self-start md:self-end">
              From Idea to Impact
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {developmentProcess.map((item) => (
              <GlassCard key={item.step} className="p-5 sm:p-6 border-[#00E5FF]/20 text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 mx-auto mb-3 flex items-center justify-center font-mono font-bold text-sm text-[#00E5FF]">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-[11px] font-semibold text-[#00E5FF] mb-2">
                  {item.subtitle}
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* WHY CHOOSE MY SERVICES & INDUSTRIES SERVED               */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Why Choose My Services (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase">
              <span>WHY CHOOSE MY SERVICES</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              More Than Just Development
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  title: "Quality & Best Practices",
                  desc: "Clean, maintainable and industry-standard code.",
                  icon: ShieldCheck
                },
                {
                  title: "On-Time Delivery",
                  desc: "I respect your time and deliver as promised.",
                  icon: Clock
                },
                {
                  title: "Client-Focused Approach",
                  desc: "Your success is my success.",
                  icon: HeartHandshake
                },
                {
                  title: "Long-Term Partnership",
                  desc: "Ongoing support even after project completion.",
                  icon: Zap
                }
              ].map((c) => (
                <div
                  key={c.title}
                  className="p-4 rounded-xl bg-[#03152B]/70 border border-[#00E5FF]/15 space-y-1.5"
                >
                  <c.icon className="w-5 h-5 text-[#00E5FF]" />
                  <h4 className="text-sm font-bold text-white">{c.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Served (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase">
              <span>INDUSTRIES SERVED</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Helping Businesses Across Various Industries
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {industriesServed.map((ind) => {
                const IconComponent = industryIcons[ind.icon] || Briefcase;
                return (
                  <div
                    key={ind.name}
                    className="p-3 rounded-xl bg-[#020B18]/70 border border-[#00E5FF]/15 flex items-center gap-2.5 hover:border-[#00E5FF]/40 transition-colors duration-200"
                  >
                    <IconComponent className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span className="text-xs font-semibold text-white/80 truncate">
                      {ind.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FAQ ACCORDION                                            */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="FAQ PREVIEW"
            title="Common Questions"
            subtitle="Answers to common questions about working with me."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
            {/* Left Column (First 5 Questions) */}
            <div className="space-y-3 sm:space-y-4">
              {faqList.slice(0, 5).map((faq, index) => {
                const isOpen = openFaqIndexes.includes(index);
                return (
                  <GlassCard
                    key={index}
                    hoverEffect={false}
                    className={`border-[#00E5FF]/20 overflow-hidden transition-all duration-300 ${isOpen
                      ? "border-[#00E5FF]/45 bg-[#03152B]/85 shadow-[0_0_25px_rgba(0,229,255,0.1)]"
                      : "hover:border-[#00E5FF]/35"
                      }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-sm sm:text-base font-bold transition-colors duration-200 ${isOpen ? "text-[#00E5FF]" : "text-white"
                          }`}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#00E5FF] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </GlassCard>
                );
              })}
            </div>

            {/* Right Column (Next 5 Questions) */}
            <div className="space-y-3 sm:space-y-4">
              {faqList.slice(5, 10).map((faq, index) => {
                const globalIndex = index + 5;
                const isOpen = openFaqIndexes.includes(globalIndex);
                return (
                  <GlassCard
                    key={globalIndex}
                    hoverEffect={false}
                    className={`border-[#00E5FF]/20 overflow-hidden transition-all duration-300 ${isOpen
                      ? "border-[#00E5FF]/45 bg-[#03152B]/85 shadow-[0_0_25px_rgba(0,229,255,0.1)]"
                      : "hover:border-[#00E5FF]/35"
                      }`}
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-sm sm:text-base font-bold transition-colors duration-200 ${isOpen ? "text-[#00E5FF]" : "text-white"
                          }`}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#00E5FF] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* TESTIMONIALS                                             */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="WHAT CLIENTS SAY"
            title="Trusted by Businesses Worldwide"
            subtitle="Real feedback from satisfied founders and agency partners."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.slice(3, 6).map((review) => (
              <TestimonialCard key={review.id} testimonial={review} />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Services;
