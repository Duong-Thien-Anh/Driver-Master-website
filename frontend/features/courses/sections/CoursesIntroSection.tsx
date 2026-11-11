import { trainingLocation } from "@/features/courses/data/course-catalog";

export function CoursesIntroSection() {
  return (
    <header className="mb-[34px] max-w-[790px] max-[680px]:mb-[25px]">
      <span className="inline-block font-sans text-xs font-extrabold tracking-[.12em] text-[#1d5fe0]">KHÓA HỌC</span>
      <h1 className="my-[10px] mb-3 font-['Baloo_2',var(--font-display),sans-serif] text-[clamp(42px,6vw,68px)] leading-[.98] font-extrabold tracking-[-.045em] max-[680px]:text-[clamp(34px,10vw,55px)]">Một lộ trình cho mỗi tay lái.</h1>
      <p className="m-0 max-w-[650px] font-sans text-base leading-[1.7] font-semibold text-[#4f6285] max-[680px]:text-sm">Đào tạo lái xe ô tô, mô tô hạng A1, A, B và C1 tại {trainingLocation}. Chọn hạng xe và chương trình phù hợp với nhu cầu của bạn.</p>
    </header>
  );
}
