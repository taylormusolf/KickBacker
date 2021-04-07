import { connect } from 'react-redux';

import { createProject } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.project,
  };
};

const mDTP = dispatch => ({
  createProject: project => dispatch(createProject(project))
});


export default connect(mSTP, mDTP)(ProjectForm);