import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { ScrollReveal } from "@/shared/components/ScrollReveal";

export function LandingHeroSection() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(125deg,#fff8ec_0%,#fff8ec_52%,#eff7ff_100%)]">
      <SiteHeader />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
    </div>
  );
}
