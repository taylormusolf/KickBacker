import { connect } from 'react-redux'
import { updateProject, fetchProject, resetProjectErrors } from '../../actions/project_actions';
import ProjectForm from './project_form';
import React from 'react';

class EditProjectForm extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }
  render() {
    const { action, formType, project, errors, resetProjectErrors,fetchProject, creatorId} = this.props;
    if (!project) return null;
    let editProject = project;
    editProject.category_id = project.category.id
    return (
      <ProjectForm
        errors={errors}
        action={action}
        formType={formType}
        resetProjectErrors={resetProjectErrors}
        project={editProject}
        creatorId={creatorId}
        fetchProject={fetchProject}
        />
    );
  }
}





const mSTP = (state, ownProps) => {
  return {
    errors: state.errors.project,
    creatorId: state.session.id,
    project: state.entities.projects[ownProps.match.params.projectId],
    formType: 'Update Project'
  };
};

const mDTP = dispatch => ({
  action: (project, id) => dispatch(updateProject(project, id)),
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  resetProjectErrors: () => dispatch(resetProjectErrors()),
});


export default connect(mSTP, mDTP)(EditProjectForm);