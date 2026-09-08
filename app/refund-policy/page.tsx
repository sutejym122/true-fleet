import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { displayLegalName } from "@/data/company";
import { legalConfig } from "@/data/legal";

/**
 * DRAFT FOR MERCHANT ONBOARDING. Prepared in good faith so that a payment
 * gateway or bank can review the website. This text has not been reviewed by a
 * lawyer. Every processing window quoted here comes from data/legal.ts, so the
 * timelines can be aligned with your gateway and partner agreements before
 * launch, and reviewed by counsel.
 */

export const metadata: Metadata = {
  title: "Refund & cancellation policy",
  description:
    "How cancellations, refunds, failed payments and duplicate transactions are handled for orders placed through TrueFleet.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  const entity = displayLegalName();
  const { approvalWindow, settlementWindow, failedPaymentWindow, reportingWindow } =
    legalConfig.refunds;

  const sections: LegalSection[] = [
    {
      id: "scope",
      heading: "What this policy covers",
      content: (
        <p>
          This policy explains when an order placed through the TrueFleet platform can be cancelled,
          when a refund is due, and how long a refund takes to reach you. It applies to orders
          placed with {entity} through the TrueFleet website or mobile application. Where a partner
          brand, insurer or lender has its own cancellation terms, those terms also apply and are
          shown before you confirm the order.
        </p>
      ),
    },
    {
      id: "before-fulfilment",
      heading: "Cancelling before fulfilment",
      content: (
        <>
          <p>
            An order can be cancelled at no charge while it is still being processed, which means
            before it has been accepted by the supplying partner, dispatched, or scheduled for
            fitment or service. You can request a cancellation from your order in the app, or by
            contacting support.
          </p>
          <p>
            Once an order has been dispatched, or once a service appointment or roadside assistance
            job has been dispatched to a provider, it can no longer be cancelled at no charge.
            Charges already incurred by the partner may be deducted, and these are set out in the
            order confirmation.
          </p>
        </>
      ),
    },
    {
      id: "partner-rules",
      heading: "Partner dependent cancellation rules",
      content: (
        <>
          <p>
            TrueFleet lists products and services supplied by third parties, and cancellation rules
            differ by category:
          </p>
          <ul>
            <li>
              <strong>Goods such as tyres, batteries, parts and lubricants.</strong> Cancellable
              before dispatch. After dispatch, the return and replacement terms of the supplying
              partner apply.
            </li>
            <li>
              <strong>Fitment and workshop services.</strong> Cancellable up to the cut off shown
              when the appointment is booked. Later cancellations may attract a charge.
            </li>
            <li>
              <strong>Insurance policies.</strong> Governed by the insurer&apos;s free look and
              cancellation terms and by regulation. Refunds are issued by the insurer.
            </li>
            <li>
              <strong>Loans and finance applications.</strong> Governed by the lender&apos;s terms.
              Processing fees charged by a lender are refundable only where the lender allows it.
            </li>
            <li>
              <strong>FASTag recharges and toll payments.</strong> Once credited to the tag, a
              recharge cannot generally be reversed. Failed recharges are handled as failed payments
              below.
            </li>
            <li>
              <strong>Roadside assistance already dispatched.</strong> Not refundable once a
              provider has been sent to the vehicle.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "non-refundable",
      heading: "Services that are not refundable once delivered",
      content: (
        <p>
          Where a service has been performed, such as a completed fitment, a completed roadside
          assistance job, or a document or challan service that has been carried out, the fee for
          that service is not refundable. If the service was not performed correctly, raise it with
          us and we will take it up with the provider rather than treat it as a cancellation.
        </p>
      ),
    },
    {
      id: "failed-payments",
      heading: "Failed payments and duplicate transactions",
      content: (
        <>
          <p>
            If money is debited but the order does not confirm, the payment usually reverses
            automatically. Where an automatic reversal does not happen, the amount is refunded to
            the original payment method within {failedPaymentWindow} of the transaction being
            traced with the payment provider.
          </p>
          <p>
            If you are charged twice for the same order, contact us with the order reference and
            both transaction references. Duplicate charges are refunded in full, and no cancellation
            charge applies.
          </p>
        </>
      ),
    },
    {
      id: "damaged-or-wrong",
      heading: "Wrong, damaged or unsuitable products",
      content: (
        <p>
          If a product arrives damaged, is not what was ordered, or does not match the specification
          shown for your vehicle, report it within {reportingWindow}, with photographs where
          possible. We will arrange a replacement, a re-fitment or a refund with the supplying
          partner. Where the product has already been fitted and used, the manufacturer warranty
          process applies instead.
        </p>
      ),
    },
    {
      id: "how-refunds-are-made",
      heading: "How a refund is made",
      content: (
        <>
          <p>
            Refunds are made to the original payment method. We do not refund to a different card,
            account or wallet, except where the original method is closed and the payment provider
            requires an alternative.
          </p>
          <p>Once you raise a request:</p>
          <ul>
            <li>We review and confirm the outcome within {approvalWindow}.</li>
            <li>
              Once approved, the refund is initiated and typically reaches the original payment
              method within {settlementWindow}, depending on your bank or card issuer.
            </li>
            <li>You will receive the refund reference so it can be traced with your bank.</li>
          </ul>
          <p>
            These are the timelines we work to. Settlement to your account is completed by your bank
            or card issuer, and their processing time is outside our control.
          </p>
        </>
      ),
    },
    {
      id: "how-to-request",
      heading: "How to raise a request",
      content: (
        <p>
          Raise a cancellation or refund request from the order in the app, or contact our support
          team with the order reference, the vehicle registration and a short description of the
          problem. Keeping the order reference to hand lets us trace the payment and the partner
          record together, which is usually what resolves a case quickly.
        </p>
      ),
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      content: (
        <p>
          This policy will be updated as new service categories are added to the platform, since
          cancellation rules differ by category. The current version is always published here with
          the date it was last updated.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      title="Refund & cancellation policy"
      intro="When an order can be cancelled, when a refund is due, and how long it takes to reach you."
      sections={sections}
      currentPath="/refund-policy"
    />
  );
}
