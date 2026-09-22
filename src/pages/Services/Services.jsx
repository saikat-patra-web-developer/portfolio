import { Link } from "react-router-dom";
import {
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  Code,
  Database,
  Layout,
  Link as LinkIcon,
  Bot,
  Smartphone,
  Search
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { GlassCard } from "../../components/ui/GlassCard";
import { FaqSection } from "../../components/faq/FaqSection";
import { coreServices, developmentProcess } from "../../data/services";

const serviceIcons = {
  code: Code,
  database: Database,
  layout: Layout,
  link: LinkIcon,
  bot: Bot,
  smartphone: Smartphone,
  search: Search
};

export const Services = () => {

  return (
    <PageLayout
      title="Web, Mobile, AI & SEO Engineering Services | Saikat Patra"
      description="Full-stack web applications, custom CRM platforms, AI tool implementation, cross-platform iOS & Android mobile apps, and SEO/GEO search optimization."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* ======================================================== */}
        {/* SERVICES HERO                                            */}
        {/* ======================================================== */}
        <section className="relative pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span>COMMERCIAL SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Custom Web &amp; Mobile Software Built to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2787FF] to-[#A855F7]">
              Accelerate Your Business.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            I help businesses replace manual spreadsheets, fragmented SaaS subscriptions, and slow websites with fast, dependable custom software built on React, Laravel, AI, and mobile frameworks.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
            {["Full Code Ownership", "No Per-User Licensing", "AI & Workflow Automation", "iOS & Android Apps", "SEO & GEO", "Direct Senior Engineer"].map((item) => (
              <span key={item} className="px-3 py-1 rounded-full bg-[#03152B] border border-white/10">
                &bull; {item}
              </span>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* DEEP-DIVE INTO 4 CORE SERVICES                           */}
        {/* ======================================================== */}
        <section className="space-y-12 sm:space-y-16">
          {coreServices.map((service) => {
            const IconComp = serviceIcons[service.icon] || Code;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl border border-[#00E5FF]/25 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Overview & Problem/Solution (Cols 1-7) */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Problem & What I Build Cards */}
                    <div className="space-y-3.5 pt-1">
                      <div className="p-4 rounded-xl bg-[#020B18]/70 border border-rose-500/20 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-rose-400 font-bold mb-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>The Challenge You May Face:</span>
                        </div>
                        <p className="text-white/75 leading-relaxed pl-6">
                          {service.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#020B18]/70 border border-emerald-500/20 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>What I Build:</span>
                        </div>
                        <p className="text-white/75 leading-relaxed pl-6">
                          {service.whatIBuild}
                        </p>
                      </div>
                    </div>

                    {/* Business Benefit */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#021832] to-[#0a122e] border border-[#00E5FF]/20 text-xs sm:text-sm">
                      <strong className="text-[#00E5FF] block mb-1 uppercase tracking-wider text-[11px]">
                        Business Outcome & ROI:
                      </strong>
                      <span className="text-white/85 leading-relaxed">
                        {service.businessBenefit}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Typical Features, Tech Stack & Case Study (Cols 8-12) */}
                  <div className="lg:col-span-5 space-y-6 lg:pl-4">
                    {/* Typical Functionality */}
                    <div>
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#00E5FF]">
                        Typical Functionality & Capabilities
                      </h3>
                      <ul className="space-y-2">
                        {service.typicalFunctionality.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 text-[#00E5FF]">
                        Core Technologies
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#020B18] text-white/80 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Related Case Study Reference */}
                    {service.relatedCaseStudy && (
                      <div className="p-4 rounded-2xl bg-[#020B18]/90 border border-[#00E5FF]/30 space-y-2">
                        <div className="flex items-center gap-2 text-[11px] font-bold text-[#00E5FF] uppercase tracking-wider">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>Related Case Study</span>
                        </div>
                        <div className="text-sm font-bold text-white">
                          {service.relatedCaseStudy.title}
                        </div>
                        <p className="text-xs text-white/70">
                          {service.relatedCaseStudy.result}
                        </p>
                        <div className="pt-1">
                          <Link
                            to={`/projects/${service.relatedCaseStudy.slug}`}
                            className="text-xs font-semibold text-[#00E5FF] hover:underline inline-flex items-center gap-1"
                          >
                            <span>Read Case Study</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Direct CTA */}
                    <div className="pt-2 flex flex-col gap-2">
                      <Link
                        to={`/services/${service.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white border border-[#00E5FF]/30 hover:border-[#00E5FF] hover:bg-[#052A4A]/80 transition-all"
                      >
                        <span>View Full Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2787FF] to-[#7B3CFF] hover:opacity-95 shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all"
                      >
                        <span>Discuss {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ======================================================== */}
        {/* 4-STEP PROCESS ROADMAP                                   */}
        {/* ======================================================== */}
        <section>
          <SectionHeading
            badge="OUR WORKFLOW"
            title="How We Work Together"
            subtitle="Transparent, milestone-based execution from initial concept through to deployment and maintenance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {developmentProcess.map((item) => (
              <GlassCard key={item.step} className="p-6 text-center border-[#00E5FF]/20 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 mx-auto mb-3.5 flex items-center justify-center font-mono font-bold text-sm text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#00E5FF] mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* FAQ ACCORDION                                            */}
        {/* ======================================================== */}
        <FaqSection
          badge="FAQ"
          title="Service & Project Questions"
          subtitle="Answers to common questions about timelines, code ownership, and technical stacks."
        />
      </div>
    </PageLayout>
  );
};

export default Services;
