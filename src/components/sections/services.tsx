"use client";

import React from "react";
import { siteConfig } from "@/lib/site-config";
import { Check, ArrowRight, Sparkles, Code2, Cpu, Wrench, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { trackEvent } from "@/lib/analytics";

export function ServicesSection() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "web-development":
        return <Code2 className="w-5 h-5 text-[#38BDF8]" />;
      case "ai-automation":
        return <Cpu className="w-5 h-5 text-[#D9F36A]" />;
      case "ongoing-support":
        return <Wrench className="w-5 h-5 text-[#10B981]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D9F36A]" />;
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
      className="relative py-24 sm:py-32 bg-[#0D0F0E] text-[#F7F7F4] border-b border-white/[0.08] cyber-grid overflow-hidden"
    >
      {/* Ambient center lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#D9F36A]/[0.04] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Badge variant="cyber" className="mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Service Offerings</span>
          </Badge>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-heading leading-tight"
          >
            Engineering digital assets and automations that deliver commercial outcomes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9EABA2] leading-relaxed">
            I don&apos;t build generic websites or unvetted AI experiments. Every deliverable is designed around your business constraints, customer trust, and operational efficiency.
          </p>
        </div>

        {/* Services 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.services.map((service, index) => {
            const isFeatured = index === 1; // AI & Automation highlight
            const whatsappContext = getWhatsAppContext(service.id);

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl flex flex-col justify-between p-8 sm:p-9 transition-all duration-300 border ${
                  isFeatured
                    ? "glass-panel-elevated border-[#D9F36A]/50 shadow-[0_0_35px_rgba(217,243,106,0.12)] lg:-translate-y-2 ring-1 ring-[#D9F36A]/30"
                    : "glass-panel glass-panel-hover"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-[#D9F36A] text-[#121514] font-extrabold text-[10px] font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(217,243,106,0.4)]">
                      ★ High Operational ROI
                    </span>
                  </div>
                )}

                <div>
                  {/* Eyebrow & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                    <div className="p-2.5 rounded-xl bg-[#141816] border border-white/10 shadow-inner">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#7C8B82]">
                      {service.eyebrow}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#9EABA2] leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-xl bg-[#101312] border border-white/[0.08] mb-6 space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-[#7C8B82] font-mono">
                        Pricing Guide
                      </span>
                      <span className="text-base sm:text-lg font-bold font-mono text-[#D9F36A]">
                        {service.startingPrice}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8E9B93] leading-normal font-mono">
                      {service.pricingNote}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A0ACA4] block">
                      Engineered Deliverables:
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9EABA2]">
                          <Check className="w-4 h-4 text-[#D9F36A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs: Form Anchor & Contextual WhatsApp */}
                <div className="pt-6 border-t border-white/[0.08] space-y-3">
                  <a
                    href="#contact"
                    onClick={() => handleCtaClick(service.id, service.ctaText)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D9F36A] text-[#121514] font-bold text-xs uppercase tracking-wider hover:bg-[#CBEA4F] hover:shadow-[0_0_20px_rgba(217,243,106,0.3)] transition-all text-center"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <WhatsAppButton
                    service={whatsappContext}
                    variant="outline"
                    label="Direct WhatsApp Inquiry"
                    className="w-full text-xs py-2.5 border-white/10 hover:border-white/20 text-[#D0DDD5]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Expectations Notice */}
        <div className="mt-12 p-6 rounded-2xl glass-panel max-w-3xl mx-auto text-xs font-mono text-[#8E9B93] leading-relaxed text-center border-white/[0.08]">
          <span className="text-white font-bold">ENGINEERING CONTRACT:</span> High-quality systems require thoughtful scoping and quality inputs. AI solutions are tailored to specific validated workflows with human-in-the-loop safeguards—never marketed as blanket magic.
        </div>
      </div>
    </section>
  );
}
