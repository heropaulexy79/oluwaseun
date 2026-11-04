"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Globe,
  Cpu,
  Layers,
  Wrench,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

interface ScopeOption {
  id: string;
  name: string;
  category: "website" | "ai-automation" | "custom-portal" | "ops-automation";
  icon: React.ReactNode;
  tagline: string;
  investmentGuide: string;
  turnaroundTime: string;
  deliverables: string[];
  expectedRoi: string;
  whatsappMessage: string;
}

const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: "high-converting-website",
    name: "High-Converting Business Website",
    category: "website",
    icon: <Globe className="w-5 h-5 text-[#38BDF8]" />,
    tagline: "Authoritative digital presence engineered for fast loading and maximum lead capture.",
    investmentGuide: "From ₦450,000",
    turnaroundTime: "2 to 3 weeks",
    deliverables: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "Next.js App Router for sub-second page loads",
      "Direct WhatsApp lead routing & conversion buttons",
      "Full SEO setup, Analytics & Core Web Vitals optimization",
      "CMS integration or editable content sections",
    ],
    expectedRoi: "Builds instant commercial trust and converts high-intent visitors into booked inquiries.",
    whatsappMessage: "Hi Oluwaseun, I'm interested in building a High-Converting Business Website for my company. Let's discuss scope and timeline.",
  },
  {
    id: "whatsapp-ai-engine",
    name: "WhatsApp AI Lead Qualification Engine",
    category: "ai-automation",
    icon: <Cpu className="w-5 h-5 text-[#D9F36A]" />,
    tagline: "Automated 24/7 lead triage that qualifies prospects and books calls while you sleep.",
    investmentGuide: "From ₦350,000",
    turnaroundTime: "1 to 2 weeks",
    deliverables: [
      "Official WhatsApp Business API integration",
      "Grounded AI triage agent trained on your services & pricing",
      "Automatic budget, urgency, and project scope extraction",
      "Instant executive notification when high-value leads arrive",
      "Google Sheets / CRM sync with deduplication",
    ],
    expectedRoi: "Reduces response lag from hours to under 30 seconds, preventing prospect drop-off.",
    whatsappMessage: "Hi Oluwaseun, I need a WhatsApp AI Lead Qualification Engine to handle and qualify inbound inquiries 24/7.",
  },
  {
    id: "custom-commercial-portal",
    name: "Custom Client Portal / Ordering System",
    category: "custom-portal",
    icon: <Layers className="w-5 h-5 text-[#A7F3D0]" />,
    tagline: "Bespoke web applications, interactive product catalogs, or client dashboards.",
    investmentGuide: "From ₦950,000",
    turnaroundTime: "3 to 5 weeks",
    deliverables: [
      "Secure authentication & role-based client dashboard",
      "Dynamic catalog search with instant quotation generator",
      "Payment gateway integration (Paystack / Flutterwave / Stripe)",
      "PDF quotation download & automated invoice dispatch",
      "Robust backend database and automated backup schedules",
    ],
    expectedRoi: "Eliminates manual quote preparation and allows B2B buyers to transact independently.",
    whatsappMessage: "Hi Oluwaseun, I want to discuss building a Custom Commercial Portal / Client Ordering System.",
  },
  {
    id: "workflow-ops-automation",
    name: "Workflow & Backend API Automation",
    category: "ops-automation",
    icon: <Wrench className="w-5 h-5 text-[#F59E0B]" />,
    tagline: "Eliminate manual data entry by connecting your website, CRM, forms, and WhatsApp.",
    investmentGuide: "From ₦300,000",
    turnaroundTime: "1 to 2 weeks",
    deliverables: [
      "Webhook connections between existing tools & software",
      "Automated document/invoice generation upon transaction",
      "Lead status tracking & multi-channel alert dispatch",
      "Data sanitation and error-handling fallback alerts",
      "Full architecture documentation for your team",
    ],
    expectedRoi: "Saves 15 to 25 hours per week of repetitive administrative data entry.",
    whatsappMessage: "Hi Oluwaseun, I want to streamline my operations with Workflow & Backend API Automation.",
  },
];

export function ScopeEstimatorSection() {
  const [selectedOptionId, setSelectedOptionId] = useState<string>("high-converting-website");
  const currentOption = SCOPE_OPTIONS.find((opt) => opt.id === selectedOptionId) || SCOPE_OPTIONS[0];

  const handleSelect = (id: string, name: string) => {
    setSelectedOptionId(id);
    trackEvent("scope_estimator_select", { option: id, name });
  };

  const directWhatsAppUrl = `https://wa.me/2348033285789?text=${encodeURIComponent(
    currentOption.whatsappMessage
  )}`;

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="relative py-24 sm:py-32 bg-[#090B0A] text-[#F7F7F4] border-b border-white/[0.08] cyber-grid overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D9F36A]/[0.035] blur-[170px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="cyber" className="mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Estimator</span>
          </Badge>
          <h2
            id="calculator-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-heading leading-tight"
          >
            What does your business need to achieve next?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9EABA2] leading-relaxed">
            Select an objective below to inspect deliverables, estimated turnaround, and expected commercial return.
          </p>
        </div>

        {/* Scope Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Selectable Objective Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7C8B82] block mb-2">
              STEP 1: SELECT YOUR SYSTEM TYPE
            </span>

            {SCOPE_OPTIONS.map((opt) => {
              const isSelected = opt.id === selectedOptionId;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(opt.id, opt.name)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? "bg-[#161C19] border-[#D9F36A]/60 shadow-[0_0_25px_rgba(217,243,106,0.12)] ring-1 ring-[#D9F36A]/30"
                      : "glass-panel glass-panel-hover border-white/[0.07]"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border shrink-0 ${
                      isSelected
                        ? "bg-[#1E2722] border-[#D9F36A]/40 text-[#D9F36A]"
                        : "bg-[#121614] border-white/10 text-[#9EABA2]"
                    }`}
                  >
                    {opt.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? "text-white" : "text-[#D0DDD5]"
                        }`}
                      >
                        {opt.name}
                      </h3>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#D9F36A] animate-pulse shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-[#8E9B93] mt-1 line-clamp-2 leading-relaxed">
                      {opt.tagline}
                    </p>
                    <div className="mt-2.5 flex items-center gap-3 text-[11px] font-mono">
                      <span className="text-[#D9F36A] font-semibold">{opt.investmentGuide}</span>
                      <span className="text-white/20">•</span>
                      <span className="text-[#A0ACA4]">{opt.turnaroundTime}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Scope & Action Breakdown */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl glass-panel-elevated p-8 sm:p-10 border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D9F36A] block">
                    PROJECT SCOPE SPECIFICATION
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {currentOption.name}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase text-[#7C8B82] block">
                    Target Turnaround
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20 mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentOption.turnaroundTime}</span>
                  </span>
                </div>
              </div>

              {/* Expected Commercial ROI Banner */}
              <div className="p-4 rounded-xl bg-[#141A17] border border-[#D9F36A]/30 mb-6 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#D9F36A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9F36A] block mb-0.5">
                    Commercial Impact & ROI:
                  </span>
                  <p className="text-xs sm:text-sm text-[#D0DDD5] leading-relaxed">
                    {currentOption.expectedRoi}
                  </p>
                </div>
              </div>

              {/* What You Get Deliverables */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A0ACA4] block">
                  Complete Deliverables Breakdown:
                </span>
                <ul className="space-y-2.5">
                  {currentOption.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#9EABA2]">
                      <CheckCircle2 className="w-4 h-4 text-[#D9F36A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Investment Range & Instant Action CTA */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#7C8B82] block">
                    Starting Investment
                  </span>
                  <span className="text-2xl font-black font-mono text-[#D9F36A]">
                    {currentOption.investmentGuide}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-[#121514] font-bold text-xs uppercase tracking-wider hover:bg-[#20BA5A] hover:shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Lock In This Scope on WhatsApp</span>
                  </a>

                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#121614] text-white hover:bg-[#1A201C] border border-white/10 text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

