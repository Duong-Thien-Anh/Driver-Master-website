import { TuitionIntroSection } from "./sections/TuitionIntroSection";
import { TuitionOverviewSection } from "./sections/TuitionOverviewSection";
import { TuitionDetailsSection } from "./sections/TuitionDetailsSection";
import { TuitionContactSection } from "./sections/TuitionContactSection";

export function TuitionPage() {
  return (
    <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-13.5 pb-18 text-[#14284b] max-[680px]:w-[calc(100%-32px)] max-[680px]:py-10 max-[680px]:pb-13.5">
      <TuitionIntroSection />
      <TuitionOverviewSection />
      <TuitionDetailsSection />
      <TuitionContactSection />
    </div>
  );
}
