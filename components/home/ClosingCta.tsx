import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ClosingCta() {
  return (
    <section className="border-t border-line bg-navy-deep">
      <div className="container-page py-24 sm:py-32 lg:py-40">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-2 text-white">
            Built for the people who keep India moving.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lead text-white/70">
            TrueFleet is being built with transport owners, for transport owners. If you run
            commercial vehicles, or you supply the people who do, we would like to hear from you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" variant="onDark">
              Join TrueFleet
            </ButtonLink>
            <ButtonLink href="/partners" size="lg" variant="outlineOnDark">
              Become a partner
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
