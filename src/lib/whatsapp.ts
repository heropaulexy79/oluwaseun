/**
 * WhatsApp integration utility
 * Formats international numbers and generates safely encoded click-to-chat links.
 */

export type WhatsAppServiceContext =
  | "general"
  | "web-development"
  | "ai-automation"
  | "ongoing-support";

interface WhatsAppMessageOptions {
  service?: WhatsAppServiceContext;
  businessName?: string;
  projectBrief?: string;
  customMessage?: string;
}

const SERVICE_LABELS: Record<WhatsAppServiceContext, string> = {
  general: "Digital Solutions / General Project",
  "web-development": "Web Development (Website / Web App)",
  "ai-automation": "AI & Business Workflow Automation",
  "ongoing-support": "Ongoing Technical Support & Maintenance",
};

/**
 * Sanitizes phone number to digits only (no +, spaces, dashes, or parentheses).
 */
export function sanitizeWhatsAppNumber(rawNumber?: string): string {
  if (!rawNumber) return "";
  return rawNumber.replace(/[^0-9]/g, "");
}

/**
 * Generates the contextual message body for WhatsApp.
 */
export function buildWhatsAppMessage(options: WhatsAppMessageOptions = {}): string {
  if (options.customMessage) {
    return options.customMessage.trim();
  }

  const service = options.service ? SERVICE_LABELS[options.service] : "Web Development / AI Automation";
  const business = options.businessName?.trim() || "[My Business]";
  const brief = options.projectBrief?.trim() || "[Brief description of what I need]";

  return [
    "Hi Oluwaseun, I found your website and would like to discuss a project.",
    "",
    `I'm interested in: ${service}`,
    `My business: ${business}`,
    `What I need help with: ${brief}`,
    "",
    "I'd like to understand the next steps and estimated cost.",
  ].join("\n");
}

/**
 * Builds the complete, safe WhatsApp URL.
 * Returns null if no valid number is configured in NEXT_PUBLIC_WHATSAPP_NUMBER.
 */
export function getWhatsAppUrl(options: WhatsAppMessageOptions = {}): string {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const cleanNumber = sanitizeWhatsAppNumber(rawNumber);

  const text = buildWhatsAppMessage(options);
  const encodedText = encodeURIComponent(text);

  if (!cleanNumber) {
    // If not configured, provide a safe anchor link to the contact form on page
    return `#contact?ref=whatsapp-unconfigured`;
  }

  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function isWhatsAppConfigured(): boolean {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const cleanNumber = sanitizeWhatsAppNumber(rawNumber);
  return cleanNumber.length >= 7;
}
