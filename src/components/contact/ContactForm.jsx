import React, { useState } from "react";
import {
  User,
  Mail,
  Building,
  Layers,
  DollarSign,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck
} from "lucide-react";
import confetti from "canvas-confetti";
import { submitContactInquiry } from "../../services/contactService";

export const ContactForm = ({ preselectedService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: preselectedService || "Custom Web Application",
    budgetRange: "Flexible / Let's Discuss",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [responseMessage, setResponseMessage] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Your email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe what you are trying to build or improve";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setResponseMessage("");

    try {
      const res = await submitContactInquiry(formData);
      setStatus("success");
      setResponseMessage(res.message);

      // Confetti celebration
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "Custom Web Application",
        budgetRange: "Flexible / Let's Discuss",
        message: ""
      });
    } catch (err) {
      setStatus("error");
      setResponseMessage(err.message || "Failed to submit. Please try again or email directly.");
    }
  };

  return (
    <div className="rounded-3xl bg-[#03152B]/90 border border-[#00E5FF]/25 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
      {/* Form Header */}
      <div className="flex items-center gap-3.5 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/35 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Send a Project Message
          </h2>
          <p className="text-xs sm:text-sm text-white/60">
            Tell me about what you are planning, and I'll respond within 24 hours.
          </p>
        </div>
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-white">Inquiry Received!</p>
            <p className="mt-0.5 text-emerald-300/90">{responseMessage}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-rose-950/70 border border-rose-500/40 text-rose-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-white">Submission Failed</p>
            <p className="mt-0.5 text-rose-300/90">{responseMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-white/80 mb-1.5">
              Your Name <span className="text-[#00E5FF]">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Smith"
                aria-required="true"
                aria-invalid={!!errors.name}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#020B18]/80 border text-white text-xs sm:text-sm placeholder-white/35 focus:outline-none transition-all ${
                  errors.name
                    ? "border-rose-500/80 focus:border-rose-400"
                    : "border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-white/80 mb-1.5">
              Your Email Address <span className="text-[#00E5FF]">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#020B18]/80 border text-white text-xs sm:text-sm placeholder-white/35 focus:outline-none transition-all ${
                  errors.email
                    ? "border-rose-500/80 focus:border-rose-400"
                    : "border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Company (Optional) */}
          <div>
            <label htmlFor="contact-company" className="block text-xs font-semibold text-white/80 mb-1.5">
              Company or Website <span className="text-white/40 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                id="contact-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Acme Corp or website.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#020B18]/80 border border-[#00E5FF]/20 text-white text-xs sm:text-sm placeholder-white/35 focus:outline-none focus:border-[#00E5FF] transition-all"
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="contact-project-type" className="block text-xs font-semibold text-white/80 mb-1.5">
              Project Type <span className="text-[#00E5FF]">*</span>
            </label>
            <div className="relative">
              <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              <select
                id="contact-project-type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#020B18]/90 border border-[#00E5FF]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] transition-all appearance-none cursor-pointer"
              >
                <option value="Custom Web Application">Custom Web Application</option>
                <option value="Custom CRM & Business Automation">Custom CRM & Business Automation</option>
                <option value="High-Performance Business Website">High-Performance Business Website</option>
                <option value="API & Third-Party Integration">API & Third-Party Integration</option>
                <option value="WordPress / E-Commerce">WordPress / E-Commerce</option>
                <option value="Refactoring Existing Software">Refactoring / Upgrading Existing Code</option>
                <option value="Other Consultation">Other (Let's Discuss)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Budget Range (Optional) */}
        <div>
          <label htmlFor="contact-budget" className="block text-xs font-semibold text-white/80 mb-1.5">
            Budget Expectation <span className="text-white/40 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
            <select
              id="contact-budget"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#020B18]/90 border border-[#00E5FF]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] transition-all appearance-none cursor-pointer"
            >
              <option value="Flexible / Let's Discuss">Flexible / Open to Discussion</option>
              <option value="Under $1,500">Under $1,500 (Small sprint / bug fixes)</option>
              <option value="$1,500 - $3,500">$1,500 - $3,500 (Standard website or MVP tool)</option>
              <option value="$3,500 - $7,500">$3,500 - $7,500 (Comprehensive web app / CRM)</option>
              <option value="$7,500+">$7,500+ (Enterprise / Multi-tenant system)</option>
            </select>
          </div>
        </div>

        {/* Project Message */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-white/80 mb-1.5">
            What are you trying to build or improve? <span className="text-[#00E5FF]">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a bit about your business, current operational bottlenecks, what features you need, or any timeline requirements..."
            aria-required="true"
            aria-invalid={!!errors.message}
            className={`w-full p-4 rounded-xl bg-[#020B18]/80 border text-white text-xs sm:text-sm placeholder-white/35 focus:outline-none transition-all resize-none ${
              errors.message
                ? "border-rose-500/80 focus:border-rose-400"
                : "border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            }`}
          />
          {errors.message && (
            <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Strict privacy. No spam. Direct developer response.</span>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] hover:opacity-95 shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] border border-white/20 transition-all disabled:opacity-50 cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Discuss Your Project</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
