import { NextResponse } from "next/server";
import { getCourses } from "@/server/courses/course-service";

export function GET() {
  return NextResponse.json({ courses: getCourses() });
}
