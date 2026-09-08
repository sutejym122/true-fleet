import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ecosystem } from "@/data/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const feature = ecosystem.filter((entry) => entry.span === "feature");
const wide = ecosystem.filter((entry) => entry.span === "wide");
const standard = ecosystem.filter((entry) => entry.span === "standard");

export function Ecosystem() {
  return (
    <Section id="ecosystem" bordered>
      <SectionHeading
        kicker="The ecosystem"
        title="Everything a commercial vehicle needs, in one account."
        body="Nine service areas, brought on one at a time with partners who already serve this industry well. Each one writes back to the vehicle it belongs to."
      />

      <div className="mt-14 space-y-4">
        {/* Two lead services, given the most room. */}
        <div className="grid gap-4 lg:grid-cols-12">
          {feature.map((entry, index) => (
            <Reveal
              key={entry.slug}
              delay={index * 90}
              className={index === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <Link
                href={`/services#${entry.slug}`}
                className={`group flex h-full flex-col justify-between rounded-3xl p-8 transition-colors duration-300 sm:p-10 ${
                  index === 0
                    ? "bg-navy-deep text-white hover:bg-navy"
                    : "border border-line bg-canvas hover:border-line-strong"
                }`}
              >
                <div>
                  <ServiceIcon
                    name={entry.icon}
                    className={`size-7 ${index === 0 ? "text-white/80" : "text-navy"}`}
                  />
                  <h3
                    className={`mt-8 text-display-3 ${index === 0 ? "text-white" : "text-ink"}`}
                  >
                    {entry.name}
                  </h3>
                  <p
                    className={`mt-3 max-w-md text-[0.9375rem] leading-relaxed ${
                      index === 0 ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {entry.line}
                  </p>
                </div>
                <span
                  className={`mt-10 inline-flex items-center gap-1.5 text-sm font-medium ${
                    index === 0 ? "text-white" : "text-ink"
                  }`}
                >
                  How it works
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Supporting services. */}
        <div className="grid gap-4 sm:grid-cols-2">
          {wide.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 90}>
              <Link
                href={`/services#${entry.slug}`}
                className="flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-colors duration-300 hover:border-line-strong hover:bg-paper-deep"
              >
                <ServiceIcon name={entry.icon} className="size-6 text-navy" />
                <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                  {entry.name}
                </h3>
                <p className="mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
                  {entry.line}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* The remaining services as rows, not cards. Hierarchy by structure. */}
        <Reveal>
          <ul className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {standard.map((entry) => (
              <li key={entry.slug} className="border-b border-line lg:border-b-0">
                <Link
                  href={`/services#${entry.slug}`}
                  className="flex h-full flex-col gap-2 py-6 pr-6 transition-colors duration-200 hover:bg-paper lg:px-5"
                >
                  <ServiceIcon name={entry.icon} className="size-5 text-navy" />
                  <span className="font-display text-base font-semibold tracking-[-0.015em] text-ink">
                    {entry.name}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{entry.line}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
