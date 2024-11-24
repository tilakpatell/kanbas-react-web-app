import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const setEnrollments = async () => {
  const response = await axios.get(ENROLLMENTS_API);
  return response.data;
};

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(ENROLLMENTS_API, {
    user: userId,
    course: courseId
  });
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return response.data;
};

export const findUserEnrollments = async (userId: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/users/${userId}/enrollments`);
  return response.data;
};
