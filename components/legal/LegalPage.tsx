import type { ReactNode } from "react";
import Link from "next/link";
import { legalNav } from "@/data/navigation";
import { legalConfig } from "@/data/legal";
import { company, displayLegalName } from "@/data/company";

export type LegalSection = {
  id: string;
  heading: string;
  content: ReactNode;
};

/**
 * Layout shared by all four policy pages so they read as part of the same
 * publication rather than as afterthoughts.
 *
 * NOTE FOR THE BUSINESS OWNER: the text on these pages is an initial draft
 * prepared so that a payment gateway or bank can complete merchant onboarding.
 * It has not been reviewed by a lawyer. Have counsel review and amend all four
 * policies before launch, and again whenever a new service or fulfilment
 * partner is added.
 */
export function LegalPage({
  title,
  intro,
  sections,
  currentPath,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  currentPath: string;
}) {
  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="container-page pt-28 pb-14 sm:pt-36 sm:pb-16 lg:pt-40">
          <p className="flex items-center gap-2.5 text-sm font-medium text-signal-ink">
            <span aria-hidden="true" className="h-px w-6 bg-signal/60" />
            Policies
          </p>
          <h1 className="mt-5 max-w-3xl text-display-1 text-ink">{title}</h1>
          <p className="mt-6 max-w-2xl text-lead text-muted">{intro}</p>
          <p className="mt-8 text-sm text-faint">Last updated {legalConfig.lastUpdated}</p>
        </div>
      </header>

      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <nav aria-label="On this page">
                <h2 className="text-sm font-semibold text-graphite">On this page</h2>
                <ol className="mt-4 space-y-2.5 border-l border-line pl-4">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-sm leading-snug text-muted transition-colors hover:text-ink"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-10 border-t border-line pt-6">
                <h2 className="text-sm font-semibold text-graphite">Other policies</h2>
                <ul className="mt-4 space-y-2.5">
                  {legalNav
                    .filter((link) => link.href !== currentPath)
                    .map((link) => (
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
          </aside>

          <div className="lg:col-span-9">
            <div className="prose-legal">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2>{section.heading}</h2>
                  {section.content}
                </section>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <h2 className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                Questions about this policy
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Write to {displayLegalName()}
                {company.email ? (
                  <>
                    {" "}
                    at{" "}
                    <a
                      href={`mailto:${company.email}`}
                      className="text-ink underline decoration-line-strong underline-offset-4"
                    >
                      {company.email}
                    </a>
                  </>
                ) : null}
                , or use the{" "}
                <Link
                  href="/contact"
                  className="text-ink underline decoration-line-strong underline-offset-4"
                >
                  contact page
                </Link>
                . We aim to respond to every query about our policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
