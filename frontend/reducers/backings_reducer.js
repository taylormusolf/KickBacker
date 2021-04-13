import {REMOVE_BACKING, RECEIVE_BACKING, RECEIVE_BACKINGS} from '../actions/backing_actions'


const backingsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_BACKINGS:
      return action.backings;
    case RECEIVE_BACKING:
      newState[action.backing.id] = action.backing;
      return newState;
    case REMOVE_BACKING:
      delete newState[action.backingId]
      return newState;
    default:
      return state;
  }
};

export default backingsReducer;