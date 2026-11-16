"use client";

import React from "react";
import { Check, ArrowUpRight, MessageSquare, Clock, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ScopeEstimatorSection() {
  const packages = [
    {
      name: "High-Converting Commercial Website",
      price: "From ₦450,000",
      roiAnchor: "Recouped with 1 to 2 new client engagements",
      timeline: "2 to 3 weeks",
      description: "Custom, ultra-fast commercial website built to establish authority and convert visitors into clients.",
      deliverables: [
        "Custom responsive design (Mobile & Desktop)",
        "Next.js 16 App Router for sub-second loading (100% Core Web Vitals)",
        "Direct WhatsApp conversion triggers & enquiry forms",
        "Full SEO, analytics, and speed optimization",
        "Full source code handover & documentation",
      ],
      whatsappMsg: "Hi Oluwaseun, I'm interested in building a High-Converting Website for my business.",
    },
    {
      name: "WhatsApp AI Lead Qualification Engine",
      price: "From ₦350,000",
      roiAnchor: "Captures leads instantly that would otherwise bounce",
      timeline: "1 to 2 weeks",
      featured: true,
      description: "24/7 autonomous WhatsApp system that qualifies incoming leads and logs rows to your spreadsheet while you sleep.",
      deliverables: [
        "Official WhatsApp Business API integration",
        "Custom AI triage trained on your pricing & services",
        "Automatic budget, timeline, and scope qualification",
        "Instant founder push notification for high-value leads",
        "Automated Google Sheets / Excel spreadsheet sync",
      ],
      whatsappMsg: "Hi Oluwaseun, I want to set up an automated WhatsApp AI Lead Qualification Engine.",
    },
    {
      name: "Custom Client Portal / Web App",
      price: "From ₦950,000",
      roiAnchor: "Replaces costly manual operations and SaaS subscriptions",
      timeline: "3 to 5 weeks",
      description: "Bespoke digital product, client ordering dashboard, or interactive dynamic quotation engine.",
      deliverables: [
        "Secure user authentication & role-based dashboard",
        "Interactive catalog search & quotation generator",
        "Payment integration (Paystack / Flutterwave / Stripe)",
        "Automated PDF proposal dispatch & invoice generation",
        "Dedicated cloud database & automated backups",
      ],
      whatsappMsg: "Hi Oluwaseun, I want to discuss building a Custom Client Portal or Web Application.",
    },
  ];

  return (
    <section
      id="calculator"
      aria-labelledby="pricing-heading"
      className="py-20 sm:py-28 bg-[#0B0E14] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scarcity Badge */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Strictly limited to 2 client sprints per month
          </div>
          <h2
            id="pricing-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Transparent investment. Proven ROI.
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-sans">
            Every engagement includes complete code ownership, zero hidden fees, and direct senior engineer collaboration.
          </p>
        </div>

        {/* 3 Clean, ROI-Anchored Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => {
            const packageWhatsAppUrl = `https://wa.me/2348033285789?text=${encodeURIComponent(pkg.whatsappMsg)}`;

            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl clean-card border flex flex-col justify-between space-y-6 ${
                  pkg.featured
                    ? "border-emerald-500/40 bg-[#0E151A] shadow-2xl relative"
                    : "border-white/10"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-emerald-500 text-black font-extrabold text-[10px] uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 fill-current" />
                      Highest Direct Revenue Impact
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price & ROI Anchor */}
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <span className="font-heading text-2xl font-extrabold text-white">
                        {pkg.price}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {pkg.timeline}
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span>{pkg.roiAnchor}</span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono block">
                      Scope Deliverables:
                    </span>
                    {pkg.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-sans leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <a
                    href={packageWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all shadow-md ${
                      pkg.featured
                        ? "bg-emerald-500 hover:bg-emerald-400 text-black"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Lock In Your Sprint on WhatsApp</span>
                  </a>
                  <p className="text-[10px] text-center text-slate-500 font-mono">
                    Direct conversation with Oluwaseun • No obligation
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
