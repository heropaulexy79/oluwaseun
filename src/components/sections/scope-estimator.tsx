"use client";

import React from "react";
import { Check, ArrowUpRight, MessageSquare, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ScopeEstimatorSection() {
  const packages = [
    {
      name: "High-Converting Website",
      price: "From ₦450,000",
      timeline: "2 to 3 weeks",
      description: "Custom, ultra-fast commercial website built to establish authority and convert visitors into clients.",
      deliverables: [
        "Custom responsive design (Mobile & Desktop)",
        "Next.js App Router for sub-second loading (100% Core Web Vitals)",
        "Direct WhatsApp conversion triggers & enquiry forms",
        "Full SEO, analytics, and performance optimization",
        "Full source code handover & documentation",
      ],
      whatsappMsg: "Hi Oluwaseun, I'm interested in building a High-Converting Website for my business.",
    },
    {
      name: "WhatsApp AI Lead Closer",
      price: "From ₦350,000",
      timeline: "1 to 2 weeks",
      featured: true,
      description: "24/7 autonomous WhatsApp system that qualifies incoming leads and books calls while you sleep.",
      deliverables: [
        "Official WhatsApp Business API integration",
        "Custom AI triage trained on your pricing & services",
        "Automatic budget, timeline, and scope qualification",
        "Instant founder push notification for high-value leads",
        "Automated Google Sheets or CRM lead syncing",
      ],
      whatsappMsg: "Hi Oluwaseun, I want to set up an automated WhatsApp AI Lead Qualification Engine.",
    },
    {
      name: "Custom Client Portal / Web App",
      price: "From ₦950,000",
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
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-2">
            TRANSPARENT INVESTMENT &amp; SCOPE
          </span>
          <h2
            id="pricing-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Clear pricing. Predictable deliverables.
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-sans">
            Every engagement includes complete code ownership, zero hidden fees, and direct senior engineer collaboration.
          </p>
        </div>

        {/* 3 Clean, Uncluttered Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => {
            const packageWhatsAppUrl = `https://wa.me/2348033285789?text=${encodeURIComponent(pkg.whatsappMsg)}`;

            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl clean-card border flex flex-col justify-between space-y-6 ${
                  pkg.featured
                    ? "border-indigo-500/50 bg-[#121824] shadow-xl relative"
                    : "border-white/10"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-indigo-500 text-white font-semibold text-[10px] uppercase tracking-wider shadow">
                      Most Popular For Business Growth
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {pkg.name}
                  </h3>
                  
                  <div className="space-y-1">
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white block">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Turnaround: {pkg.timeline}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                    {pkg.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block font-semibold">
                      Included Scope:
                    </span>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2.5">
                  <a
                    href={packageWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs transition-all text-center ${
                      pkg.featured
                        ? "bg-white text-black hover:bg-slate-200 shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-1 text-xs text-slate-400 hover:text-white py-1 transition-colors"
                  >
                    <span>Or submit project brief</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
