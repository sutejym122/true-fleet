import { availabilityLabel, type Availability } from "@/data/services";
import { cn } from "@/lib/cn";

/**
 * States what stage a service is at without shouting about it. TrueFleet is
 * still being built and the site says so quietly rather than covering itself
 * in "coming soon" badges.
 */
export function AvailabilityNote({
  availability,
  invert = false,
  className,
}: {
  availability: Availability;
  invert?: boolean;
  className?: string;
}) {
  const isLive = availability === "live";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium",
        invert ? "text-white/60" : "text-muted",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          isLive ? "bg-signal" : invert ? "bg-white/35" : "bg-line-strong",
        )}
      />
      {availabilityLabel[availability]}
    </span>
  );
}
