import type { Course } from "@/server/courses/course-service";
import { TuitionPreview } from "./components/TuitionPreview";
import { RegistrationForm } from "@/features/registration/RegistrationForm";
import { SiteFooter } from "./components/SiteFooter";
import { LogoIntroOverlay } from "@/shared/components/LogoIntroOverlay";
import { ScrollReveal } from "@/shared/components/ScrollReveal";
import { LandingHeroSection } from "./sections/LandingHeroSection";
import { FeaturedCoursesSection } from "./sections/FeaturedCoursesSection";

export function LandingPage({ courses }: { courses: Course[] }) {
  return (
    <>
      <LogoIntroOverlay />
      <main>
        <LandingHeroSection />
        <FeaturedCoursesSection courses={courses} />
        <ScrollReveal>
          <TuitionPreview />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <RegistrationForm />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <SiteFooter />
        </ScrollReveal>
      </main>
    </>
  );
}
