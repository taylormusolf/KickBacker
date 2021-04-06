import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RESET_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    case RESET_ERRORS:
      return [];
    default: 
      return state;
  }
};


export default sessionErrorsReducer