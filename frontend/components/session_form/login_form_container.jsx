import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, resetSessionErrors, receiveSessionErrors} from '../../actions/session_actions';
import SessionForm from './session_form';



const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to="/signup">Sign Up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoUser: (user) => dispatch(login(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);