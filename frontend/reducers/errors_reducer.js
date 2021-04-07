import { combineReducers } from "redux";
import projectErrorsReducer from "./project_errors.reducer";
import sessionErrorsReducer from "./session_errors_reducer";


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  project: projectErrorsReducer
});

export default errorsReducer;