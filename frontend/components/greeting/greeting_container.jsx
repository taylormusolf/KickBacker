import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { openModal} from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps,mapDispatchToProps)(Greeting);