import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

const API = axios.create({ withCredentials: true });

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await API.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await API.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return response.data;
};

export const findAllAssignments = async () => {
  const response = await API.get(`${COURSES_API}/assignments`);
  return response.data;
};
