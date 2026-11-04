/**
 * Privacy-conscious conversion and event tracking abstraction.
 * Never transmits PII (names, email addresses, or project descriptions).
 */

export type AnalyticsEventName =
  | "whatsapp_click"
  | "project_form_start"
  | "project_form_submit"
  | "project_form_error"
  | "service_cta_click"
  | "navigation_click"
  | "scope_estimator_select";

interface EventProperties {
  service?: string;
  source?: string;
  location?: string;
  errorType?: string;
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(name: AnalyticsEventName, properties: EventProperties = {}): void {
  if (typeof window === "undefined") return;

  // Read UTM parameters if present for attribution without storing PII
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || undefined;
  const utmMedium = urlParams.get("utm_medium") || undefined;
  const utmCampaign = urlParams.get("utm_campaign") || undefined;

  const sanitizedProps = {
    ...properties,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    timestamp: new Date().toISOString(),
  };

  // 1. Dispatch custom DOM event for lightweight client monitoring
  try {
    const event = new CustomEvent("app:analytics", {
      detail: { name, properties: sanitizedProps },
    });
    window.dispatchEvent(event);
  } catch {
    // Graceful fallback
  }

  // 2. Vercel Analytics integration if available on window
  const win = window as unknown as { va?: (type: string, name: string, props?: Record<string, unknown>) => void };
  if (typeof win.va === "function") {
    try {
      win.va("event", name, sanitizedProps as Record<string, unknown>);
    } catch (e) {
      console.debug("Vercel analytics dispatch skipped:", e);
    }
  }

  // 3. In development, log cleanly to console for testing
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics Event] ${name}:`, sanitizedProps);
  }
}
