import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Profile from './profile'

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
