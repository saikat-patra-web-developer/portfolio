import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
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
import { NeonButton } from "../../components/ui/NeonButton";
import { ServiceCard } from "../../components/service/ServiceCard";
import { TestimonialCard } from "../../components/testimonial/TestimonialCard";
import {
  servicesData,
  pricingPlans,
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
  const [billingCycle, setBillingCycle] = useState("projectBased"); // 'projectBased' | 'monthlyRetainer'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const activePlans =
    billingCycle === "projectBased"
      ? pricingPlans.projectBased
      : pricingPlans.monthlyRetainer;

  return (
    <PageLayout
      title="Web Development Services | Saikat Patra"
      description="Custom web applications, bespoke CRM software, responsive WordPress development, API integrations, and ongoing support engineered by Saikat Patra."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24 sm:space-y-32">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="relative pt-6 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>SERVICES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                <span className="text-gradient-cyan">Services</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-white/90">
                Custom Web Solutions to Help Your Business Grow
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From idea to impact, I build modern, scalable and high-performing web solutions tailored to your business goals. Let's turn your vision into a powerful digital product.
              </p>

              {/* Feature Badges Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                {[
                  { title: "Business Focused", subtitle: "Solutions that solve real problems" },
                  { title: "Modern & Scalable", subtitle: "Built for today and tomorrow" },
                  { title: "Ongoing Support", subtitle: "Your success is my priority" }
                ].map((badge) => (
                  <div
                    key={badge.title}
                    className="p-3 rounded-xl bg-[#03152B]/80 border border-[#00E5FF]/20 text-left backdrop-blur-md"
                  >
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                      <span>{badge.title}</span>
                    </div>
                    <div className="text-[11px] text-white/60 mt-0.5">
                      {badge.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] rounded-3xl p-1 bg-gradient-to-br from-[#00E5FF]/40 via-[#2787FF]/20 to-[#7B3CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#020B18]">
                  <img
                    src="/assets/images/services-laptop.webp"
                    alt="Services Engineering Visual"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#020B18]/90 border-t border-[#00E5FF]/20 flex items-center justify-between">
                    <div className="text-xs font-bold text-white">Production Ready</div>
                    <div className="text-[11px] text-[#00E5FF] font-mono">Modern Architecture</div>
                  </div>
                </div>

                {/* Floating Quote */}
                <div className="absolute -top-4 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-[#03152B]/90 backdrop-blur-xl border border-[#A855F7]/40 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(168,85,247,0.2)] hidden sm:block">
                  <div className="text-[10px] text-white/50 italic font-mono">&ldquo;</div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    Your Vision <br /> Our Code <br /> Real Results
                  </div>
                  <div className="text-[10px] text-white/50 italic font-mono text-right">&rdquo;</div>
                </div>

                {/* Floating checklist */}
                <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-[#020B18]/90 border border-[#00E5FF]/30 text-white text-xs font-medium space-y-1 shadow-lg backdrop-blur-md hidden sm:block">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Clean Code
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> On-Time Delivery
                  </div>
                </div>
              </div>
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
        {/* ENGAGEMENT MODELS & PRICING                              */}
        {/* ======================================================== */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span>FLEXIBLE ENGAGEMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Choose the Right Plan for Your Needs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-white/70">
              Transparent pricing and flexible options to fit your project scope and budget.
            </p>

            {/* Toggle Pills */}
            <div className="inline-flex items-center p-1 rounded-xl bg-[#03152B] border border-[#00E5FF]/20 mt-6">
              <button
                onClick={() => setBillingCycle("projectBased")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  billingCycle === "projectBased"
                    ? "bg-gradient-to-r from-[#2787FF] to-[#00E5FF] text-white shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Project Based
              </button>
              <button
                onClick={() => setBillingCycle("monthlyRetainer")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  billingCycle === "monthlyRetainer"
                    ? "bg-gradient-to-r from-[#2787FF] to-[#00E5FF] text-white shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Monthly Retainer
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activePlans.map((plan) => (
              <GlassCard
                key={plan.name}
                glow={plan.popular ? "both" : "cyan"}
                className={`p-6 sm:p-7 flex flex-col justify-between h-full border ${
                  plan.popular
                    ? "border-[#00E5FF]/60 bg-gradient-to-b from-[#031d3d]/80 via-[#03244c]/70 to-[#0e0728]/80 shadow-[0_0_35px_rgba(0,229,255,0.25)] relative"
                    : "border-[#00E5FF]/20"
                }`}
              >
                <div>
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#2787FF] to-[#00E5FF] text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  </div>

                  <p className="text-xs text-white/60 mb-5">{plan.subtitle}</p>

                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-white/50 ml-1.5">{plan.period}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-white/80">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    to={`/contact?plan=${plan.name}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] text-white shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:opacity-95"
                        : "bg-[#020B18] hover:bg-[#00E5FF]/20 text-white border border-[#00E5FF]/30"
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            ))}

            {/* Custom Solution Card matching mockup */}
            <GlassCard
              glow="purple"
              className="p-6 sm:p-7 flex flex-col justify-between h-full border-[#A855F7]/30 bg-gradient-to-br from-[#0e0728]/80 to-[#03152B]/80"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7B3CFF]/20 border border-[#A855F7]/40 flex items-center justify-center text-[#A855F7] mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Need a Custom Solution?
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  Every business is unique. Let's discuss your specific requirements and I'll create a tailored plan for you.
                </p>
                <div className="text-xs text-[#00E5FF] font-medium space-y-1 mb-6">
                  <div>✓ Free technical consultation</div>
                  <div>✓ Detailed architecture roadmap</div>
                  <div>✓ No obligation proposal</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <NeonButton to="/contact" variant="primary" size="sm" className="w-full">
                  Let's Talk
                </NeonButton>
              </div>
            </GlassCard>
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

          <div className="max-w-3xl mx-auto space-y-3">
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <GlassCard
                  key={index}
                  hoverEffect={false}
                  className="border-[#00E5FF]/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00E5FF] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
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
