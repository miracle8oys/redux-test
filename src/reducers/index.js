import status from "./status";
import list from "./list";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    status,
    list
});

export default allReducers;