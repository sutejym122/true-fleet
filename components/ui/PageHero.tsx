import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The opening block on every page other than the home page. Kept consistent
 * so interior pages feel like one publication.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line bg-paper">
      <div className="container-page pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <Reveal>
          <p className="flex items-center gap-2.5 text-sm font-medium text-signal-ink">
            <span aria-hidden="true" className="h-px w-6 bg-signal/60" />
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-display-1 text-ink">{title}</h1>
          <p className="mt-6 max-w-2xl text-lead text-muted">{intro}</p>
          {children ? <div className="mt-9">{children}</div> : null}
        </Reveal>
      </div>
    </header>
  );
}
