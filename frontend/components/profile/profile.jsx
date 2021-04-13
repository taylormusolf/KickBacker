import React from "react";
import {Link} from 'react-router-dom';

const Profile = (props) =>{
  

    const userProjects = () =>{
      
      if (props.currentUser.projects){
        const array = (Object.values(props.currentUser.projects)).reverse().slice(0,3);
        return(
          array.map((project => (
              <li key={project.id} className='profile-created-project'>
                <span><Link to={`/projects/${project.id}`} onClick={()=>props.closeModal()}><img className='small-img' src={project.photo_url}/></Link></span>
                <span><Link to={`/projects/${project.id}`} onClick={()=>props.closeModal()}>{project.title}</Link></span>
              </li>
            )))
        )
      } else {
        return(null)
      }
    }

    const userBackings = () =>{
      
      if (props.currentUser.backings){
        const array = (Object.values(props.currentUser.backings)).reverse().slice(0,3);
        return(
          array.map((backing => (
          <li key={backing.project.id} className='profile-backed-project'>
            <span><Link to={`/projects/${backing.project.id}`} onClick={()=>props.closeModal()}><img className='small-img' src={backing.project.photo_url}/></Link></span>
            <span><Link to={`/projects/${backing.project.id}`} onClick={()=>props.closeModal()}>{backing.project.title}</Link></span>
          </li>
          )))
        )
      } else {
        return(null)
      }
    }


    return(
      <div>
        
        <div className="profile-box">
          <ul className="profile-content">
            <li className="account-section">
              <span className="dropdown-subtitle">YOUR ACCOUNT</span>
              <ul className="profile-subsection">
                <li>{props.currentUser.username}</li>
              </ul>
            </li>
            <li className="profile-section">
              <span className="dropdown-subtitle">BACKED PROJECTS</span>
              <ul className="profile-subsection">
                <ul className="profile-backed-container">
                  {userBackings()}
                </ul>
                {/* <ul className='profile-backed-project-container'>
                  <Link to="" onClick={()=>props.closeModal()}>
                    <div><p>View More</p></div>
                  </Link>
                </ul> */}
              </ul>
            </li>
            <li className="profile-section">
              <span className="dropdown-subtitle">CREATED PROJECTS</span>
              <ul className="profile-subsection">
                {userProjects()}
                <ul className='profile-new-project-container'>
                  <Link to="/projects/new" onClick={()=>props.closeModal()}>
                    <div><i className="fas fa-plus" /><p>New</p></div>
                  </Link>
                </ul>
              </ul>
            </li>
          </ul>
          <div className='profile-footer'>
            <button className="header-button" onClick={()=>props.logout().then(props.closeModal())}>Log out</button>
          </div>
        </div>
      </div>
      
    )
}


export default Profile;