import { connect } from 'react-redux';
import React from 'react';
import { openModal} from '../../actions/modal_actions';
import SearchNav from './search_nav';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps,mapDispatchToProps)(SearchNav);