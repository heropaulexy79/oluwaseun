"use client";

import React, { useState } from "react";
import {
  contactFormSchema,
  ContactFormData,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/contact-schema";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export function ProjectEnquiryForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    service: undefined,
    fullName: "",
    email: "",
    businessName: "",
    budget: undefined,
    timeline: undefined,
    projectDescription: "",
    honeypot: "",
  });

  const [hasStarted, setHasStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverStatus, setServerStatus] = useState<
    | { type: "idle" }
    | { type: "success"; message: string }
    | { type: "error"; message: string; isConfigError?: boolean }
  >({ type: "idle" });

  const handleFocusOrChange = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("project_form_start");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    handleFocusOrChange();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user edits
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerStatus({ type: "idle" });
    setErrors({});

    // Client-side Zod validation
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0]?.toString();
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      trackEvent("project_form_error", { errorType: "client_validation" });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        const errorMsg =
          result.error || "Unable to send enquiry at this moment. Please try again or reach out on WhatsApp.";
        setServerStatus({
          type: "error",
          message: errorMsg,
          isConfigError: result.isConfigurationMissing,
        });

        if (result.fieldErrors) {
          const remoteFieldErrors: Record<string, string> = {};
          Object.entries(result.fieldErrors).forEach(([key, val]) => {
            if (Array.isArray(val) && val[0]) remoteFieldErrors[key] = val[0];
          });
          setErrors(remoteFieldErrors);
        }

        trackEvent("project_form_error", {
          errorType: `server_error_${response.status}`,
        });
      } else {
        setServerStatus({
          type: "success",
          message:
            result.message ||
            "Thank you. Your project enquiry has been received. I will review your requirements and respond within 24 business hours.",
        });
        trackEvent("project_form_submit", {
          service: validation.data.service,
          budget: validation.data.budget,
        });
        // Reset form
        setFormData({
          service: undefined,
          fullName: "",
          email: "",
          businessName: "",
          budget: undefined,
          timeline: undefined,
          projectDescription: "",
          honeypot: "",
        });
      }
    } catch {
      setServerStatus({
        type: "error",
        message: "A network error occurred. Please verify your connection or contact me directly via WhatsApp.",
      });
      trackEvent("project_form_error", { errorType: "network_exception" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {serverStatus.type === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="p-8 rounded-2xl bg-[#1F2321] border border-[#D9F36A]/40 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300"
        >
          <div className="inline-flex p-3 rounded-full bg-[#D9F36A]/10 text-[#D9F36A] mb-2">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-[#F7F7F4]">Enquiry Received</h3>
          <p className="text-sm text-[#9EABA2] max-w-md mx-auto leading-relaxed">
            {serverStatus.message}
          </p>
          <div className="pt-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setServerStatus({ type: "idle" })}
            >
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
          aria-label="Project Enquiry Form"
        >
          {/* Server error alert */}
          {serverStatus.type === "error" && (
            <div
              role="alert"
              className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-200 text-sm flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold">Unable to submit enquiry</p>
                <p className="text-xs text-red-300/90 leading-relaxed">{serverStatus.message}</p>
                {serverStatus.isConfigError && (
                  <p className="text-xs text-amber-300 mt-2 font-mono">
                    Dev Note: Configure RESEND_API_KEY and CONTACT_NOTIFICATION_EMAIL in your .env.local file.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Honeypot field (hidden from screen readers & visual users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website-hp">Leave this empty</label>
            <input
              id="website-hp"
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot || ""}
              onChange={handleChange}
            />
          </div>

          {/* Service Selection */}
          <div className="space-y-1.5">
            <label
              htmlFor="field-service"
              className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F4]"
            >
              Service Needed <span className="text-[#D9F36A]">*</span>
            </label>
            <select
              id="field-service"
              name="service"
              value={formData.service || ""}
              onChange={handleChange}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "error-service" : undefined}
              className={`w-full px-4 py-3 rounded-lg bg-[#1F2321] text-[#F7F7F4] border ${
                errors.service ? "border-red-500" : "border-[#2E3532] focus:border-[#D9F36A]"
              } text-sm focus:outline-none transition-colors`}
            >
              <option value="" disabled>
                Select service category...
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p id="error-service" className="text-xs text-red-400 mt-1">
                {errors.service}
              </p>
            )}
          </div>

          {/* Two-column: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="field-fullName"
                className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F4]"
              >
                Full Name <span className="text-[#D9F36A]">*</span>
              </label>
              <input
                id="field-fullName"
                type="text"
                name="fullName"
                autoComplete="name"
                placeholder="e.g. Adebayo Ogunlesi"
                value={formData.fullName || ""}
                onChange={handleChange}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "error-fullName" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#1F2321] text-[#F7F7F4] border ${
                  errors.fullName ? "border-red-500" : "border-[#2E3532] focus:border-[#D9F36A]"
                } text-sm focus:outline-none transition-colors placeholder:text-[#525B56]`}
              />
              {errors.fullName && (
                <p id="error-fullName" className="text-xs text-red-400 mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="field-email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F4]"
              >
                Work Email <span className="text-[#D9F36A]">*</span>
              </label>
              <input
                id="field-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={formData.email || ""}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "error-email" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#1F2321] text-[#F7F7F4] border ${
                  errors.email ? "border-red-500" : "border-[#2E3532] focus:border-[#D9F36A]"
                } text-sm focus:outline-none transition-colors placeholder:text-[#525B56]`}
              />
              {errors.email && (
                <p id="error-email" className="text-xs text-red-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Business / Company name */}
          <div className="space-y-1.5">
            <label
              htmlFor="field-businessName"
              className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F4]"
            >
              Business or Company Name <span className="text-xs text-[#9EABA2] font-normal normal-case">(Optional)</span>
            </label>
            <input
              id="field-businessName"
              type="text"
              name="businessName"
              autoComplete="organization"
              placeholder="e.g. Pinnacle Logistics Ltd"
              value={formData.businessName || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1F2321] text-[#F7F7F4] border border-[#2E3532] focus:border-[#D9F36A] text-sm focus:outline-none transition-colors placeholder:text-[#525B56]"
            />
          </div>

          {/* Two-column: Budget & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="field-budget"
                className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F4]"
              >
                Estimated Investment <span className="text-[#D9F36A]">*</span>
              </label>
              <select
                id="field-budget"
                name="budget"
                value={formData.budget || ""}
                onChange={handleChange}
                aria-invalid={Boolean(errors.budget)}
                aria-describedby={errors.budget ? "error-budget" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#1F2321] text-[#F7F7F4] border ${
                  errors.budget ? "border-red-500" : "border-[#2E3532] focus:border-[#D9F36A]"
                } text-sm focus:outline-none transition-colors`}
              >
                <option value="" disabled>
                  Select estimated budget...
                </option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p id="error-budget" className="text-xs text-red-400 mt-1">
                  {errors.budget}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="field-timeline"
                className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F4]"
              >
                Project Timeline <span className="text-[#D9F36A]">*</span>
              </label>
              <select
                id="field-timeline"
                name="timeline"
                value={formData.timeline || ""}
                onChange={handleChange}
                aria-invalid={Boolean(errors.timeline)}
                aria-describedby={errors.timeline ? "error-timeline" : undefined}
                className={`w-full px-4 py-3 rounded-lg bg-[#1F2321] text-[#F7F7F4] border ${
                  errors.timeline ? "border-red-500" : "border-[#2E3532] focus:border-[#D9F36A]"
                } text-sm focus:outline-none transition-colors`}
              >
                <option value="" disabled>
                  Select expected timeline...
                </option>
                {TIMELINE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.timeline && (
                <p id="error-timeline" className="text-xs text-red-400 mt-1">
                  {errors.timeline}
                </p>
              )}
            </div>
          </div>

          {/* Project description */}
          <div className="space-y-1.5">
            <label
              htmlFor="field-projectDescription"
              className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F4]"
            >
              Project Description & Goals <span className="text-[#D9F36A]">*</span>
            </label>
            <textarea
              id="field-projectDescription"
              name="projectDescription"
              rows={4}
              placeholder="Tell me about what you are building or trying to fix, your current challenges, and your desired target outcome..."
              value={formData.projectDescription || ""}
              onChange={handleChange}
              aria-invalid={Boolean(errors.projectDescription)}
              aria-describedby={errors.projectDescription ? "error-description" : undefined}
              className={`w-full px-4 py-3 rounded-lg bg-[#1F2321] text-[#F7F7F4] border ${
                errors.projectDescription ? "border-red-500" : "border-[#2E3532] focus:border-[#D9F36A]"
              } text-sm focus:outline-none transition-colors placeholder:text-[#525B56] resize-y`}
            />
            {errors.projectDescription && (
              <p id="error-description" className="text-xs text-red-400 mt-1">
                {errors.projectDescription}
              </p>
            )}
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-[#9EABA2] leading-normal">
            Information provided is kept strictly confidential and used solely to evaluate your project scope and deliver an accurate proposal. See{" "}
            <a href="/privacy" className="underline hover:text-[#F7F7F4]">
              privacy policy
            </a>
            .
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            fullWidth
            size="lg"
            className="flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Transmitting Project Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Project Enquiry</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
