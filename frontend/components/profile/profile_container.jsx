import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchProject} from '../../actions/project_actions'
import Profile from './profile'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    fetchProject: (projectId) => dispatch(fetchProject(projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
