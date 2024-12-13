import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

const API = axios.create({ withCredentials: true });

export const updateAssignment = async (assignment: any) => {
  const response = await API.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await API.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
