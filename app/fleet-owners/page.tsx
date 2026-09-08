import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceJourney } from "@/components/fleet/ServiceJourney";
import { PhoneFrame } from "@/components/product/PhoneFrame";
import { VehicleProfileScreen } from "@/components/product/AppScreens";

export const metadata: Metadata = {
  title: "For fleet owners",
  description:
    "TrueFleet is built for individual truck owners, small fleets and transport companies: fewer suppliers to chase, trusted providers, and a record for every vehicle.",
  alternates: { canonical: "/fleet-owners" },
};

const outcomes = [
  {
    title: "Fewer people to chase",
    body: "Fuel, tyres, parts, cover and assistance reached from one account, so an ordinary week stops being a series of phone calls.",
  },
  {
    title: "Providers you can rely on",
    body: "Partners are brought on because they already serve commercial vehicles well, not because they were the nearest option on the day.",
  },
  {
    title: "Every vehicle accounted for",
    body: "Registration, documents, spending and service history sit against the vehicle rather than in a diary or on a driver's phone.",
  },
  {
    title: "Purchases you can review later",
    body: "Orders, deliveries and fitments are recorded, so a warranty claim or a dispute has something behind it.",
  },
  {
    title: "Benefits worth having",
    body: "Member offers apply across the fleet and are shown at the point you are buying, not buried in a circular.",
  },
  {
    title: "Nothing that expires quietly",
    body: "Insurance, fitness, permit and PUC dates are tracked and flagged before they cost you a penalty or a stopped truck.",
  },
];

const audiences = [
  { title: "Individual owners", body: "One or two vehicles, run hands on, where every day off the road hurts." },
  { title: "Small fleets", body: "Three to fifteen vehicles, usually managed by the owner and one or two people." },
  { title: "Medium operators", body: "Growing fleets where records are starting to matter more than memory." },
  { title: "Transport companies", body: "Established businesses that need spending and compliance visible across branches." },
];

export default function FleetOwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For fleet owners"
        title="Spend less of your day arranging things."
        intro="Running commercial vehicles is a business of small urgent tasks. TrueFleet is built to take the arranging, the chasing and the record keeping off your hands so you can get on with the work."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Join TrueFleet
          </ButtonLink>
          <ButtonLink href="/services" size="lg" variant="secondary">
            See the services
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          kicker="How it fits together"
          title="From the truck, through TrueFleet, to the right specialist."
          body="TrueFleet does not replace the people who fit your tyres or insure your vehicles. It removes the work of finding them, comparing them, paying them and remembering what was done."
        />
        <Reveal className="mt-14">
          <ServiceJourney />
        </Reveal>
      </Section>

      <Section tone="paper" bordered>
        <SectionHeading kicker="What changes" title="Six things that get easier." />
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <Reveal key={outcome.title} delay={(index % 3) * 70}>
              <div className="border-t border-line-strong pt-5">
                <h3 className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{outcome.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bordered>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              kicker="The vehicle record"
              title="Everything about a truck, on one screen."
              body="Add a vehicle once and it carries its own history: documents, renewals, what was fitted, what was spent and when it is next due for attention."
            />
            <p className="mt-8 max-w-md border-t border-line pt-6 text-sm leading-relaxed text-muted">
              When you sell that vehicle, the record goes with it. A buyer, a lender or an insurer
              can see how it was maintained rather than take your word for it.
            </p>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={120} className="flex justify-center lg:justify-end">
              <div>
                <PhoneFrame label="TrueFleet vehicle profile screen">
                  <VehicleProfileScreen />
                </PhoneFrame>
                <p className="mt-4 text-center text-xs text-faint">
                  Interface preview. Content shown is illustrative.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="paper" bordered space="tight">
        <SectionHeading kicker="Who it is for" title="Built for the whole range of transport businesses." />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div key={audience.title} className="bg-canvas p-6">
              <h3 className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{audience.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
