"use client";
import Loading from "@/app/Loading";
import CourseSearch from "@/components/CourseSearch";
import Courses from "@/components/Courses";
import { useState, useEffect } from "react";

function HomePage() {
  const [courses, setCourses] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const req = await fetch("/api/courses");
      const data = await req.json();
      setCourses(data);
      setIsPending(false);
    };
    getData();
  }, []);

  if (isPending) {
    return <Loading />;
  }
  return (
    <div>
      <CourseSearch
        getSearchCourses={(searchCourses) => setCourses(searchCourses)}
      />
      <Courses courses={courses} />
    </div>
  );
}

export default HomePage;
