import { connect } from 'react-redux';

import { createProject, resetProjectErrors } from '../../actions/project_actions';
import { fetchCategories} from '../../actions/category_actions'
import ProjectForm from './project_form';

const mSTP = (state) => ({
  errors: state.errors.project,
  formType: 'Create Project',
  project: {
    title: '',
    category_id: '',
    description: '',
    campaign: '',
    updates: '',
    faq: '',
    location: '',
    start_date: '',
    end_date: '',
    funding_goal: '',
    creator_id: ''
  },
  creatorId: state.session.id
});

const mDTP = dispatch => ({
  action: project => dispatch(createProject(project)),
  resetProjectErrors: () => dispatch(resetProjectErrors()),
  fetchCategories: () => dispatch(fetchCategories())
});


export default connect(mSTP, mDTP)(ProjectForm);