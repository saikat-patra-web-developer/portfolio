import { Link, useLocation } from "react-router-dom";
import { Mail, ArrowUp, ArrowRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from "../ui/SocialIcons";
import { profileData } from "../../data/profile";

export const Footer = ({ showCta = true }) => {
  const { pathname } = useLocation();
  const isContactPage = pathname === "/contact";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 mt-16 sm:mt-24">
      {/* Conversion Final Pre-Footer CTA (Shown on all pages except /contact) */}
      {showCta && !isContactPage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-10 sm:-translate-y-14">
          <div className="relative overflow-hidden rounded-3xl border border-[#00E5FF]/30 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(0,229,255,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#7B3CFF]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl text-center lg:text-left space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>START A CONVERSATION</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Have a Project That Needs a Better System?
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                Tell me what you are trying to build or improve, and we can discuss the best technical approach for your business.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0 w-full lg:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] hover:opacity-95 shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] border border-white/20 transition-all duration-300"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-[#052A4A] border border-[#00E5FF]/30 hover:border-[#00E5FF] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#00E5FF]" />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Simplified Footer Body */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${showCta && !isContactPage ? "pt-2 pb-10" : "py-12"}`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand & Positioning (Cols 1-5) */}
          <div className="md:col-span-5 space-y-3.5">
            <Link to="/" className="inline-flex flex-col group select-none">
              <span className="font-extrabold text-lg text-white tracking-tight group-hover:text-[#00E5FF] transition-colors">
                {profileData.name}
              </span>
              <span className="block text-[11px] font-medium text-white/50 -mt-0.5 tracking-wider uppercase">
                {profileData.role}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Full Stack Developer specializing in Custom Web Applications, CRM Systems & Business Automation.
            </p>

            <div className="text-xs text-white/50 pt-1">
              Based in {profileData.location} &bull; Serving clients worldwide
            </div>
          </div>

          {/* Clean Navigation (Cols 6-8) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-[#00E5FF]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <li>
                <Link to="/services" className="hover:text-[#00E5FF] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#00E5FF] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00E5FF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00E5FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Primary Contact & Social (Cols 9-12) */}
          <div className="md:col-span-4 space-y-3.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-[#00E5FF]">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-white/50 block text-[11px] font-medium uppercase tracking-wider">Email Inboxes</span>
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`mailto:${profileData.directEmail || "saikatpatra300@gmail.com"}`}
                    className="text-white hover:text-[#00E5FF] transition-colors font-mono text-xs"
                  >
                    {profileData.directEmail || "saikatpatra300@gmail.com"} <span className="text-[10px] text-white/40 font-sans">(Direct)</span>
                  </a>
                  <a
                    href={`mailto:${profileData.businessEmail || "saikatpatraoffice@gmail.com"}`}
                    className="text-white hover:text-[#00E5FF] transition-colors font-mono text-xs"
                  >
                    {profileData.businessEmail || "saikatpatraoffice@gmail.com"} <span className="text-[10px] text-white/40 font-sans">(Business)</span>
                  </a>
                </div>
              </div>

              <div className="space-y-1 pt-1 border-t border-white/5">
                <span className="text-white/50 block text-[11px] font-medium uppercase tracking-wider">WhatsApp & Direct Calls</span>
                <div className="flex flex-col gap-0.5">
                  <a
                    href={profileData.whatsappChatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00E5FF] transition-colors text-xs"
                  >
                    {profileData.primaryPhone || "+91 90389 09382"} <span className="text-[10px] text-emerald-400 font-sans">(Primary)</span>
                  </a>
                  <a
                    href={profileData.whatsappSecondaryChatUrl || "https://wa.me/918902273136"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00E5FF] transition-colors text-xs"
                  >
                    {profileData.secondaryPhone || "+91 89022 73136"} <span className="text-[10px] text-white/40 font-sans">(Secondary)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#03152B] border border-[#00E5FF]/20 flex items-center justify-center text-white/80 hover:text-[#00E5FF] hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on GitHub"
                className="w-9 h-9 rounded-xl bg-[#03152B] border border-[#00E5FF]/20 flex items-center justify-center text-white/80 hover:text-[#00E5FF] hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-xl bg-[#03152B] border border-[#00E5FF]/20 flex items-center justify-center text-white/80 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-[#03152B] border border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF]/20 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
