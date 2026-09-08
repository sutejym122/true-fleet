import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneFrame } from "@/components/product/PhoneFrame";
import { FuelScreen, TyresScreen, VehicleProfileScreen } from "@/components/product/AppScreens";

const capabilities = [
  { title: "Vehicle profiles", body: "Registration, model, axle configuration and fitment, entered once." },
  { title: "Digital documents", body: "Insurance, fitness, permit and PUC held where the driver can reach them." },
  { title: "Service reminders", body: "Renewals and services flagged before they become a penalty." },
  { title: "Transaction history", body: "Every purchase grouped by vehicle and by category." },
  { title: "Order tracking", body: "Delivery and fitment status for the parts you have ordered." },
  { title: "Payment history", body: "Receipts and statements, ready for your accountant." },
  { title: "Partner benefits", body: "Member offers shown against the services you already use." },
  { title: "Fleet overview", body: "The whole fleet on one screen instead of in one person's head." },
];

export function BuiltForFleets() {
  return (
    <Section bordered>
      <SectionHeading
        kicker="Built for commercial vehicles"
        title="Not a consumer marketplace with trucks added to it."
        body="A four wheeler app cannot tell a drive axle from a trailer axle, and it has no reason to care when your permit expires. TrueFleet is built the other way round, starting from the vehicle and the business that runs it."
      />

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex justify-center gap-6 rounded-3xl bg-paper px-6 py-12 sm:gap-8 sm:px-10 lg:justify-start">
              <PhoneFrame
                label="TrueFleet fuel payment screen"
                className="max-w-[15.5rem] sm:max-w-[16.5rem]"
              >
                <FuelScreen />
              </PhoneFrame>
              <PhoneFrame
                label="TrueFleet tyre ordering screen"
                className="hidden max-w-[15.5rem] sm:block sm:max-w-[16.5rem]"
              >
                <TyresScreen />
              </PhoneFrame>
              <PhoneFrame
                label="TrueFleet vehicle profile screen"
                className="hidden max-w-[16.5rem] xl:block"
              >
                <VehicleProfileScreen />
              </PhoneFrame>
            </div>
            <p className="mt-4 text-xs text-faint">
              Interface previews. Screens are in development and content shown is illustrative.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-0">
              {capabilities.map((capability) => (
                <li
                  key={capability.title}
                  className="border-t border-line pt-4 lg:py-4 lg:first:pt-0"
                >
                  <h3 className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                    {capability.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{capability.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
