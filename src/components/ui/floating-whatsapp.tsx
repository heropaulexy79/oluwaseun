"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button only after scrolling past the hero (250px)
      if (window.scrollY > 250 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  const url = getWhatsAppUrl({ service: "general" });

  const handleClick = () => {
    trackEvent("whatsapp_click", { location: "floating_action" });
  };

  return (
    <div
      role="region"
      aria-label="Quick WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-1.5 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Direct WhatsApp Chat with Oluwaseun"
        className="flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366] text-[#121514] font-semibold text-xs tracking-wide uppercase rounded-full shadow-lg hover:bg-[#20BA5A] transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A]"
      >
        <MessageSquare className="w-4 h-4 fill-current" aria-hidden="true" />
        <span>Chat on WhatsApp</span>
      </a>

      <button
        onClick={() => setIsDismissed(true)}
        aria-label="Dismiss WhatsApp floating shortcut"
        className="p-1.5 rounded-full bg-[#1F2321] text-[#9EABA2] hover:text-[#F7F7F4] border border-[#2E3532] shadow transition-colors"
      >
        <X className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </div>
  );
}
