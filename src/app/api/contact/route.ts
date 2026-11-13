import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";
import { sendEnquiryNotification } from "@/lib/email";
import { sendToSheetWebhook } from "@/lib/sheet-webhook";

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    // 2. Apply rate limiting (5 requests per 10 minutes)
    const rateLimitCheck = await rateLimit(ip, 5, 10 * 60 * 1000);
    if (!rateLimitCheck.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiries submitted from this network. Please wait a few minutes or reach out directly on WhatsApp.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((rateLimitCheck.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 3. Parse JSON body
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload format." },
        { status: 400 }
      );
    }

    // 4. Honeypot check for bots
    if (body.honeypot && typeof body.honeypot === "string" && body.honeypot.trim().length > 0) {
      // Quietly reject bots without processing
      return NextResponse.json(
        { success: true, message: "Enquiry received." },
        { status: 200 }
      );
    }

    // 5. Schema validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Please correct the highlighted fields and try again.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    // 6. Deliver lead: Try Sheet Webhook (Excel/Google Sheets) and/or Resend Email
    const sheetConfigured = Boolean(
      process.env.EXCEL_SHEET_WEBHOOK_URL || process.env.GOOGLE_SHEETS_WEBHOOK_URL
    );
    const emailConfigured = Boolean(
      process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFICATION_EMAIL
    );

    let delivered = false;
    let sheetResult;
    let emailResult;

    // Send to Sheet Webhook if configured
    if (sheetConfigured) {
      sheetResult = await sendToSheetWebhook(validationResult.data);
      if (sheetResult.success) {
        delivered = true;
      }
    }

    // Also dispatch via Resend if configured
    if (emailConfigured) {
      emailResult = await sendEnquiryNotification(validationResult.data);
      if (emailResult.success) {
        delivered = true;
      }
    }

    // If neither is configured, alert the admin gracefully
    if (!sheetConfigured && !emailConfigured) {
      return NextResponse.json(
        {
          success: false,
          error:
            process.env.NODE_ENV === "development"
              ? "Backend integration is not configured. Please set EXCEL_SHEET_WEBHOOK_URL or RESEND_API_KEY in .env.local."
              : "Service is temporarily unable to dispatch enquiry. Please reach out directly on WhatsApp.",
          isConfigurationMissing: true,
        },
        { status: 503 }
      );
    }

    // If configured but both failed
    if (!delivered) {
      const errorMsg =
        sheetResult?.error ||
        emailResult?.error ||
        "Unable to deliver enquiry at this moment.";
      return NextResponse.json(
        {
          success: false,
          error: errorMsg,
        },
        { status: 502 }
      );
    }

    // 7. Success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. Your enquiry has been received. I will review your requirements and respond within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API Contact] Uncaught handler error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "A temporary server error occurred. Please reach out via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
