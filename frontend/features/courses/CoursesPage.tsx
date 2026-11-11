import type { Course } from "@/server/courses/course-service";
import { CoursesIntroSection } from "./sections/CoursesIntroSection";
import { CourseCatalogSection } from "./sections/CourseCatalogSection";
import { CourseSupportSection } from "./sections/CourseSupportSection";

export function CoursesPage({ courses }: { courses: Course[] }) {
  return (
    <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-[54px] pb-[72px] text-[#14284b] max-[680px]:w-[calc(100%-32px)] max-[680px]:py-10 max-[680px]:pb-[54px]">
      <CoursesIntroSection />
      <CourseCatalogSection courses={courses} />
      <CourseSupportSection />
    </div>
  );
}
