import { combineReducers } from "redux";
import user from "./user";
import users from "./users";
import reflection from "./reflection";
import reflections from "./reflections";

export default appReducer = combineReducers({
  users,
  user,
  reflections,
  reflection
})