/**
 * Service catalogue used by the home page, the services page and the footer.
 *
 * `availability` describes how far along each service is. Nothing here should
 * claim that a service is live until the commercial agreement and the
 * integration are both signed off.
 *
 *   "partner-integration" : being brought on through a named partner, not yet
 *                           open to members
 *   "in-development"      : TrueFleet is building this on the platform
 *   "planned"             : on the roadmap, work has not started
 *   "live"                : open to members today. Only use this once true.
 */

export type Availability = "live" | "partner-integration" | "in-development" | "planned";

export const availabilityLabel: Record<Availability, string> = {
  live: "Available now",
  "partner-integration": "Through partner integrations",
  "in-development": "In development",
  planned: "Planned",
};

export type IconKey =
  | "fuel"
  | "tyre"
  | "battery"
  | "parts"
  | "insurance"
  | "assistance"
  | "fastag"
  | "finance"
  | "legal"
  | "marketplace"
  | "payments"
  | "fleet"
  | "reminders"
  | "rewards";

export type Service = {
  slug: string;
  name: string;
  /** One sentence, plain language, for cards and list rows. */
  summary: string;
  /** What a member actually gets. Keep each item concrete. */
  memberGets: string[];
  /** How the service connects to the rest of the platform. */
  fit: string;
  availability: Availability;
  icon: IconKey;
};

export const services: Service[] = [
  {
    slug: "fuel",
    name: "Fuel",
    summary:
      "Fuel spending handled through the platform, with every litre tied back to the vehicle that used it.",
    memberGets: [
      "Fuel purchases recorded against each vehicle",
      "Consolidated statements instead of loose receipts",
      "Member pricing and offers where fuel partners provide them",
    ],
    fit: "Fuel is the largest running cost for most transporters. Recording it inside TrueFleet is what makes cost per vehicle, and later cost per trip, possible.",
    availability: "partner-integration",
    icon: "fuel",
  },
  {
    slug: "tyres",
    name: "Tyres",
    summary:
      "Commercial vehicle tyres from established manufacturers, ordered against your vehicle and its fitment.",
    memberGets: [
      "Tyres matched to your vehicle model and axle configuration",
      "Member pricing negotiated by the Transport Owners Club",
      "Fitment through authorised dealers, with the purchase held in your vehicle record",
    ],
    fit: "Tyres are a repeat, high value purchase. Buying them through TrueFleet builds a service history that makes the next replacement easier to plan.",
    availability: "partner-integration",
    icon: "tyre",
  },
  {
    slug: "batteries",
    name: "Batteries",
    summary: "Commercial vehicle batteries with the right specification, delivered or fitted.",
    memberGets: [
      "Batteries matched to your vehicle",
      "Member pricing through partner brands",
      "Warranty details stored against the vehicle",
    ],
    fit: "Sits alongside tyres and parts so a breakdown does not turn into a search for a trustworthy supplier in an unfamiliar town.",
    availability: "partner-integration",
    icon: "battery",
  },
  {
    slug: "spare-parts-lubricants",
    name: "Spare parts and lubricants",
    summary: "Genuine parts, filters, oils and lubricants from suppliers the platform has verified.",
    memberGets: [
      "Parts and lubricants filtered to your vehicle",
      "Ordering without calling four different suppliers",
      "Purchase history that supports warranty claims",
    ],
    fit: "Completes the maintenance side of the platform, and feeds the service reminders that follow an oil or filter change.",
    availability: "partner-integration",
    icon: "parts",
  },
  {
    slug: "insurance",
    name: "Insurance",
    summary:
      "Commercial vehicle insurance and renewals, arranged through licensed insurance partners.",
    memberGets: [
      "Renewal dates tracked for every vehicle",
      "Quotes from partner insurers in one place",
      "Policy documents stored digitally and available on the road",
    ],
    fit: "Insurance is sold and serviced by licensed partners. TrueFleet handles the reminders, the paperwork and the record keeping around it.",
    availability: "partner-integration",
    icon: "insurance",
  },
  {
    slug: "roadside-assistance",
    name: "Roadside assistance",
    summary: "Help reaching a stranded vehicle, arranged through assistance partners.",
    memberGets: [
      "One number to call instead of a search for a local mechanic",
      "Vehicle and location details already on file",
      "Assistance requests logged against the vehicle",
    ],
    fit: "A breakdown is where a transport business loses the most money the fastest. Assistance is the service that proves the platform is worth keeping on the phone.",
    availability: "partner-integration",
    icon: "assistance",
  },
  {
    slug: "fastag",
    name: "FASTag",
    summary: "FASTag issuance, recharge and toll spending visible for each vehicle.",
    memberGets: [
      "Recharges made from the app",
      "Toll spending grouped by vehicle",
      "Low balance alerts before a vehicle is stopped at a plaza",
    ],
    fit: "Toll is a fixed part of every trip. Bringing it into the platform closes one of the last gaps in a transporter's running cost picture.",
    availability: "partner-integration",
    icon: "fastag",
  },
  {
    slug: "vehicle-finance",
    name: "Vehicle finance",
    summary:
      "Applications for commercial vehicle loans and refinancing, passed to lending partners.",
    memberGets: [
      "One application instead of separate visits to several lenders",
      "Vehicle details filled in from your fleet records",
      "Application status visible in the app",
    ],
    fit: "Lending decisions stay with regulated lenders. TrueFleet handles the introduction, the documents and the follow up.",
    availability: "partner-integration",
    icon: "finance",
  },
  {
    slug: "legal-challan",
    name: "Legal and challan support",
    summary: "Challan checks and help with the legal paperwork a transport business runs into.",
    memberGets: [
      "Pending challans visible per vehicle",
      "Guidance on resolving notices and disputes",
      "Documents kept in one place for when they are asked for",
    ],
    fit: "Challans and documentation are handled vehicle by vehicle today. The platform keeps them with the rest of the vehicle record.",
    availability: "in-development",
    icon: "legal",
  },
  {
    slug: "vehicle-marketplace",
    name: "Vehicle buying and selling",
    summary: "A place to list a commercial vehicle for sale, or to look for one to buy.",
    memberGets: [
      "Listings from within the transport community",
      "Vehicle history that a buyer can rely on",
      "Introductions to finance and insurance at the point of purchase",
    ],
    fit: "Buying and selling is where fleet owners most need a counterparty they can trust. The club membership is what makes that possible.",
    availability: "planned",
    icon: "marketplace",
  },
  {
    slug: "digital-payments",
    name: "Digital payments",
    summary: "Paying for everything on the platform through regulated payment providers.",
    memberGets: [
      "UPI, cards and net banking through a licensed payment gateway",
      "Receipts and payment history in one statement",
      "Payments attributed to the right vehicle and the right order",
    ],
    fit: "Payments are the layer everything else sits on. Card details are handled by the payment provider and are never stored by TrueFleet.",
    availability: "in-development",
    icon: "payments",
  },
  {
    slug: "fleet-management",
    name: "Fleet and vehicle management",
    summary: "Your vehicles, documents and spending in one view rather than several notebooks.",
    memberGets: [
      "A profile for every vehicle with its documents attached",
      "Spending grouped by vehicle and by category",
      "Records that stay with the business rather than with one person's phone",
    ],
    fit: "This is the spine of the platform. Every service writes back to the vehicle record, which is what turns separate purchases into a fleet view.",
    availability: "in-development",
    icon: "fleet",
  },
  {
    slug: "maintenance-reminders",
    name: "Maintenance and reminders",
    summary: "Reminders for the renewals and services that are expensive to miss.",
    memberGets: [
      "Alerts for insurance, fitness, permit and PUC dates",
      "Service reminders based on your last purchase",
      "Reminders for the person who actually needs them",
    ],
    fit: "Reminders are generated from the records the platform already holds, so they improve as more of your fleet activity moves onto TrueFleet.",
    availability: "in-development",
    icon: "reminders",
  },
  {
    slug: "member-benefits",
    name: "Rewards and member benefits",
    summary:
      "Benefits negotiated for members through the Transport Owners Club and its partner brands.",
    memberGets: [
      "Member pricing where partners have agreed to it",
      "Offers that apply across the fleet, not one vehicle at a time",
      "Benefits shown against the services you already use",
    ],
    fit: "Individual owners rarely buy at a scale that earns better terms. Membership aggregates that demand and shares the benefit back.",
    availability: "in-development",
    icon: "rewards",
  },
];

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * The nine categories shown on the home page. `span` drives the size of each
 * tile so the section reads as a hierarchy rather than a grid of equals.
 */
export type EcosystemEntry = {
  slug: string;
  name: string;
  line: string;
  icon: IconKey;
  span: "feature" | "wide" | "standard";
};

export const ecosystem: EcosystemEntry[] = [
  {
    slug: "fuel",
    name: "Fuel",
    line: "Fuel spending recorded against the vehicle that used it, with member pricing where partners offer it.",
    icon: "fuel",
    span: "feature",
  },
  {
    slug: "tyres",
    name: "Tyres",
    line: "Commercial tyres matched to your fitment, ordered at member pricing and fitted through authorised dealers.",
    icon: "tyre",
    span: "feature",
  },
  {
    slug: "insurance",
    name: "Insurance",
    line: "Cover and renewals through licensed partners, with every policy date tracked.",
    icon: "insurance",
    span: "wide",
  },
  {
    slug: "batteries",
    name: "Batteries and parts",
    line: "Batteries, filters, lubricants and genuine spares from verified suppliers.",
    icon: "battery",
    span: "standard",
  },
  {
    slug: "roadside-assistance",
    name: "Roadside assistance",
    line: "Help reaching a stopped vehicle, with its details already on file.",
    icon: "assistance",
    span: "standard",
  },
  {
    slug: "fastag",
    name: "FASTag",
    line: "Recharges, balance alerts and toll spending per vehicle.",
    icon: "fastag",
    span: "standard",
  },
  {
    slug: "vehicle-finance",
    name: "Finance",
    line: "One application, passed to lending partners with your vehicle details attached.",
    icon: "finance",
    span: "standard",
  },
  {
    slug: "legal-challan",
    name: "Legal and challan",
    line: "Pending challans, notices and the documents that go with them.",
    icon: "legal",
    span: "standard",
  },
  {
    slug: "fleet-management",
    name: "Fleet management",
    line: "Vehicles, documents, orders and spending in a single view.",
    icon: "fleet",
    span: "wide",
  },
];
