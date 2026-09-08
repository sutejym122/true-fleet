import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const layers = [
  {
    name: "Mobile app",
    body: "Where an owner, a manager or a driver does the work: adding vehicles, ordering, paying and checking records.",
  },
  {
    name: "Orders and service workflows",
    body: "An order moves from request to partner to fulfilment, with its status visible the whole way.",
  },
  {
    name: "Payments",
    body: "Handled by a licensed payment gateway. TrueFleet records what was paid for, never the card details.",
  },
  {
    name: "Partner integrations",
    body: "Catalogues, pricing and availability connected to the brands and providers supplying each service.",
  },
  {
    name: "Fleet records",
    body: "The vehicle, its documents and its history. Everything else writes back to this.",
  },
  {
    name: "Notifications",
    body: "Renewals, low balances and service reminders, sent to the person who has to act on them.",
  },
];

export function Technology() {
  return (
    <Section bordered>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              kicker="The platform"
              title="One system, not a set of separate apps."
              body="TrueFleet is being built as a single connected platform. That is what allows a tyre bought in one month to become a reminder in another, and a payment to become a statement your accountant will accept."
            />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <ol className="space-y-px overflow-hidden rounded-2xl border border-line">
              {layers.map((layer, index) => (
                <li
                  key={layer.name}
                  className="grid gap-1 border-b border-line bg-canvas px-6 py-6 last:border-b-0 sm:grid-cols-3 sm:gap-8 sm:px-8"
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="font-display text-xs font-semibold text-faint"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                      {layer.name}
                    </h3>
                  </div>
                  <p className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-2">
                    {layer.body}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
