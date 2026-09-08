/**
 * Member benefits.
 *
 * `memberAdvantages` describes how membership creates value in general terms.
 * It makes no claim about any specific partner or discount.
 *
 * `publishedPartnerBenefits` is intentionally empty. Add an entry only once
 * two things are true: the commercial agreement is signed, and the partner has
 * approved public advertising of that benefit. Anything listed here appears on
 * the home page and on the services page automatically.
 *
 * Example of a future entry, kept commented out on purpose:
 *
 *   {
 *     category: "Tyres",
 *     headline: "8% member benefit on partner tyres",
 *     detail: "Applied at checkout on eligible commercial vehicle tyres.",
 *     partner: "Partner brand",
 *   }
 */

export type PartnerBenefit = {
  category: string;
  headline: string;
  detail: string;
  /** Leave as a generic description unless the partner has approved being named. */
  partner: string;
};

export const publishedPartnerBenefits: PartnerBenefit[] = [];

export const memberAdvantages = [
  {
    title: "Buying power that a single owner does not have",
    body: "A transport business with four trucks negotiates alone. The Transport Owners Club brings that demand together, which is what makes better terms possible with national brands.",
  },
  {
    title: "Benefits that apply across the fleet",
    body: "A member benefit applies to every vehicle on the account rather than to one purchase, so the saving is worth tracking rather than chasing.",
  },
  {
    title: "Fewer suppliers to manage",
    body: "Buying fuel, tyres, parts and cover in one place removes the calls, the follow ups and the separate payments that take up an owner's day.",
  },
  {
    title: "A record you can actually use",
    body: "Every purchase is held against the vehicle, which turns loose bills into a service history a buyer, a lender or an insurer will accept.",
  },
];
