/**
 * One set of validation rules, used by the forms in the browser and by the API
 * routes on the server. Keeping them in one place means the two can never
 * drift apart.
 */

export type FieldErrors = Record<string, string>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Accepts Indian mobile numbers with or without +91, spaces or hyphens. */
export function normalisePhone(value: string): string {
  return value.replace(/[\s()-]/g, "");
}

export function isValidPhone(value: string): boolean {
  const phone = normalisePhone(value);
  return /^(\+91)?[6-9]\d{9}$/.test(phone) || /^\+\d{8,15}$/.test(phone);
}

export function isValidEmail(value: string): boolean {
  return emailPattern.test(value.trim());
}

export type ContactEnquiry = {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

export type PartnerEnquiry = {
  name: string;
  company: string;
  designation: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

export const partnerCategories = [
  "Tyres",
  "Fuel",
  "Batteries",
  "Lubricants and spare parts",
  "Insurance",
  "Roadside assistance",
  "FASTag and tolling",
  "Finance and banking",
  "Payments",
  "Technology",
  "Other",
];

export function validateContact(values: ContactEnquiry): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.phone.trim()) errors.phone = "Enter a phone number we can reach you on.";
  else if (!isValidPhone(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!isValidEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!values.message.trim()) errors.message = "Tell us what you need help with.";
  else if (values.message.trim().length < 10)
    errors.message = "Add a little more detail so we can route your enquiry.";
  return errors;
}

export function validatePartner(values: PartnerEnquiry): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.company.trim()) errors.company = "Enter your company name.";
  if (!values.designation.trim()) errors.designation = "Enter your designation.";
  if (!values.email.trim()) errors.email = "Enter your work email address.";
  else if (!isValidEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Enter a phone number we can reach you on.";
  else if (!isValidPhone(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!values.category.trim()) errors.category = "Choose the category closest to your business.";
  if (!values.message.trim()) errors.message = "Tell us what you would like to explore.";
  else if (values.message.trim().length < 10)
    errors.message = "Add a little more detail so we can prepare before we reply.";
  return errors;
}

/** Narrows unknown JSON from a request body into a string map. */
export function asStringMap(input: unknown): Record<string, string> {
  if (typeof input !== "object" || input === null) return {};
  const output: Record<string, string> = {};
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    output[key] = typeof value === "string" ? value : "";
  }
  return output;
}
