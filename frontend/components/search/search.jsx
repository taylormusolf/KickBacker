import React from "react";
import {Link} from 'react-router-dom';

const Search = ({closeModal}) =>{
  return(
    <div className='search-container'>
      <form action="">
        <input className='search-input' type="text" placeholder='Search for projects or categories'/>
      </form>
      <div className='search-close' onClick={() => closeModal()}><i className="fas fa-times"></i></div>
    </div>
    
  )
}


export default Search;