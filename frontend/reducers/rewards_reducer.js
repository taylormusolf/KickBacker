import {REMOVE_REWARD, RECEIVE_REWARD, RECEIVE_REWARDS} from '../actions/reward_actions';


const rewardsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_REWARDS:
      return action.rewards;
    case RECEIVE_REWARD:
      newState[action.reward.id] = action.reward;
      return newState;
    case REMOVE_REWARD:
      delete newState[action.rewardId]
      return newState;
    default:
      return state;
  }
};

export default rewardsReducer;