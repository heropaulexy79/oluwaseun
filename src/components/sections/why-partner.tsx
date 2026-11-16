"use client";

import React from "react";
import { X, Check, ArrowRight, ShieldAlert, Sparkles, UserCheck } from "lucide-react";

export function WhyPartnerSection() {
  const comparisonRows = [
    {
      factor: "Project Leadership",
      theOldWay: "Account managers playing telephone; code outsourced to juniors.",
      theOluwaseunWay: "Direct senior systems engineer architecting and shipping your product.",
    },
    {
      factor: "Delivery Speed",
      theOldWay: "Bloated 8 to 12-week scopes with endless delay excuses.",
      theOluwaseunWay: "Focused 14-day production sprint with daily asynchronous updates.",
    },
    {
      factor: "Speed & Performance",
      theOldWay: "Heavy templates & WordPress plugins failing mobile Core Web Vitals.",
      theOluwaseunWay: "Bespoke Next.js 16 Edge runtime scoring 100/100 (< 0.6s loads).",
    },
    {
      factor: "Inbound Lead Capture",
      theOldWay: "Passive contact forms sitting unanswered in email inboxes for hours.",
      theOluwaseunWay: "Instant < 18s WhatsApp qualification & automatic spreadsheet sync.",
    },
    {
      factor: "Code & IP Ownership",
      theOldWay: "Proprietary lock-in, recurring licensing, or hostage source code.",
      theOluwaseunWay: "100% full GitHub repository, domain, and database ownership from day one.",
    },
  ];

  return (
    <section
      id="why-partner"
      aria-labelledby="why-heading"
      className="py-20 sm:py-28 bg-[#0B0E14] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-2">
            WHY CLIENTS CHOOSE DIRECT SENIOR ENGINEERING
          </span>
          <h2
            id="why-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            The difference between hiring an agency vs. partnering with Oluwaseun.
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-sans">
            No agency overhead, no account manager games, and no junior developer experiments on your dime.
          </p>
        </div>

        {/* High-Converting Side-by-Side Comparison Matrix */}
        <div className="rounded-2xl clean-card border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-white/[0.03] border-b border-white/10 p-5 sm:p-6 text-xs font-mono uppercase tracking-wider">
            <div className="md:col-span-4 text-slate-400 font-semibold hidden md:block">
              Deliverable Focus
            </div>
            <div className="md:col-span-4 text-rose-400/90 font-semibold flex items-center gap-1.5 mb-2 md:mb-0">
              <X className="w-4 h-4 text-rose-400 shrink-0" />
              <span>The Typical Agency / Freelancer</span>
            </div>
            <div className="md:col-span-4 text-emerald-400 font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>The Oluwaseun Standard</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/[0.06]">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-4 md:gap-6 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Column 1: Feature Title */}
                <div className="md:col-span-4">
                  <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider block mb-1">
                    0{idx + 1}
                  </span>
                  <span className="font-heading font-bold text-white text-base">
                    {row.factor}
                  </span>
                </div>

                {/* Column 2: The Old Way (Red / Dimmed) */}
                <div className="md:col-span-4 flex items-start gap-3 bg-rose-500/[0.03] md:bg-transparent p-3 md:p-0 rounded-xl border border-rose-500/10 md:border-transparent">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0 mt-0.5 text-rose-400">
                    <X className="w-3 h-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {row.theOldWay}
                  </p>
                </div>

                {/* Column 3: The Oluwaseun Standard (Green / High-Contrast) */}
                <div className="md:col-span-4 flex items-start gap-3 bg-emerald-500/[0.06] md:bg-emerald-500/[0.03] p-3 md:p-3 rounded-xl border border-emerald-500/20">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed font-sans">
                    {row.theOluwaseunWay}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Reassurance Banner */}
          <div className="p-5 sm:p-6 bg-indigo-500/[0.06] border-t border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-300 font-sans">
                Every project is backed by a <strong className="text-white">30-day post-launch warranty</strong> and direct WhatsApp engineer access.
              </p>
            </div>
            <a
              href="#calculator"
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold font-mono uppercase tracking-wider transition-all border border-white/10 shrink-0"
            >
              Review Scope &amp; Pricing &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
