import { cn } from "@/lib/cn";

/**
 * The TrueFleet wordmark, drawn in code so it stays crisp at any size and
 * costs no network request. The mark is three bars of decreasing width: a
 * loaded vehicle seen from the side, and the movement lines behind it.
 */
export function Logo({
  className,
  invert = false,
  showWordmark = true,
}: {
  className?: string;
  invert?: boolean;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        role="img"
        aria-label="TrueFleet"
        focusable="false"
      >
        <rect
          width="32"
          height="32"
          rx="8"
          fill={invert ? "#ffffff" : "var(--color-navy)"}
        />
        <g fill={invert ? "var(--color-navy)" : "#ffffff"}>
          <rect x="7" y="9" width="18" height="3.2" rx="1.6" />
          <rect x="7" y="14.4" width="13" height="3.2" rx="1.6" />
          <rect x="7" y="19.8" width="8" height="3.2" rx="1.6" />
        </g>
      </svg>
      {showWordmark ? (
        <span
          className={cn(
            "font-display text-[1.15rem] font-bold tracking-[-0.03em]",
            invert ? "text-white" : "text-ink",
          )}
        >
          TrueFleet
        </span>
      ) : null}
    </span>
  );
}
