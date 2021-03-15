import { combineReducers } from "redux";
import { getSchoolboys } from "./getSchoolboys";

const rootReducer = combineReducers({
    schoolchild:  getSchoolboys
})

export default rootReducer;