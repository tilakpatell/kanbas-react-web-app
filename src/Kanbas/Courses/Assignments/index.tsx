import React, { useState, useEffect } from 'react';
import { FaPlus, FaSearch, FaCheckCircle, FaEllipsisV, FaBookOpen, FaTrash } from "react-icons/fa"; 
import { BsGripVertical } from "react-icons/bs";
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssignment, setAssignments } from './reducer';
import * as client from "./client";
import * as coursesClient from "../client";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDeleteDialog(true);
  };

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const handleConfirmDelete = async () => {
    if (assignmentToDelete) {
      await removeAssignment(assignmentToDelete._id);
      setShowDeleteDialog(false);
      setAssignmentToDelete(null);
    }
  };

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
        <Link to={`/Kanbas/Courses/${cid}/Assignments/new`} className="btn btn-danger">
          + Assignment
        </Link>
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
            <Link to={`/Kanbas/Courses/${cid}/Assignments/new`} className="btn btn-outline-secondary btn-sm ms-3">
              <FaPlus />
            </Link>
          </div>
        </div>

        <ul className="list-group list-group-flush">
          {courseAssignments.length > 0 ? (
            courseAssignments.map((assignment: any) => (
              <li key={assignment._id} className="list-group-item bg-light py-4">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 text-muted" size={25} />
                  <FaBookOpen className="text-muted me-3" size={25} />
                  <div className="flex-grow-1">
                    <div className="mb-1">
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="text-decoration-none"
                      >
                        <strong>{assignment.title}</strong>
                      </Link>
                    </div>
                    <div>
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-secondary fw-bold"> | Not available until </span>
                      <span className="text-secondary">{assignment.availableFrom}</span>
                    </div>
                    <div className="text-muted">
                      Due {assignment.dueDate} | {assignment.points} pts
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaCheckCircle className="text-success me-3" size={25} />
                    <button 
                      className="btn btn-link text-danger me-2"
                      onClick={() => handleDeleteClick(assignment)}
                    >
                      <FaTrash />
                    </button>
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
      {showDeleteDialog && (
        <div className="modal d-block" tabIndex={-1} role="dialog" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Assignment</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeleteDialog(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete "{assignmentToDelete?.title}"?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteDialog(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
