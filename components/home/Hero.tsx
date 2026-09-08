import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneFrame } from "@/components/product/PhoneFrame";
import { FleetDashboardScreen } from "@/components/product/AppScreens";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      {/* A single quiet panel behind the device, rather than decorative shapes. */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 hidden h-full w-[42%] bg-paper lg:block"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:grid-cols-12 lg:gap-10 lg:pt-44 lg:pb-32">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="flex items-center gap-2.5 text-sm font-medium text-signal-ink">
                <span aria-hidden="true" className="h-px w-6 bg-signal/60" />
                Transport Owners Club
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-display-1 text-ink">
                One platform for everything your fleet needs.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lead text-muted">
                Fuel, tyres, insurance, roadside assistance, FASTag, finance and vehicle records.
                TrueFleet brings the services a transport business runs on into one place, built
                around commercial vehicles rather than adapted from a consumer app.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/contact" size="lg">
                  Join TrueFleet
                </ButtonLink>
                <ButtonLink href="/services" size="lg" variant="secondary">
                  See what is included
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-10 max-w-md border-t border-line pt-6 text-sm leading-relaxed text-faint">
                Built for individual truck owners, small fleets and transport companies. Services
                are supplied by partner brands, licensed insurers and authorised dealers.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={200} className="flex justify-center lg:justify-end">
              <div className="relative">
                <PhoneFrame label="TrueFleet fleet overview screen">
                  <FleetDashboardScreen />
                </PhoneFrame>

                {/* One overlapping card for depth. Nothing floats or bounces. */}
                <div className="absolute -bottom-6 -left-2 w-56 rounded-2xl border border-line bg-canvas p-4 shadow-[0_24px_60px_-24px_rgba(12,17,22,0.4)] sm:-left-10">
                  <p className="text-xs text-muted">Reminder</p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Insurance renewal in 12 days
                  </p>
                  <p className="mt-1.5 text-xs text-muted">KA 51 AB 4021</p>
                </div>
              </div>
            </Reveal>

            <p className="mt-12 text-center text-xs text-faint lg:text-right">
              Interface preview. Content shown is illustrative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
