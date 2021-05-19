import { connect } from 'react-redux';
import RewardPage from './reward_page';
import {fetchProject} from '../../actions/project_actions'
import {fetchRewards, fetchReward, createReward, updateReward, deleteReward} from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    rewards: state.entities.rewards,
    projectId: ownProps.match.params.projectId,
    session: state.session.id,
    project: state.entities.projects[ownProps.match.params.projectId]
  }
  
};

const mapDispatchToProps = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchRewards: () => dispatch(fetchRewards()),
  fetchReward: rewardId => dispatch(fetchReward(rewardId)),
  createReward: reward => dispatch(createReward(reward)),
  deleteReward: rewardId => dispatch(deleteReward(rewardId)),
  updateReward: reward => dispatch(updateReward(reward))
});

export default connect(mapStateToProps, mapDispatchToProps)(RewardPage);