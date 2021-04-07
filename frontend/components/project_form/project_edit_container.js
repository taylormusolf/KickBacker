import { connect } from 'react-redux'
import { updateProject, fetchProject, resetProjectErrors } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mSTP = (state) => {
  return {
    errors: state.errors.project,
    creatorId: state.session.id,
    type: 'edit'
  };
};

const mDTP = dispatch => ({
  updateProject: project => dispatch(updateProject(project)),
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  resetProjectErrors: () => dispatch(resetProjectErrors()),
});


export default connect(mSTP, mDTP)(ProjectForm);