import { RoadmapIntroSection } from "./sections/RoadmapIntroSection";
import { RoadmapStepsSection } from "./sections/RoadmapStepsSection";

export function RoadmapPage() {
  return (
    <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-[54px] pb-[72px] text-[#14284b] max-[680px]:w-[calc(100%-32px)] max-[680px]:py-10 max-[680px]:pb-[54px]">
      <RoadmapIntroSection />
      <RoadmapStepsSection />
    </div>
  );
}
