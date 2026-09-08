import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { company, displayLegalName } from "@/data/company";

/**
 * DRAFT FOR MERCHANT ONBOARDING. Prepared in good faith so that a payment
 * gateway or bank can review the website. This text has not been reviewed by a
 * lawyer. Have counsel review and amend it before launch.
 */

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "The terms on which TrueFleet provides its platform to commercial vehicle owners, and the basis on which partner products and services are supplied.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const entity = displayLegalName();
  const governingState = company.governingLawState;

  const sections: LegalSection[] = [
    {
      id: "who-we-are",
      heading: "Who these terms are between",
      content: (
        <>
          <p>
            These terms govern your use of the TrueFleet website and mobile application, together
            referred to as the platform. The platform is operated by {entity}, referred to here as
            TrueFleet, we or us. By creating an account or placing an order you accept these terms.
          </p>
          <p>
            If you are accepting these terms for a business, you confirm that you are authorised to
            bind that business, and references to you include that business.
          </p>
        </>
      ),
    },
    {
      id: "platform-role",
      heading: "What TrueFleet does and does not do",
      content: (
        <>
          <p>
            TrueFleet is a technology platform. It brings together products and services supplied by
            third parties so that commercial vehicle owners can find, order and pay for them in one
            place, and keep a record of what was bought for each vehicle.
          </p>
          <p>Unless a page states otherwise:</p>
          <ul>
            <li>Goods such as tyres, batteries, spare parts and lubricants are supplied by partner brands and their authorised dealers.</li>
            <li>Insurance is arranged and issued by licensed insurers or licensed intermediaries. TrueFleet is not the insurer.</li>
            <li>Credit and financing decisions are made by regulated lenders. TrueFleet is not the lender and does not guarantee approval.</li>
            <li>Roadside assistance, fitment and workshop services are delivered by assistance networks and authorised service providers.</li>
            <li>Payments are processed by licensed payment gateways and payment service providers.</li>
          </ul>
          <p>
            TrueFleet may facilitate the order, the payment and the record. Responsibility for the
            product or service itself, including its quality, specification, warranty and statutory
            obligations, sits with the supplier who provides it.
          </p>
        </>
      ),
    },
    {
      id: "eligibility",
      heading: "Accounts and eligibility",
      content: (
        <>
          <p>
            You must be at least 18 years old and legally able to enter into a contract to use the
            platform. Accounts are intended for commercial vehicle owners, transport businesses,
            fleet operators and their authorised staff.
          </p>
          <p>
            You are responsible for the accuracy of the information you provide, including vehicle
            registration details, documents and contact details. You are responsible for keeping
            your login credentials secure and for activity carried out under your account. Tell us
            promptly if you believe your account has been used without your authorisation.
          </p>
          <p>
            We may verify the details you provide, and we may suspend or close an account where
            information is found to be false, where the account is used unlawfully, or where
            required by law or by a partner or payment provider.
          </p>
        </>
      ),
    },
    {
      id: "orders",
      heading: "Orders",
      content: (
        <>
          <p>
            Placing an order is an offer to buy. An order is accepted once we or the supplying
            partner confirm it. Until then, an order may be declined, for example where stock is not
            available, where a product does not fit the vehicle you selected, where a delivery
            address falls outside a service area, or where a payment is not authorised.
          </p>
          <p>
            Product specifications, fitment guidance and availability are provided by partners. We
            take reasonable care to present them accurately, but you should check that the
            specification matches your vehicle before confirming an order. Where a product must be
            fitted, fitment is carried out by an authorised dealer or workshop.
          </p>
        </>
      ),
    },
    {
      id: "pricing-payments",
      heading: "Pricing and payments",
      content: (
        <>
          <p>
            Prices are shown in Indian Rupees. Unless stated otherwise, prices include applicable
            taxes and exclude any delivery, fitment or service charges, which are shown separately
            before you confirm an order.
          </p>
          <p>
            Prices, member benefits and partner offers can change. The price that applies to an
            order is the price shown at the time the order is confirmed. Where an obvious pricing
            error is identified before fulfilment, we will contact you and either confirm the
            corrected price or cancel the order and refund it in full.
          </p>
          <p>
            Payments are processed by licensed payment gateways. TrueFleet does not store complete
            card numbers or card security codes. Where a payment fails, is reversed, or is disputed
            by your bank, we may hold or cancel the related order.
          </p>
        </>
      ),
    },
    {
      id: "member-benefits",
      heading: "Membership and member benefits",
      content: (
        <>
          <p>
            Membership of the Transport Owners Club gives access to benefits negotiated with partner
            brands. A benefit applies only while the underlying partner agreement is in force, only
            to the products or services it covers, and only where the conditions attached to it are
            met.
          </p>
          <p>
            Benefits may be added, changed or withdrawn. Where a benefit is withdrawn, it does not
            affect an order already confirmed at the benefit price.
          </p>
        </>
      ),
    },
    {
      id: "warranties",
      heading: "Warranties",
      content: (
        <>
          <p>
            Warranties on goods are given by the manufacturer or supplier and are subject to their
            terms, including conditions about fitment, usage, load and servicing. TrueFleet does not
            give an additional warranty on partner products unless expressly stated in writing.
          </p>
          <p>
            Where a warranty claim arises, your purchase record on TrueFleet can be used to
            establish what was bought and when, and we will help you raise the claim with the
            supplier.
          </p>
        </>
      ),
    },
    {
      id: "cancellations",
      heading: "Cancellations and refunds",
      content: (
        <p>
          Cancellations and refunds are covered by our refund and cancellation policy, which forms
          part of these terms. Delivery and fitment are covered by our shipping and delivery policy.
        </p>
      ),
    },
    {
      id: "acceptable-use",
      heading: "Acceptable use",
      content: (
        <>
          <p>You agree not to:</p>
          <ul>
            <li>Use the platform for any unlawful purpose, or to place orders you do not intend to pay for.</li>
            <li>Provide false vehicle, business or identity information.</li>
            <li>Resell or redistribute member benefits, or use them for vehicles that are not on your account.</li>
            <li>Interfere with the platform, attempt to access it without authorisation, or extract data from it by automated means.</li>
            <li>Upload content that infringes someone else&apos;s rights or that is unlawful.</li>
          </ul>
        </>
      ),
    },
    {
      id: "third-party",
      heading: "Third party services and links",
      content: (
        <p>
          The platform connects to services operated by partners, insurers, lenders, assistance
          networks and payment providers. Those services are governed by their own terms and privacy
          policies, and we recommend you read them. TrueFleet is not responsible for the content or
          conduct of third party services, though we will help resolve issues that arise from an
          order placed through the platform.
        </p>
      ),
    },
    {
      id: "liability",
      heading: "Liability",
      content: (
        <>
          <p>
            The platform is provided on a reasonable efforts basis. We do not guarantee that it will
            be uninterrupted or error free, and features may change as the platform develops.
          </p>
          <p>
            To the extent permitted by law, TrueFleet is not liable for loss of profit, loss of
            business, loss of contracts, vehicle downtime, or indirect or consequential loss arising
            from use of the platform. Where TrueFleet is found liable in relation to an order, our
            liability is limited to the amount paid for that order.
          </p>
          <p>
            Nothing in these terms limits liability that cannot be limited under applicable law,
            including liability for fraud, or rights available to a consumer under the Consumer
            Protection Act, 2019.
          </p>
        </>
      ),
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      content: (
        <p>
          We may update these terms as the platform and its services develop. The current version is
          always published on this page with the date it was last updated. Where a change materially
          affects your rights, we will give notice through the platform or by email. Continuing to
          use the platform after a change takes effect means you accept the updated terms.
        </p>
      ),
    },
    {
      id: "governing-law",
      heading: "Governing law and disputes",
      content: (
        <>
          <p>
            These terms are governed by the laws of India. Subject to the paragraph below, the
            courts at{" "}
            {governingState ? (
              governingState
            ) : (
              <strong>[state to be confirmed before launch]</strong>
            )}{" "}
            have exclusive jurisdiction over any dispute arising from them.
          </p>
          <p>
            We would rather resolve a problem than litigate it. Please contact us first so we can
            try to settle the matter directly.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      heading: "Contact",
      content: (
        <p>
          These terms are issued by {entity}. Our contact details, registered address and
          registration numbers are published on the contact page and in the footer of every page of
          this website.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      title="Terms & conditions"
      intro="The basis on which TrueFleet provides its platform, and how orders, payments and partner services work."
      sections={sections}
      currentPath="/terms"
    />
  );
}
