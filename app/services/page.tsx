import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { AvailabilityNote } from "@/components/ui/AvailabilityNote";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fuel, tyres, batteries, spare parts, insurance, roadside assistance, FASTag, finance, legal support, payments and fleet management for commercial vehicle owners.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The services a transport business actually runs on."
        intro="TrueFleet is being built service by service, with partners who already serve this industry. Each entry below says plainly where it stands today."
      />

      <Section space="normal">
        <div className="border-t border-line-strong">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index < 4 ? index * 60 : 0}>
              <article
                id={service.slug}
                className="grid scroll-mt-24 gap-6 border-b border-line py-10 sm:py-12 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-paper">
                      <ServiceIcon name={service.icon} className="size-5 text-navy" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                        {service.name}
                      </h2>
                      <AvailabilityNote availability={service.availability} className="mt-2" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-[0.9375rem] leading-relaxed text-graphite">
                    {service.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{service.fit}</p>
                </div>

                <div className="lg:col-span-3">
                  <h3 className="text-sm font-semibold text-graphite">What a member gets</h3>
                  <ul className="mt-3 space-y-2">
                    {service.memberGets.map((item) => (
                      <li key={item} className="relative pl-4 text-sm leading-relaxed text-muted">
                        <span
                          aria-hidden="true"
                          className="absolute top-[0.6rem] left-0 h-px w-2 bg-line-strong"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-paper p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-display-3 text-ink">
              Services are added as agreements are signed.
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
              Nothing on this page is described as live until the commercial agreement and the
              integration are both complete. If you supply one of these categories and want to
              reach commercial vehicle owners through TrueFleet, we would like to talk.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/partners" size="lg">
                Partner with TrueFleet
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="secondary">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
