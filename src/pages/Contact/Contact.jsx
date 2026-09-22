import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Phone,
  Copy,
  Check,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Play,
  MessageSquare,
  Heart,
  Zap,
  ShieldCheck,
  Video,
  X
} from "lucide-react";
import {
  LinkedInIcon,
  GitHubIcon,
  WhatsAppIcon
} from "../../components/ui/SocialIcons";
import { PageLayout } from "../../components/layout/PageLayout";
import { GlassCard } from "../../components/ui/GlassCard";
import { Reveal } from "../../components/ui/Reveal";
import { useSearchParams } from "react-router-dom";
import { NeonButton } from "../../components/ui/NeonButton";
import { profileData } from "../../data/profile";
import {
  EASE,
  staggerContainer,
  staggerItem,
  staggerDelay
} from "../../animation/motion";

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service");

  // Close the booking modal on Escape for keyboard accessibility.
  useEffect(() => {
    if (!showBookingModal) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowBookingModal(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showBookingModal]);

  const handleCopy = (text, fieldId) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(fieldId);
        setTimeout(() => setCopiedField(null), 2000);
      });
    }
  };

  const projectInquiries = [
    "Custom Web Applications (React, Laravel)",
    "Bespoke CRM & Business Automation",
    "AI Tool Implementation & Smart Automation",
    "iOS & Android Mobile Applications",
    "SEO & GEO (Generative Engine Optimization)",
    "High-Performance Business Websites",
    "API & Third-Party Integrations",
    "Other Consultation (Let's Discuss)"
  ];

  const commitmentCards = [
    {
      icon: <MessageSquare className="w-5 h-5 text-[#00E5FF]" />,
      title: "Clear Communication",
      description: "Regular updates and transparent process."
    },
    {
      icon: <Heart className="w-5 h-5 text-[#00E5FF]" />,
      title: "Client Focused",
      description: "Your goals are my priority."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#00E5FF]" />,
      title: "Reliable Support",
      description: "On-time delivery and post-launch support."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />,
      title: "Long-Term Partnership",
      description: "Not just a project, but a lasting relationship."
    }
  ];

  const googleMapsUrl = "https://www.google.com/maps/place/Howrah,+West+Bengal,+India";

  return (
    <PageLayout
      title="Get in Touch Directly | Saikat Patra - Full Stack Web Developer"
      description="Skip the long forms. Reach out directly to Saikat Patra via WhatsApp, direct phone, or email for web development, custom CRMs, and business automation."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* ======================================================== */}
        {/* HEADER SECTION                                           */}
        {/* ======================================================== */}
        <motion.section
          className="relative pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08, 0.08)}
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span>DIRECT CHANNELS</span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Get in Touch{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2787FF] to-[#A855F7]">
              Directly.
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            Skip the long forms. Reach out directly through any of my verified communication channels for immediate project consultation and fast response.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70"
          >
            {["Fast Response Guaranteed", "Direct Senior Engineer", "WhatsApp & Direct Phone", "Remote Worldwide"].map((item) => (
              <span key={item} className="px-3 py-1 rounded-full bg-[#03152B] border border-white/10">
                &bull; {item}
              </span>
            ))}
          </motion.div>

          {requestedService && (
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#052A4A]/60 border border-[#00E5FF]/35 text-xs text-white"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>
                Inquiring about:{" "}
                <strong className="text-[#00E5FF] font-semibold">{requestedService}</strong>
              </span>
            </motion.div>
          )}
        </motion.section>

        {/* ======================================================== */}
        {/* ROW 1: 4 DIRECT COMMUNICATION CHANNELS                   */}
        {/* ======================================================== */}
        <Reveal
          as="section"
          amount={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {/* CARD 1: INSTANT CHAT (PRIMARY) */}
          <GlassCard
            glow="cyan"
            delay={staggerDelay(0, 4)}
            className="p-5 sm:p-6 border-[#00E5FF]/20 hover:border-[#00E5FF]/50 flex flex-col justify-between space-y-4 rounded-2xl"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(profileData.primaryPhone || "+91 90389 09382", "primary-phone")}
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-auto sm:h-auto sm:p-2 rounded-lg bg-[#020B18] border border-white/10 hover:border-[#00E5FF]/40 text-white/60 hover:text-[#00E5FF] transition-all cursor-pointer"
                  title="Copy Phone Number"
                  aria-label="Copy primary phone number"
                >
                  {copiedField === "primary-phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#00E5FF] uppercase block mb-1">
                  INSTANT CHAT (PRIMARY)
                </span>
                <div className="text-base sm:text-lg font-mono font-bold text-white tracking-tight">
                  {profileData.primaryPhone || "+91 90389 09382"}
                </div>
                <p className="text-xs text-white/70 leading-relaxed mt-2">
                  Fastest response for new project discussions, urgent inquiries, and immediate consultation.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 space-y-2">
              <NeonButton
                href={profileData.whatsappChatUrl}
                variant="secondary"
                size="sm"
                icon={false}
                className="w-full"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3 text-white/50" />
              </NeonButton>

              <NeonButton
                href={`tel:${(profileData.primaryPhone || "+91 90389 09382").replace(/\s+/g, "")}`}
                variant="secondary"
                size="sm"
                icon={false}
                className="w-full"
              >
                <Phone className="w-3 h-3 text-[#00E5FF]" />
                <span>Call Directly</span>
              </NeonButton>
            </div>
          </GlassCard>

          {/* CARD 2: INSTANT CHAT (SECONDARY) */}
          <GlassCard
            glow="cyan"
            delay={staggerDelay(1, 4)}
            className="p-5 sm:p-6 border-[#00E5FF]/20 hover:border-[#00E5FF]/50 flex flex-col justify-between space-y-4 rounded-2xl"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/35 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(profileData.secondaryPhone || "+91 89022 73136", "secondary-phone")}
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-auto sm:h-auto sm:p-2 rounded-lg bg-[#020B18] border border-white/10 hover:border-[#00E5FF]/40 text-white/60 hover:text-[#00E5FF] transition-all cursor-pointer"
                  title="Copy Phone Number"
                  aria-label="Copy secondary phone number"
                >
                  {copiedField === "secondary-phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#00E5FF] uppercase block mb-1">
                  INSTANT CHAT (SECONDARY)
                </span>
                <div className="text-base sm:text-lg font-mono font-bold text-white tracking-tight">
                  {profileData.secondaryPhone || "+91 89022 73136"}
                </div>
                <p className="text-xs text-white/70 leading-relaxed mt-2">
                  Alternate direct line for ongoing projects, technical support, and voice calls.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 space-y-2">
              <NeonButton
                href={profileData.whatsappSecondaryChatUrl || "https://wa.me/918902273136"}
                variant="secondary"
                size="sm"
                icon={false}
                className="w-full"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3 text-white/50" />
              </NeonButton>

              <NeonButton
                href={`tel:${(profileData.secondaryPhone || "+91 89022 73136").replace(/\s+/g, "")}`}
                variant="secondary"
                size="sm"
                icon={false}
                className="w-full"
              >
                <Phone className="w-3 h-3 text-[#00E5FF]" />
                <span>Call Directly</span>
              </NeonButton>
            </div>
          </GlassCard>

          {/* CARD 3: BUSINESS ENQUIRIES */}
          <GlassCard
            glow="both"
            delay={staggerDelay(2, 4)}
            className="p-5 sm:p-6 border-[#00E5FF]/20 hover:border-[#00E5FF]/50 flex flex-col justify-between space-y-4 rounded-2xl"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/35 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(profileData.businessEmail || "saikatpatraoffice@gmail.com", "business-email")}
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-auto sm:h-auto sm:p-2 rounded-lg bg-[#020B18] border border-white/10 hover:border-[#00E5FF]/40 text-white/60 hover:text-[#00E5FF] transition-all cursor-pointer"
                  title="Copy Business Email"
                  aria-label="Copy business email"
                >
                  {copiedField === "business-email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#00E5FF] uppercase block mb-1">
                  BUSINESS ENQUIRIES
                </span>
                <div className="text-xs sm:text-[13px] font-mono font-bold text-white tracking-tight truncate select-all">
                  {profileData.businessEmail || "saikatpatraoffice@gmail.com"}
                </div>
                <p className="text-xs text-white/70 leading-relaxed mt-2">
                  Best for formal project briefs, RFPs, proposals, contracts, and agency partnerships.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5">
              <NeonButton
                href={`mailto:${profileData.businessEmail || "saikatpatraoffice@gmail.com"}?subject=${encodeURIComponent("Business Inquiry / Proposal - Web Development")}`}
                variant="primary"
                size="sm"
                className="w-full"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Business Email</span>
              </NeonButton>
            </div>
          </GlassCard>

          {/* CARD 4: DIRECT EMAIL */}
          <GlassCard
            glow="purple"
            delay={staggerDelay(3, 4)}
            className="p-5 sm:p-6 border-[#A855F7]/20 hover:border-[#A855F7]/50 flex flex-col justify-between space-y-4 rounded-2xl"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#A855F7]/15 border border-[#A855F7]/35 flex items-center justify-center text-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(profileData.directEmail || "saikatpatra300@gmail.com", "direct-email")}
                  className="inline-flex items-center justify-center w-11 h-11 sm:w-auto sm:h-auto sm:p-2 rounded-lg bg-[#020B18] border border-white/10 hover:border-[#A855F7]/40 text-white/60 hover:text-[#A855F7] transition-all cursor-pointer"
                  title="Copy Direct Email"
                  aria-label="Copy direct email"
                >
                  {copiedField === "direct-email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#A855F7] uppercase block mb-1">
                  DIRECT EMAIL
                </span>
                <div className="text-xs sm:text-[13px] font-mono font-bold text-white tracking-tight truncate select-all">
                  {profileData.directEmail || "saikatpatra300@gmail.com"}
                </div>
                <p className="text-xs text-white/70 leading-relaxed mt-2">
                  Direct developer communication for technical consultations, code reviews, and scoping.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5">
              <NeonButton
                href={`mailto:${profileData.directEmail || "saikatpatra300@gmail.com"}?subject=${encodeURIComponent("Technical Consultation - Web Development")}`}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Email</span>
              </NeonButton>
            </div>
          </GlassCard>
        </Reveal>

        {/* ======================================================== */}
        {/* ROW 2: AVAILABILITY & LOCATION + PROFESSIONAL NETWORKS   */}
        {/* ======================================================== */}
        <Reveal
          as="section"
          amount={0.1}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5"
        >
          {/* AVAILABILITY & LOCATION */}
          <GlassCard
            glow="cyan"
            delay={staggerDelay(0, 2)}
            className="p-5 sm:p-6 border-[#00E5FF]/20 hover:border-[#00E5FF]/40 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/35 flex items-center justify-center text-[#00E5FF] shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Availability &amp; Location
                </h3>
                <p className="text-xs text-white/70 mt-0.5">
                  Global remote delivery with prompt communication.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* LOCATION SUB-CARD */}
              <div className="p-3.5 rounded-xl bg-[#020B18]/70 border border-white/5 space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-[#00E5FF] uppercase block">
                  LOCATION
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white truncate">
                    Howrah, West Bengal, India
                  </span>
                </div>
                <span className="text-[11px] text-white/50 block pl-8">
                  Remote worldwide
                </span>
              </div>

              {/* RESPONSE TIME SUB-CARD */}
              <div className="p-3.5 rounded-xl bg-[#020B18]/70 border border-white/5 space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-[#00E5FF] uppercase block">
                  RESPONSE TIME
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Usually within 24 hours
                  </span>
                </div>
                <span className="text-[11px] text-white/50 block pl-8">
                  Usually within a few hours
                </span>
              </div>
            </div>
          </GlassCard>

          {/* PROFESSIONAL NETWORKS */}
          <GlassCard
            glow="purple"
            delay={staggerDelay(1, 2)}
            className="p-5 sm:p-6 border-[#A855F7]/20 hover:border-[#A855F7]/40 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#A855F7]/15 border border-[#A855F7]/35 flex items-center justify-center text-[#A855F7] shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Professional Networks
                </h3>
                <p className="text-xs text-white/70 mt-0.5">
                  Follow and connect with me across professional platforms.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {/* LINKEDIN */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#020B18]/70 border border-white/10 hover:border-[#00E5FF]/40 text-white/80 hover:text-white flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>

              {/* GITHUB */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#020B18]/70 border border-white/10 hover:border-white/30 text-white/80 hover:text-white flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <GitHubIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold">GitHub</span>
              </a>

              {/* WHATSAPP */}
              <a
                href={profileData.whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#020B18]/70 border border-white/10 hover:border-emerald-500/40 text-white/80 hover:text-white flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold">WhatsApp</span>
              </a>

              {/* EMAIL */}
              <a
                href={`mailto:${profileData.businessEmail || "saikatpatraoffice@gmail.com"}`}
                className="p-3 rounded-xl bg-[#020B18]/70 border border-white/10 hover:border-[#A855F7]/40 text-white/80 hover:text-white flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#A855F7]/10 flex items-center justify-center text-[#A855F7] group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold">Email</span>
              </a>
            </div>
          </GlassCard>
        </Reveal>

        {/* ======================================================== */}
        {/* ROW 3: BOOK A MEETING + PROJECT INQUIRIES + MY LOCATION  */}
        {/* ======================================================== */}
        <Reveal
          as="section"
          amount={0.1}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {/* CARD 1: BOOK A MEETING */}
          <GlassCard
            glow="cyan"
            delay={staggerDelay(0, 3)}
            className="p-5 sm:p-6 border-[#00E5FF]/20 hover:border-[#00E5FF]/40 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/35 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Book a Meeting
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mt-2">
                  Prefer a direct conversation? Let's schedule a 15-minute introductory video call to discuss your goals.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-2.5">
              <NeonButton
                to="/about#story"
                variant="secondary"
                size="sm"
                icon={false}
                className="w-full"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#00E5FF]" />
                <span>Watch My Story</span>
              </NeonButton>

              <NeonButton
                onClick={() => setShowBookingModal(true)}
                variant="primary"
                size="sm"
                icon={false}
                className="w-full"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Call</span>
              </NeonButton>
            </div>
          </GlassCard>

          {/* CARD 2: PROJECT INQUIRY TYPES */}
          <GlassCard
            glow="cyan"
            delay={staggerDelay(1, 3)}
            className="p-5 sm:p-6 border-[#00E5FF]/20 hover:border-[#00E5FF]/40 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/35 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Project Inquiry Types
                </h3>
                <p className="text-xs text-white/70 mt-0.5">
                  What can we work on together?
                </p>
              </div>
            </div>

            <ul className="space-y-2 pt-1">
              {projectInquiries.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-xs text-white/85">
                  <Check className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* CARD 3: MY LOCATION */}
          <GlassCard
            glow="both"
            delay={staggerDelay(2, 3)}
            className="p-5 sm:p-6 border-[#00E5FF]/20 hover:border-[#00E5FF]/40 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-rose-500/15 border border-rose-500/35 flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#00E5FF] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  My Location
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mt-0.5">
                  Based in Howrah, West Bengal, India. Working with clients worldwide.
                </p>
              </div>
            </div>

            {/* VISUAL MAP CARD */}
            <div className="relative h-28 rounded-xl bg-[#020B18] border border-white/10 overflow-hidden flex items-center justify-center group">
              {/* Radar Grid Graphic */}
              <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              <div className="absolute w-24 h-24 rounded-full border border-[#00E5FF]/20 animate-ping opacity-25" />
              <div className="absolute w-36 h-36 rounded-full border border-[#A855F7]/20" />

              {/* Centered Location Pin Marker */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/50 text-rose-400 flex items-center justify-center mb-1 shadow-[0_0_12px_rgba(244,63,94,0.5)] group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
                <span className="text-xs font-bold text-white block">Howrah</span>
                <span className="text-[10px] text-white/60 block">West Bengal, India</span>
              </div>
            </div>

            {/* BULLET HIGHLIGHTS */}
            <ul className="space-y-1.5 pt-1 text-xs text-white/75">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                <span>Open to remote work worldwide</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shrink-0" />
                <span>Available for on-site (selective)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Working with global clients</span>
              </li>
            </ul>
          </GlassCard>
        </Reveal>

        {/* ======================================================== */}
        {/* ROW 4: OUR COMMITMENT / WHY WORK WITH ME?                */}
        {/* ======================================================== */}
        <Reveal
          as="section"
          amount={0.08}
          className="pt-6 sm:pt-10 border-t border-white/10 space-y-6"
        >
          <Reveal
            delay={0.05}
            amount={0.4}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[11px] font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                <span>OUR COMMITMENT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Why Work With Me?
              </h2>
              <p className="text-xs sm:text-sm text-white/70">
                A collaborative approach, clear communication, and a focus on results.
              </p>
            </div>

            <NeonButton
              to="/projects"
              variant="secondary"
              size="md"
              className="self-start sm:self-auto"
            >
              View My Work
            </NeonButton>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commitmentCards.map((card, idx) => (
              <GlassCard
                key={card.title}
                glow="cyan"
                delay={staggerDelay(idx, 4)}
                className="p-5 border-[#00E5FF]/15 hover:border-[#00E5FF]/40 rounded-xl space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{card.title}</h3>
                  <p className="text-xs text-white/65 mt-1 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Reveal>

      </div>

      {/* ======================================================== */}
      {/* BOOKING MODAL                                            */}
      {/* ======================================================== */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            key="booking-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, delay: 0.05, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Schedule an Intro Call"
              className="relative w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto p-6 rounded-3xl bg-[#03152B] border border-[#00E5FF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,229,255,0.2)] space-y-5"
            >
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-5 right-5 inline-flex items-center justify-center w-11 h-11 sm:w-auto sm:h-auto sm:p-2 rounded-full bg-[#020B18] border border-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2787FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Schedule an Intro Call</h3>
                <p className="text-xs text-white/70">15-minute introductory video or audio call</p>
              </div>
            </div>

            <p className="text-xs text-white/75 leading-relaxed">
              Choose your preferred platform below to connect with me instantly and set up a meeting time:
            </p>

            <div className="space-y-2.5">
              <a
                href="https://wa.me/919038909382?text=Hi%20Saikat%2C%20I%20would%20like%20to%20schedule%20a%2015-minute%20introductory%20video%20call%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#020B18]/90 border border-emerald-500/30 hover:border-emerald-500/60 text-white hover:text-emerald-400 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  <div className="text-left">
                    <span className="block text-xs font-bold text-white group-hover:text-emerald-400">WhatsApp Video / Audio</span>
                    <span className="block text-[11px] text-white/50">Instant scheduling via chat</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={`mailto:${profileData.businessEmail || "saikatpatraoffice@gmail.com"}?subject=${encodeURIComponent("Schedule 15-Minute Intro Call")}&body=${encodeURIComponent("Hi Saikat,\n\nI would like to schedule a 15-minute introductory video call to discuss a web development project.\n\nBest times for me:\n- \n- \n\nLooking forward to speaking.")}`}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#020B18]/90 border border-[#00E5FF]/30 hover:border-[#00E5FF]/60 text-white hover:text-[#00E5FF] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00E5FF]" />
                  <div className="text-left">
                    <span className="block text-xs font-bold text-white group-hover:text-[#00E5FF]">Email Calendar Invite</span>
                    <span className="block text-[11px] text-white/50">Send meeting proposal</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-[#00E5FF] group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={`tel:${(profileData.primaryPhone || "+91 90389 09382").replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#020B18]/90 border border-[#A855F7]/30 hover:border-[#A855F7]/60 text-white hover:text-[#A855F7] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#A855F7]" />
                  <div className="text-left">
                    <span className="block text-xs font-bold text-white group-hover:text-[#A855F7]">Direct Phone Call</span>
                    <span className="block text-[11px] text-white/50">+91 90389 09382</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-[#A855F7] group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer py-3 sm:py-0"
              >
                Cancel and close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Contact;
