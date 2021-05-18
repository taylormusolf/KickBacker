import { connect } from 'react-redux';
import React from 'react';
import {closeModal } from '../../actions/modal_actions';
import Search from './search'
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));