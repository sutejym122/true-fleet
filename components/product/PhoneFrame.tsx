import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Device chrome for the interface previews. Everything inside is real markup,
 * not a screenshot, so it stays sharp on any display and adds no image weight.
 */
export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  /** Describes the screen for anyone using a screen reader. */
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label}. Interface preview with illustrative content.`}
      className={cn(
        "relative w-full max-w-[19rem] rounded-[2.5rem] bg-navy-deep p-[0.4rem] shadow-[0_40px_90px_-32px_rgba(11,27,43,0.55)]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[2.15rem] bg-paper">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3.5 pb-1 text-[0.6875rem] font-semibold text-ink">
          <span>10:24</span>
          <span className="flex items-center gap-1" aria-hidden="true">
            <span className="flex items-end gap-[2px]">
              <span className="h-1.5 w-[3px] rounded-[1px] bg-ink/70" />
              <span className="h-2 w-[3px] rounded-[1px] bg-ink/70" />
              <span className="h-2.5 w-[3px] rounded-[1px] bg-ink/70" />
            </span>
            <span className="ml-0.5 h-2.5 w-5 rounded-[3px] border border-ink/40 p-[1.5px]">
              <span className="block h-full w-2/3 rounded-[1px] bg-ink/70" />
            </span>
          </span>
        </div>
        <div className="min-h-[27rem]">{children}</div>
      </div>
    </div>
  );
}
