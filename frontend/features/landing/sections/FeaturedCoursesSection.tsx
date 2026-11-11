import type { Course } from "@/server/courses/course-service";
import { CourseCard } from "../components/CourseCard";
import { ScrollReveal } from "@/shared/components/ScrollReveal";

export function FeaturedCoursesSection({ courses }: { courses: Course[] }) {
  return (
    <ScrollReveal className="bg-[#fff8ec]">
      <section className="mx-auto w-[min(1180px,calc(100%-40px))] py-[66px] text-[#14284b] max-[620px]:w-[calc(100%-32px)] max-[620px]:py-[50px]" id="khoa-hoc" aria-labelledby="courses-heading">
        <div className="mb-[31px] flex items-end justify-between gap-6 max-[620px]:mb-6 max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-[17px]">
          <div>
            <span className="inline-block font-[800] text-[12px] tracking-[.12em] text-[#1d5fe0]">KHÓA HỌC DÀNH CHO BẠN</span>
            <h2 className="mt-2 font-display text-[clamp(30px,4vw,44px)] leading-[1.08] font-[800] tracking-[-.035em] max-[620px]:text-[34px]" id="courses-heading">Chọn hạng giấy phép của bạn.</h2>
          </div>
          <a className="inline-flex items-center gap-2 whitespace-nowrap rounded-[13px] border-2 border-[#14284b] bg-white px-[14px] py-[10px] font-[800] text-[13px] text-[#14284b] shadow-[3px_4px_0_#14284b] transition-colors hover:bg-[#ffc93c]" href="/khoa-hoc">Tất cả khóa học <span aria-hidden="true">↗</span></a>
        </div>
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-2 max-[620px]:grid-cols-1 max-[620px]:gap-[18px]">
          {courses.map((course, index) => <ScrollReveal delay={index * 100} key={course.code}>
              <CourseCard course={course} />
            </ScrollReveal>)}
        </div>
      </section>
    </ScrollReveal>
  );
}
