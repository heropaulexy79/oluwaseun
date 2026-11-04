import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Oluwaseun",
  description:
    "How client inquiry details, communication records, and project data are handled by Oluwaseun.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#171A19] text-[#F7F7F4] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#9EABA2] hover:text-[#D9F36A] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-lg bg-[#1F2321] border border-[#2E3532] text-[#D9F36A]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#F7F7F4]">Privacy Policy</h1>
            <p className="text-xs text-[#9EABA2] uppercase tracking-wider mt-1">
              Last updated: October 2026
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-[#9EABA2] leading-relaxed">
          <section className="p-6 rounded-xl bg-[#1F2321] border border-[#2E3532]">
            <h2 className="text-lg font-semibold text-[#F7F7F4] mb-3">1. Overview & Commitment</h2>
            <p>
              I respect your privacy and value professional discretion. This policy explains how information submitted through this website is collected, handled, and protected when you submit a project enquiry or communicate directly regarding software engineering and AI automation services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#F7F7F4]">2. Information Collected</h2>
            <p>
              When you submit the project enquiry form, you provide information necessary to assess your business requirements:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Full Name</li>
              <li>Work Email Address</li>
              <li>Business or Company Name (optional)</li>
              <li>Selected Service Area & Desired Timeline</li>
              <li>Estimated Project Budget Tier</li>
              <li>Project Description and Requirements</li>
            </ul>
            <p className="text-sm">
              I do not collect personal financial credentials, credit card numbers, or passwords through this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#F7F7F4]">3. Purpose of Use</h2>
            <p>The information you submit is used exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Evaluate the technical feasibility and scope of your project.</li>
              <li>Prepare commercial proposals, estimates, and milestone plans.</li>
              <li>Respond directly to your enquiry via email or WhatsApp as requested.</li>
              <li>Maintain professional records of active client discussions.</li>
            </ul>
            <p className="text-sm text-[#F7F7F4] font-medium">
              Your contact details are never sold, rented, leased, or distributed to marketing third parties or spam aggregators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#F7F7F4]">4. Third-Party Service Providers</h2>
            <p>To operate securely, the application uses trusted infrastructure providers:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <strong className="text-[#F7F7F4]">Hosting & Edge Computing:</strong> Vercel (for secure deployment and serverless execution).
              </li>
              <li>
                <strong className="text-[#F7F7F4]">Email Delivery:</strong> Resend (to securely dispatch project enquiry notifications to my inbox).
              </li>
              <li>
                <strong className="text-[#F7F7F4]">Direct Messaging:</strong> WhatsApp / Meta (click-to-chat links operate under WhatsApp&apos;s end-to-end encrypted protocol).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[#F7F7F4]">5. Data Retention & Security</h2>
            <p>
              Enquiries are retained only as long as necessary to facilitate ongoing business communication. Industry-standard TLS encryption is enforced across all web traffic and API routes. Server-side abuse protection and rate-limiting safeguards prevent automated exploitation.
            </p>
          </section>

          <section className="p-6 rounded-xl bg-[#1F2321] border border-[#2E3532]">
            <h2 className="text-lg font-semibold text-[#F7F7F4] mb-2">6. Inquiries & Requests</h2>
            <p className="text-sm">
              If you have any questions regarding how your project information is handled or wish to have prior inquiry correspondence removed, please reach out directly via the project form or WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
