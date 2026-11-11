import { AboutIntroSection } from "./sections/AboutIntroSection";
import { AboutInformationSection } from "./sections/AboutInformationSection";

export function AboutPage() {
  return (
    <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-[54px] pb-[72px] text-[#14284b] max-[680px]:w-[calc(100%-32px)] max-[680px]:py-10 max-[680px]:pb-[54px]">
      <AboutIntroSection />
      <AboutInformationSection />
    </div>
  );
}
