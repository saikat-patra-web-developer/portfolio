import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  MessageSquare
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { NeonButton } from "../ui/NeonButton";
import { faqList } from "../../data/services";
import { profileData } from "../../data/profile";

export const FaqSection = ({
  badge = "FREQUENTLY ASKED QUESTIONS",
  title = "Common Questions",
  subtitle = "Straightforward answers to help you decide if we are the right fit for your project.",
  className = ""
}) => {
  // Track open question ID (defaults to the first question)
  const [openId, setOpenId] = useState(faqList[0]?.id || "tech-projects");

  // Inject Schema.org FAQPage JSON-LD for rich snippets & AI search engines
  useEffect(() => {
    const scriptId = "faq-structured-data";
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqList.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };

    scriptTag.textContent = JSON.stringify(faqSchema);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  const toggleQuestion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Split questions evenly into two sections: Left and Right
  const midpoint = Math.ceil(faqList.length / 2);
  const leftQuestions = faqList.slice(0, midpoint);
  const rightQuestions = faqList.slice(midpoint);

  const renderFaqCard = (faq, overallIndex) => {
    const isOpen = openId === faq.id;
    const displayIndex = String(overallIndex + 1).padStart(2, "0");

    return (
      <GlassCard
        key={faq.id}
        hoverEffect={false}
        className={`border transition-all duration-200 overflow-hidden ${isOpen
            ? "border-[#00E5FF]/50  shadow-[0_0_25px_rgba(0,229,255,0.12)]"
            : "border-[#00E5FF]/20 hover:border-[#00E5FF]/40 bg-[#03152B]/60"
          }`}
      >
        <button
          onClick={() => toggleQuestion(faq.id)}
          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3.5 cursor-pointer select-none"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${faq.id}`}
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-[#00E5FF]/80 px-2 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/20 shrink-0">
              {displayIndex}
            </span>
            <span
              className={`text-xs sm:text-sm font-bold transition-colors leading-snug ${isOpen ? "text-[#00E5FF]" : "text-white hover:text-[#00E5FF]/90"
                }`}
            >
              {faq.q}
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-[#00E5FF] shrink-0 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""
              }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`faq-answer-${faq.id}`}
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-5 pb-5 pt-2 text-xs sm:text-sm text-white/80 leading-relaxed border-t border-white/5">
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    );
  };

  return (
    <section className={`faq-section ${className}`}>
      {/* Header */}
      <SectionHeading
        badge={badge}
        title={title}
        subtitle={subtitle}
      />

      {/* Two-Section Layout: Left & Right Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 pt-2">
        {/* Left Column */}
        <div className="flex flex-col space-y-3.5 sm:space-y-4">
          {leftQuestions.map((faq, index) => renderFaqCard(faq, index))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-3.5 sm:space-y-4">
          {rightQuestions.map((faq, index) =>
            renderFaqCard(faq, midpoint + index)
          )}
        </div>
      </div>

      {/* Quick Inquiry / Conversion Card */}
      <div className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl border border-[#00E5FF]/25 bg-gradient-to-r from-[#03152B]/95 via-[#041d3a]/80 to-[#03152B]/95 shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0 mx-auto md:mx-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span>Have a question not listed here?</span>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            </h4>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Every project has unique requirements. Reach out directly and I will respond within 24 hours.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto justify-center">
          <a
            href={profileData.whatsappChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 min-h-[42px] rounded-xl text-xs sm:text-sm font-semibold text-[#00E5FF] hover:text-white bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 border border-[#00E5FF]/30 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
          <NeonButton
            to="/contact"
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
          >
            Ask Your Question
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
