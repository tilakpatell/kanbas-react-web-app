import React from 'react';
import { FaPlus, FaSearch, FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { FaRegHandPaper } from 'react-icons/fa';

export default function Assignments() {
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
          <div>
            <span className="me-2">40% of Total</span>
            <button className="btn btn-outline-secondary btn-sm">
              <FaPlus />
            </button>
          </div>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-light py-4">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 text-muted" size={25} />
              <FaRegHandPaper className="text-muted me-3" size={25} />
              <div className="flex-grow-1">
                <div className="mb-1">
                  <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none">
                    <strong>A1</strong>
                  </a>
                </div>
                <div>
                  <span className="text-danger">Multiple Modules</span> | <span className="text-secondary fw-bold">Not available until </span><span className="text-secondary">May 6 at 12:00am</span>
                </div>
                <div className="text-muted">
                  Due May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-3" size={25}/>
                <FaEllipsisV className="text-muted" />
              </div>
            </div>
          </li>
          <li className="list-group-item bg-light py-4">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 text-muted" size={25} />
              <FaRegHandPaper className="text-muted me-3" size={25} />
              <div className="flex-grow-1">
                <div className="mb-1">
                  <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none">
                    <strong>A2</strong>
                  </a>
                </div>
                <div>
                  <span className="text-danger">Multiple Modules</span> | <span className="text-secondary fw-bold">Not available until </span><span className="text-secondary">May 13 at 12:00am</span>
                </div>
                <div className="text-muted">
                  Due May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3" size={25}/>
              <FaEllipsisV className="text-muted" />
              </div>
            </div>
          </li>
          <li className="list-group-item bg-light py-4">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 text-muted" size={25} />
              <FaRegHandPaper className="text-muted me-3" size={25} />
              <div className="flex-grow-1">
                <div className="mb-1">
                  <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none">
                    <strong>A3</strong>
                  </a>
                </div>
                <div>
                  <span className="text-danger">Multiple Modules</span> | <span className="text-secondary fw-bold">Not available until </span><span className="text-secondary">May 20 at 12:00am</span>
                </div>
                <div className="text-muted">
                  Due May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3" size={25}/>
              <FaEllipsisV className="text-muted" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
