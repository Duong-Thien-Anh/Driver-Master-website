import Link from "next/link";
import type { Course } from "@/server/courses/course-service";

const accentStyles: Record<Course["accent"], string> = {
  blue: "before:bg-[#cfe8ff]",
  cyan: "before:bg-[#bdebd0]",
  violet: "before:bg-[#e3d7ff]",
};

const iconStyles: Record<Course["accent"], string> = {
  blue: "bg-[#cfe8ff]",
  cyan: "bg-[#bdebd0]",
  violet: "bg-[#e3d7ff]",
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className={`relative flex min-h-[350px] flex-col overflow-hidden rounded-[23px] border-[2.5px] border-[#14284b] bg-white p-[23px] text-[#14284b] shadow-[6px_7px_0_#14284b] before:absolute before:-top-[58px] before:-right-12 before:z-0 before:size-[145px] before:rounded-full before:border-[2.5px] before:border-[#14284b] before:content-[''] ${accentStyles[course.accent]}`}>
      <div className="relative z-[1] flex items-center justify-between"><span className="rounded-full border-2 border-[#14284b] bg-[#fff8ec] px-[9px] py-[5px] font-sans text-xs font-extrabold">{course.category}</span></div>
      <div className={`relative z-[1] my-[22px] mb-[14px] grid size-[51px] place-items-center rounded-2xl border-[2.5px] border-[#14284b] shadow-[3px_4px_0_#14284b] font-['Baloo_2',var(--font-display),sans-serif] text-[22px] font-extrabold ${iconStyles[course.accent]}`} aria-hidden="true">{course.code}</div>
      <h3 className="relative z-[1] mb-[7px] font-['Baloo_2',var(--font-display),sans-serif] text-[23px] leading-[1.1] font-extrabold">{course.title}</h3>
      <p className="relative z-[1] mb-[14px] max-w-[32em] font-sans text-sm leading-[1.6] font-semibold text-[#4f6285]">{course.description}</p>
      <ul className="relative z-[1] mb-[18px] grid list-none gap-2 border-t-2 border-dashed border-[#cad5e5] pt-3 pl-0">{course.features.map((feature) => <li className="flex items-start gap-2 font-sans text-xs leading-[1.45] font-bold text-[#344664]" key={feature}><span className="grid size-[17px] shrink-0 place-items-center rounded-full border-[1.5px] border-[#14284b] bg-[#5ed3a8] text-[10px]" aria-hidden="true">✓</span>{feature}</li>)}</ul>
      <div className="relative z-[1] mt-auto"><Link className="flex min-h-[42px] items-center justify-between gap-[10px] rounded-xl border-2 border-[#14284b] bg-[#ffc93c] px-[13px] font-sans text-[13px] font-extrabold text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b]" href="/hoc-phi#tu-van" aria-label={`Tư vấn khóa ${course.title}`}>Tư vấn khóa học <span aria-hidden="true">↗</span></Link></div>
    </article>
  );
}
