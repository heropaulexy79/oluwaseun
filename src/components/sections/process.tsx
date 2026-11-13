import React from "react";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Check } from "lucide-react";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative py-24 sm:py-32 bg-[#070809] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-3">
              [06/06] EXECUTION PIPELINE
            </span>
            <h2
              id="process-heading"
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] text-white leading-[1.08]"
            >
              Strict milestone engineering.{" "}
              <span className="text-white/40">Zero assumptions, zero scope creep.</span>
            </h2>
          </div>

          <div className="max-w-xs font-mono text-xs text-white/50 md:text-right">
            <span>WEEKLY LIVE DEMOS. STRUCTURED REPOSITORIES. FULL CLIENT IP HANDOVER.</span>
          </div>
        </div>

        {/* 5-Phase Horizontal Architectural Ledger */}
        <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
          {siteConfig.processSteps.map((step) => (
            <div
              key={step.step}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline group hover:bg-white/[0.015] transition-colors px-2"
            >
              {/* Col 1: Phase Code & Index */}
              <div className="lg:col-span-2 flex items-baseline gap-3 font-mono">
                <span className="text-xl sm:text-2xl font-bold text-white/20 group-hover:text-white transition-colors">
                  0{step.step}
                </span>
                <span className="text-[10px] uppercase text-white/40 tracking-widest">
                  PHASE
                </span>
              </div>

              {/* Col 2: Phase Title & Objective */}
              <div className="lg:col-span-4 space-y-1.5">
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  {step.name}
                </h3>
                <div className="font-mono text-xs text-white/40">
                  {step.headline}
                </div>
              </div>

              {/* Col 3: Narrative Summary */}
              <div className="lg:col-span-3 text-sm text-white/60 font-sans leading-relaxed">
                {step.summary}
              </div>

              {/* Col 4: Hard Deliverable */}
              <div className="lg:col-span-3 p-4 bg-white/[0.02] border border-white/[0.06] font-mono text-xs space-y-1">
                <span className="text-[10px] text-white/40 uppercase block">Milestone Deliverable</span>
                <span className="text-white font-medium block">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
