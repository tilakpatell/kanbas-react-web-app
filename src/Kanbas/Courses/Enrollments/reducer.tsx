import { createSlice } from "@reduxjs/toolkit";
import { enrollments as enrollmentsData } from "../../Database";

const initialState = {
  enrollments: enrollmentsData,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state: any, action: any) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.user,
        course: action.payload.course
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenroll: (state: any, action: any) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => !(
          enrollment.user === action.payload.user && 
          enrollment.course === action.payload.course
        )
      );
    }
  }
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
