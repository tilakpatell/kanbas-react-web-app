import React from 'react';
import { FaPlus, FaSearch, FaCheckCircle, FaEllipsisV, FaBookOpen } from "react-icons/fa"; 
import { BsGripVertical } from "react-icons/bs";
import { useParams } from 'react-router';
import { assignments } from '../../Database'; 

export default function Assignments() {
  const { cid } = useParams(); 
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex mb-3">
        <div className="flex-grow-1 me-2">
          <div className="input-group w-50">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              className="form-control"
              placeholder="Search..."
            />
          </div>
        </div>
        <button className="btn btn-secondary me-2">+ Group</button>
        <button className="btn btn-danger">+ Assignment</button>
      </div>

      <div className="card bg-light">
        <div className="card-header d-flex justify-content-between align-items-center py-4">
          <h5 className="mb-0">
            <BsGripVertical className="me-2 text-muted" size={25} />
            ASSIGNMENTS
          </h5>
          <div className="position-relative">
            <span className="badge rounded-pill text-dark px-3 py-2" style={{ border: '2px solid gray', borderRadius: '25px' }}>
              40% Finished
            </span>
            <button className="btn btn-outline-secondary btn-sm ms-3">
              <FaPlus />
            </button>
          </div>
        </div>

        <ul className="list-group list-group-flush">
          {courseAssignments.length > 0 ? (
            courseAssignments.map((assignment) => (
              <li key={assignment._id} className="list-group-item bg-light py-4">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 text-muted" size={25} />
                  <FaBookOpen className="text-muted me-3" size={25} />
                  <div className="flex-grow-1">
                    <div className="mb-1">
                      <a
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="text-decoration-none"
                      >
                        <strong>{assignment.title}</strong>
                      </a>
                    </div>
                    <div>
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-secondary fw-bold"> | Not available until </span>
                      <span className="text-secondary">{assignment.availableFrom}</span>
                    </div>
                    <div className="text-muted">
                      Due {assignment.dueDate} | 100 pts
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaCheckCircle className="text-success me-3" size={25} />
                    <FaEllipsisV className="text-muted" />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="list-group-item bg-light py-4">No assignments available for this course.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
