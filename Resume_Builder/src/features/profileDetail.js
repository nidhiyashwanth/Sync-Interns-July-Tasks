import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proDetail:[]
}

export const profileDetail = createSlice({
  name: "ProfileDetail",
  initialState,
  reducers: {
  
    setProDetail: (state, {payload} ) => {
      state.proDetail.push(payload);
    },
    
  
  },
});

 
 
export const { setProDetail } = profileDetail.actions;
export default profileDetail.reducer;
