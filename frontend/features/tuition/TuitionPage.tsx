import { TuitionIntroSection } from "./sections/TuitionIntroSection";
import { TuitionOverviewSection } from "./sections/TuitionOverviewSection";
import { TuitionDetailsSection } from "./sections/TuitionDetailsSection";
import { TuitionContactSection } from "./sections/TuitionContactSection";

export function TuitionPage() {
  return (
    <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-[54px] pb-[72px] text-[#14284b] max-[680px]:w-[calc(100%-32px)] max-[680px]:py-10 max-[680px]:pb-[54px]">
      <TuitionIntroSection />
      <TuitionOverviewSection />
      <TuitionDetailsSection />
      <TuitionContactSection />
    </div>
  );
}
