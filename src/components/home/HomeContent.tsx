import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyWeLead } from "@/components/home/WhyWeLead";
import { Features } from "@/components/home/Features";
import { HomeCatalog } from "@/components/home/HomeCatalog";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { BundleCTA } from "@/components/home/BundleCTA";
import { ContactHelp } from "@/components/home/ContactHelp";

/**
 * Home page composition. Each section is an independent dossier block; the
 * interactive catalog sits in the middle of the editorial flow.
 */
export function HomeContent() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <WhyWeLead />
      <Features />
      <HomeCatalog />
      <StatsSection />
      <Testimonials />
      <BundleCTA />
      <ContactHelp />
    </main>
  );
}

export default HomeContent;
