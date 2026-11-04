import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "lime" | "outline" | "charcoal" | "neutral" | "cyber" | "cyan";
  children: React.ReactNode;
}

export function Badge({
  variant = "outline",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-all";

  const variants = {
    lime: "bg-[#D9F36A] text-[#121514] font-bold shadow-[0_0_15px_rgba(217,243,106,0.25)]",
    outline: "border border-white/10 text-[#9EABA2] bg-[#161A18]/80 backdrop-blur-sm",
    charcoal: "bg-[#181C1A] text-[#F7F7F4] border border-[#2A332F]",
    neutral: "bg-[#1A201D] text-[#D0D6D2] border border-[#2C3531]",
    cyber: "bg-[#D9F36A]/10 text-[#D9F36A] border border-[#D9F36A]/30 font-mono text-[11px]",
    cyan: "bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30 font-mono text-[11px]",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
