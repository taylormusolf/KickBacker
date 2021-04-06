import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, resetSessionErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">Log In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoUser: (user) => dispatch(login(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);