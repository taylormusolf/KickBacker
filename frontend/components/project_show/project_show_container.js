import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject, deleteProject, updateProject } from '../../actions/project_actions';
import {createBacking} from '../../actions/backing_actions'

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.match.params.projectId]
  return{
    project: project,
    session: state.session.id,
    panes: [
      {title: 'Campaign'}, 
      {title: 'FAQ'}, 
      {title: 'Updates'}
    ],
    backing: {
      amount_pledged: '',
      backer_id: state.session.id,
      project_id: '',
      reward_id: ''
    }
  }
  
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  updateProject: project => dispatch(updateProject(project)),
  createBacking: backing => dispatch(createBacking(backing))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);