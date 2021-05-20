import React from "react";
import { Link } from 'react-router-dom';
class Discover extends React.Component{
  constructor(props){
    super(props);
  }
  handleScroll(){
    window.scrollTo(0, 0);
  }


  render(){
    return(
      <div className='discover-container'>
        <div className='discover-box'>
          <div className='discover-heading discover-1'>
            <h1>Collections</h1>
            <div className='discover-close' ><i className="fas fa-times" onClick={() => this.props.history.goBack()}></i></div>
          </div>
          <ul>
            <li><Link to={`/projects/search/everything`} onClick={()=>this.handleScroll()}>Everything</Link></li>
          </ul>
          <div className='discover-heading discover-2'><h1>Sections</h1></div>
          <ul>
            <li><Link to={`/projects/category/1`} onClick={()=>this.handleScroll()}>Arts</Link></li>
            <li><Link to={`/projects/category/2`} onClick={()=>this.handleScroll()}>Comics & Illustration</Link></li>
            <li><Link to={`/projects/category/3`} onClick={()=>this.handleScroll()}>Design & Tech</Link></li>
            <li><Link to={`/projects/category/4`} onClick={()=>this.handleScroll()}>Film</Link></li>
            <li><Link to={`/projects/category/5`} onClick={()=>this.handleScroll()}>Food & Craft</Link></li>
            <li><Link to={`/projects/category/6`} onClick={()=>this.handleScroll()}>Games</Link></li>
            <li><Link to={`/projects/category/7`} onClick={()=>this.handleScroll()}>Music</Link></li>
            <li><Link to={`/projects/category/8`} onClick={()=>this.handleScroll()}>Publishing</Link></li>
          </ul>
          <div className='discover-heading discover-3'><h1>Categories</h1></div>
          <ul>
            <li><Link to={`/projects/search/arts`} onClick={()=>this.handleScroll()}>Arts</Link></li>
            <li><Link to={`/projects/search/comics`} onClick={()=>this.handleScroll()}>Comics</Link></li>
            <li><Link to={`/projects/search/craft`} onClick={()=>this.handleScroll()}>Crafts</Link></li>
            <li><Link to={`/projects/search/dance`} onClick={()=>this.handleScroll()}>Dance</Link></li>
            <li><Link to={`/projects/search/design`} onClick={()=>this.handleScroll()}>Design</Link></li>
            <li><Link to={`/projects/search/fashion`} onClick={()=>this.handleScroll()}>Fashion</Link></li>
            <li><Link to={`/projects/search/film`} onClick={()=>this.handleScroll()}>Film</Link></li>
            <li><Link to={`/projects/search/food`} onClick={()=>this.handleScroll()}>Food</Link></li>
            <li><Link to={`/projects/search/games`} onClick={()=>this.handleScroll()}>Games</Link></li>
            <li><Link to={`/projects/search/journalism`} onClick={()=>this.handleScroll()}>Journalism</Link></li>
            <li><Link to={`/projects/search/music`} onClick={()=>this.handleScroll()}>Music</Link></li>
            <li><Link to={`/projects/search/photography`} onClick={()=>this.handleScroll()}>Photography</Link></li>
            <li><Link to={`/projects/search/publishing`} onClick={()=>this.handleScroll()}>Publishing</Link></li>
            <li><Link to={`/projects/search/technology`} onClick={()=>this.handleScroll()}>Technology</Link></li>
            <li><Link to={`/projects/search/theater`} onClick={()=>this.handleScroll()}>Theater</Link></li>
          </ul>
        </div>
        
      </div>
    )
    
    
  }
}


export default Discover;