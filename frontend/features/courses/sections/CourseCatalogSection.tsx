import type { Course } from "@/server/courses/course-service";
import { CourseCard } from "@/features/landing/components/CourseCard";

export function CourseCatalogSection({ courses }: { courses: Course[] }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-5.5 max-[900px]:grid-cols-2 max-[680px]:grid-cols-1 max-[680px]:gap-4.25">
        {courses.map((course) => <CourseCard course={course} key={course.code} />)}
      </div>
      <p className="mt-6.25 rounded-[14px] border-2 border-dashed border-[#14284b] bg-[#cfe8ff] px-4 py-3.5 font-sans text-[13px] leading-[1.65] font-bold text-[#344664]">Hạng giấy phép và điều kiện đào tạo cần được xác nhận khi tư vấn theo quy định hiện hành. Học phí được hiển thị theo từng khóa; thời lượng, yêu cầu DAT và hồ sơ được xác nhận khi tư vấn.</p>
    </>
  );
}
