import React from "react";
import { ArrowUpRight, Activity, RefreshCw, Cpu, Clock } from "lucide-react";

export function PartnershipSection() {
  const pillars = [
    {
      index: "01",
      title: "Uptime & System Monitoring",
      description:
        "Proactive checking of website availability, SSL renewals, DNS health, and API webhook delivery so issues are diagnosed before your customers notice.",
    },
    {
      index: "02",
      title: "Content & Feature Iterations",
      description:
        "Dedicated monthly engineering hours to adjust copy, launch new landing pages, update products, or refine design details as your business evolves.",
    },
    {
      index: "03",
      title: "Automation & API Upkeep",
      description:
        "Third-party APIs (WhatsApp, payment gateways, CRMs) frequently update schemas. Retainers ensure your automated pipelines adapt without breaking.",
    },
    {
      index: "04",
      title: "Priority Technical Advisory",
      description:
        "Direct access to your dedicated senior engineer for urgent troubleshooting, performance diagnostics, and strategic technical guidance whenever questions arise.",
    },
  ];

  return (
    <section
      id="partnership"
      aria-labelledby="partnership-heading"
      className="relative py-24 sm:py-32 bg-[#070809] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-3">
              CONTINUITY &amp; RETAINERS
            </span>
            <h2
              id="partnership-heading"
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] text-white leading-[1.08]"
            >
              Digital systems shouldn&apos;t be abandoned after launch.
            </h2>
          </div>

          <div className="max-w-xs font-mono text-xs text-white/50 md:text-right">
            <span>PROACTIVE MAINTENANCE GUARDS AGAINST COSTLY SYSTEM DOWNTIME AND UNEXPECTED API BREAKAGES.</span>
          </div>
        </div>

        {/* 4 Pillars in a Hairline Grid */}
        <div className="border border-white/[0.08] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] bg-[#0A0C0E]">
          {pillars.map((pillar) => (
            <div key={pillar.index} className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-xs text-white/40 block mb-4">
                  {pillar.index} // SLA
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Retainer Scope Strip */}
        <div className="mt-8 border border-white/[0.08] p-8 sm:p-10 bg-[#0E1013] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl font-mono">
            <div className="text-xs uppercase tracking-widest text-white/50">
              TRANSPARENT ENGAGEMENT STRUCTURE
            </div>
            <h4 className="font-display text-2xl font-bold text-white">
              Retainers available from ₦75,000 / month.
            </h4>
            <p className="text-xs text-white/60 font-sans leading-relaxed">
              Ongoing technical support is never mandatory. It is available to organizations that need peace of mind, fast turnaround, and dependable engineering oversight without hiring in-house staff.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all text-center"
            >
              <span>Discuss Support Retainer</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
