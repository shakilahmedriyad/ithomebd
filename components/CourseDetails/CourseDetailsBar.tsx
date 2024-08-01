"use client";

import { useState } from "react";
import CourseOverview from "./CourseOverview";
import CourseCurriculum from "./CourseCurriculum";
import CourseInstructor from "./CourseInstructor";
import CourseReviews from "./CourseReviews";

export default function CourseDetailsBar() {
  const [selectedBar, setSelectedBar] = useState("overview");
  return (
    <section className="my-10">
      <div className="flex my-5 font-medium text-sm uppercase items-center  bg-gray-100 justify-between">
        <div
          onClick={() => setSelectedBar("overview")}
          className="border-r-2 text-center w-full cursor-pointer  py-4"
        >
          <h3>Overview</h3>
        </div>
        <div
          onClick={() => setSelectedBar("curriculum")}
          className="border-r-2 cursor-pointer w-full text-center py-4"
        >
          <h3>Curriculum</h3>
        </div>
        <div
          onClick={() => setSelectedBar("instructor")}
          className="border-r-2 w-full cursor-pointer text-center py-4"
        >
          <h3>Instructor</h3>
        </div>
        <div
          onClick={() => setSelectedBar("reviews")}
          className=" w-full text-center py-4 cursor-pointer"
        >
          <h3>Reviews</h3>
        </div>
      </div>
      {selectedBar === "overview" && <CourseOverview />}
      {selectedBar === "curriculum" && <CourseCurriculum />}
      {selectedBar === "instructor" && <CourseInstructor />}
      {selectedBar === "reviews" && <CourseReviews />}
    </section>
  );
}
