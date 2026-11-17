import { trainingLocation } from "@/features/courses/data/course-catalog";

export function TuitionIntroSection() {
  return (
    <header className="mb-8.5 max-w-197.5 max-[680px]:mb-6.25">
      <span className="inline-block font-sans text-xs font-extrabold tracking-[.12em] text-[#1d5fe0]">HỌC PHÍ & LỊCH HỌC</span>
      <h1 className="my-2.5 mb-3 font-['Baloo_2',var(--font-display),sans-serif] text-[clamp(42px,6vw,68px)] leading-[.98] font-extrabold tracking-[-.045em] max-[680px]:text-[clamp(34px,10vw,55px)]">Chủ động kế hoạch học lái.</h1>
      <p className="m-0 max-w-162.5 font-sans text-base leading-[1.7] font-semibold text-[#4f6285] max-[680px]:text-sm">Học phí các khóa A1, A, B số tự động, B số sàn và C1 tại {trainingLocation}. Liên hệ để được tư vấn lịch khai giảng phù hợp.</p>
    </header>
  );
}
