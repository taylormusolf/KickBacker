import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects, deleteProject } from '../../actions/project_actions';



const mapStateToProps = state => ({
  projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);