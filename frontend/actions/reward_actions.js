import * as APIUtil from '../util/reward_api_util';

export const RECEIVE_REWARDS = 'RECEIVE_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const REMOVE_REWARD = 'REMOVE_REWARD';
export const RECEIVE_REWARD_ERRORS = 'RECEIVE_REWARD_ERRORS';
export const RESET_REWARD_ERRORS = 'RESET_REWARD_ERRORS';

export const receiveRewards = (rewards) => ({
  type: RECEIVE_REWARDS,
  rewards,
});

export const receiveReward = (reward) => ({
  type: RECEIVE_REWARD,
  reward
});

export const removeReward = (rewardId) => ({
  type: REMOVE_REWARD,
  rewardId
});

export const receiveRewardErrors = (errors) => ({
  type: RECEIVE_REWARD_ERRORS,
  errors
});

export const resetRewardErrors = () => ({
  type: RESET_REWARD_ERRORS
});

export const fetchRewards = () => dispatch => (
  APIUtil.fetchRewards()
    .then(rewards => (dispatch(receiveRewards(rewards))))
);

export const fetchReward = rewardId => dispatch => (
  APIUtil.fetchReward(rewardId)
    .then(reward => (dispatch(receiveReward(reward))))
);

export const createReward = reward => dispatch => (
  APIUtil.createReward(reward)
  .then(reward => (dispatch(receiveReward(reward))))
);

export const updateReward = (reward) => dispatch => {
    return APIUtil.updateReward(reward.id)
      .then(reward => (dispatch(receiveReward(reward))))
};

export const deleteReward = rewardId => dispatch => (
  APIUtil.deleteReward(rewardId).then(() => (
    dispatch(removeReward(rewardId))
  ))
);