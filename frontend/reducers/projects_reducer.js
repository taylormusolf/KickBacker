import {REMOVE_PROJECT, RECEIVE_PROJECT, RECEIVE_PROJECTS} from '../actions/project_actions';


const projectsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    case REMOVE_PROJECT:
      delete newState[action.project.id]
      return newState;
    default:
      return state;
  }
};

export default projectsReducer;