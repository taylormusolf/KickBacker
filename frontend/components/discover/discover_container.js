import { connect } from 'react-redux';
import {closeModal } from '../../actions/modal_actions';
import Discover from './discover'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Discover));