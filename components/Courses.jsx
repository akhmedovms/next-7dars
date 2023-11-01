import Link from "next/link";

function Courses({ courses }) {
  return (
    <div>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="card">
            <h2>{course.title}</h2>
            <h4>{course.level}</h4>
            <p>{course.description}</p>
            <Link href={course.link}> Go to Course</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
