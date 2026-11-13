"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { getWhatsAppUrl, WhatsAppServiceContext } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

interface WhatsAppButtonProps {
  service?: WhatsAppServiceContext;
  businessName?: string;
  projectBrief?: string;
  variant?: "primary" | "secondary" | "outline" | "inline";
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  service = "general",
  businessName,
  projectBrief,
  variant = "primary",
  className = "",
  label = "Chat on WhatsApp",
  showIcon = true,
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl({ service, businessName, projectBrief });

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      service,
      location: "button",
    });
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider text-xs font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white select-none";

  const variants = {
    primary:
      "bg-white text-black hover:bg-neutral-200 px-5 py-3 active:scale-[0.98]",
    secondary:
      "bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10 px-4 py-2.5",
    outline:
      "border border-white/15 text-white hover:bg-white/[0.05] px-4 py-2.5",
    inline:
      "text-white hover:underline p-0 font-bold",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={`${label} (Opens in WhatsApp)`}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {showIcon && <MessageSquare className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}
