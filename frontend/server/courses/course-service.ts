import { courseCatalog, type Course } from "@/features/courses/data/course-catalog";

export type { Course } from "@/features/courses/data/course-catalog";

export function getCourses(): Course[] {
  return courseCatalog;
}
