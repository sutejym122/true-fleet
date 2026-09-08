import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Ecosystem } from "@/components/home/Ecosystem";
import { MemberBenefits } from "@/components/home/MemberBenefits";
import { HowItWorks } from "@/components/home/HowItWorks";
import { BuiltForFleets } from "@/components/home/BuiltForFleets";
import { PartnerEcosystem } from "@/components/home/PartnerEcosystem";
import { Technology } from "@/components/home/Technology";
import { ClosingCta } from "@/components/home/ClosingCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Ecosystem />
      <MemberBenefits />
      <HowItWorks />
      <BuiltForFleets />
      <PartnerEcosystem />
      <Technology />
      <ClosingCta />
    </>
  );
}
