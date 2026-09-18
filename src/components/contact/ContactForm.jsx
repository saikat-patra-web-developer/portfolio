import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building,
  Layers,
  DollarSign,
  Calendar,
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
    phone: "",
    company: "",
    projectType: preselectedService || "Web Application (React, Laravel, etc.)",
    budgetRange: "$1,000 - $3,000",
    timeline: "2 - 4 weeks",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [responseMessage, setResponseMessage] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please include a brief description of your project";
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

      // Trigger celebratory confetti effect
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.7 }
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "Web Application (React, Laravel, etc.)",
        budgetRange: "$1,000 - $3,000",
        timeline: "2 - 4 weeks",
        message: ""
      });
    } catch (err) {
      setStatus("error");
      setResponseMessage(err.message || "Something went wrong. Please try again or email directly.");
    }
  };

  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[#073658]/90 via-[#072149]/90 to-[#22136f]/90 border border-[#00E5FF]/25 p-6 sm:p-8 md:p-10 shadow-[inset_0_0_25px_rgba(15,184,255,0.05),0_15px_40px_-10px_rgba(0,0,0,0.6),0_0_25px_rgba(0,229,255,0.1)]">
      {/* Card Header */}
      <div className="flex items-center gap-3.5 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7B3CFF]/20 border border-[#00E5FF]/35 flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Send Me a Message
          </h3>
          <p className="text-xs sm:text-sm text-white/60">
            Fill out the form below and I will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-white">Inquiry Sent Successfully!</p>
            <p className="mt-0.5 text-emerald-300/90">{responseMessage}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-white">Submission Failed</p>
            <p className="mt-0.5 text-rose-300/90">{responseMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1.5">
              Full Name <span className="text-[#00E5FF]">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#020B18]/70 border text-white text-xs sm:text-sm placeholder-white/35 focus:outline-none transition-all duration-200 ${
                  errors.name
                    ? "border-rose-500/80 focus:border-rose-400"
                    : "border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1.5">
              Email Address <span className="text-[#00E5FF]">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#020B18]/70 border text-white text-xs sm:text-sm placeholder-white/35 focus:outline-none transition-all duration-200 ${
                  errors.email
                    ? "border-rose-500/80 focus:border-rose-400"
                    : "border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1.5">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#020B18]/70 border border-[#00E5FF]/20 text-white text-xs sm:text-sm placeholder-white/35 focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all duration-200"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1.5">
              Company (Optional)
            </label>
            <div className="relative">
              <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#020B18]/70 border border-[#00E5FF]/20 text-white text-xs sm:text-sm placeholder-white/35 focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all duration-200"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Project Type */}
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1.5">
              Project Type <span className="text-[#00E5FF]">*</span>
            </label>
            <div className="relative">
              <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#020B18]/90 border border-[#00E5FF]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="Web Application (React, Laravel, etc.)">Web Application (React, Laravel)</option>
                <option value="Custom CRM Solutions">Custom CRM Solutions</option>
                <option value="Business / Portfolio Website">Business / Portfolio Website</option>
                <option value="E-commerce Solutions">E-commerce Solutions</option>
                <option value="WordPress Development">WordPress Development</option>
                <option value="API Integration & Automation">API Integration & Automation</option>
                <option value="Website Redesign & Optimization">Website Redesign & Optimization</option>
                <option value="Other">Other (Let's Discuss)</option>
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1.5">
              Budget Range
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#020B18]/90 border border-[#00E5FF]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="< $1,000">&lt; $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
                <option value="Flexible / Discuss">Flexible / Let's Discuss</option>
              </select>
            </div>
          </div>

          {/* Expected Timeline */}
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1.5">
              Expected Timeline
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#020B18]/90 border border-[#00E5FF]/20 text-white text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="Less than 2 weeks">Less than 2 weeks</option>
                <option value="2 - 4 weeks">2 - 4 weeks</option>
                <option value="1 - 2 months">1 - 2 months</option>
                <option value="3+ months">3+ months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">
            Your Message <span className="text-[#00E5FF]">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, goals, key requirements, or questions..."
            className={`w-full p-4 rounded-xl bg-[#020B18]/70 border text-white text-xs sm:text-sm placeholder-white/35 focus:outline-none transition-all duration-200 resize-none ${
              errors.message
                ? "border-rose-500/80 focus:border-rose-400"
                : "border-[#00E5FF]/20 focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.25)]"
            }`}
          />
          {errors.message && (
            <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Security badge and Submit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Your information is safe. Never shared with third parties.</span>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] hover:opacity-95 shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] border border-white/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
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
