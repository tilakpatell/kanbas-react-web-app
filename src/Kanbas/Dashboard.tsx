import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import * as accountClient from "./Account/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Dashboard</h1>
        {currentUser?.role === "STUDENT" && (
          <button
            onClick={() => setEnrolling(!enrolling)}
            className="btn btn-primary"
          >
            {enrolling ? "My Courses" : "All Courses"}
          </button>
        )}
      </div>

      {currentUser?.role === "FACULTY" && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>New Course</h5>
            <input
              value={course.name}
              className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
              placeholder="Course Name"
            />
            <textarea
              value={course.description}
              className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, description: e.target.value })}
              placeholder="Course Description"
            />
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-warning me-2"
                onClick={updateCourse}
              >
                Update
              </button>
              <button
                className="btn btn-primary"
                onClick={addNewCourse}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
          <div key={course._id} className="col" style={{ width: 300 }}>
            <div className="card rounded-3 overflow-hidden">
              <img
                src="/images/reactjs.png"
                className="card-img-top"
                alt={course.name}
                style={{ height: 160, objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text" style={{ maxHeight: 100, overflow: 'hidden' }}>
                  {course.description}
                </p>

                {currentUser?.role === "FACULTY" ? (
                  <div>
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="btn btn-primary"
                    >
                      Go
                    </Link>
                    <button
                      onClick={() => deleteCourse(course._id)}
                      className="btn btn-danger float-end"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setCourse(course)}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <div>
                    {enrolling ? (
                      <button
                        onClick={() => updateEnrollment(course._id, !course.enrolled)}
                        className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    ) : (
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="btn btn-primary"
                      >
                        Go
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
