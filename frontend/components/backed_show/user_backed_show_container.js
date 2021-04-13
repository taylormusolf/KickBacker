import { connect } from 'react-redux';
import { removeBacking, fetchBackings, fetchBacking} from '../../actions/backing_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeBacking: (backingId) => dispatch(removeBacking(backingId)),
    fetchBackings: () => dispatch(fetchBackings()),
    fetchBacking: (backingId) => dispatch(fetchBacking(backingId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBackedShow);