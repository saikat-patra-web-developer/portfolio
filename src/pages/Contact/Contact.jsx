import { useSearchParams } from "react-router-dom";
import {
  Mail,
  MapPin,
  Clock,
  ExternalLink
} from "lucide-react";
import {
  LinkedInIcon,
  GitHubIcon,
  WhatsAppIcon
} from "../../components/ui/SocialIcons";
import { PageLayout } from "../../components/layout/PageLayout";
import { GlassCard } from "../../components/ui/GlassCard";
import { ContactForm } from "../../components/contact/ContactForm";
import { profileData } from "../../data/profile";

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  return (
    <PageLayout
      title="Contact Saikat Patra | Full Stack Web Developer"
      description="Let's discuss your project. Contact Saikat Patra for custom web applications, bespoke CRM software, business automation, or technical consulting."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section className="relative pt-4 sm:pt-8 text-center max-w-2xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>START A PROJECT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Let's Discuss{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2787FF] to-[#A855F7]">
              Your Project.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Tell me what you are trying to build or improve, and we can discuss the best technical architecture and milestone roadmap for your business.
          </p>
        </section>

        {/* ======================================================== */}
        {/* MAIN CONTACT LAYOUT: FORM + DIRECT CHANNELS              */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Form (Cols 1-7) */}
          <div className="lg:col-span-7">
            <ContactForm preselectedService={preselectedService} />
          </div>

          {/* Right Column: Direct Channels & Verified Proof (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Primary WhatsApp Card */}
            <GlassCard glow="cyan" className="p-6 border-[#00E5FF]/25  space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                    Instant Messaging (Fastest)
                  </span>
                  <div className="text-base font-bold text-white">
                    Direct WhatsApp
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed">
                Best for urgent inquiries, quick questions, and scheduling a direct consultation call.
              </p>

              <div className="pt-1">
                <a
                  href={profileData.whatsappChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </div>
            </GlassCard>

            {/* Primary Business Email Card */}
            <GlassCard glow="cyan" className="p-6 border-[#00E5FF]/25  space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/35 flex items-center justify-center text-[#00E5FF] shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#00E5FF] uppercase tracking-wider block">
                    Business Inquiries
                  </span>
                  <div className="text-sm font-bold text-white font-mono truncate">
                    {profileData.email}
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed">
                Send formal project specifications, RFPs, wireframes, or architecture documents.
              </p>

              <div className="pt-1">
                <a
                  href={`mailto:${profileData.email}?subject=${encodeURIComponent("New Project Inquiry - Web Development")}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#020B18] border border-[#00E5FF]/30 hover:border-[#00E5FF] transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </GlassCard>

            {/* Location & Response Time Promise */}
            <div className="p-5 rounded-2xl bg-[#03152B]/70 border border-white/10 space-y-3 text-xs text-white/75">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <div>
                  <strong className="text-white block">Response Expectation:</strong>
                  <span>{profileData.responseTime} (Monday to Saturday)</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 border-t border-white/5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <strong className="text-white block">Location:</strong>
                  <span>{profileData.location} (Available for remote contracts worldwide)</span>
                </div>
              </div>
            </div>

            {/* Verified Professional Networks & Google Business */}
            <div className="p-5 rounded-2xl bg-[#03152B]/70 border border-white/10 space-y-3">
              <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider block">
                Professional Networks & Verified Reviews
              </span>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#020B18]/80 border border-white/10 hover:border-[#00E5FF]/40 flex items-center gap-2 text-xs font-semibold text-white transition-all group"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#00E5FF] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#020B18]/80 border border-white/10 hover:border-[#00E5FF]/40 flex items-center gap-2 text-xs font-semibold text-white transition-all group"
                >
                  <GitHubIcon className="w-4 h-4 text-[#00E5FF] group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Contact;
