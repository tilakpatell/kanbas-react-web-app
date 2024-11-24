import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 2,
    name: "Module1",
    description: "Fun class",
    course: "CY 1029",
  });

  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  return (
    <div id="wd-working-with-objects" style={{ padding: "20px" }}>
      <h4 style={{ marginBottom: "15px" }}>Modifying Properties</h4>

      {/* Assignment Section */}
      <div style={{ marginBottom: "25px" }}>
        <a
          id="wd-update-assignment-title"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
          style={{ marginBottom: "10px" }}
        >
          Update Title
        </a>
        <input
          className="form-control w-75"
          id="wd-assignment-title"
          defaultValue={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          style={{ marginBottom: "10px" }}
        />

        <a
          id="wd-update-assignment-score"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
          style={{ marginBottom: "10px" }}
        >
          Update Score
        </a>
        <input
          type="number"
          className="form-control w-75"
          id="wd-assignment-score"
          defaultValue={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: Number(e.target.value) })
          }
          style={{ marginBottom: "10px" }}
        />

        <a
          id="wd-update-assignment-completed"
          className="btn btn-primary float-end"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="checkbox"
              id="wd-assignment-completed"
              checked={assignment.completed}
              onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
              }
              style={{ marginRight: "10px" }}
            />
            Completed
          </label>
        </div>
      </div>

      {/* Module Section */}
      <div style={{ marginBottom: "25px" }}>
        <a
          id="wd-update-module-name"
          className="btn btn-primary float-end"
          href={`${MODULE_API_URL}/name/${module.name}`}
          style={{ marginBottom: "10px" }}
        >
          Update Module Name
        </a>
        <input
          className="form-control w-75"
          id="wd-module-name"
          defaultValue={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
          style={{ marginBottom: "10px" }}
        />

        <a
          id="wd-update-module-description"
          className="btn btn-primary float-end"
          href={`${MODULE_API_URL}/description/${module.description}`}
        >
          Update Module Description
        </a>
        <input
          className="form-control w-75"
          id="wd-module-description"
          defaultValue={module.description}
          onChange={(e) =>
            setModule({ ...module, description: e.target.value })
          }
          style={{ marginBottom: "10px" }}
        />
      </div>

      <hr />

      <h3 style={{ marginBottom: "15px" }}>Working With Objects</h3>

      {/* Retrieve Section */}
      <h4 style={{ marginBottom: "15px" }}>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}`}
        style={{ marginRight: "10px", marginBottom: "10px" }}
      >
        Get Assignment
      </a>
      <a
        id="wd-retrieve-modules"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
        style={{ marginRight: "10px", marginBottom: "10px" }}
      >
        Get Module
      </a>

      <hr />

      <h4 style={{ marginBottom: "15px" }}>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/title`}
        style={{ marginRight: "10px", marginBottom: "10px" }}
      >
        Get Assignment Title
      </a>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${MODULE_API_URL}/name`}
        style={{ marginRight: "10px", marginBottom: "10px" }}
      >
        Get Module Name
      </a>
    </div>
  );
}
