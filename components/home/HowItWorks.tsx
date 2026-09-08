import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Join TrueFleet",
    body: "Register your transport business and become a member of the Transport Owners Club.",
  },
  {
    title: "Add your vehicles",
    body: "Enter each vehicle once. Registration, model, fitment and documents stay on the account.",
  },
  {
    title: "Reach the services you need",
    body: "Fuel, tyres, insurance, parts, assistance and finance, filtered to the vehicle you picked.",
  },
  {
    title: "Buy, book and pay",
    body: "Orders and payments run through the app, handled by a licensed payment gateway.",
  },
  {
    title: "Keep the record",
    body: "Every transaction and service returns to the vehicle, ready for the next renewal.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="dark" bordered>
      <SectionHeading
        kicker="How it works"
        title="Five steps, then the platform does the remembering."
        invert
      />

      <ol className="relative mt-14 grid gap-10 lg:mt-20 lg:grid-cols-5 lg:gap-8">
        {/* The rail that ties the sequence together. */}
        <span
          aria-hidden="true"
          className="absolute top-1.5 left-[3px] hidden h-[calc(100%-1.5rem)] w-px bg-white/15 sm:block lg:top-1.5 lg:left-0 lg:h-px lg:w-full"
        />

        {steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.title}
            delay={index * 70}
            className="relative sm:pl-10 lg:pt-10 lg:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-1.5 left-0 hidden size-[7px] rounded-full bg-signal sm:block lg:top-[-2px]"
            />
            <p className="font-display text-sm font-semibold text-white/50">
              Step {index + 1}
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.02em] text-white">
              {step.title}
            </h3>
            <p className="mt-2.5 max-w-xs text-[0.9375rem] leading-relaxed text-white/65">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
