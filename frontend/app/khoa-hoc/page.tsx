import { getCourses } from "@/server/courses/course-service";
import { CoursesPage } from "@/features/courses/CoursesPage";
import { MarketingLayout } from "@/shared/components/MarketingLayout";

export default function CoursesRoute() {
  return <MarketingLayout><CoursesPage courses={getCourses()} /></MarketingLayout>;
}
