import React from "react";
import { Link } from 'react-router-dom';
class Discover extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    return(
      <div className='discover-container'>
        <div className='discover-box'>
          <div className='discover-heading'>
            <h1>Collections</h1>
            <div className='discover-close' onClick={() => this.props.closeModal()}><i className="fas fa-times"></i></div>
          </div>
          <ul>
            <li onClick={() => this.props.closeModal()}><Link to={`/projects/search/everything`}>Everything</Link></li>
          </ul>
          <div className='discover-heading'><h1>Sections</h1></div>
          <ul onClick={() => this.props.closeModal()}>
            <li><Link to={`/projects/category/1`}>Arts</Link></li>
            <li><Link to={`/projects/category/2`}>Comics & Illustration</Link></li>
            <li><Link to={`/projects/category/3`}>Design & Tech</Link></li>
            <li><Link to={`/projects/category/4`}>Film</Link></li>
            <li><Link to={`/projects/category/5`}>Food & Craft</Link></li>
            <li><Link to={`/projects/category/6`}>Games</Link></li>
            <li><Link to={`/projects/category/7`}>Music</Link></li>
            <li><Link to={`/projects/category/8`}>Publishing</Link></li>
          </ul>
          <div className='discover-heading'><h1>Categories</h1></div>
          <ul onClick={() => this.props.closeModal()}>
            <li><Link to={`/projects/search/arts`}>Arts</Link></li>
            <li><Link to={`/projects/search/comics`}>Comics</Link></li>
            <li><Link to={`/projects/search/craft`}>Crafts</Link></li>
            <li><Link to={`/projects/search/dance`}>Dance</Link></li>
            <li><Link to={`/projects/search/design`}>Design</Link></li>
            <li><Link to={`/projects/search/fashion`}>Fashion</Link></li>
            <li><Link to={`/projects/search/film`}>Film</Link></li>
            <li><Link to={`/projects/search/food`}>Food</Link></li>
            <li><Link to={`/projects/search/games`}>Games</Link></li>
            <li><Link to={`/projects/search/journalism`}>Journalism</Link></li>
            <li><Link to={`/projects/search/music`}>Music</Link></li>
            <li><Link to={`/projects/search/photography`}>Photography</Link></li>
            <li><Link to={`/projects/search/publishing`}>Publishing</Link></li>
            <li><Link to={`/projects/search/technology`}>Technology</Link></li>
            <li><Link to={`/projects/search/theater`}>Theater</Link></li>
          </ul>
        </div>
        
      </div>
    )
    
    
  }
}


export default Discover;