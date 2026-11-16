"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, MessageSquare, TrendingUp, Zap, Clock, ShieldCheck } from "lucide-react";

export function PortfolioSection() {
  const caseStudies = [
    {
      title: "Intelligent WhatsApp Lead Qualification & Triage Engine",
      client: "B2B Professional Services & Advisory Firm",
      category: "AI & Workflow Automation",
      headlineMetric: "+180% Qualified Client Inquiries in 30 Days",
      subMetric: "Response time dropped from 4 hours to < 18 seconds",
      problem:
        "High-volume service firm was losing high-ticket corporate inquiries due to delayed manual follow-ups on WhatsApp and chaotic spreadsheet records.",
      solution:
        "Engineered an automated WhatsApp Business API triage system that instantly engages inbound leads, verifies budget and urgency, logs rows to their spreadsheet, and sends direct founder alerts for qualified deals.",
      results: [
        "18-second average lead qualification time across 24/7 timezones",
        "Zero leads lost during evenings, weekends, or bank holidays",
        "Direct push notification to founder WhatsApp only when budget exceeds ₦1M+",
      ],
      tag: "18-Sec Triage",
    },
    {
      title: "High-Performance B2B Commercial Catalog & Quotation Portal",
      client: "Aura Global Equipment & Wholesale Distribution",
      category: "Web Development & Digital Products",
      headlineMetric: "3.2x Increase in Instant Quote Downloads",
      subMetric: "Sub-0.6s mobile load speed • 100/100 Core Web Vitals",
      problem:
        "A legacy slow-loading catalog discouraged corporate buyers on mobile networks and created heavy administrative bottlenecks with manual sales quotes.",
      solution:
        "Built an ultra-fast, server-rendered Next.js digital catalog with instant client-side search, real-time PDF quote generation, and integrated deposit checkout.",
      results: [
        "Perfect 100/100 Core Web Vitals score on mobile 3G/4G networks",
        "Instant multi-item quote calculations with zero layout shift",
        "Automated PDF proposal dispatch directly to client corporate emails",
      ],
      tag: "0.6s Mobile Load",
    },
  ];

  return (
    <section
      id="work"
      aria-labelledby="portfolio-heading"
      className="py-20 sm:py-28 bg-[#0B0E14] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-2">
              PROVEN BUSINESS OUTCOMES
            </span>
            <h2
              id="portfolio-heading"
              className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
            >
              Real systems engineered to generate revenue.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-xs font-sans">
            Client confidentiality respected. Detailed architecture blueprints and live staging demos shared during project consultations.
          </p>
        </div>

        {/* 2 High-Impact Outcome-Driven Case Studies */}
        <div className="space-y-10">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl clean-card border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Problem, Solution, Deal-Closing Highlights */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-white/[0.06] text-xs font-mono text-slate-300">
                    Case 0{idx + 1}
                  </span>
                  <span className="text-xs text-indigo-400 font-mono">{item.category}</span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-400 font-medium">{item.client}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {item.solution}
                </p>

                {/* Deal-Closing Metric Callout */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-sans text-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-bold text-sm text-white">{item.headlineMetric}</span>
                  </div>
                  <span className="text-slate-400 font-mono">{item.subMetric}</span>
                </div>

                <ul className="space-y-2 pt-1">
                  {item.results.map((res, rIdx) => (
                    <li key={rIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Visual System Proof */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-xl bg-[#090C10] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                    <span className="text-slate-400">STATUS: PRODUCTION</span>
                    <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-3 font-sans text-xs">
                    <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                        The Core Bottleneck Solved:
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                        Engineering Stack:
                      </span>
                      <p className="text-slate-200 font-mono text-[11px]">
                        {idx === 0 ? "Next.js • WhatsApp Business API • Google Sheets Webhook • Node.js" : "Next.js 16 App Router • Turbopack • Tailwind • Paystack Gateway"}
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/2348033285789?text=Hi%20Oluwaseun%2C%20I%20saw%20your%20case%20study%20and%20want%20to%20build%20something%20similar%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-medium transition-all"
                  >
                    <span>Request Similar System Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
