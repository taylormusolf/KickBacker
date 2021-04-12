import React from "react";
import {Link} from 'react-router-dom';

const Profile = (props) =>{


    const userProjects = () =>{
      if (props.currentUser.projects){
        return(
          Object.values(props.currentUser.projects).map((project => (
          <li key={project.id} className='profile-created-project'>
            <Link to={`/projects/${project.id}`} onClick={()=>props.closeModal()}><img className='small-img' src={project.photo_url}/></Link>
            <span><Link to={`/projects/${project.id}`} onClick={()=>props.closeModal()}>{project.title}</Link></span>
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
            <li className="profile-section">
              <span className="dropdown-subtitle">YOUR ACCOUNT</span>
              <ul className="profile-subsection">
                <li>{props.currentUser.username}</li>
                <li><a href="#">Saved projects</a></li>
                <li><a href="#">Recommended for you</a></li>
              </ul>
            </li>
            <li className="profile-section">
              <span className="dropdown-subtitle">BACKED PROJECTS</span>
              <ul className="profile-subsection">
                <li className="profile-backed-container">
                  <span><a href="#">Followed Project</a></span>
                </li>
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