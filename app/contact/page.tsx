import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { addressLines, company, displayLegalName } from "@/data/company";
import { legalNav } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TrueFleet about membership, services, support or partnerships. Send an enquiry through the form or reach our team directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const address = addressLines();
  const hasDetails =
    Boolean(company.email) ||
    Boolean(company.phone) ||
    address.length > 0 ||
    Boolean(company.registration.cin) ||
    Boolean(company.registration.gstin);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the TrueFleet team."
        intro="Whether you run one truck or a hundred, supply the industry, or want to understand where the platform is heading, send us a note and we will come back to you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-display-3 text-ink">Send us a message</h2>
            <p className="mt-3 max-w-lg text-[0.9375rem] leading-relaxed text-muted">
              Tell us a little about your business and what you need. Enquiries about partnerships
              are better sent through the{" "}
              <Link
                href="/partners#partner-enquiry"
                className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-signal"
              >
                partner form
              </Link>
              , which asks for the details our partnerships team needs.
            </p>
            <div className="mt-9 rounded-3xl border border-line bg-canvas p-6 sm:p-9">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-paper p-8 sm:p-10">
              <h2 className="text-display-3 text-ink">Company details</h2>

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-sm font-medium text-muted">Legal entity</dt>
                  <dd className="mt-1 text-[0.9375rem] text-ink">{displayLegalName()}</dd>
                </div>

                {address.length > 0 ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">Registered office</dt>
                    <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink">
                      {address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </dd>
                  </div>
                ) : null}

                {company.email ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">Email</dt>
                    <dd className="mt-1 text-[0.9375rem] text-ink">
                      <a
                        href={`mailto:${company.email}`}
                        className="underline decoration-line-strong underline-offset-4 hover:decoration-signal"
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                ) : null}

                {company.phone ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">Phone</dt>
                    <dd className="mt-1 text-[0.9375rem] text-ink">
                      <a
                        href={`tel:${company.phone.replace(/\s+/g, "")}`}
                        className="underline decoration-line-strong underline-offset-4 hover:decoration-signal"
                      >
                        {company.phone}
                      </a>
                    </dd>
                  </div>
                ) : null}

                {company.supportHours ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">Support hours</dt>
                    <dd className="mt-1 text-[0.9375rem] text-ink">{company.supportHours}</dd>
                  </div>
                ) : null}

                {company.registration.cin ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">CIN</dt>
                    <dd className="mt-1 text-[0.9375rem] text-ink">{company.registration.cin}</dd>
                  </div>
                ) : null}

                {company.registration.gstin ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">GSTIN</dt>
                    <dd className="mt-1 text-[0.9375rem] text-ink">
                      {company.registration.gstin}
                    </dd>
                  </div>
                ) : null}
              </dl>

              {!hasDetails ? (
                <p className="mt-8 border-t border-line-strong pt-6 text-sm leading-relaxed text-muted">
                  Our published contact details are being finalised. Until then, the form is the
                  quickest way to reach the team and we will reply from our registered address.
                </p>
              ) : null}

              <div className="mt-10 border-t border-line-strong pt-6">
                <h3 className="text-sm font-semibold text-graphite">Policies</h3>
                <ul className="mt-3 space-y-2">
                  {legalNav.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
