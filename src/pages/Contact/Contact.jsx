import { Link, useSearchParams } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  Play,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  MessageSquare,
  Zap,
  Check
} from "lucide-react";
import {
  LinkedInIcon,
  GitHubIcon,
  WhatsAppIcon,
  YouTubeIcon,
  TwitterIcon,
  InstagramIcon
} from "../../components/ui/SocialIcons";
import { PageLayout } from "../../components/layout/PageLayout";
import { GlassCard } from "../../components/ui/GlassCard";
import { ContactForm } from "../../components/contact/ContactForm";
import { profileData } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";

const socialIconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  whatsapp: WhatsAppIcon,
  youtube: YouTubeIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  mail: Mail
};

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || searchParams.get("plan") || "";

  return (
    <PageLayout
      title="Contact Saikat Patra | Web Developer"
      description="Get in touch with Saikat Patra for full-stack web application development, custom CRM systems, WordPress development, or consulting."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="relative pt-6 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>GET IN TOUCH</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Let's <span className="text-gradient">Talk</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-white/90">
                Have a Project in Mind?
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I'm always open to discussing new opportunities, freelance projects, collaborations or a friendly chat about web development. Let's create something amazing together!
              </p>

              {/* Inquiry Type Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
                {[
                  "New Projects",
                  "Freelance Work",
                  "Collaboration",
                  "Just a Chat"
                ].map((tag) => (
                  <div
                    key={tag}
                    className="px-3.5 py-1.5 rounded-lg bg-[#03152B]/80 border border-[#00E5FF]/20 text-white/80 text-xs font-medium"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-3xl p-1 bg-gradient-to-br from-[#00E5FF]/40 via-[#2787FF]/20 to-[#7B3CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#020B18]">
                  <img
                    src="/assets/images/saikat-hero.webp"
                    alt="Saikat Patra Contact Visual"
                    className="w-full h-auto object-cover"
                  />

                  {/* Availability badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-gradient-to-br from-[#073658] via-[#072149] to-[#22136f] border border-[#00E5FF]/30 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-semibold text-white">
                        Currently Available
                      </span>
                    </div>
                    <span className="text-[11px] text-[#00E5FF] font-medium">
                      Open for new projects
                    </span>
                  </div>
                </div>

                {/* Floating Quote */}
                <div className="absolute -top-5 -right-5 sm:-right-8 p-3.5 rounded-2xl bg-gradient-to-br from-[#073658] via-[#072149] to-[#22136f] border border-[#A855F7]/40 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(168,85,247,0.2)] hidden sm:block">
                  <div className="text-[10px] text-white/50 italic font-mono">&ldquo;</div>
                  <div className="font-handwriting text-base font-bold text-white tracking-wide leading-snug">
                    Great Ideas <br /> Start With a <br /> Conversation
                  </div>
                  <div className="text-[10px] text-white/50 italic font-mono text-right">&rdquo;</div>
                </div>

                {/* Handwritten Accent */}
                <div className="absolute -bottom-6 -left-6 font-handwriting text-2xl text-[#00E5FF]/85 -rotate-6 hidden sm:block pointer-events-none select-none">
                  Build Something <br /> Great Together
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* MAIN INTERACTIVE CONTACT GRID                            */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form (Cols 1-7) */}
          <div className="lg:col-span-7">
            <ContactForm preselectedService={preselectedService} />
          </div>

          {/* Right Column: Info & Connect (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Information Card */}
            <GlassCard glow="cyan" className="p-6 sm:p-7 border-[#00E5FF]/25">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Contact Information
                  </h3>
                  <p className="text-xs text-white/60">
                    Feel free to reach out through any of these channels.
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {/* Business Enquiries Email */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#020B18]/60 border border-white/5 hover:border-[#00E5FF]/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                      Business Enquiries
                    </div>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-[#00E5FF] transition-colors break-all"
                    >
                      {profileData.email}
                    </a>
                    <div className="text-[10px] text-white/40 mt-0.5">
                      New projects, proposals & partnerships
                    </div>
                  </div>
                </div>

                {/* Direct Developer Email */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#020B18]/60 border border-white/5 hover:border-[#00E5FF]/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#A855F7]/10 text-[#A855F7] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${profileData.directEmail}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-[#00E5FF] transition-colors break-all"
                    >
                      {profileData.directEmail}
                    </a>
                    <div className="text-[10px] text-white/40 mt-0.5">
                      Direct developer communication
                    </div>
                  </div>
                </div>

                {/* Instant Chat (Primary) */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#020B18]/60 border border-white/5 hover:border-[#00E5FF]/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                        Instant Chat (Primary)
                      </span>
                      <a
                        href={profileData.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/20 transition-colors"
                      >
                        <span>WhatsApp</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-[#00E5FF] transition-colors block mt-0.5"
                    >
                      {profileData.phone}
                    </a>
                    <div className="text-[10px] text-white/40 mt-0.5">
                      Call or chat on WhatsApp
                    </div>
                  </div>
                </div>

                {/* Instant Chat (Secondary) */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#020B18]/60 border border-white/5 hover:border-[#00E5FF]/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                        Instant Chat (Secondary)
                      </span>
                      <a
                        href={profileData.secondaryWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/20 transition-colors"
                      >
                        <span>WhatsApp</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                    <a
                      href={`tel:${profileData.secondaryPhone}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-[#00E5FF] transition-colors block mt-0.5"
                    >
                      {profileData.secondaryPhone}
                    </a>
                    <div className="text-[10px] text-white/40 mt-0.5">
                      Alternate phone & WhatsApp contact
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#020B18]/60 border border-white/5 hover:border-[#00E5FF]/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {profileData.location}
                    </div>
                    <div className="text-[10px] text-white/40 mt-0.5">
                      Available for remote work worldwide
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#020B18]/60 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                      Response Time
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {profileData.responseTime}
                    </div>
                    <div className="text-[10px] text-white/40 mt-0.5">
                      I'll get back to you promptly
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Connect With Me Card */}
            <GlassCard glow="purple" className="p-6 border-[#A855F7]/25">
              <h3 className="text-base font-bold text-white mb-1">
                Connect With Me
              </h3>
              <p className="text-xs text-white/60 mb-4">
                Follow me on social media for updates, tips, and insights.
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {socialLinks.map((s) => {
                  const IconComp = socialIconMap[s.icon] || Mail;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#020B18]/80 border border-[#00E5FF]/20 flex flex-col items-center justify-center gap-1.5 hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 text-white/80 hover:text-white transition-all group"
                      title={s.label || s.name}
                    >
                      <IconComp className="w-5 h-5 group-hover:scale-110 transition-transform text-[#00E5FF]" />
                      <span className="text-[10px] font-medium text-center truncate w-full">{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ======================================================== */}
        {/* ROW 2: BOOK MEETING, INQUIRY TYPES, LOCATION MAP         */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Book a Meeting */}
          <GlassCard className="p-6 sm:p-7 border-[#00E5FF]/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#2787FF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Book a Meeting
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-6">
                Prefer a direct conversation? Let's schedule a 15-minute introductory video call to discuss your goals.
              </p>
            </div>

            <div className="space-y-2.5">
              <Link
                to="/about"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[#020B18] border border-[#00E5FF]/30 text-white hover:bg-[#00E5FF]/10 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#00E5FF]" />
                <span>Watch My Story</span>
              </Link>

              <a
                href={`https://calendly.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2787FF] to-[#7B3CFF] shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:opacity-95 transition-opacity"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Call</span>
              </a>
            </div>
          </GlassCard>

          {/* Project Inquiry Types */}
          <GlassCard className="p-6 sm:p-7 border-[#00E5FF]/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Project Inquiry Types
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                What can we work on together?
              </p>

              <ul className="space-y-2 text-xs text-white/80">
                {[
                  "Custom Website Development",
                  "Business / Portfolio Website",
                  "E-commerce Solutions",
                  "Web Application (React, Laravel, etc.)",
                  "API Integration & Automation",
                  "Website Redesign & Optimization",
                  "Other (Let's Discuss)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          {/* Location Map Card */}
          <GlassCard className="p-6 sm:p-7 border-[#00E5FF]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <a
                  href="https://maps.google.com/?q=Howrah,West+Bengal,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00E5FF] hover:underline"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                My Location
              </h3>
              <p className="text-xs text-white/60 mb-4">
                Based in Howrah, West Bengal, India. Working with clients worldwide.
              </p>

              {/* Stylized Glass Map Graphic */}
              <div className="relative rounded-xl overflow-hidden border border-[#00E5FF]/25 bg-[#020B18] p-4 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500 mx-auto flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white">Howrah</div>
                <div className="text-[10px] text-white/60">West Bengal, India</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                <span>Open to remote work worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7B3CFF]" />
                <span>Available for on-site (selective)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Working with global clients</span>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ======================================================== */}
        {/* WHY WORK WITH ME                                         */}
        {/* ======================================================== */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-2">
                <span>OUR COMMITMENT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Why Work With Me?
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1">
                A collaborative approach, clear communication, and a focus on results.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00E5FF] hover:text-white bg-[#03152B]/60 hover:bg-[#00E5FF]/20 px-4 py-2 rounded-xl border border-[#00E5FF]/30 transition-all self-start sm:self-end"
            >
              <span>View My Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: MessageSquare,
                title: "Clear Communication",
                desc: "Regular updates and transparent process."
              },
              {
                icon: HeartHandshake,
                title: "Client Focused",
                desc: "Your goals are my priority."
              },
              {
                icon: Zap,
                title: "Reliable Support",
                desc: "On-time delivery and post-launch support."
              },
              {
                icon: ShieldCheck,
                title: "Long-Term Partnership",
                desc: "Not just a project, but a lasting relationship."
              }
            ].map((item) => (
              <GlassCard key={item.title} className="p-5 border-[#00E5FF]/20 space-y-2">
                <item.icon className="w-5 h-5 text-[#00E5FF]" />
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Contact;
