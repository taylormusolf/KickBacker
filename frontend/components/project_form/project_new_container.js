import { connect } from 'react-redux';

import { createProject, resetProjectErrors } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mSTP = (state) => ({
  errors: state.errors.project,
  creatorId: state.session.id,
  formType: 'Create Project',
  project: {
    title: '',
    description: '',
    campaign: '',
    updates: '',
    faq: '',
    location: '',
    start_date: '',
    end_date: '',
    funding_goal: '' 
  }
});

const mDTP = dispatch => ({
  action: project => dispatch(createProject(project)),
  resetProjectErrors: () => dispatch(resetProjectErrors()),
});


export default connect(mSTP, mDTP)(ProjectForm);