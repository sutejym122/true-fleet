import { company } from "@/data/company";

/**
 * Shown when the form was filled in correctly but the site could not deliver
 * it, usually because no inbox or webhook is configured yet. The visitor is
 * given a real alternative rather than a false success message.
 */
export function DeliveryFallback({ message }: { message: string }) {
  const hasChannel = Boolean(company.email || company.phone);

  return (
    <div className="rounded-2xl border border-signal/40 bg-signal-soft p-5">
      <p className="text-sm font-semibold text-signal-ink">{message}</p>
      {hasChannel ? (
        <p className="mt-2 text-sm leading-relaxed text-signal-ink">
          Please reach us directly in the meantime.
          {company.email ? (
            <>
              {" "}
              Write to{" "}
              <a href={`mailto:${company.email}`} className="underline underline-offset-2">
                {company.email}
              </a>
              .
            </>
          ) : null}
          {company.phone ? (
            <>
              {" "}
              Or call{" "}
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="underline underline-offset-2"
              >
                {company.phone}
              </a>
              .
            </>
          ) : null}
        </p>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-signal-ink">
          Our published contact channels are being finalised. Please try again shortly.
        </p>
      )}
    </div>
  );
}

export function SuccessPanel({ title, body }: { title: string; body: string }) {
  return (
    <div
      role="status"
      className="rounded-2xl border border-line bg-paper p-8 text-center sm:p-10"
    >
      <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">{title}</h3>
      <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-muted">{body}</p>
    </div>
  );
}
