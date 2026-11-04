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
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A] focus-visible:ring-offset-2 select-none";

  const variants = {
    primary:
      "bg-[#25D366] text-[#121514] font-semibold hover:bg-[#20BA5A] px-5 py-2.5 text-sm shadow-sm hover:shadow active:scale-[0.99]",
    secondary:
      "bg-[#1F2321] text-[#F7F7F4] hover:bg-[#282E2B] border border-[#2E3532] px-4 py-2 text-sm",
    outline:
      "border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 px-4 py-2 text-sm",
    inline:
      "text-[#25D366] hover:underline p-0 font-semibold",
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
      {showIcon && <MessageSquare className="w-4 h-4 shrink-0 fill-current" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}
