import { memberAdvantages, publishedPartnerBenefits } from "@/data/benefits";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function MemberBenefits() {
  return (
    <Section tone="paper" bordered>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              kicker="Member benefits"
              title="Membership is what makes the pricing possible."
              body="TrueFleet is built on the Transport Owners Club: a group of commercial vehicle owners buying the same things every month. That volume is what earns terms an individual owner cannot ask for."
            />
            <p className="mt-8 max-w-md border-t border-line-strong pt-6 text-sm leading-relaxed text-muted">
              Benefit values are published on this site only after the partner agreement is signed
              and the partner has approved public advertising. Until then, offers are shown to
              members inside the app at the point of purchase.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <dl className="border-t border-line-strong">
              {memberAdvantages.map((advantage) => (
                <div
                  key={advantage.title}
                  className="grid gap-2 border-b border-line py-7 sm:grid-cols-5 sm:gap-8"
                >
                  <dt className="font-display text-base font-semibold tracking-[-0.015em] text-ink sm:col-span-2">
                    {advantage.title}
                  </dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-3">
                    {advantage.body}
                  </dd>
                </div>
              ))}
            </dl>

            {publishedPartnerBenefits.length > 0 ? (
              <div className="mt-10">
                <h3 className="text-sm font-semibold text-graphite">Live partner benefits</h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {publishedPartnerBenefits.map((benefit) => (
                    <li
                      key={benefit.headline}
                      className="rounded-2xl border border-line bg-canvas p-6"
                    >
                      <p className="text-sm text-signal-ink">{benefit.category}</p>
                      <p className="mt-2 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                        {benefit.headline}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.detail}</p>
                      <p className="mt-3 text-xs text-faint">{benefit.partner}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
