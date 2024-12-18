import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment, setAssignments } from './reducer';
import * as client from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const assignmentList = useSelector((state: any) => 
    state.assignmentReducer?.assignments || []
  );
  
  const existingAssignment = aid && aid !== 'new' ? 
    assignmentList.find((a: any) => a._id === aid) : null;
  
  const [assignment, setAssignment] = useState<any>(existingAssignment || {
    title: '',
    description: '',
    points: 100,
    dueDate: '',
    availableFrom: '',
    availableUntil: '',
    course: cid,
  });

  useEffect(() => {
    const loadAssignments = async () => {
      if (cid) {
        try {
          const assignments = await client.findAssignmentsForCourse(cid);
          dispatch(setAssignments(assignments));
          if (aid && aid !== 'new') {
            const currentAssignment = assignments.find((a: any) => a._id === aid);
            if (currentAssignment) {
              setAssignment(currentAssignment);
            }
          }
        } catch (error) {
          console.error("Error loading assignments:", error);
        }
      }
    };
    loadAssignments();
  }, [cid, aid, dispatch]);

  const handleSave = async () => {
    try {
      if (!aid || aid === 'new') {
        const newAssignment = await client.createAssignment(cid as string, assignment);
        dispatch(addAssignment(newAssignment));
      } else {
        const updatedAssignment = await client.updateAssignment(aid, assignment);
        dispatch(updateAssignment(updatedAssignment));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  const canEdit = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  if (!canEdit) {
    return (
      <div className="alert alert-warning">
        You don't have permission to edit assignments.
      </div>
    );
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          <strong>Assignment Name</strong>
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title || ''}
          onChange={(e) => setAssignment({...assignment, title: e.target.value})}
          placeholder="Enter assignment name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          <strong>Description</strong>
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          style={{ height: "300px" }}
          value={assignment.description || ''}
          onChange={(e) => setAssignment({...assignment, description: e.target.value})}
          placeholder="Enter assignment description"
        />
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-points" className="col-sm-7 col-form-label text-end">Points</label>
        <div className="col-sm-5">
          <input
            id="wd-points"
            className="form-control"
            type="number"
            min="0"
            value={assignment.points || 100}
            onChange={(e) => setAssignment({...assignment, points: parseInt(e.target.value) || 0})}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-7 col-form-label text-end">Assign</label>
        <div className="col-sm-5">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                <div className="input-group">
                  <input id="wd-assign-to" className="form-control" value="Everyone" readOnly />
                  <span className="input-group-text"><FaTimes /></span>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label fw-bold">Due Date</label>
                <div className="input-group">
                  <input
                    type="datetime-local"
                    id="wd-due-date"
                    className="form-control"
                    value={assignment.dueDate || ''}
                    onChange={(e) => setAssignment({...assignment, dueDate: e.target.value})}
                  />
                  <span className="input-group-text"><FaCalendarAlt /></span>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                  <div className="input-group">
                    <input
                      type="datetime-local"
                      id="wd-available-from"
                      className="form-control"
                      value={assignment.availableFrom || ''}
                      onChange={(e) => setAssignment({...assignment, availableFrom: e.target.value})}
                    />
                    <span className="input-group-text"><FaCalendarAlt /></span>
                  </div>
                </div>

                <div className="col">
                  <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                  <div className="input-group">
                    <input
                      type="datetime-local"
                      id="wd-available-until"
                      className="form-control"
                      value={assignment.availableUntil || ''}
                      onChange={(e) => setAssignment({...assignment, availableUntil: e.target.value})}
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
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <button 
          className="btn btn-danger" 
          onClick={handleSave}
          disabled={!assignment.title}
        >
          Save
        </button>
      </div>
    </div>
  );
}
