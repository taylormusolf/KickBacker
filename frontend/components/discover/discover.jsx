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
            <li><Link to={`/projects/category/1`}>Everything</Link></li>
          </ul>
          <div className='discover-heading'><h1>Sections</h1></div>
          <ul>
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
          <ul>
            <li><Link to={`/projects/category/1`}>Arts</Link></li>
            <li><Link to={`/projects/category/2`}>Comics</Link></li>
            <li><Link to={`/projects/category/2`}>Crafts</Link></li>
            <li><Link to={`/projects/category/2`}>Dance</Link></li>
            <li><Link to={`/projects/category/3`}>Design</Link></li>
            <li><Link to={`/projects/category/4`}>Fashion</Link></li>
            <li><Link to={`/projects/category/4`}>Film & Video</Link></li>
            <li><Link to={`/projects/category/5`}>Food</Link></li>
            <li><Link to={`/projects/category/6`}>Games</Link></li>
            <li><Link to={`/projects/category/6`}>Journalism</Link></li>
            <li><Link to={`/projects/category/7`}>Music</Link></li>
            <li><Link to={`/projects/category/8`}>Photography</Link></li>
            <li><Link to={`/projects/category/8`}>Publishing</Link></li>
            <li><Link to={`/projects/category/8`}>Technology</Link></li>
            <li><Link to={`/projects/category/8`}>Theater</Link></li>
          </ul>
        </div>
        
      </div>
    )
    
    
  }
}


export default Discover;