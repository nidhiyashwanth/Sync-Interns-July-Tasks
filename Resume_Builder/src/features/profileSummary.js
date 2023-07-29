import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ProSummary:[]
  
}

export const profileSummary = createSlice({
  name: "ProfileSummary",
  initialState,
  reducers: {
  
    setProSummary: (state, {payload} ) => {
      state.ProSummary.push(payload);
    },
    
  
  },
});

 
 
export const { setProSummary } = profileSummary.actions;
export default profileSummary.reducer;
