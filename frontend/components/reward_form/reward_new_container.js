import { connect } from 'react-redux';

import { createReward } from '../../actions/reward_actions';
import RewardForm from './reward_form';

const mSTP = (state) => ({
  reward: {
    title: '',
    description: '',
    project_id: '',
    cost: ''
  },
  project
});

const mDTP = dispatch => ({
  action: project => dispatch(createProject(project)),
  resetProjectErrors: () => dispatch(resetProjectErrors()),
  fetchCategories: () => dispatch(fetchCategories())
});


export default connect(mSTP, mDTP)(ProjectForm);