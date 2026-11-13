import React from "react";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, ArrowDownRight, ShieldCheck } from "lucide-react";

export function ProblemsSection() {
  return (
    <section
      id="problems"
      aria-labelledby="problems-heading"
      className="relative py-24 sm:py-32 bg-[#070809] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-3">
              [02/06] OPERATIONAL DIAGNOSTIC
            </span>
            <h2
              id="problems-heading"
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] text-white leading-[1.08]"
            >
              Your business doesn&apos;t need more software subscriptions.{" "}
              <span className="text-white/40">It needs connected systems.</span>
            </h2>
          </div>

          <div className="max-w-xs font-mono text-xs text-white/50 md:text-right">
            <span>MOST FIRMS LEAK 30% OF INBOUND LEADS THROUGH SLOW RESPONSE TIMES AND FRAGMENTED WORKFLOWS.</span>
          </div>
        </div>

        {/* Editorial Diagnostic Ledger (No Card Fatigue) */}
        <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
          {siteConfig.problems.map((item, idx) => (
            <div
              key={item.number}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group hover:bg-white/[0.015] transition-colors px-2"
            >
              {/* Col 1: Index & Code */}
              <div className="lg:col-span-2 flex items-baseline gap-3">
                <span className="font-mono text-xl sm:text-2xl font-bold text-white/20 group-hover:text-white transition-colors">
                  {item.number}
                </span>
                <span className="font-mono text-[10px] uppercase text-white/40 tracking-widest">
                  DIAGNOSTIC
                </span>
              </div>

              {/* Col 2: The Failure Mode */}
              <div className="lg:col-span-5 space-y-3">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-white/60 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Col 3: The Engineered Fix */}
              <div className="lg:col-span-5 p-5 bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#10B981]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ENGINEERED RESOLUTION</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                  {item.resolution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-white/60">
          <div>
            <span className="text-white font-bold">THE TAKEAWAY:</span> Fixing your commercial digital presence compounds every naira spent on marketing.
          </div>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:underline"
          >
            <span>Inspect Core Offerings</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
