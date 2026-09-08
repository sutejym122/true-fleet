import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** Background surface. `dark` is the navy panel used once or twice per page. */
  tone?: "canvas" | "paper" | "dark";
  /** Vertical rhythm. `tight` for stacked sections that belong together. */
  space?: "tight" | "normal" | "loose";
  bordered?: boolean;
  className?: string;
};

const tones = {
  canvas: "bg-canvas text-ink",
  paper: "bg-paper text-ink",
  dark: "bg-navy-deep text-white",
};

const spacing = {
  tight: "py-14 sm:py-16",
  normal: "py-20 sm:py-24 lg:py-28",
  loose: "py-24 sm:py-32 lg:py-40",
};

export function Section({
  children,
  id,
  tone = "canvas",
  space = "normal",
  bordered = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        spacing[space],
        bordered && "border-t border-line",
        id && "scroll-mt-20",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

/**
 * Section opener. The kicker is sentence case on purpose: tracked out capitals
 * above every heading is the fastest way to make a page look templated.
 */
export function SectionHeading({
  kicker,
  title,
  body,
  align = "left",
  invert = false,
  className,
}: {
  kicker?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {kicker ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-2.5 text-sm font-medium",
            align === "center" && "justify-center",
            invert ? "text-white/70" : "text-signal-ink",
          )}
        >
          <span
            aria-hidden="true"
            className={cn("h-px w-6", invert ? "bg-white/35" : "bg-signal/60")}
          />
          {kicker}
        </p>
      ) : null}
      <h2 className={cn("text-display-2", invert ? "text-white" : "text-ink")}>{title}</h2>
      {body ? (
        <p
          className={cn(
            "mt-5 text-lead",
            align === "center" && "mx-auto",
            invert ? "text-white/72" : "text-muted",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
