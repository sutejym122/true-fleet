import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const partnerValue = [
  {
    title: "Digital distribution",
    body: "Reach commercial vehicle owners through a channel built for them, without adding to your field cost.",
  },
  {
    title: "Attributable transactions",
    body: "Every order carries the vehicle, the member and the benefit that was applied.",
  },
  {
    title: "Repeat purchase journeys",
    body: "Tyres, batteries, oil and cover are bought again on a predictable cycle. The platform knows when.",
  },
  {
    title: "Demand visibility",
    body: "See where demand is forming by region, vehicle type and category, and plan supply against it.",
  },
];

/** Categories of partner, not company names. No logos are shown without permission. */
const partnerCategories = [
  "Tyre manufacturers",
  "Oil marketing companies",
  "Battery brands",
  "Lubricant and parts brands",
  "General insurers",
  "Banks and NBFCs",
  "Roadside assistance networks",
  "FASTag issuers",
];

export function PartnerEcosystem() {
  return (
    <Section tone="paper" bordered>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              kicker="For partners"
              title="Reach commercial fleets through one connected platform."
              body="TrueFleet connects established brands and service providers with verified commercial vehicle owners who are buying on a schedule rather than on impulse."
            />
            <div className="mt-8">
              <ButtonLink href="/partners" size="lg">
                Partner with TrueFleet
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {partnerValue.map((item) => (
                <div key={item.title} className="border-t border-line-strong pt-5">
                  <h3 className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold text-graphite">
                Categories we are building partnerships in
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-4">
                {partnerCategories.map((category) => (
                  <li
                    key={category}
                    className="bg-paper px-4 py-5 text-[0.8125rem] leading-snug text-graphite"
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-faint">
                Partner names and logos are published only with written permission.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
