import { RECEIVE_PROJECT, RECEIVE_SESSION_ERRORS, RESET_SESSION_ERRORS } from "../actions/project_actions";

const projectErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RESET_SESSION_ERRORS:
      return [];
    default: 
      return state;
  }
};


export default projectErrorsReducer