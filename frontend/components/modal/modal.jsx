import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ProfileContainer from '../profile/profile_container';
import SearchContainer from '../search/search_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'profile':
      component = <ProfileContainer />;
      break;
    case 'search':
      component = <SearchContainer />;
      break;  
    default:
      return null;
  }
  if(modal === 'profile'){
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  } else if (modal === 'search'){
    return (
      <div className="modal-background-search" onClick={closeModal}>
        <div className="modal-child-search" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );

  }
  
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
