import { Resend } from "resend";
import { ContactFormData, SERVICE_OPTIONS, BUDGET_OPTIONS, TIMELINE_OPTIONS } from "./contact-schema";

export interface SendEnquiryResult {
  success: boolean;
  messageId?: string;
  error?: string;
  isConfigurationMissing?: boolean;
}

function getServiceLabel(val: string): string {
  return SERVICE_OPTIONS.find((s) => s.value === val)?.label || val;
}

function getBudgetLabel(val: string): string {
  return BUDGET_OPTIONS.find((b) => b.value === val)?.label || val;
}

function getTimelineLabel(val: string): string {
  return TIMELINE_OPTIONS.find((t) => t.value === val)?.label || val;
}

export async function sendEnquiryNotification(data: ContactFormData): Promise<SendEnquiryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!apiKey || !toEmail) {
    console.warn(
      "[Contact Service] RESEND_API_KEY or CONTACT_NOTIFICATION_EMAIL is not configured in environment variables."
    );
    return {
      success: false,
      isConfigurationMissing: true,
      error:
        process.env.NODE_ENV === "development"
          ? "Server email configuration is missing (RESEND_API_KEY or CONTACT_NOTIFICATION_EMAIL). Please configure .env.local."
          : "Service is temporarily unable to dispatch email notifications due to missing provider configuration. Please reach out directly via WhatsApp.",
    };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Oluwaseun Enquiries <onboarding@resend.dev>";

  const serviceLabel = getServiceLabel(data.service);
  const budgetLabel = getBudgetLabel(data.budget);
  const timelineLabel = getTimelineLabel(data.timeline);
  const business = data.businessName?.trim() || "Not specified";

  const emailSubject = `New Project Enquiry: ${data.fullName} (${serviceLabel})`;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #171A19; background-color: #F7F7F4; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #E5E6E0; overflow: hidden; }
          .header { background: #171A19; color: #F7F7F4; padding: 24px 32px; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 600; }
          .badge { display: inline-block; background: #D9F36A; color: #171A19; font-weight: bold; font-size: 11px; padding: 3px 8px; border-radius: 4px; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
          .content { padding: 32px; }
          .field-group { margin-bottom: 20px; }
          .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6B726C; margin-bottom: 4px; }
          .field-value { font-size: 16px; color: #171A19; font-weight: 500; }
          .description-box { background: #F7F7F4; padding: 16px; border-radius: 6px; border-left: 3px solid #171A19; white-space: pre-wrap; font-size: 15px; }
          .footer { padding: 20px 32px; background: #FAFAFA; border-top: 1px solid #E5E6E0; font-size: 13px; color: #6B726C; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Client Project Enquiry</h1>
            <span class="badge">${serviceLabel}</span>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="field-label">Full Name</div>
              <div class="field-value">${escapeHtml(data.fullName)}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Work Email</div>
              <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            <div class="field-group">
              <div class="field-label">Company / Business</div>
              <div class="field-value">${escapeHtml(business)}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Estimated Budget</div>
              <div class="field-value">${escapeHtml(budgetLabel)}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Desired Timeline</div>
              <div class="field-value">${escapeHtml(timelineLabel)}</div>
            </div>
            <div class="field-group">
              <div class="field-label">Project Description & Requirements</div>
              <div class="description-box">${escapeHtml(data.projectDescription)}</div>
            </div>
          </div>
          <div class="footer">
            Submitted via Oluwaseun web platform contact form at ${new Date().toUTCString()}.
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const { data: responseData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error("[Contact Service] Resend API error:", error);
      return {
        success: false,
        error: "Failed to deliver email through provider. Please use direct WhatsApp contact.",
      };
    }

    return {
      success: true,
      messageId: responseData?.id,
    };
  } catch (err) {
    console.error("[Contact Service] Unexpected exception during email dispatch:", err);
    return {
      success: false,
      error: "An unexpected error occurred while transmitting your enquiry. Please reach out via WhatsApp.",
    };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
