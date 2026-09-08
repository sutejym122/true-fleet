import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { displayLegalName } from "@/data/company";
import { legalConfig } from "@/data/legal";

/**
 * DRAFT FOR MERCHANT ONBOARDING. Prepared in good faith so that a payment
 * gateway or bank can review the website. This text has not been reviewed by a
 * lawyer. Have counsel review and amend it before launch, particularly the
 * sections on retention, transfers and user rights.
 */

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How TrueFleet collects, uses, shares and protects the information of commercial vehicle owners who use the platform.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const entity = displayLegalName();

  const sections: LegalSection[] = [
    {
      id: "scope",
      heading: "Scope",
      content: (
        <p>
          This policy explains what information {entity} collects when you use the TrueFleet website
          and mobile application, why we collect it, who we share it with and what you can ask us to
          do with it. It applies to members, visitors and to people who contact us through the forms
          on this website.
        </p>
      ),
    },
    {
      id: "what-we-collect",
      heading: "Information we collect",
      content: (
        <>
          <h3>Account and contact information</h3>
          <p>
            Your name, business name, phone number, email address and, where relevant, your role in
            the business. If you contact us through a form, we collect what you choose to write in
            it.
          </p>

          <h3>Vehicle information</h3>
          <p>
            Registration number, make, model, vehicle category, axle configuration, fitment details
            and the documents you choose to store, such as insurance, fitness, permit and pollution
            certificates.
          </p>

          <h3>Order and payment metadata</h3>
          <p>
            What you ordered, from which partner, the amount, the payment status, the transaction
            reference returned by the payment provider, and the delivery or fitment location. We do
            not collect or store complete card numbers, CVV codes or your banking credentials.
          </p>

          <h3>Usage and device information</h3>
          <p>
            Basic technical information such as device type, operating system, app version, IP
            address and how you move through the platform. This is used to keep the service working
            and secure, and to understand which features are useful.
          </p>

          <h3>Documents and communications</h3>
          <p>
            Files you upload, and records of support conversations, so that a query can be picked up
            where it was left.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use",
      heading: "How we use it",
      content: (
        <ul>
          <li>To create and operate your account and your fleet records.</li>
          <li>To place, fulfil and track orders with partners, and to arrange delivery or fitment.</li>
          <li>To process payments and issue receipts and statements through our payment providers.</li>
          <li>To send service messages such as order updates, renewal reminders and low balance alerts.</li>
          <li>To apply member benefits correctly and to reconcile them with partners.</li>
          <li>To provide support and to investigate problems, disputes and warranty claims.</li>
          <li>To detect and prevent fraud, misuse and security incidents.</li>
          <li>To meet legal, tax and regulatory obligations.</li>
          <li>To improve the platform, using aggregated or de-identified information wherever possible.</li>
        </ul>
      ),
    },
    {
      id: "sharing",
      heading: "Who we share it with",
      content: (
        <>
          <p>We share information only where it is needed to deliver what you asked for:</p>
          <ul>
            <li>
              <strong>Partner brands, dealers and service providers</strong>, so that an order can be
              fulfilled, a vehicle can be serviced, or a claim can be raised. They receive what is
              needed for that purpose, such as the vehicle, the specification and the location.
            </li>
            <li>
              <strong>Payment providers</strong>, who process the transaction. Card details are
              entered into the payment provider&apos;s environment and are handled under their
              security standards.
            </li>
            <li>
              <strong>Licensed insurers and intermediaries</strong>, where you ask for a quote or a
              policy.
            </li>
            <li>
              <strong>Regulated lenders</strong>, where you submit a finance application.
            </li>
            <li>
              <strong>Technology suppliers</strong> who host and support the platform, under
              contracts that restrict what they may do with the information.
            </li>
            <li>
              <strong>Authorities</strong>, where disclosure is required by law or to protect
              rights, property or safety.
            </li>
          </ul>
          <p>We do not sell your personal information.</p>
        </>
      ),
    },
    {
      id: "cookies",
      heading: "Cookies and analytics",
      content: (
        <p>
          The website uses a small number of cookies and similar technologies to keep sessions
          working and to understand, in aggregate, how the site is used. You can block or delete
          cookies through your browser settings, though some parts of the site may then not work as
          intended. If we introduce advertising or third party marketing cookies, we will update
          this policy and ask for consent where the law requires it.
        </p>
      ),
    },
    {
      id: "security",
      heading: "Security",
      content: (
        <p>
          Traffic to and from the platform is encrypted in transit. Access to member information is
          restricted to people who need it to do their work, and payment card data is handled by
          licensed payment providers rather than by us. No system is completely secure, so we also
          keep logs, review access and investigate anything unusual. If a breach occurs that affects
          you, we will notify you and the relevant authority as required.
        </p>
      ),
    },
    {
      id: "retention",
      heading: "How long we keep it",
      content: (
        <p>
          We keep your account, vehicle, order and payment records {legalConfig.dataRetention}.
          Records tied to a transaction, a tax filing or a dispute are kept for the statutory period
          even if you close your account. Support conversations are kept for a shorter period, long
          enough to handle follow up queries.
        </p>
      ),
    },
    {
      id: "your-rights",
      heading: "Your choices and rights",
      content: (
        <>
          <p>You can ask us to:</p>
          <ul>
            <li>Give you a copy of the personal information we hold about you.</li>
            <li>Correct information that is wrong or out of date.</li>
            <li>Delete information we no longer need to keep.</li>
            <li>Stop sending you marketing messages, which you can also do from the message itself.</li>
            <li>Explain how a particular piece of information is being used.</li>
          </ul>
          <p>
            Service messages that relate to an order, a payment or a legal obligation cannot be
            switched off while your account is active. To make a request, contact us using the
            details on the contact page. We may need to verify your identity before acting.
          </p>
        </>
      ),
    },
    {
      id: "children",
      heading: "Children",
      content: (
        <p>
          The platform is intended for businesses and adults. We do not knowingly collect information
          from anyone under 18. If you believe a minor has provided us information, contact us and
          we will remove it.
        </p>
      ),
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      content: (
        <p>
          As the platform adds services and partners, this policy will be updated. The current
          version is always on this page with the date it was last updated, and material changes
          will be notified through the platform or by email.
        </p>
      ),
    },
    {
      id: "contact",
      heading: "Contact",
      content: (
        <p>
          This policy is issued by {entity}. For any privacy question or request, including a
          complaint about how your information has been handled, contact us using the details
          published on the contact page.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      title="Privacy policy"
      intro="What TrueFleet collects, why it is collected, who it is shared with, and what you can ask us to do with it."
      sections={sections}
      currentPath="/privacy"
    />
  );
}
