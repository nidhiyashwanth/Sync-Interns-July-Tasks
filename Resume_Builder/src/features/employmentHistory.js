import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
]
 

export const employmentHistory = createSlice({
  name: "EmploymentHistory",
  initialState,
  reducers: {
   
    setProDetail: (state, {payload} ) => 
    {
      console.log(payload);
      // state.proDetail.push(payload)
    },
  },
});

 

export const { setProDetail } = employmentHistory.actions;
export default employmentHistory.reducer;
