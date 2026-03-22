"use client";

import ProgramCard from "@/components/ProgramCard";
import { courses } from "@/constants/program";

export default function CourseCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, i) => (
        <ProgramCard key={course.title} program={course} index={i} />
      ))}
    </div>
  );
}