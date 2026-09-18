import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { profileData } from "../../data/profile";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "Blog", path: "/#blog" },
  { name: "Contact", path: "/contact" }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isLinkActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    if (path.startsWith("/#")) {
      return false;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-7xl transition-all duration-300 mt-3 sm:mt-5 rounded-2xl sm:rounded-full border flex items-center justify-between px-4 sm:px-6 ${
          scrolled
            ? "py-2.5 sm:py-3 bg-[#020B18]/85 backdrop-blur-2xl border-[#00E5FF]/30 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,229,255,0.12)]"
            : "py-3.5 sm:py-4 bg-[#03152B]/60 backdrop-blur-xl border-[#00E5FF]/20 shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(0,229,255,0.06)]"
        }`}
      >
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group select-none">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] p-[1.5px] shadow-[0_0_15px_rgba(0,229,255,0.35)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all duration-300">
            <div className="w-full h-full bg-[#020B18] rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7] text-sm sm:text-base tracking-tighter">
              SP
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base text-white tracking-tight group-hover:text-[#00E5FF] transition-colors duration-200">
              {profileData.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-white/50 -mt-1 tracking-wider uppercase">
              {profileData.shortRole}
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-[#020B18]/40 border border-white/5 px-2 py-1 rounded-full">
          {navLinks.map((link) => {
            const active = isLinkActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 select-none ${
                  active
                    ? "text-white font-bold"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/50 shadow-[0_0_15px_rgba(0,229,255,0.3)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right: Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] hover:opacity-95 shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] border border-white/20 transition-all duration-300 group cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            to="/contact"
            className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#00E5FF]/20 border border-[#00E5FF]/40 text-[#00E5FF]"
          >
            Talk
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00E5FF]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-2xl bg-[#020B18]/95 backdrop-blur-2xl border border-[#00E5FF]/30 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,229,255,0.15)] flex flex-col gap-3 lg:hidden"
          >
            <div className="flex flex-col divide-y divide-white/5">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`py-3 px-3 text-sm font-semibold rounded-xl flex items-center justify-between transition-colors duration-200 ${
                      active
                        ? "text-[#00E5FF] bg-[#00E5FF]/10 font-bold"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2787FF] to-[#7B3CFF] shadow-[0_0_25px_rgba(0,229,255,0.4)]"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
