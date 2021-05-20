import React from 'react';
import { connect } from 'react-redux';
import { openModal} from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

function DiscoverNav ({openModal }){
  const discover = () =>(
    <div className="header-group">
      {/* <button className="header-name" onClick={() => openModal('discover')}>Discover</button> */}
      <Link to='/discover' className="header-name">Discover</Link>
    </div>
  )
  return discover();
};


const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps,mapDispatchToProps)(DiscoverNav);