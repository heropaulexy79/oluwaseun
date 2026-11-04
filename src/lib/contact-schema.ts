import { z } from "zod";

export const SERVICE_OPTIONS = [
  { value: "website", label: "Website Development" },
  { value: "ai-automation", label: "AI & Business Automation" },
  { value: "both", label: "Both Web Development & AI Automation" },
  { value: "custom-product", label: "Custom Digital Product / Web App" },
  { value: "not-sure", label: "Not Sure Yet / Need Consultation" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "below-400k", label: "Below ₦400,000 (Small scope / advisory)" },
  { value: "400k-800k", label: "₦400,000 – ₦800,000" },
  { value: "800k-2m", label: "₦800,000 – ₦2,000,000" },
  { value: "above-2m", label: "Above ₦2,000,000" },
  { value: "international-custom", label: "International / Custom Currency (USD/GBP/EUR)" },
  { value: "need-guidance", label: "Need Guidance on Investment" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "within-1-month", label: "Within one month" },
  { value: "within-1-3-months", label: "Within one to three months" },
  { value: "exploring", label: "Just exploring / planning ahead" },
] as const;

export const contactFormSchema = z.object({
  service: z.enum(
    ["website", "ai-automation", "both", "custom-product", "not-sure"],
    { message: "Please select the service you are interested in" }
  ),
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid work email address")
    .max(120, "Email cannot exceed 120 characters"),
  businessName: z
    .string()
    .trim()
    .max(120, "Business name cannot exceed 120 characters")
    .optional()
    .or(z.literal("")),
  budget: z.enum(
    [
      "below-400k",
      "400k-800k",
      "800k-2m",
      "above-2m",
      "international-custom",
      "need-guidance",
    ],
    { message: "Please select an estimated investment range" }
  ),
  timeline: z.enum(
    ["asap", "within-1-month", "within-1-3-months", "exploring"],
    { message: "Please choose your expected timeline" }
  ),
  projectDescription: z
    .string()
    .trim()
    .min(10, "Please provide a brief description of what you are trying to build (at least 10 characters)")
    .max(3000, "Description cannot exceed 3000 characters"),
  honeypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
