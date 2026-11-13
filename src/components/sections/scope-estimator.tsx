"use client";

import React, { useState } from "react";
import {
  Clock,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Globe,
  Cpu,
  Layers,
  Wrench,
  Check,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface ScopeOption {
  id: string;
  name: string;
  code: string;
  category: "website" | "ai-automation" | "custom-portal" | "ops-automation";
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
    name: "Commercial Web Platform",
    code: "SPEC::WEB_01",
    category: "website",
    tagline: "High-speed business website engineered for sub-second loading, SEO authority, and customer acquisition.",
    investmentGuide: "From ₦450,000",
    turnaroundTime: "2 to 3 weeks",
    deliverables: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "Next.js App Router for sub-second page loads (100% Core Web Vitals)",
      "Direct WhatsApp lead routing & conversion buttons",
      "Full SEO setup, Analytics & performance optimization",
      "CMS integration or editable content sections",
    ],
    expectedRoi: "Builds instant commercial trust and converts high-intent visitors into booked inquiries.",
    whatsappMessage: "Hi Oluwaseun, I'm interested in building a Commercial Web Platform for my company. Let's discuss scope and timeline.",
  },
  {
    id: "whatsapp-ai-engine",
    name: "WhatsApp AI Qualification Closer",
    code: "SPEC::AI_02",
    category: "ai-automation",
    tagline: "Automated 24/7 lead qualification engine that extracts prospect budget and books calls while you sleep.",
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
    whatsappMessage: "Hi Oluwaseun, I need a WhatsApp AI Qualification Closer to handle and qualify inbound inquiries 24/7.",
  },
  {
    id: "custom-commercial-portal",
    name: "Custom Client Portal / Ordering System",
    code: "SPEC::APP_03",
    category: "custom-portal",
    tagline: "Bespoke digital product, client dashboard, or dynamic quotation generator.",
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
    whatsappMessage: "Hi Oluwaseun, I want to discuss building a Custom Client Portal / Ordering System.",
  },
  {
    id: "workflow-ops-automation",
    name: "Workflow & Backend API Bridge",
    code: "SPEC::OPS_04",
    category: "ops-automation",
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
      className="relative py-24 sm:py-32 bg-[#070809] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-3">
              [04/06] SCOPE ESTIMATOR
            </span>
            <h2
              id="calculator-heading"
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] text-white leading-[1.08]"
            >
              Configure your project scope.{" "}
              <span className="text-white/40">Review turnaround and deliverables.</span>
            </h2>
          </div>

          <div className="max-w-xs font-mono text-xs text-white/50 md:text-right">
            <span>SELECT A MODULE TO INSPECT ARCHITECTURAL SPECIFICATIONS AND PREDICTABLE INVESTMENT RANGES.</span>
          </div>
        </div>

        {/* Scope Selector Workbench */}
        <div className="border border-white/[0.08] bg-[#0A0C0E] grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          
          {/* Left Column: 4 Selectable Modules */}
          <div className="lg:col-span-5 divide-y divide-white/[0.08]">
            {SCOPE_OPTIONS.map((opt) => {
              const isSelected = opt.id === selectedOptionId;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(opt.id, opt.name)}
                  className={`w-full text-left p-6 sm:p-7 transition-colors cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white text-black"
                      : "bg-transparent text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs mb-2">
                      <span className={isSelected ? "text-black/60" : "text-white/40"}>
                        {opt.code}
                      </span>
                      <span className="font-bold">{opt.investmentGuide}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-tight mb-2">
                      {opt.name}
                    </h3>

                    <p
                      className={`text-xs font-sans leading-relaxed line-clamp-2 ${
                        isSelected ? "text-black/80" : "text-white/60"
                      }`}
                    >
                      {opt.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between font-mono text-[11px]">
                    <span className="uppercase">ESTIMATED LAUNCH:</span>
                    <span className="font-bold">{opt.turnaroundTime}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Scope Specification Workbench */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-[#08090A] flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-white/[0.08] gap-4 font-mono">
                <div>
                  <span className="text-xs text-white/40 uppercase tracking-widest block mb-1">
                    ACTIVE ARCHITECTURAL SPEC
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {currentOption.name}
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] text-white/40 uppercase block">Timeline Commitment</span>
                  <span className="text-sm font-bold text-[#10B981] flex items-center gap-1.5 sm:justify-end mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentOption.turnaroundTime}</span>
                  </span>
                </div>
              </div>

              {/* Commercial ROI Callout */}
              <div className="p-5 bg-white/[0.02] border border-white/[0.08] space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 block">
                  COMMERCIAL OBJECTIVE &amp; VALUE
                </span>
                <p className="text-sm text-white/90 font-sans leading-relaxed">
                  {currentOption.expectedRoi}
                </p>
              </div>

              {/* Scope Deliverables */}
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                  INCLUDED DELIVERABLES:
                </span>
                <ul className="space-y-2.5">
                  {currentOption.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/70 font-sans">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-white/[0.08] mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 font-mono">
              <div>
                <span className="text-[10px] text-white/40 uppercase block">Standard Pricing</span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {currentOption.investmentGuide}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Lock In Scope on WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-white/15 bg-white/[0.02] text-white hover:bg-white/[0.06] text-xs uppercase tracking-wider transition-all text-center"
                >
                  <span>Request Proposal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
