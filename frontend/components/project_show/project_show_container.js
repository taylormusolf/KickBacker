import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject, deleteProject, updateProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.match.params.projectId]
  return{
    project: project,
    session: state.session.id,
    panes: [
      {title: 'Campaign'}, 
      {title: 'FAQ'}, 
      {title: 'Updates'}
    ]
  }
  
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProject: () => dispatch(fetchProject(ownProps.match.params.projectId)),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  updateProject: project => dispatch(updateProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);