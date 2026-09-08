import { NextResponse } from "next/server";
import { deliverEnquiry } from "@/lib/enquiry-delivery";
import { asStringMap, validateContact, type ContactEnquiry } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Send this form as JSON." }, { status: 400 });
  }

  const raw = asStringMap(body);
  const values: ContactEnquiry = {
    name: raw.name ?? "",
    phone: raw.phone ?? "",
    email: raw.email ?? "",
    company: raw.company ?? "",
    message: raw.message ?? "",
  };

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors, message: "Check the highlighted fields." }, { status: 422 });
  }

  const result = await deliverEnquiry("contact", values);

  if (!result.ok) {
    return NextResponse.json(
      {
        message:
          result.reason === "not-configured"
            ? "This form is not connected to our inbox yet."
            : "We could not send your message just now.",
        reason: result.reason,
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ message: "Thanks. We have your message." });
}
