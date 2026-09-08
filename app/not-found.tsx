import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70dvh] flex-col justify-center py-32">
      <div className="max-w-xl">
        <p className="flex items-center gap-2.5 text-sm font-medium text-signal-ink">
          <span aria-hidden="true" className="h-px w-6 bg-signal/60" />
          404
        </p>
        <h1 className="mt-5 text-display-2 text-ink">This page has moved on.</h1>
        <p className="mt-5 text-lead text-muted">
          The link you followed does not lead anywhere on the TrueFleet site. Head back to the home
          page, or take a look at what the platform covers.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/services" size="lg" variant="secondary">
            See the services
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
