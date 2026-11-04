import React from "react";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Compass, CheckCircle2, GitCommit } from "lucide-react";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative py-24 sm:py-32 bg-[#0D0F0E] text-[#F7F7F4] border-b border-white/[0.08] cyber-grid overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#D9F36A]/[0.03] blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Badge variant="cyber" className="mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Execution Pipeline</span>
          </Badge>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-heading leading-tight"
          >
            Clear thinking. Thoughtful execution. Solutions built for real work.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9EABA2] leading-relaxed">
            Software projects fail when assumptions replace communication. My five-phase delivery model ensures total clarity on deliverables, milestones, and commercial value from day one.
          </p>
        </div>

        {/* Process Timeline Flow */}
        <div className="relative border-l border-white/[0.12] ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12 sm:space-y-16">
          {siteConfig.processSteps.map((step) => (
            <div key={step.step} className="relative group">
              {/* Step indicator dot with cyber pulse */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#131715] border-2 border-[#D9F36A] flex items-center justify-center font-mono text-[11px] font-bold text-[#D9F36A] shadow-[0_0_15px_rgba(217,243,106,0.35)] group-hover:scale-110 transition-transform">
                {step.step}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover">
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D9F36A]">
                    <GitCommit className="w-3.5 h-3.5" />
                    <span>PHASE::0{step.step}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {step.name}
                  </h3>
                  <div className="text-xs font-mono text-[#8E9B93]">
                    {step.headline}
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between gap-4">
                  <p className="text-sm sm:text-base text-[#9EABA2] leading-relaxed">
                    {step.summary}
                  </p>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2.5 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#D9F36A] shrink-0" />
                    <span>
                      <strong className="text-[#8E9B93] uppercase font-mono mr-1.5">Deliverable:</strong>
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
