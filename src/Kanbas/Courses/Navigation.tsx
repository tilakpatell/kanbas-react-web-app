import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the course ID
  const { pathname } = useLocation(); // Get the current path

  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-8 rounded-0">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          id={`wd-course-${link.label.toLowerCase()}-link`}
          className={`list-group-item border border-0 
            ${pathname.includes(link.label) ? "active" : "text-danger"}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
