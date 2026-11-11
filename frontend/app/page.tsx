import { LandingPage } from "@/features/landing/LandingPage";
import { getCourses } from "@/server/courses/course-service";

export default function Home() {
  return <LandingPage courses={getCourses()} />;
}
