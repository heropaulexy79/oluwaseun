import { contactFormSchema } from "../src/lib/contact-schema";
import {
  sanitizeWhatsAppNumber,
  buildWhatsAppMessage,
  getWhatsAppUrl,
} from "../src/lib/whatsapp";
import { rateLimit } from "../src/lib/rate-limit";

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  } else {
    console.log(`✓ PASSED: ${message}`);
  }
}

async function runTests() {
  console.log("=== RUNNING UNIT & LOGIC VERIFICATION SUITE ===\n");

  // TEST 1: Contact Form Schema Valid Submission
  const validData = {
    service: "website",
    fullName: "Adebayo Ogunlesi",
    email: "adebayo@company.com",
    businessName: "Continental Holdings Ltd",
    budget: "800k-2m",
    timeline: "within-1-month",
    projectDescription: "We need a complete redesign of our corporate portal and catalog with high mobile performance.",
    honeypot: "",
  };
  const validResult = contactFormSchema.safeParse(validData);
  assert(validResult.success, "Valid contact form submission parses successfully");

  // TEST 2: Rejects invalid email
  const invalidEmailData = { ...validData, email: "not-an-email" };
  const invalidEmailResult = contactFormSchema.safeParse(invalidEmailData);
  assert(!invalidEmailResult.success, "Rejects malformed email address");

  // TEST 3: Rejects short description (< 10 chars)
  const shortDescData = { ...validData, projectDescription: "help" };
  const shortDescResult = contactFormSchema.safeParse(shortDescData);
  assert(!shortDescResult.success, "Rejects project description under 10 characters");

  // TEST 4: Honeypot detects bot
  const botData = { ...validData, honeypot: "spam_bot_data" };
  const botResult = contactFormSchema.safeParse(botData);
  assert(!botResult.success, "Honeypot field flags automated submission");

  // TEST 5: WhatsApp Number Sanitization
  const rawNumber = "+234 (803) 123-4567";
  const cleanNumber = sanitizeWhatsAppNumber(rawNumber);
  assert(cleanNumber === "2348031234567", "Strips +, spaces, parentheses, and dashes from WhatsApp number");

  // TEST 6: WhatsApp Message Generation
  const msg = buildWhatsAppMessage({
    service: "ai-automation",
    businessName: "Acme Logistics",
    projectBrief: "Automate inbound lead triage",
  });
  assert(msg.includes("AI & Business Workflow Automation"), "Includes proper service label in WhatsApp text");
  assert(msg.includes("Acme Logistics"), "Includes business name in WhatsApp text");

  // TEST 7: WhatsApp URL with unconfigured number
  delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const fallbackUrl = getWhatsAppUrl({ service: "general" });
  assert(fallbackUrl.startsWith("#contact"), "Gracefully falls back to #contact anchor when phone is unconfigured");

  // TEST 8: WhatsApp URL with configured number
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = "2348012345678";
  const fullUrl = getWhatsAppUrl({ service: "web-development" });
  assert(fullUrl.startsWith("https://wa.me/2348012345678?text="), "Constructs valid wa.me URL when configured");

  // TEST 9: In-Memory Rate Limiter
  const testIp = "192.168.1.99";
  const limit = 3;
  const res1 = await rateLimit(testIp, limit, 5000);
  const res2 = await rateLimit(testIp, limit, 5000);
  const res3 = await rateLimit(testIp, limit, 5000);
  const res4 = await rateLimit(testIp, limit, 5000);

  assert(res1.success && res1.remaining === 2, "Rate limiter accepts 1st request");
  assert(res2.success && res2.remaining === 1, "Rate limiter accepts 2nd request");
  assert(res3.success && res3.remaining === 0, "Rate limiter accepts 3rd request (at limit)");
  assert(!res4.success && res4.remaining === 0, "Rate limiter rejects 4th request (limit exceeded)");

  console.log("\n=== ALL 9 TEST SUITES COMPLETED SUCCESSFULLY ===");
}

runTests().catch((err) => {
  console.error("Test execution encountered an error:", err);
  process.exit(1);
});
