import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { displayLegalName } from "@/data/company";
import { legalConfig } from "@/data/legal";

/**
 * DRAFT FOR MERCHANT ONBOARDING. Prepared in good faith so that a payment
 * gateway or bank can review the website. This text has not been reviewed by a
 * lawyer. Delivery windows are read from data/legal.ts so they can be aligned
 * with your fulfilment partners before launch.
 */

export const metadata: Metadata = {
  title: "Shipping & delivery policy",
  description:
    "How tyres, batteries, spare parts and other physical goods ordered through TrueFleet are delivered or fitted, and what happens if something goes wrong.",
  alternates: { canonical: "/shipping-policy" },
};

export default function ShippingPolicyPage() {
  const entity = displayLegalName();
  const { orderConfirmation, metroWindow, nonMetroWindow } = legalConfig.delivery;

  const sections: LegalSection[] = [
    {
      id: "scope",
      heading: "What this policy covers",
      content: (
        <p>
          TrueFleet sells physical goods for commercial vehicles, including tyres, batteries, spare
          parts and lubricants, alongside services that are performed rather than shipped. This
          policy explains how those goods reach you, how fitment works, and what happens when a
          delivery goes wrong. It applies to orders placed with {entity} through the TrueFleet
          platform.
        </p>
      ),
    },
    {
      id: "fulfilment",
      heading: "Who fulfils an order",
      content: (
        <p>
          Orders are fulfilled by authorised partners: the brand, its distributor, or an authorised
          dealer or workshop near the delivery location. Goods are dispatched from the partner
          network rather than from a TrueFleet warehouse. The fulfilling partner and the expected
          window are shown before you confirm the order.
        </p>
      ),
    },
    {
      id: "delivery-or-fitment",
      heading: "Delivery or fitment",
      content: (
        <>
          <p>Depending on the product and your location, an order is completed in one of two ways:</p>
          <ul>
            <li>
              <strong>Delivery.</strong> Goods are delivered to the address on the order. Someone
              must be available to receive them, and heavy items such as tyres and batteries may
              require assistance at the delivery point.
            </li>
            <li>
              <strong>Fitment at an authorised outlet.</strong> For products that need fitting, you
              choose an outlet and a slot, and the goods are supplied and fitted there. The fitment
              is recorded against the vehicle on your account.
            </li>
          </ul>
          <p>
            Which option is available depends on the product, the partner network in your area and
            the vehicle. The choice is presented at checkout, not assumed.
          </p>
        </>
      ),
    },
    {
      id: "timelines",
      heading: "Timelines",
      content: (
        <>
          <p>
            An estimated delivery or fitment window is shown for every item at checkout. It is based
            on the partner, the stock position and the destination, so it is more reliable than a
            single site wide promise.
          </p>
          <ul>
            <li>Orders are confirmed with the fulfilling partner within {orderConfirmation}.</li>
            <li>Metro and large city deliveries typically complete within {metroWindow}.</li>
            <li>Other locations typically complete within {nonMetroWindow}.</li>
          </ul>
          <p>
            These are indicative. Weather, strikes, road closures, festival periods and partner stock
            can extend them. Where a delay is expected, we will tell you and give you the option to
            cancel for a full refund.
          </p>
        </>
      ),
    },
    {
      id: "tracking",
      heading: "Tracking your order",
      content: (
        <p>
          Order status is visible in the app from confirmation through to dispatch, delivery or
          fitment. Where the partner or courier provides a tracking reference, it is shown on the
          order. Notifications are sent at the points that matter, such as dispatch, out for
          delivery and completion.
        </p>
      ),
    },
    {
      id: "failed-delivery",
      heading: "Failed or refused delivery",
      content: (
        <>
          <p>
            If a delivery cannot be completed because nobody is available, the address is
            unreachable, or the vehicle is not present for a scheduled fitment, the partner will
            normally attempt it again and contact you to arrange a time.
          </p>
          <p>
            If delivery fails after repeated attempts, the order may be returned to the partner. In
            that case we will contact you to arrange a fresh delivery or to process a refund under
            the refund and cancellation policy. Charges already incurred for repeated attempts may
            be deducted where the partner applies them, and these are shown before you reorder.
          </p>
        </>
      ),
    },
    {
      id: "damaged-or-wrong",
      heading: "Damaged or incorrect goods",
      content: (
        <>
          <p>
            Check the goods when you receive them, and before fitment where possible. If an item is
            damaged, incorrect, or does not match the specification ordered, report it through the
            order in the app with photographs, and do not fit it.
          </p>
          <p>
            We will arrange a replacement or a return with the supplying partner, and where a
            replacement is not possible, a refund under the refund and cancellation policy. Items
            that have been fitted and used are handled through the manufacturer warranty process
            instead.
          </p>
        </>
      ),
    },
    {
      id: "service-areas",
      heading: "Service areas",
      content: (
        <p>
          Coverage depends on the partner network, and it is not uniform across India. Some products
          are available for delivery in areas where fitment is not, and some remote locations may
          not be serviceable at all. Availability is checked against your delivery pincode before an
          order is accepted, so you find out before you pay rather than afterwards. Coverage will
          widen as more partners and outlets are added.
        </p>
      ),
    },
    {
      id: "charges",
      heading: "Delivery charges",
      content: (
        <p>
          Delivery, handling and fitment charges, where they apply, are shown separately at checkout
          before you confirm the order. Charges vary by product weight, destination and whether the
          item is fitted at an outlet.
        </p>
      ),
    },
    {
      id: "contact",
      heading: "Questions about a delivery",
      content: (
        <p>
          For anything to do with an active order, contact support with the order reference and the
          vehicle registration. That lets us take it up with the fulfilling partner directly rather
          than passing you between numbers.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      title="Shipping & delivery policy"
      intro="How physical goods ordered through TrueFleet are delivered or fitted, and what we do when something goes wrong."
      sections={sections}
      currentPath="/shipping-policy"
    />
  );
}
