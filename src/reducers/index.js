import { combineReducers } from "redux";
import tastingReducer from "./tastingReducer";

export default combineReducers({
    tasting: tastingReducer
});