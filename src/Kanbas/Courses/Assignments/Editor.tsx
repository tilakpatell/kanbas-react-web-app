import React from 'react';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
        <input id="wd-name" className="form-control" value="A1" />
      </div>

      <div className="mb-3">
        <textarea id="wd-description" className="form-control" rows={8}>
The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
        <div className="col-sm-10">
          <input id="wd-points" className="form-control" type="number" value={100} />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
        <div className="col-sm-10">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
        <div className="col-sm-10">
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
        <label className="col-sm-2 col-form-label">Assign</label>
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                <div className="input-group">
                  <input id="wd-assign-to" className="form-control" value="Everyone" />
                  <span className="input-group-text"><FaTimes /></span>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label">Due</label>
                <div className="input-group">
                  <input type="text" id="wd-due-date" className="form-control" value="May 13, 2024, 11:59 PM" />
                  <span className="input-group-text"><FaCalendarAlt /></span>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="wd-available-from" className="form-label">Available from</label>
                  <div className="input-group">
                    <input type="text" id="wd-available-from" className="form-control" value="May 6, 2024, 12:00 AM" />
                    <span className="input-group-text"><FaCalendarAlt /></span>
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="wd-available-until" className="form-label">Until</label>
                  <div className="input-group">
                    <input type="text" id="wd-available-until" className="form-control" />
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
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
