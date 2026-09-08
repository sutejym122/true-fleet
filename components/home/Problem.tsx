import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const scattered = [
  "Fuel pumps",
  "Tyre dealers",
  "Insurance agents",
  "Local mechanics",
  "Financiers",
  "FASTag portals",
  "Roadside help",
  "Legal paperwork",
  "Spare parts shops",
];

export function Problem() {
  return (
    <Section tone="paper" bordered>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              kicker="The problem"
              title="Running vehicles means running after people."
              body="A transport business deals with a different provider for every need, on a different phone number, with a different way of paying and no record that connects any of it back to the vehicle."
            />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-graphite">How it works today</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {scattered.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-dashed border-line-strong bg-canvas px-3 py-1.5 text-[0.8125rem] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
                  Nine relationships to manage, and nothing that adds up at the end of the month.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-graphite">How it works on TrueFleet</h3>
                <div className="mt-4 rounded-2xl bg-navy-deep p-6 text-white">
                  <p className="font-display text-xl font-semibold tracking-[-0.025em]">
                    One account for the fleet
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-white/72">
                    <li>One place to buy and book</li>
                    <li>One payment history</li>
                    <li>One record for each vehicle</li>
                    <li>One set of reminders</li>
                  </ul>
                </div>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
                  The providers stay specialists. What changes is how you reach them and what you
                  are left holding afterwards.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
