import React from 'react';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../../Database';

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const selectedAssignment = assignments.find(
    (assignment) => assignment._id === aid && assignment.course === cid
  );

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label"><strong>Assignment</strong></label>
        <input id="wd-name" className="form-control" value={selectedAssignment?.title || "Assignment Title"} readOnly />
      </div>
      <div className="mb-3">
        <div
          id="wd-description"
          className="form-control"
          style={{ height: "300px", overflow: "auto" }}
          contentEditable
          suppressContentEditableWarning={true}
        >
          <p>The assignment is <span style={{color : "red"}}>available online </span></p>
          <p>Submit a link to the landing page of your Web application running on Netlify.</p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <p>The Kanbas application should include a link to navigate back to the landing page.</p>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-points" className="col-sm-7 col-form-label text-end">Points</label>
        <div className="col-sm-5 ms-auto float-end">
          <input id="wd-points" className="form-control" type="number" value={100} />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-group" className="col-sm-7 col-form-label text-end">Assignment Group</label>
        <div className="col-sm-5 ms-auto float-end">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">Assignments</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-display-grade-as" className="col-sm-7 col-form-label text-end">Display Grade as</label>
        <div className="col-sm-5 ms-auto float-end">
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-submission-type" className="col-sm-7 col-form-label text-end">Submission Type</label>
        <div className="col-sm-5 ms-auto float-end">
          <div className="card">
            <div className="card-body">
              <select id="wd-submission-type" className="form-select mb-3">
                <option value="Online">Online</option>
              </select>

              <p>Online Entry Options</p>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-website-url" />
                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-7 col-form-label text-end">Assign</label>
        <div className="col-sm-5 ms-auto float-end">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                <div className="input-group">
                  <input id="wd-assign-to" className="form-control" value="Everyone" />
                  <span className="input-group-text"><FaTimes /></span>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="wd-due-date"
                    className="form-control"
                    value={selectedAssignment?.dueDate || "Due date not available"}
                    readOnly
                  />
                  <span className="input-group-text"><FaCalendarAlt /></span>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                  <div className="input-group">
                    <input
                      type="text"
                      id="wd-available-from"
                      className="form-control"
                      value={selectedAssignment?.availableFrom || "Available from not available"}
                      readOnly
                    />
                    <span className="input-group-text"><FaCalendarAlt /></span>
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                  <div className="input-group">
                    <input
                      type="text"
                      id="wd-available-until"
                      className="form-control"
                      value={" "}
                      readOnly
                    />
                    <span className="input-group-text"><FaCalendarAlt /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end">
        <Link className="btn btn-secondary me-2" to={`/Kanbas/Courses/${cid}/Assignments`}>Cancel</Link>
        <Link className="btn btn-danger" to={`/Kanbas/Courses/${cid}/Assignments`}>Save</Link>
      </div>
    </div>
  );
}
