import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const NeonButton = ({
  children,
  to,
  href,
  onClick,
  variant = "primary", // 'primary' | 'secondary' | 'glass' | 'outline'
  size = "md", // 'sm' | 'md' | 'lg'
  icon = true,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-medium gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-7 py-3.5 text-base font-semibold gap-2.5"
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] text-white shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] border border-white/20 hover:scale-[1.02]",
    secondary:
      "text-white/90 border border-[#00E5FF]/30 hover:border-[#00E5FF] hover:bg-[#052A4A]/80 shadow-[0_0_20px_rgba(0,229,255,0.1)] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:text-white",
    glass:
      "bg-white/10 text-white/90 border border-white/15 hover:border-[#A855F7]/50 hover:bg-white/15 shadow-[0_0_15px_rgba(168,85,247,0.1)]",
    outline:
      "bg-transparent text-[#00E5FF] border border-[#00E5FF]/40 hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]"
  };

  const baseClasses = `inline-flex items-center justify-center min-h-[42px] rounded-xl transition-all duration-300 group cursor-pointer select-none active:scale-[0.98] ${sizeStyles[size] || sizeStyles.md
    } ${variantStyles[variant] || variantStyles.primary} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
    } ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default NeonButton;
