import {combineReducers} from "redux";
import projectsReducer from "./projects_reducer";
import usersReducer from './users_reducer';
import rewardsReducer from './rewards_reducer'
import backingsReducer from './backings_reducer'
import categoriesReducer from './categories_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  rewards: rewardsReducer,
  backings: backingsReducer,
  categories: categoriesReducer
});


export default entitiesReducer;