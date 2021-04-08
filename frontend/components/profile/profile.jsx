import React from "react";

const Profile = (props) =>{
    return(
      <div>
        
        <div className="profile-box">
          <ul className="profile-content">
            <li className="profile-section">
              <span className="dropdown-subtitle">YOUR ACCOUNT</span>
              <ul className="profile-subsection">
                <li><a href="#">Saved projects</a></li>
                <li><a href="#">Recommended for you</a></li>
              </ul>
            </li>
            <li className="profile-section">
              <span className="dropdown-subtitle">BACKED PROJECTS</span>
              <ul className="profile-subsection">
                <li><a href="#">Followed Project</a></li>
              </ul>
            </li>
            <li className="profile-section">
              <span className="dropdown-subtitle">CREATED PROJECTS</span>
              <ul className="profile-subsection">
                <li><a href="#">New</a></li>
              </ul>
            </li>
          </ul>
          <div className='profile-footer'>
            <button className="header-button" onClick={()=>props.logout().then(props.closeModal())}>Log Out</button>
          </div>
        </div>
      </div>
      
    )
}


export default Profile;