import { combineReducers } from "redux";
import userReducer from "./user";
import reflectionReducer from "./reflection";

export default appReducer = combineReducers({
  users: userReducer,
  reflections: reflectionReducer
})