import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects, deleteProject } from '../../actions/project_actions';



const mapStateToProps = state => {
  let projects = Object.values(state.entities.projects)
  let array = [];
  let index = Math.floor(Math.random()*(projects.length))
  for (let i = 1; i <= Math.ceil(projects.length/3); i++) {
    array.push(i);
  };
  return{
      projects: projects,
      project: projects[index],
      array: array
    }
  
}

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);