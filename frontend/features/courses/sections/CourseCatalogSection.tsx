import type { Course } from "@/server/courses/course-service";
import { CourseCard } from "@/features/landing/components/CourseCard";

export function CourseCatalogSection({ courses }: { courses: Course[] }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-2 max-[680px]:grid-cols-1 max-[680px]:gap-[17px]">
        {courses.map((course) => <CourseCard course={course} key={course.code} />)}
      </div>
      <p className="mt-[25px] rounded-[14px] border-2 border-dashed border-[#14284b] bg-[#cfe8ff] px-4 py-[14px] font-sans text-[13px] leading-[1.65] font-bold text-[#344664]">Hạng giấy phép và điều kiện đào tạo cần được xác nhận khi tư vấn theo quy định hiện hành. Thời lượng, số giờ DAT, học phí và hồ sơ sẽ được cung cấp theo khóa cụ thể.</p>
    </>
  );
}
