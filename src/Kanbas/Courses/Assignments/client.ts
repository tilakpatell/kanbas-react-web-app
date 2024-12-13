import axios from "axios";
const API = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  try {
    const response = await API.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching assignments:", error);
    throw error;
  }
};

export const createAssignment = async (courseId: string, assignment: any) => {
  try {
    const response = await API.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
  } catch (error) {
    console.error("Error creating assignment:", error);
    throw error;
  }
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  try {
    const response = await API.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
    return response.data;
  } catch (error) {
    console.error("Error updating assignment:", error);
    throw error;
  }
};

export const deleteAssignment = async (assignmentId: string) => {
  try {
    const response = await API.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting assignment:", error);
    throw error;
  }
};
