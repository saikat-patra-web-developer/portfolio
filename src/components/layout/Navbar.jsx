import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, Code, Database, Layout, Link as LinkIcon, Bot, Smartphone, Search } from "lucide-react";
import { profileData } from "../../data/profile";
import { useNavigation } from "../../context/useNavigation";
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

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { triggerTransition } = useNavigation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const isLinkActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (location.pathname === path && window.scrollY > 20) triggerTransition();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-350 ease-out border-0 border-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-350 ease-out">
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto w-full transition-all duration-350 ease-out flex items-center justify-between border-0 border-none ${
            isScrolled
              ? "mt-3 sm:mt-3.5 py-2 sm:py-2.5 px-4 sm:px-6 bg-[#031326]/75 shadow-[0_8px_30px_rgba(0,0,0,0.55)] backdrop-blur-xl rounded-2xl min-h-[62px] sm:min-h-[66px]"
              : "mt-2 sm:mt-3.5 py-3 sm:py-4 px-0 bg-transparent shadow-none backdrop-blur-none rounded-2xl min-h-[62px] sm:min-h-[66px]"
          }`}
        >
          {/* Brand */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <Link to="/" onClick={() => handleNavClick("/")} className="flex flex-col min-w-0 group select-none">
              <span className="font-extrabold text-sm sm:text-lg text-white tracking-tight group-hover:text-[#00E5FF] transition-colors duration-200 truncate">
                {profileData.name}
              </span>
              <span className="hidden min-[380px]:block text-[10px] sm:text-[11px] font-medium text-white/60 -mt-0.5 tracking-wider uppercase truncate">
                {profileData.shortRole}
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 px-2 py-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      onClick={() => setServicesOpen((v) => !v)}
                      className={`relative px-4 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 select-none inline-flex items-center gap-1 cursor-pointer ${
                        active ? "text-white font-bold" : "text-white/75 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/50 shadow-[0_0_15px_rgba(0,229,255,0.25)] -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-[#020B18]/96 backdrop-blur-2xl border border-[#00E5FF]/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,229,255,0.1)] p-4 z-50"
                        >
                          {/* Header row */}
                          <div className="flex items-center justify-between px-2 pb-3 border-b border-white/8 mb-3">
                            <span className="text-[10px] font-bold text-white/35 uppercase tracking-widest">All Services</span>
                            <Link
                              to="/services"
                              onClick={() => setServicesOpen(false)}
                              className="text-[11px] font-semibold text-[#00E5FF] hover:underline inline-flex items-center gap-1"
                            >
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          {/* Service grid */}
                          <div className="grid grid-cols-2 gap-1.5">
                            {coreServices.map((svc) => {
                              const Icon = serviceIcons[svc.icon] || Code;
                              const isActive = location.pathname === `/services/${svc.slug}`;
                              return (
                                <Link
                                  key={svc.id}
                                  to={`/services/${svc.slug}`}
                                  onClick={() => setServicesOpen(false)}
                                  className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-150 group ${
                                    isActive
                                      ? "bg-[#00E5FF]/10 border border-[#00E5FF]/30"
                                      : "hover:bg-white/5 border border-transparent hover:border-white/10"
                                  }`}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5FF]/15 to-[#7B3CFF]/15 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] shrink-0 mt-0.5 group-hover:border-[#00E5FF]/40 transition-colors">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-xs font-bold text-white leading-snug group-hover:text-[#00E5FF] transition-colors line-clamp-1">
                                      {svc.title}
                                    </div>
                                    <div className="text-[10px] text-white/45 leading-snug mt-0.5 line-clamp-1">
                                      {svc.shortDesc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative px-4 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 select-none ${
                    active ? "text-white font-bold" : "text-white/75 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/50 shadow-[0_0_15px_rgba(0,229,255,0.25)] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="flex-1 flex items-center justify-end gap-3">
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                onClick={() => handleNavClick("/contact")}
                className="cta-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] hover:opacity-95 shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] border border-white/20 transition-all duration-300 group cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <Link
                to="/contact"
                onClick={() => handleNavClick("/contact")}
                className="min-h-[42px] inline-flex items-center justify-center px-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#2787FF] to-[#00E5FF] border border-[#00E5FF]/40 shadow-sm"
              >
                Discuss Project
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-3 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#00E5FF]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto absolute left-4 right-4 sm:left-6 sm:right-6 rounded-2xl bg-[#020B18]/95 backdrop-blur-2xl border border-[#00E5FF]/30 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(0,229,255,0.15)] flex flex-col gap-3 lg:hidden max-h-[calc(100dvh-7rem)] overflow-y-auto ${
                isScrolled ? "top-[70px] sm:top-[76px]" : "top-[86px] sm:top-[96px]"
              }`}
            >
              <div className="flex flex-col divide-y divide-white/5">
                {navLinks.map((link) => {
                  const active = isLinkActive(link.path);

                  if (link.hasDropdown) {
                    return (
                      <div key={link.name}>
                        <button
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className={`w-full py-3 px-3 text-sm font-semibold rounded-xl flex items-center justify-between transition-colors duration-200 ${
                            active ? "text-[#00E5FF] bg-[#00E5FF]/10 font-bold" : "text-white/80 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#00E5FF]" : ""}`} />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="py-2 px-2 space-y-1">
                                {/* All Services link */}
                                <Link
                                  to="/services"
                                  onClick={() => handleNavClick("/services")}
                                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-[#00E5FF] bg-[#00E5FF]/8 border border-[#00E5FF]/20 hover:bg-[#00E5FF]/15 transition-colors"
                                >
                                  <ArrowRight className="w-3.5 h-3.5" />
                                  View All Services
                                </Link>
                                {coreServices.map((svc) => {
                                  const Icon = serviceIcons[svc.icon] || Code;
                                  return (
                                    <Link
                                      key={svc.id}
                                      to={`/services/${svc.slug}`}
                                      onClick={() => handleNavClick(`/services/${svc.slug}`)}
                                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                                        location.pathname === `/services/${svc.slug}`
                                          ? "bg-[#00E5FF]/10 text-[#00E5FF]"
                                          : "text-white/70 hover:text-white hover:bg-white/5"
                                      }`}
                                    >
                                      <div className="w-6 h-6 rounded-md bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] shrink-0">
                                        <Icon className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-xs font-semibold truncate">{svc.title}</div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`py-3 px-3 text-sm font-semibold rounded-xl flex items-center justify-between transition-colors duration-200 ${
                        active ? "text-[#00E5FF] bg-[#00E5FF]/10 font-bold" : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => handleNavClick("/contact")}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] shadow-[0_0_25px_rgba(0,229,255,0.35)]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
