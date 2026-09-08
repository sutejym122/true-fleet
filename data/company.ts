/**
 * =============================================================================
 * TRUEFLEET BUSINESS CONFIGURATION
 * =============================================================================
 * This is the only file you need to edit to change company details across the
 * whole website: legal name, address, phone, email, registration numbers.
 *
 * BEFORE YOU DEPLOY, fill in every field marked TODO below. Fields left as an
 * empty string are hidden from the website automatically, so nothing invented
 * or half-finished is ever shown to a visitor. While running `npm run dev` a
 * checklist banner appears at the bottom of the screen listing whatever is
 * still missing. That banner never appears in a production build.
 *
 * Payment gateways and banks generally require a visible legal entity name,
 * registered address, support email and support phone number before they will
 * activate a merchant account.
 * =============================================================================
 */

export type CompanyConfig = {
  brand: string;
  clubName: string;
  descriptor: string;
  legalName: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  email: string;
  phone: string;
  partnershipsEmail: string;
  supportHours: string;
  registration: { cin: string; gstin: string };
  governingLawState: string;
  siteUrl: string;
  social: { linkedin: string; youtube: string; x: string };
};

export const company: CompanyConfig = {
  /** Public brand name. */
  brand: "TrueFleet",

  /** The club/ecosystem name used alongside the brand. */
  clubName: "Transport Owners Club",

  /** One line used in the footer and in search results. */
  descriptor:
    "A single platform for the products, services and paperwork that keep commercial vehicles running.",

  /** TODO: registered legal entity name exactly as it appears on your incorporation certificate. */
  legalName: "Kwality Transport Owners Club Private Limited",

  /** TODO: full registered office address. Use line breaks between parts. */
  address: {
    line1: "No 2386 7th main 22nd cross",
    line2: "BSK 2nd stage",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560070",
    country: "India",
  },

  /** TODO: a monitored support mailbox. */
  email: "qualitypm@rediffmail.com",

  /** TODO: a monitored support phone number, including country code. */
  phone: "+91 9916223144",

  /** TODO: partnership enquiries mailbox. Falls back to `email` when empty. */
  partnershipsEmail: "qualitypm@rediffmail.com",

  /** TODO: support hours as you want them published, e.g. "Monday to Saturday, 9:00 to 19:00 IST". */
  supportHours: "Monday to Saturday, 9:00 to 19:00 IST",

  /** TODO: add once available. Left empty they are simply not displayed. */
  registration: {
    cin: "",
    gstin: "",
  },

  /** TODO: the state whose courts govern your terms, e.g. "Karnataka". */
  governingLawState: "Karnataka",

  /** Production URL. Used for canonical URLs, sitemap and Open Graph tags. */
  siteUrl: "https://www.truefleet.in",

  /**
   * TODO: add profile URLs once the accounts exist. Empty entries are hidden,
   * so no placeholder social links are ever published.
   */
  social: {
    linkedin: "",
    youtube: "",
    x: "",
  },
};

/** Full address as a single readable string. Empty when no address is set. */
export function formattedAddress(): string {
  const a = company.address;
  return [
    a.line1,
    a.line2,
    [a.city, a.state].filter(Boolean).join(", "),
    a.pincode,
    a.country,
  ]
    .filter(Boolean)
    .join(", ");
}

/** Address as lines, for stacked display in the footer and contact page. */
export function addressLines(): string[] {
  const a = company.address;
  return [
    a.line1,
    a.line2,
    [a.city, a.state, a.pincode].filter(Boolean).join(" "),
    a.city || a.state ? a.country : "",
  ].filter((line): line is string => Boolean(line && line.trim()));
}

/** The name to show wherever a legal entity must be named. */
export function displayLegalName(): string {
  return company.legalName || company.brand;
}

export function partnershipsEmail(): string {
  return company.partnershipsEmail || company.email;
}

/** Used by the development-only configuration checklist. */
export function missingRequiredDetails(): string[] {
  const missing: string[] = [];
  if (!company.legalName) missing.push("Registered legal entity name");
  if (!company.address.line1 || !company.address.city)
    missing.push("Registered office address");
  if (!company.email) missing.push("Support email address");
  if (!company.phone) missing.push("Support phone number");
  if (!company.governingLawState)
    missing.push("Governing law state (used in Terms)");
  return missing;
}
