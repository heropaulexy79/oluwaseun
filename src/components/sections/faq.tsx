"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, Zap, Lock, RefreshCw } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can we launch, and what does the timeline look like?",
      a: "Most commercial websites launch in 2 to 3 weeks; autonomous WhatsApp AI systems deploy in 7 to 10 days. I work in focused 2-week sprints with daily asynchronous updates on WhatsApp or Slack so you never wonder what is being built or when it will go live.",
    },
    {
      q: "Why hire you directly instead of a digital marketing agency or template?",
      a: "Agencies charge 3x–5x more to cover account managers, office overhead, and sales commissions—then quietly outsource your build to juniors. Templates are bloated with generic code that fails Google Core Web Vitals and loses mobile clients. With me, you work directly with a senior engineer who writes production-grade, custom code built specifically to turn your traffic into booked revenue.",
    },
    {
      q: "Do I actually own the source code, hosting, and domains?",
      a: "Yes, 100%. Day one, code is committed directly to your private GitHub repository, and hosting is set up on your own accounts (Vercel, Supabase, Google Cloud, or AWS). Zero proprietary platform lock-in, zero hostage traps, and zero monthly developer license fees.",
    },
    {
      q: "What happens after launch? Will you support my business as it grows?",
      a: "Every project includes 30 days of complimentary post-launch technical warranty and monitoring. After that, I offer flexible monthly engineering retainer packages (from ₦75,000/mo) for continuous feature updates, security patches, conversion rate testing, and infrastructure scaling.",
    },
    {
      q: "What do you need from me to get started?",
      a: "Just your vision, your target audience, and any existing brand assets or reference websites you love. If you don't have copy or clear wireframes, I guide you through a structured 30-minute scoping session to define your core offer, pricing structure, and user flow.",
    },
  ];

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28 bg-[#0B0E14] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-2">
            OBJECTION-FREE CLARITY
          </span>
          <h2
            id="faq-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-sans">
            Clear answers to common questions about timelines, ownership, and engineering collaboration.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl clean-card border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed font-sans border-t border-white/[0.05]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Micro-Closing Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-white text-sm">
              Have a bespoke question not answered here?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Ask directly on WhatsApp and receive a direct answer within hours.
            </p>
          </div>
          <a
            href="https://wa.me/2348033285789?text=Hi%20Oluwaseun%2C%20I%20have%20a%20specific%20question%20about%20a%20project%20scope."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all shrink-0 border border-white/10"
          >
            Ask on WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}

