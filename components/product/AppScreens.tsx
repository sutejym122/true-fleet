import { ChevronRight, Fuel, CircleDot, ShieldCheck, Nfc } from "lucide-react";

/**
 * Interface previews for the TrueFleet mobile app.
 *
 * Every value shown in these screens is illustrative and exists to explain the
 * layout of the product. None of it is a claim about live transactions,
 * members or partner pricing. Each place these screens are used carries a
 * visible note saying so.
 */

const vehicles = [
  { plate: "KA 51 AB 4021", model: "Tipper, 6 wheel", due: "Insurance due in 12 days" },
  { plate: "MH 12 CD 7788", model: "Haulage, 10 wheel", due: "Service due in 1,400 km" },
  { plate: "TN 45 EF 1290", model: "Container, 12 wheel", due: "FASTag balance low" },
];

const quickActions = [
  { icon: Fuel, label: "Fuel" },
  { icon: CircleDot, label: "Tyres" },
  { icon: ShieldCheck, label: "Insurance" },
  { icon: Nfc, label: "FASTag" },
];

export function FleetDashboardScreen() {
  return (
    <div className="px-4 pb-6">
      <div className="flex items-center justify-between px-1 pt-3 pb-4">
        <div>
          <p className="text-[0.6875rem] text-muted">Fleet overview</p>
          <p className="font-display text-lg font-bold tracking-[-0.02em] text-ink">3 vehicles</p>
        </div>
        <span className="rounded-full bg-signal-soft px-2.5 py-1 text-[0.625rem] font-semibold text-signal-ink">
          Member
        </span>
      </div>

      <div className="rounded-2xl bg-navy-deep p-4 text-white">
        <p className="text-[0.6875rem] text-white/60">Spending this month</p>
        <p className="mt-1 font-display text-2xl font-bold tracking-[-0.03em]">&#8377;2,84,600</p>
        <div className="mt-4 flex gap-1" aria-hidden="true">
          <span className="h-1 flex-[5] rounded-full bg-white/85" />
          <span className="h-1 flex-[2] rounded-full bg-white/45" />
          <span className="h-1 flex-[2] rounded-full bg-signal" />
          <span className="h-1 flex-[1] rounded-full bg-white/25" />
        </div>
        <div className="mt-3 flex justify-between text-[0.625rem] text-white/55">
          <span>Fuel</span>
          <span>Tyres</span>
          <span>Toll</span>
          <span>Parts</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {quickActions.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 rounded-xl bg-white py-3 ring-1 ring-line"
          >
            <Icon className="size-4 text-navy" strokeWidth={1.6} aria-hidden="true" />
            <span className="text-[0.625rem] text-graphite">{label}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 mb-2 px-1 text-[0.6875rem] font-semibold text-ink">Your vehicles</p>
      <div className="space-y-2">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.plate}
            className="flex items-center justify-between rounded-xl bg-white px-3.5 py-3 ring-1 ring-line"
          >
            <div>
              <p className="text-[0.75rem] font-semibold text-ink">{vehicle.plate}</p>
              <p className="text-[0.625rem] text-muted">{vehicle.model}</p>
              <p className="mt-1 text-[0.625rem] text-signal-ink">{vehicle.due}</p>
            </div>
            <ChevronRight className="size-4 text-faint" strokeWidth={1.6} aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FuelScreen() {
  return (
    <div className="px-4 pb-6">
      <div className="px-1 pt-3 pb-4">
        <p className="text-[0.6875rem] text-muted">Fuel</p>
        <p className="font-display text-lg font-bold tracking-[-0.02em] text-ink">
          Pay at the pump
        </p>
      </div>

      <div className="rounded-2xl bg-white p-4 ring-1 ring-line">
        <p className="text-[0.625rem] text-muted">Vehicle</p>
        <p className="text-[0.8125rem] font-semibold text-ink">KA 51 AB 4021</p>
        <div className="my-3 h-px bg-line" />
        <p className="text-[0.625rem] text-muted">Outlet</p>
        <p className="text-[0.8125rem] font-semibold text-ink">Partner outlet, NH 48</p>
        <div className="my-3 h-px bg-line" />
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[0.625rem] text-muted">Quantity</p>
            <p className="text-[0.8125rem] font-semibold text-ink">120 litres</p>
          </div>
          <div className="text-right">
            <p className="text-[0.625rem] text-muted">Amount</p>
            <p className="font-display text-xl font-bold tracking-[-0.03em] text-ink">
              &#8377;11,940
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-signal-soft p-3.5">
        <p className="text-[0.6875rem] font-semibold text-signal-ink">Member benefit applied</p>
        <p className="mt-0.5 text-[0.625rem] leading-relaxed text-signal-ink/80">
          Partner offers are applied at checkout when a benefit is active on your membership.
        </p>
      </div>

      <div className="mt-4 rounded-full bg-navy py-3 text-center text-[0.75rem] font-semibold text-white">
        Pay &#8377;11,940
      </div>
      <p className="mt-2.5 text-center text-[0.5625rem] text-faint">
        Payments handled by a licensed payment gateway
      </p>
    </div>
  );
}

export function TyresScreen() {
  const options = [
    { size: "295/90 R20", pattern: "Rib, long haul", note: "Fits front axle" },
    { size: "10.00 R20", pattern: "Lug, mixed service", note: "Fits drive axle" },
    { size: "11 R22.5", pattern: "Rib, highway", note: "Fits trailer axle" },
  ];

  return (
    <div className="px-4 pb-6">
      <div className="px-1 pt-3 pb-4">
        <p className="text-[0.6875rem] text-muted">Tyres</p>
        <p className="font-display text-lg font-bold tracking-[-0.02em] text-ink">
          Matched to your fitment
        </p>
      </div>

      <div className="rounded-xl bg-white px-3.5 py-3 ring-1 ring-line">
        <p className="text-[0.625rem] text-muted">Showing tyres for</p>
        <p className="text-[0.75rem] font-semibold text-ink">MH 12 CD 7788, 10 wheel haulage</p>
      </div>

      <div className="mt-3 space-y-2">
        {options.map((option) => (
          <div key={option.size} className="rounded-xl bg-white p-3.5 ring-1 ring-line">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.8125rem] font-semibold text-ink">{option.size}</p>
                <p className="text-[0.625rem] text-muted">{option.pattern}</p>
                <p className="mt-1 text-[0.625rem] text-signal-ink">{option.note}</p>
              </div>
              <div className="shrink-0 rounded-full border border-line-strong px-3 py-1 text-[0.625rem] font-semibold text-ink">
                View
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-[0.5625rem] leading-relaxed text-faint">
        Fitment through authorised dealers. Pricing shown once partner catalogues are connected.
      </p>
    </div>
  );
}

export function VehicleProfileScreen() {
  const records = [
    { label: "Insurance", value: "Renewal in 12 days" },
    { label: "Fitness certificate", value: "Valid to March 2027" },
    { label: "Permit", value: "National permit" },
    { label: "Last tyre change", value: "Front axle, 14,200 km ago" },
    { label: "Last service", value: "Oil and filters" },
  ];

  return (
    <div className="px-4 pb-6">
      <div className="px-1 pt-3 pb-4">
        <p className="text-[0.6875rem] text-muted">Vehicle</p>
        <p className="font-display text-lg font-bold tracking-[-0.02em] text-ink">KA 51 AB 4021</p>
      </div>

      <div className="rounded-2xl bg-white p-4 ring-1 ring-line">
        <div className="flex justify-between text-[0.625rem] text-muted">
          <span>Tipper, 6 wheel</span>
          <span>Added March 2026</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-paper p-3">
            <p className="text-[0.5625rem] text-muted">Spend this quarter</p>
            <p className="font-display text-base font-bold tracking-[-0.02em] text-ink">
              &#8377;96,400
            </p>
          </div>
          <div className="rounded-xl bg-paper p-3">
            <p className="text-[0.5625rem] text-muted">Documents</p>
            <p className="font-display text-base font-bold tracking-[-0.02em] text-ink">6 stored</p>
          </div>
        </div>
      </div>

      <div className="mt-3 divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
        {records.map((record) => (
          <div key={record.label} className="flex items-center justify-between px-3.5 py-2.5">
            <span className="text-[0.6875rem] text-muted">{record.label}</span>
            <span className="text-[0.6875rem] font-medium text-ink">{record.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
