export const fetchRewards = () => (
  $.ajax({
    method: 'GET',
    url: '/api/rewards/'
  })
);

export const fetchReward = rewardId => (
  $.ajax({
    method: 'GET',
    url: `/api/rewards/${rewardId}`
  })
);

export const createReward = reward => (
  $.ajax({
    method: 'POST',
    url: '/api/rewards/',
    data: {reward}
  })
);

export const updateReward = (reward) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/rewards/${reward.id}`,
    data: {reward}
  })
);

export const deleteReward = rewardId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/rewards/${rewardId}`
  })
);