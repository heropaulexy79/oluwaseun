"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, MessageSquare, FileText, ShoppingBag } from "lucide-react";

export function PortfolioSection() {
  const caseStudies = [
    {
      title: "Intelligent WhatsApp Lead Qualification & Triage Engine",
      category: "AI & Workflow Automation",
      metric: "Response time reduced from 4 hours to < 30 seconds",
      problem:
        "High-volume service businesses were losing valuable client inquiries due to delayed manual follow-ups on WhatsApp and messy spreadsheets.",
      solution:
        "Engineered an automated WhatsApp Business API triage system that instantly engages inbound leads, qualifies budget and urgency, and schedules discovery calls automatically.",
      results: [
        "Instant < 30-second lead qualification around the clock",
        "Zero leads lost during evenings and weekends",
        "Direct executive alerts for high-value inquiries",
      ],
      previewType: "whatsapp",
    },
    {
      title: "High-Performance B2B Commercial Catalog & Quotation Portal",
      category: "Web Development & Digital Products",
      metric: "Sub-0.8s mobile load time • 3.2x quote downloads",
      problem:
        "Legacy slow-loading catalog discouraged corporate buyers from self-servicing and created bottlenecks with manual sales quotes.",
      solution:
        "Built a lightweight, server-rendered Next.js digital catalog with instant client-side search, dynamic PDF proposal downloads, and integrated Paystack deposit gateway.",
      results: [
        "Perfect 100/100 Core Web Vitals score on mobile",
        "Instant multi-item quote calculations with zero layout shift",
        "Automated PDF proposal dispatch directly to client emails",
      ],
      previewType: "ecommerce",
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
              SELECTED WORK &amp; CASE STUDIES
            </span>
            <h2
              id="portfolio-heading"
              className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
            >
              Real systems built for commercial outcomes.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-xs font-sans">
            Client confidentiality respected. Detailed case studies and live demos shared during project consultations.
          </p>
        </div>

        {/* 2 Clean, Compelling Case Studies */}
        <div className="space-y-10">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl clean-card border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Problem, Solution, Outcome */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-white/[0.06] text-xs font-mono text-slate-300">
                    Case 0{idx + 1}
                  </span>
                  <span className="text-xs text-indigo-400 font-mono">{item.category}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {item.solution}
                </p>

                {/* Outcome Highlight Pill */}
                <div className="p-3.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-sans text-emerald-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.metric}</span>
                </div>

                <ul className="space-y-2 pt-1">
                  {item.results.map((res, rIdx) => (
                    <li key={rIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Clean Visual Representation */}
              <div className="lg:col-span-5 bg-[#0D1219] p-6 rounded-xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-3 border-b border-white/10">
                  <span>PRODUCTION ARCHITECTURE</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>

                {item.previewType === "whatsapp" ? (
                  <div className="space-y-3 text-xs font-sans">
                    <div className="p-3 rounded-lg bg-[#14211A] border border-emerald-500/20 text-slate-200">
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">Incoming Lead:</span>
                      &quot;Need corporate booking portal. Launch deadline is next month. Budget is ₦2.5M.&quot;
                    </div>
                    <div className="p-3 rounded-lg bg-[#0E3521] border border-emerald-500/30 text-emerald-100">
                      <span className="text-[10px] text-emerald-300 font-mono font-bold block mb-1">AI Output:</span>
                      &quot;Tier: Enterprise (₦2.5M) • Urgency: High • Discovery call dispatched to founder calendar.&quot;
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs font-sans">
                    <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-2">
                      <div className="flex justify-between font-mono text-[11px]">
                        <span className="text-slate-400">B2B Product SKU:</span>
                        <span className="text-emerald-400 font-bold">In Stock</span>
                      </div>
                      <div className="text-white font-bold text-sm">Industrial Power Inverter 50kVA</div>
                      <div className="text-slate-400 text-xs">Automated PDF quote generated in 0.4 seconds</div>
                    </div>
                    <div className="p-2.5 rounded bg-emerald-500/10 text-emerald-300 font-mono text-[11px] text-center">
                      Paystack Online Settlement Verified
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-slate-200 transition-all text-center"
                  >
                    <span>Request Similar Solution</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
