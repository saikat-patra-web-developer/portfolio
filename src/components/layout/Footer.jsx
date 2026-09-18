import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  ArrowUp,
  MapPin,
  Phone,
  ArrowRight
} from "lucide-react";
import {
  LinkedInIcon,
  GitHubIcon,
  WhatsAppIcon
} from "../ui/SocialIcons";
import { profileData } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";

const iconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  whatsapp: WhatsAppIcon,
  mail: Mail
};

export const Footer = ({ showCta = true }) => {
  const { pathname } = useLocation();
  const ctaCopy = {
    "/about": ["LET'S BUILD TOGETHER", "Let's Build Something Great Together"],
    "/services": ["READY TO START?", "Let's Build Something Great Together"],
    "/projects": ["HAVE A PROJECT IN MIND?", "Let's Build Something Great Together"],
    "/skills": ["LET'S BUILD TOGETHER", "Ready to Build Something Amazing?"]
  }[pathname] || ["LET'S WORK TOGETHER", "Have a Project in Mind?"];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 mt-12">
      {/* Optional Pre-Footer CTA Banner matching mockups */}
      {showCta && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12">
          <div className="relative overflow-hidden rounded-2xl border border-[#00E5FF]/35 p-5 sm:px-8 sm:py-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,229,255,0.15)] flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Background cyan/violet glows */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7B3CFF]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-3">
                {ctaCopy[0]}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {ctaCopy[1]}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/70">
                Let's discuss how I can help you turn your ideas into reality.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] hover:opacity-95 shadow-[0_0_25px_rgba(0,229,255,0.45)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] border border-white/20 transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-xs text-white/50 text-center sm:text-left">
                Or email me at <br className="hidden sm:block" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-[#00E5FF] hover:underline font-mono"
                >
                  {profileData.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand & Bio (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] p-[1.5px] shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                <div className="w-full h-full bg-[#020B18] rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7] text-sm tracking-tighter">
                  SP
                </div>
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-tight">
                  {profileData.name}
                </span>
                <span className="block text-[10px] font-medium text-white/50 -mt-1 tracking-wider uppercase">
                  {profileData.role}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
              Building modern, high-performance web applications and custom digital solutions for a better tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon] || Mail;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg bg-[#03152B] border border-[#00E5FF]/20 flex items-center justify-center text-white/70 hover:text-[#00E5FF] hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-200"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#00E5FF]/90">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/65">
              <li>
                <Link to="/" className="hover:text-[#00E5FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00E5FF] transition-colors">
                  About
                </Link>
              </li>
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
                <Link to="/skills" className="hover:text-[#00E5FF] transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00E5FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#00E5FF]/90">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/65">
              <li>
                <Link to="/services" className="hover:text-[#00E5FF] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00E5FF] transition-colors">
                  Custom CRM Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00E5FF] transition-colors">
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00E5FF] transition-colors">
                  API Integration
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00E5FF] transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00E5FF] transition-colors">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Handwritten Tagline */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#00E5FF]/90">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <span>{profileData.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-[#00E5FF] transition-colors break-all"
                >
                  {profileData.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <a
                  href={`tel:${profileData.phone}`}
                  className="hover:text-[#00E5FF] transition-colors"
                >
                  {profileData.phone}
                </a>
              </li>
            </ul>

            {/* Handwritten badge matching mockups */}
            <div className="pt-2 text-right">
              <div className="font-handwriting text-2xl sm:text-3xl text-[#00E5FF]/70 -rotate-3 select-none">
                Code Create <br /> Solve Grow
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-7 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white/80 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/80 cursor-pointer">Terms & Conditions</span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#03152B] border border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF]/20 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
