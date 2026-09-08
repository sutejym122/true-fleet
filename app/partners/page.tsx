import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { partnershipsEmail } from "@/data/company";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "TrueFleet connects tyre, fuel, battery, insurance, finance and assistance partners with commercial vehicle owners through one digital platform. Partner with TrueFleet.",
  alternates: { canonical: "/partners" },
};

const value = [
  {
    title: "A verified commercial vehicle audience",
    body: "Members register their business and their vehicles. You are reaching owners and operators, with the vehicle type and fitment already known.",
  },
  {
    title: "Digital orders",
    body: "Demand arrives as a structured order with the vehicle, the specification and the delivery or fitment location attached.",
  },
  {
    title: "A partner catalogue you control",
    body: "Your products, your specifications and your pricing rules, presented to members inside the categories they are shopping in.",
  },
  {
    title: "Attributable transactions",
    body: "Every order can be traced to the member, the vehicle and the offer that produced it. Marketing spend stops being a guess.",
  },
  {
    title: "Targeted member programmes",
    body: "Run an offer for a vehicle type, a region or a purchase cycle rather than for everyone at once.",
  },
  {
    title: "Repeat purchase journeys",
    body: "Tyres, batteries, oil and cover come round again on a known cycle. The platform knows when a vehicle is due.",
  },
  {
    title: "Partner reporting",
    body: "Volumes, categories and fulfilment performance, shared back so both sides are working from the same numbers.",
  },
  {
    title: "Integration potential",
    body: "Catalogue, pricing, stock and order status can be connected through APIs, or managed through the partner console to begin with.",
  },
  {
    title: "Regional demand visibility",
    body: "See where demand is forming by state, corridor and vehicle category, and plan distribution against it.",
  },
];

const process = [
  {
    title: "An introductory conversation",
    body: "We share where the platform is, what we are building next, and where your category fits.",
  },
  {
    title: "Commercial terms",
    body: "Pricing, member benefits, fulfilment responsibilities and reporting are agreed in writing.",
  },
  {
    title: "Catalogue and integration",
    body: "Products, specifications and availability are brought onto the platform, manually first if that is faster.",
  },
  {
    title: "Launch to members",
    body: "The category goes live to members with your terms applied at checkout.",
  },
  {
    title: "Review and expand",
    body: "We review volumes and fulfilment together and widen the programme where it is working.",
  },
];

export default function PartnersPage() {
  const email = partnershipsEmail();

  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Reach commercial fleets through one connected platform."
        intro="TrueFleet brings commercial vehicle owners together as members of the Transport Owners Club, and gives established brands a direct, measurable route to them."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#partner-enquiry" size="lg">
            Partner with TrueFleet
          </ButtonLink>
          {email ? (
            <ButtonLink href={`mailto:${email}`} size="lg" variant="secondary">
              Email the partnerships team
            </ButtonLink>
          ) : null}
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          kicker="Why partner with us"
          title="Demand that is identified, recurring and attributable."
          body="Commercial vehicle owners buy the same categories repeatedly and on a predictable cycle. The difficulty has always been reaching them efficiently and knowing what the spend produced."
        />

        <div className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {value.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 70}>
              <div className="border-t border-line-strong pt-5">
                <h3 className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark" bordered>
        <SectionHeading
          kicker="How a partnership works"
          title="Five stages, and no surprises in any of them."
          invert
        />
        <ol className="mt-14 grid gap-8 lg:grid-cols-5">
          {process.map((stage, index) => (
            <Reveal as="li" key={stage.title} delay={index * 70}>
              <p className="font-display text-sm font-semibold text-white/50">
                Stage {index + 1}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.02em] text-white">
                {stage.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-white/65">{stage.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section bordered>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-display-3 text-ink">What TrueFleet brings</h2>
            <ul className="mt-6 space-y-4">
              {[
                "A member base of registered transport businesses with verified vehicles",
                "The platform, the app, the payment flow and the order workflow",
                "Category management, member communication and support",
                "Reporting on volumes, categories and fulfilment",
              ].map((item) => (
                <li key={item} className="relative border-b border-line pb-4 pl-5 text-[0.9375rem] leading-relaxed text-muted">
                  <span aria-hidden="true" className="absolute top-[0.7rem] left-0 h-px w-2.5 bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-display-3 text-ink">What we ask of a partner</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Products or services suitable for commercial vehicles, supplied on agreed terms",
                "Fulfilment through your authorised network, with service levels we can publish",
                "Accurate specifications, availability and pricing for the catalogue",
                "A named contact who can resolve escalations for members",
              ].map((item) => (
                <li key={item} className="relative border-b border-line pb-4 pl-5 text-[0.9375rem] leading-relaxed text-muted">
                  <span aria-hidden="true" className="absolute top-[0.7rem] left-0 h-px w-2.5 bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-faint">
          TrueFleet does not publish a partner name, logo or benefit until the agreement is signed
          and the partner has approved it in writing. Discussions in progress are not represented
          on this website as partnerships.
        </p>
      </Section>

      <Section tone="paper" bordered id="partner-enquiry">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="Partnership enquiry"
              title="Tell us where your business fits."
              body="Send us a few details and the partnerships team will come back to you with the current status of your category and what a first phase could look like."
            />
            {email ? (
              <p className="mt-8 border-t border-line-strong pt-6 text-sm leading-relaxed text-muted">
                You can also write to{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-signal"
                >
                  {email}
                </a>
                .
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-canvas p-6 sm:p-9">
              <PartnerForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
