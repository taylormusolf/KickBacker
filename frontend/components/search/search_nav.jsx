import React from 'react';


const SearchNav = ({openModal }) => {
  const search = () =>(
    <div className="header-group">
      <button className="header-name" onClick={() => openModal('search')}>Search <i className="fa fa-search"></i></button>
    </div>
  )
  return search();
};


export default SearchNav;