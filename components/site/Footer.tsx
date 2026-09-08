import Link from "next/link";
import { addressLines, company, displayLegalName } from "@/data/company";
import { legalNav, primaryNav } from "@/data/navigation";
import { Logo } from "@/components/site/Logo";

const socialLabels: Record<keyof typeof company.social, string> = {
  linkedin: "LinkedIn",
  youtube: "YouTube",
  x: "X",
};

export function Footer() {
  const year = new Date().getFullYear();
  const address = addressLines();
  const socials = Object.entries(company.social).filter(([, url]) => Boolean(url)) as Array<
    [keyof typeof company.social, string]
  >;

  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {company.descriptor}
            </p>
            <p className="mt-4 text-sm text-faint">
              A {company.clubName} initiative for commercial vehicle owners across India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            <div>
              <h2 className="text-sm font-semibold text-ink">Platform</h2>
              <ul className="mt-4 space-y-3">
                {primaryNav.map((link) => (
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

            <div>
              <h2 className="text-sm font-semibold text-ink">Legal</h2>
              <ul className="mt-4 space-y-3">
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

            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-sm font-semibold text-ink">Company</h2>
              <address className="mt-4 space-y-3 text-sm not-italic text-muted">
                <p className="text-ink">{displayLegalName()}</p>
                {address.length > 0 ? (
                  <p className="leading-relaxed">
                    {address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                ) : null}
                {company.email ? (
                  <p>
                    <a
                      href={`mailto:${company.email}`}
                      className="transition-colors hover:text-ink"
                    >
                      {company.email}
                    </a>
                  </p>
                ) : null}
                {company.phone ? (
                  <p>
                    <a
                      href={`tel:${company.phone.replace(/\s+/g, "")}`}
                      className="transition-colors hover:text-ink"
                    >
                      {company.phone}
                    </a>
                  </p>
                ) : null}
                {company.registration.cin ? <p>CIN: {company.registration.cin}</p> : null}
                {company.registration.gstin ? <p>GSTIN: {company.registration.gstin}</p> : null}
              </address>

              {socials.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {socials.map(([key, url]) => (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {socialLabels[key]}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-faint">
            &copy; {year} {displayLegalName()}. All rights reserved.
          </p>
          <p className="max-w-md text-xs leading-relaxed text-faint">
            TrueFleet is a technology platform. Products and services are supplied by partner
            brands, licensed insurers, regulated lenders and authorised dealers.
          </p>
        </div>
      </div>
    </footer>
  );
}
