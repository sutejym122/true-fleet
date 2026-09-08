import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { company, displayLegalName } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "TrueFleet is building a single digital platform for commercial vehicle owners in India, bringing fuel, tyres, insurance, assistance, finance and fleet records together.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Say what is ready and what is not",
    body: "Services on this site are marked by stage. Nothing is described as available until it genuinely is, on this website or inside the app.",
  },
  {
    title: "Name a partner only when they agree to it",
    body: "No brand, logo or benefit appears here before the agreement is signed and the partner has approved publication in writing.",
  },
  {
    title: "Let specialists do the specialist work",
    body: "Insurance is sold by licensed insurers, credit is provided by regulated lenders, and fitment is done by authorised dealers. TrueFleet is the platform around them.",
  },
  {
    title: "Keep the record with the owner",
    body: "The vehicle history a business builds on TrueFleet belongs to that business, and it stays useful when the vehicle is sold or refinanced.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A platform built from inside the transport industry."
        intro="TrueFleet comes out of long experience of how commercial vehicles are actually run in India: the suppliers, the paperwork, the margins and the hours lost to arranging things that should be simple."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading kicker="Why TrueFleet exists" title="The work around the work." />
          </div>
          <div className="lg:col-span-7">
            <div className="max-w-2xl space-y-5 text-lead text-graphite">
              <p>
                A transport business earns its money by moving goods. Very little of an owner&apos;s
                day is spent on that. The rest goes on finding a tyre in the right size, arguing
                about a battery warranty, renewing a policy that lapsed last week, recharging a
                FASTag at a toll plaza and keeping track of what each vehicle has cost.
              </p>
              <p>
                Every one of those tasks has a competent provider somewhere. What has never existed
                is a single place to reach them, buy from them, pay them and keep the record
                afterwards. That gap is what TrueFleet is being built to close.
              </p>
              <p>
                The Transport Owners Club is the other half of the idea. Individually, an owner with
                four trucks has no leverage. Together, commercial vehicle owners represent steady,
                predictable, high volume demand that national brands want to reach. Membership is
                what turns that into better terms for the people doing the driving.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper" bordered>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-canvas p-8 sm:p-10">
              <h2 className="font-display text-sm font-semibold text-signal-ink">Mission</h2>
              <p className="mt-5 text-display-3 text-ink">
                Reduce the operating complexity of running commercial vehicles.
              </p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                Improve access to trusted products, services and technology for commercial vehicle
                owners, and make the cost of running a fleet visible to the people carrying it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-line bg-canvas p-8 sm:p-10">
              <h2 className="font-display text-sm font-semibold text-signal-ink">Vision</h2>
              <p className="mt-5 text-display-3 text-ink">
                A trusted, one stop digital ecosystem for commercial vehicle owners across India.
              </p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                A platform an owner opens for anything to do with a vehicle, and a channel that
                established brands rely on to reach the transport industry.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bordered>
        <SectionHeading
          kicker="How we work"
          title="Four commitments we hold ourselves to."
          body="TrueFleet is being shown to brands, banks, insurers and payment providers while it is still being built. That only works if what we publish is accurate."
        />
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={(index % 2) * 80}>
              <div className="border-t border-line-strong pt-5">
                <h3 className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{principle.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper" bordered space="tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-display-3 text-ink">Where we are today</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
              TrueFleet is in active development. The platform, the member experience and the first
              partner categories are being built now, and partner conversations are under way across
              tyres, fuel, batteries, insurance, assistance and finance. We would rather tell you
              that plainly than describe a finished product that does not exist yet. Each service on
              the services page carries its current stage.
            </p>
            <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
              {displayLegalName()} operates the TrueFleet platform. If you are a transport owner who
              wants early access, or a brand considering a partnership, the fastest way to reach us
              is through the contact page.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Contact {company.brand}
              </ButtonLink>
              <ButtonLink href="/partners" size="lg" variant="secondary">
                Partner with us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
