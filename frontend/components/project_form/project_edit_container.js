import { connect } from 'react-redux'
import { updateProject, fetchProject, resetProjectErrors } from '../../actions/project_actions';
import ProjectForm from './project_form';
import React from 'react';

class EditProjectForm extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }
  render() {
    const { action, formType, post } = this.props;
    if (!project) return null;
    return (
      <ProjectForm
        action={action}
        formType={formType}
        project={project} />
    );
  }
}





const mSTP = (state, ownProps) => {
  return {
    errors: state.errors.project,
    creatorId: state.session.id,
    project: state.projects[ownProps.match.params.projectId],
    type: 'Update Project'
  };
};

const mDTP = dispatch => ({
  action: project => dispatch(updateProject(project)),
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  resetProjectErrors: () => dispatch(resetProjectErrors()),
});


export default connect(mSTP, mDTP)(EditProjectForm);