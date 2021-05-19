import { connect } from 'react-redux';
import { createReward, resetRewardErrors } from '../../actions/reward_actions';
import RewardForm from './reward_form';

const mSTP = (state) => ({
  reward: {
    title: '',
    description: '',
    project_id: '',
    cost: ''
  }
});

const mDTP = dispatch => ({
  action: reward => dispatch(createReward(reward)),
  resetRewardErrors: () => dispatch(resetRewardErrors())
});


export default connect(mSTP, mDTP)(RewardForm);