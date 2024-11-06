import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enroll, unenroll } from "./Courses/Enrollments/reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const displayedCourses =
    showAllCourses || currentUser.role === "FACULTY"
      ? courses
      : courses.filter((course) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
      {currentUser.role === "FACULTY" && (
        <>
          <h1>Dashboard</h1>
          <hr />
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      {currentUser.role === "STUDENT" && (
        <div className="d-flex justify-content-between align-items-center">
          <h1>Dashboard</h1>
          <button
            className="btn btn-primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Show Enrolled" : "Show All Courses"}
          </button>
        </div>
      )}

      <hr />
      <h2>Published Courses ({displayedCourses.length})</h2>
      <hr />

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => (
          <div key={course._id} className="col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div className="position-relative">
                <img src="/images/reactjs.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p
                    className="card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
                  </p>

                  {currentUser.role === "FACULTY" ? (
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
                      {isEnrolled(course._id) ? (
                        <div>
                          <Link
                            to={`/Kanbas/Courses/${course._id}/Home`}
                            className="btn btn-primary me-2"
                          >
                            Go
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              dispatch(
                                unenroll({
                                  user: currentUser._id,
                                  course: course._id,
                                } as any)
                              )
                            }
                          >
                            Unenroll
                          </button>
                        </div>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={() =>
                            dispatch(
                              enroll({
                                user: currentUser._id,
                                course: course._id,
                              } as any)
                            )
                          }
                        >
                          Enroll
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
