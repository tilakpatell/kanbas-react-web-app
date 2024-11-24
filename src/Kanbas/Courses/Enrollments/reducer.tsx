// src/Kanbas/Enrollments/reducer.tsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [] as any[],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    
    addEnrollment: (state, { payload }) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: payload.user,
        course: payload.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },

    removeEnrollment: (state, { payload }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => !(
          enrollment.user === payload.user && 
          enrollment.course === payload.course
        )
      );
    }
  },
});

export const { setEnrollments, addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
