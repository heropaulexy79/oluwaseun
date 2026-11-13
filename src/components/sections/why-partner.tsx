"use client";

import React from "react";
import { Users, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";

export function WhyPartnerSection() {
  const pillars = [
    {
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      title: "Direct Senior Engineering",
      description:
        "Zero account managers playing telephone. You collaborate directly with the senior engineer architecting, coding, and deploying your system.",
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      title: "Sub-Second Speed & SEO",
      description:
        "Every page is engineered to achieve 100/100 Core Web Vitals, establishing instant credibility and preventing mobile visitor drop-off.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "100% IP & Code Ownership",
      description:
        "You own your GitHub repository, hosting keys, and domains completely from day one. Zero proprietary hostage code or recurring license traps.",
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
            WHY PARTNER WITH ME
          </span>
          <h2
            id="why-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            A dedicated technical partner, not an agency bureaucracy.
          </h2>
        </div>

        {/* 3 Clean, Breathable Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl clean-card border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

