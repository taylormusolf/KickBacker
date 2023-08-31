import React from "react";
import DiscoverNav from './discover/discover_nav'
import GreetingContainer from './greeting/greeting_container';
import SearchNavContainer from './search/search_nav_container';
import {Link} from 'react-router-dom';

const Navbar = ()=> {

    return(
    <header className='nav-bar-container'>
      <nav className='nav-bar'>
        <div className= 'nav-box'>
          <h2 className='nav-item'><DiscoverNav/></h2>
          <Link to="/projects/new" className="nav-item"><h2>Start a Project</h2></Link>
        </div>
        <Link to="/" className="nav-header"><h1>KICKBACKER</h1></Link>
        <div className= 'nav-box'>
          <h2 className="nav-item"><SearchNavContainer/></h2>
          <h2 className="nav-item"><GreetingContainer /></h2>
        </div>
      </nav>
    </header>
    )
}


export default Navbar;