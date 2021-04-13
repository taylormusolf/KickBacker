import {RECEIVE_CATEGORY, RECEIVE_CATEGORIES} from '../actions/category_actions';


const categoriesReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    case RECEIVE_CATEGORY:
      newState[action.category.id] = action.category;
      return newState;
    default:
      return state;
  }
};

export default categoriesReducer;