"use client";

import React from "react";
import { siteConfig } from "@/lib/site-config";
import { Check, ArrowUpRight, Code2, Cpu, Wrench, Sparkles } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { trackEvent } from "@/lib/analytics";

export function ServicesSection() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "web-development":
        return <Code2 className="w-5 h-5 text-white" />;
      case "ai-automation":
        return <Cpu className="w-5 h-5 text-white" />;
      case "ongoing-support":
        return <Wrench className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  const getWhatsAppContext = (id: string): "web-development" | "ai-automation" | "ongoing-support" => {
    if (id === "web-development") return "web-development";
    if (id === "ai-automation") return "ai-automation";
    return "ongoing-support";
  };

  const handleCtaClick = (serviceId: string, name: string) => {
    trackEvent("service_cta_click", { service: serviceId, label: name });
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-24 sm:py-32 bg-[#070809] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-3">
              [03/06] CORE CAPABILITIES
            </span>
            <h2
              id="services-heading"
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] text-white leading-[1.08]"
            >
              Engineered digital infrastructure.{" "}
              <span className="text-white/40">Built for commercial outcomes.</span>
            </h2>
          </div>

          <div className="max-w-xs font-mono text-xs text-white/50 md:text-right">
            <span>NO TEMPLATE RESELLING. NO UNVERIFIED AI HYPE. STRICT PRODUCTION STANDARDS.</span>
          </div>
        </div>

        {/* 3-Column Architectural Spec Grid (Hairline borders, no card fatigue) */}
        <div className="border border-white/[0.08] bg-[#090B0D] grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          {siteConfig.services.map((service, index) => {
            const isFeatured = index === 1;
            const whatsappContext = getWhatsAppContext(service.id);

            return (
              <div
                key={service.id}
                className={`p-8 sm:p-10 flex flex-col justify-between transition-colors ${
                  isFeatured ? "bg-[#0E1013]" : "hover:bg-white/[0.015]"
                }`}
              >
                <div>
                  {/* Top Eyebrow & Index */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6 font-mono text-xs">
                    <span className="text-white/40 uppercase tracking-widest">
                      0{index + 1} // {service.eyebrow}
                    </span>
                    {isFeatured && (
                      <span className="text-[10px] uppercase tracking-wider text-black bg-white px-2 py-0.5 font-bold">
                        HIGH DEMAND
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-sm text-white/60 font-sans leading-relaxed mb-8">
                    {service.tagline}
                  </p>

                  {/* Pricing Telemetry Box */}
                  <div className="p-4 bg-white/[0.03] border border-white/[0.08] mb-8 font-mono">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-[10px] uppercase text-white/40">Investment Guide</span>
                      <span className="text-base font-bold text-white">{service.startingPrice}</span>
                    </div>
                    <p className="text-[10px] text-white/40 leading-normal">
                      {service.pricingNote}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white/70 block">
                      Production Scope:
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-white/70 font-sans">
                          <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-6 border-t border-white/[0.08] space-y-3">
                  <a
                    href="#contact"
                    onClick={() => handleCtaClick(service.id, service.ctaText)}
                    className="w-full flex items-center justify-between py-3 px-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all text-center"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <WhatsAppButton
                    service={whatsappContext}
                    variant="outline"
                    label="WhatsApp Direct Inquire"
                    className="w-full text-xs py-2.5 border-white/10 hover:border-white/20 text-white/80 font-mono"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Contract Footer */}
        <div className="mt-12 p-6 border border-white/[0.08] bg-white/[0.015] font-mono text-xs text-white/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-white font-bold">COMMERCIAL CONTRACT:</span> Every deliverable includes full source code handover, documented APIs, and zero ongoing vendor lock-in.
          </div>
          <a href="#calculator" className="text-white hover:underline uppercase tracking-wider font-bold shrink-0">
            Open Scope Estimator &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
