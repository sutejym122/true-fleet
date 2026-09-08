import { Truck } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { IconKey } from "@/data/services";

const destinations: Array<{ name: string; icon: IconKey }> = [
  { name: "Fuel partners", icon: "fuel" },
  { name: "Tyre brands", icon: "tyre" },
  { name: "Insurers", icon: "insurance" },
  { name: "Parts suppliers", icon: "parts" },
  { name: "Assistance networks", icon: "assistance" },
  { name: "Lenders", icon: "finance" },
];

/**
 * The journey a request takes: the vehicle raises a need, TrueFleet routes and
 * records it, and a specialist partner fulfils it. Reads left to right on a
 * desktop and top to bottom on a phone.
 */
export function ServiceJourney() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-3">
        <div className="rounded-2xl border border-line bg-canvas p-6">
          <Truck className="size-6 text-navy" strokeWidth={1.5} aria-hidden="true" />
          <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
            Your vehicle
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            A tyre wears out, a permit expires, a truck stops on the highway.
          </p>
        </div>
      </div>

      <div className="flex justify-center lg:col-span-1">
        <span aria-hidden="true" className="h-8 w-px bg-line-strong lg:h-px lg:w-full" />
      </div>

      <div className="lg:col-span-4">
        <div className="rounded-2xl bg-navy-deep p-6 text-white">
          <Logo invert showWordmark={false} />
          <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.02em]">
            TrueFleet
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/68">
            One place to raise the request, choose the option, pay for it and keep the record
            against the right vehicle.
          </p>
          <ul className="mt-5 space-y-1.5 border-t border-white/15 pt-4 text-sm text-white/68">
            <li>Vehicle and fitment already known</li>
            <li>Member benefits applied at checkout</li>
            <li>Payment and receipt in one history</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center lg:col-span-1">
        <span aria-hidden="true" className="h-8 w-px bg-line-strong lg:h-px lg:w-full" />
      </div>

      <div className="lg:col-span-3">
        <div className="rounded-2xl border border-line bg-canvas p-6">
          <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
            Partner services
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            The work is done by specialists who already do it well.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-4">
            {destinations.map((destination) => (
              <li key={destination.name} className="flex items-center gap-2">
                <ServiceIcon name={destination.icon} className="size-4 shrink-0 text-navy" />
                <span className="text-xs leading-tight text-graphite">{destination.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
