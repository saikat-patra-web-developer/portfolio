import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ChevronRight,
  Code,
  Database,
  Layout,
  Link as LinkIcon,
  Bot,
  Smartphone,
  Search
} from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { GlassCard } from "../../components/ui/GlassCard";
import { NeonButton } from "../../components/ui/NeonButton";
import { coreServices } from "../../data/services";

const serviceIcons = {
  code: Code,
  database: Database,
  layout: Layout,
  link: LinkIcon,
  bot: Bot,
  smartphone: Smartphone,
  search: Search
};

export const ServiceDetails = () => {
  const { slug } = useParams();

  const serviceIndex = coreServices.findIndex((s) => s.slug === slug);
  const service = coreServices[serviceIndex];

  if (!service) {
    return (
      <PageLayout title="Service Not Found | Saikat Patra">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 space-y-4">
          <h1 className="text-3xl font-bold text-white">Service Not Found</h1>
          <p className="text-white/60 text-sm">
            The service page you are looking for does not exist or has been relocated.
          </p>
          <div className="pt-2 flex justify-center">
            <NeonButton to="/services" variant="primary">
              View All Services
            </NeonButton>
          </div>
        </div>
      </PageLayout>
    );
  }

  const prevService = coreServices[(serviceIndex - 1 + coreServices.length) % coreServices.length];
  const nextService = coreServices[(serviceIndex + 1) % coreServices.length];
  const IconComp = serviceIcons[service.icon] || Code;

  return (
    <PageLayout
      title={`${service.title} | Services | Saikat Patra`}
      description={service.shortDesc}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-14">

        {/* ============================================================ */}
        {/* BREADCRUMB                                                    */}
        {/* ============================================================ */}
        <nav className="flex items-center gap-1.5 text-xs text-white/45 pt-1 flex-wrap">
          <Link to="/" className="hover:text-[#00E5FF] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link to="/services" className="hover:text-[#00E5FF] transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-white/70 truncate">{service.title}</span>
        </nav>

        {/* ============================================================ */}
        {/* HERO — Left: text  |  Right: icon card                       */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT — Title block */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                <IconComp className="w-6 h-6" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-white/72 leading-relaxed">
              {service.shortDesc}
            </p>

            {/* Quick capability pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {service.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1.5 rounded-lg bg-[#03152B] border border-[#00E5FF]/20 text-white/80 text-xs font-semibold"
                >
                  {cap}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <NeonButton
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                variant="primary"
                size="md"
              >
                Discuss This Service
              </NeonButton>
              <NeonButton to="/services" variant="secondary" size="md">
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <span>All Services</span>
              </NeonButton>
            </div>
          </div>

          {/* RIGHT — Decorative card */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-[#00E5FF]/20 bg-gradient-to-br from-[#031c38]/90 to-[#0b0720]/90 p-8 sm:p-12 flex flex-col items-center justify-center gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(0,229,255,0.08)]">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#00E5FF]/06 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-[#7B3CFF]/08 blur-3xl pointer-events-none" />
            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shadow-[0_0_40px_rgba(0,229,255,0.2)]">
              <IconComp className="w-12 h-12" />
            </div>
            <div className="relative text-center space-y-2">
              <div className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-widest">
                Service {service.number} of {coreServices.length}
              </div>
              <div className="text-lg font-black text-white leading-snug max-w-xs">
                {service.title}
              </div>
            </div>
            {/* Tech pills */}
            <div className="relative flex flex-wrap gap-2 justify-center">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#020B18] text-white/70 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CHALLENGE & WHAT I BUILD                                      */}
        {/* ============================================================ */}
        <section className="space-y-5">
          <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
            The Problem &amp; My Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Challenge */}
            <GlassCard className="p-6 border-rose-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 shrink-0">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">The Challenge</h3>
              </div>
              <p className="text-sm text-white/72 leading-relaxed">{service.problem}</p>
            </GlassCard>

            {/* What I Build */}
            <GlassCard className="p-6 border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">What I Build</h3>
              </div>
              <p className="text-sm text-white/72 leading-relaxed">{service.whatIBuild}</p>
            </GlassCard>
          </div>
        </section>

        {/* ============================================================ */}
        {/* TYPICAL FUNCTIONALITY                                         */}
        {/* ============================================================ */}
        {service.typicalFunctionality && service.typicalFunctionality.length > 0 && (
          <section className="space-y-5">
            <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
              Typical Functionality &amp; Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.typicalFunctionality.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#03152B]/70 border border-[#00E5FF]/10 hover:border-[#00E5FF]/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/78 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* BUSINESS BENEFIT                                              */}
        {/* ============================================================ */}
        <section className="space-y-5">
          <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
            Business Outcome &amp; ROI
          </h2>
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#031c38]/90 to-[#050d1a]/90 border border-[#00E5FF]/25 overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#00E5FF]/08 blur-3xl pointer-events-none" />
            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/12 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0 mt-0.5">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white">Why It Matters</h3>
                <p className="text-sm sm:text-base text-white/78 leading-relaxed">
                  {service.businessBenefit}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* TECHNOLOGIES                                                  */}
        {/* ============================================================ */}
        <section className="space-y-5">
          <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
            Core Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-lg bg-[#03152B] border border-[#00E5FF]/20 hover:border-[#00E5FF]/50 text-white/85 text-xs font-semibold transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* RELATED CASE STUDY                                            */}
        {/* ============================================================ */}
        {service.relatedCaseStudy && (
          <section className="space-y-5">
            <h2 className="text-[11px] font-bold text-white/35 uppercase tracking-widest">
              Related Case Study
            </h2>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0d1a30]/90 to-[#0b0720]/90 border border-[#7B3CFF]/25 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#7B3CFF]/08 blur-3xl pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#A855F7] uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Real-World Result</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{service.relatedCaseStudy.title}</h3>
                  <p className="text-sm text-white/65">{service.relatedCaseStudy.result}</p>
                </div>
                <NeonButton
                  to={`/projects/${service.relatedCaseStudy.slug}`}
                  variant="secondary"
                  size="md"
                  className="shrink-0"
                >
                  Read Case Study
                </NeonButton>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* CTA BANNER                                                    */}
        {/* ============================================================ */}
        <section className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#031c38]/90 to-[#0e0728]/90 border border-[#00E5FF]/20 overflow-hidden text-center space-y-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/05 to-[#7B3CFF]/05 pointer-events-none" />
          <h3 className="relative text-xl sm:text-2xl font-black text-white">
            Ready to Build {service.title}?
          </h3>
          <p className="relative text-sm text-white/65 max-w-xl mx-auto">
            Let's discuss your requirements, timeline, and budget. I typically respond within 24 hours.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-3 pt-1">
            <NeonButton
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              variant="primary"
              size="lg"
            >
              Start Your Project
            </NeonButton>
            <NeonButton to="/projects" variant="secondary" size="lg">
              See My Work
            </NeonButton>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PREV / NEXT SERVICE NAVIGATION                                */}
        {/* ============================================================ */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to={`/services/${prevService.slug}`}
            className="group flex items-center gap-4 p-5 rounded-2xl bg-[#03152B]/50 border border-white/10 hover:border-[#00E5FF]/40 hover:bg-[#031c38]/60 transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] shrink-0 group-hover:bg-[#00E5FF]/20 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-white/38 uppercase tracking-widest mb-0.5">Previous Service</div>
              <div className="text-sm font-bold text-white truncate group-hover:text-[#00E5FF] transition-colors">
                {prevService.title}
              </div>
            </div>
          </Link>

          <Link
            to={`/services/${nextService.slug}`}
            className="group flex items-center justify-end gap-4 p-5 rounded-2xl bg-[#03152B]/50 border border-white/10 hover:border-[#00E5FF]/40 hover:bg-[#031c38]/60 transition-all duration-300 text-right"
          >
            <div className="min-w-0">
              <div className="text-[10px] text-white/38 uppercase tracking-widest mb-0.5">Next Service</div>
              <div className="text-sm font-bold text-white truncate group-hover:text-[#00E5FF] transition-colors">
                {nextService.title}
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] shrink-0 group-hover:bg-[#00E5FF]/20 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

      </div>
    </PageLayout>
  );
};

export default ServiceDetails;
