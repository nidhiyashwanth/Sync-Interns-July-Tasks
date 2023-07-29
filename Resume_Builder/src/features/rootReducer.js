import { combineReducers } from "@reduxjs/toolkit";
import ProfileDetailReducer from "./profileDetail"
import EmploymentHistoryReducer from "./employmentHistory"
import profileSummaryReducer from "./profileSummary";
const rootReducer = combineReducers({
    ProfileDetail:ProfileDetailReducer,
    Employment:EmploymentHistoryReducer,
    profileSummary:profileSummaryReducer
});
 
export default rootReducer;