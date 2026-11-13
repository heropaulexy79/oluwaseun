import { ContactFormData, SERVICE_OPTIONS, BUDGET_OPTIONS, TIMELINE_OPTIONS } from "./contact-schema";

export interface SheetDispatchResult {
  success: boolean;
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

/**
 * Sends inquiry data to a Google Sheets / Excel Webhook (Google Apps Script).
 * The script logs the lead into the spreadsheet and immediately dispatches an email notification.
 */
export async function sendToSheetWebhook(data: ContactFormData): Promise<SheetDispatchResult> {
  const webhookUrl = process.env.EXCEL_SHEET_WEBHOOK_URL || process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return {
      success: false,
      isConfigurationMissing: true,
      error: "EXCEL_SHEET_WEBHOOK_URL is not configured.",
    };
  }

  try {
    const payload = {
      fullName: data.fullName,
      email: data.email,
      businessName: data.businessName?.trim() || "Not specified",
      service: getServiceLabel(data.service),
      budget: getBudgetLabel(data.budget),
      timeline: getTimelineLabel(data.timeline),
      projectDescription: data.projectDescription,
      submittedAt: new Date().toISOString(),
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // Uses text/plain to avoid CORS preflight issues with Google Apps Script
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      return {
        success: false,
        error: `Sheet webhook responded with HTTP ${response.status}: ${errText}`,
      };
    }

    const resJson = await response.json().catch(() => null);
    if (resJson && resJson.success === false) {
      return {
        success: false,
        error: resJson.error || "Sheet webhook reported failure.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("[Sheet Webhook] Request failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error contacting spreadsheet webhook.",
    };
  }
}

