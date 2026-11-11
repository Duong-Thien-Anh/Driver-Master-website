import Link from "next/link";
import { courseCatalog, formatTuition } from "@/features/courses/data/course-catalog";

const badgeStyles = { blue: "bg-[#cfe8ff]", cyan: "bg-[#5ed3a8]", violet: "bg-[#e3d7ff]" };

export function TuitionCourseList({ href }: { href: string }) {
  return (
    <div>
      {courseCatalog.map((course) => (
        <div className="flex items-start gap-3 border-t-[1.5px] border-dashed border-[#8296b4] py-4 max-[520px]:gap-2" key={course.code}>
          <span className={`grid min-h-10 w-14 shrink-0 place-items-center rounded-[13px] border-2 border-[#14284b] px-1 shadow-[2px_3px_0_#14284b] font-display text-xs font-extrabold ${badgeStyles[course.accent]}`}>{course.code}</span>
          <div className="grid min-w-0 flex-1 gap-1">
            <strong className="font-sans text-sm leading-snug font-extrabold">{course.title}</strong>
            <span className="font-sans text-[11px] leading-relaxed font-semibold text-[#4f6285]">{course.vehicle}</span>
            <span className="font-display text-lg font-bold text-[#14284b]">{formatTuition(course.tuition)}</span>
            <Link className="inline-flex min-h-11 w-fit items-center gap-1 font-sans text-xs font-extrabold text-[#1d5fe0]" href={href} aria-label={`Tư vấn ${course.title}`}>
              Tư vấn khóa học <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
