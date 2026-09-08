/**
 * =============================================================================
 * WHERE FORM SUBMISSIONS GO
 * =============================================================================
 * The website does not pretend a form was sent when it was not. Until one of
 * the options below is configured, both forms return an error and tell the
 * visitor to use the phone number or email address instead.
 *
 * Option 1, a webhook. Works with Zapier, Make, n8n, a Slack workflow or your
 * own endpoint. Set one environment variable:
 *
 *   ENQUIRY_WEBHOOK_URL="https://..."
 *
 * Option 2, email through Resend (https://resend.com). No package to install,
 * this uses their REST API directly:
 *
 *   RESEND_API_KEY="re_..."
 *   ENQUIRY_FROM_EMAIL="website@yourdomain.in"   (must be a verified sender)
 *   ENQUIRY_TO_EMAIL="enquiries@yourdomain.in"
 *
 * Option 3, your own system. Replace the body of `deliverEnquiry` with a call
 * to your CRM, database or ticketing tool. The rest of the site does not need
 * to change.
 * =============================================================================
 */

export type EnquiryKind = "contact" | "partner";

export type DeliveryResult =
  | { ok: true }
  | { ok: false; reason: "not-configured" | "delivery-failed" };

function formatBody(kind: EnquiryKind, payload: Record<string, string>): string {
  const heading = kind === "partner" ? "Partnership enquiry" : "Contact enquiry";
  const lines = Object.entries(payload).map(([key, value]) => `${key}: ${value}`);
  return [`${heading} from the TrueFleet website`, "", ...lines].join("\n");
}

export async function deliverEnquiry(
  kind: EnquiryKind,
  payload: Record<string, string>,
): Promise<DeliveryResult> {
  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL;

  if (!webhookUrl && !(resendKey && toEmail && fromEmail)) {
    if (process.env.NODE_ENV !== "production") {
      // Useful while building: the submission is printed instead of sent.
      console.info("[TrueFleet] Enquiry received but no delivery target is configured.", {
        kind,
        payload,
      });
    }
    return { ok: false, reason: "not-configured" };
  }

  try {
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind, receivedAt: new Date().toISOString(), ...payload }),
      });
      if (!response.ok) return { ok: false, reason: "delivery-failed" };
      return { ok: true };
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${resendKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email || undefined,
        subject:
          kind === "partner"
            ? `Partnership enquiry: ${payload.company || payload.name}`
            : `Contact enquiry: ${payload.name}`,
        text: formatBody(kind, payload),
      }),
    });

    if (!response.ok) return { ok: false, reason: "delivery-failed" };
    return { ok: true };
  } catch {
    return { ok: false, reason: "delivery-failed" };
  }
}
