/**
 * =============================================================================
 * LEGAL POLICY CONFIGURATION
 * =============================================================================
 * The policy pages read their dates and processing windows from here so that
 * commercial timelines can be changed without touching page content.
 *
 * IMPORTANT: the policy text on /terms, /privacy, /refund-policy and
 * /shipping-policy is a good-faith initial draft prepared for merchant
 * onboarding. It has NOT been reviewed by a lawyer. Have counsel review and
 * amend all four pages before you go live, and re-check them whenever you add
 * a new service line or a new fulfilment partner.
 * =============================================================================
 */

export const legalConfig = {
  /** Shown as "Last updated" on every policy page. Update when you edit them. */
  lastUpdated: "8 September 2026",

  /** Windows quoted in the refund policy. Change to match your gateway agreement. */
  refunds: {
    /** Time taken by TrueFleet to review and approve a refund request. */
    approvalWindow: "3 working days",
    /** Time taken after approval for money to reach the original payment method. */
    settlementWindow: "5 to 7 working days",
    /** Auto-reversal window for failed or duplicate payments. */
    failedPaymentWindow: "5 to 7 working days",
    /** How long a member has to report a problem with a delivered product. */
    reportingWindow: "48 hours of delivery or fitment",
  },

  /** Windows quoted in the shipping and delivery policy. */
  delivery: {
    orderConfirmation: "24 hours",
    metroWindow: "2 to 5 working days",
    nonMetroWindow: "5 to 10 working days",
  },

  /** How long order and payment records are kept, quoted in the privacy policy. */
  dataRetention: "as long as your account is active, and after that only for the period required by Indian tax, accounting and record keeping law",
} as const;
