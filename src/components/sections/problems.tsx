import React from "react";
import { siteConfig } from "@/lib/site-config";
import { ArrowDownRight, Layers, AlertTriangle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProblemsSection() {
  return (
    <section
      id="problems"
      aria-labelledby="problems-heading"
      className="relative py-24 sm:py-32 bg-[#0B0D0C] text-[#F7F7F4] border-b border-white/[0.08] cyber-grid overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-[#D9F36A]/[0.03] blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Badge variant="cyber" className="mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Operational Realities</span>
          </Badge>

          <h2
            id="problems-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-heading leading-tight"
          >
            Your business may not need more tools. It may need better systems.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#9EABA2] leading-relaxed">
            Most businesses already pay for a dozen disconnected SaaS subscriptions. The breakdown isn&apos;t a lack of software—it&apos;s fragmented workflows, slow follow-ups, and a digital presence that under-represents the actual calibre of their work.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.problems.map((item) => (
            <div
              key={item.number}
              className="group relative p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              {/* Subtle top indicator line on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#D9F36A]/40 transition-all" />

              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-5">
                  <span className="font-mono text-xs font-bold text-[#D9F36A] px-2 py-0.5 rounded bg-[#D9F36A]/10 border border-[#D9F36A]/20">
                    DIAGNOSTIC::{item.number}
                  </span>
                  <ArrowDownRight className="w-4 h-4 text-[#7C8B82] group-hover:text-[#D9F36A] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-[#F0F5F1] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#9EABA2] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#D9F36A]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Engineered Resolution:</span>
                </div>
                <p className="text-xs text-[#8E9B93] leading-normal">
                  {item.resolution}
                </p>
              </div>
            </div>
          ))}

          {/* Fifth/Sixth Card: Strategic Impact Feature Card */}
          <div className="relative p-8 rounded-2xl bg-[#131815] border border-[#D9F36A]/30 flex flex-col justify-between shadow-[0_0_30px_rgba(217,243,106,0.06)] overflow-hidden">
            <div
              className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#D9F36A]/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D9F36A] font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D9F36A] animate-pulse" />
                <span>Strategic Compounding</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Fixing the friction compounds your growth.
              </h3>
              <p className="text-sm text-[#9EABA2] mt-3 leading-relaxed">
                When your website establishes immediate authority and your backend automations eliminate manual delays, your team gets their time back and high-intent clients convert without friction.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D9F36A] hover:text-[#CBEA4F] transition-colors"
              >
                <span>View Core Offerings</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
