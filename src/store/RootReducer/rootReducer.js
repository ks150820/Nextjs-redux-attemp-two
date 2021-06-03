import { combineReducers } from "redux";
import nextReducer from "../reducer";

const rootReducer = combineReducers({
  allReducer: nextReducer,
});

export default rootReducer;
