import { connect } from 'react-redux';
import { removeBacking, fetchBackings, fetchBacking} from '../../actions/backing_actions';
import { fetchProjects, deleteProject, updateProject } from '../../actions/project_actions';
import UserBackedShow from './user_backed_show'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    removeBacking: (backingId) => dispatch(removeBacking(backingId)),
    fetchBackings: () => dispatch(fetchBackings()),
    fetchBacking: (backingId) => dispatch(fetchBacking(backingId)),
    deleteProject: projectId => dispatch(deleteProject(projectId)),
    updateProject: project => dispatch(updateProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBackedShow);