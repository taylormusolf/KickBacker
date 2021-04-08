import React from "react";

const Profile = (props) =>{
    return(
      <div>
        
        <div className="profile-box">
          <ul className="profile-top">
            <li>
              <ul className="your-account">
                <span className="dropdown-subtitle">YOUR ACCOUNT</span>
                <li><a href="#">Saved projects</a></li>
                <li><a href="#">Recommended for you</a></li>
              </ul>
            </li>
            <li>
              <ul className="backed-projects">
                <span className="dropdown-subtitle">BACKED PROJECTS</span>
                <li><a href="#">Followed Project</a></li>
              </ul>
            </li>
            <li>
              <ul className="created-projects">
                <span className="dropdown-subtitle">CREATED PROJECTS</span>
                <li><a href="#">New</a></li>
              </ul>
            </li>
          </ul>
          
          <button className="header-button" onClick={()=>props.logout().then(props.closeModal())}>Log Out</button>
        </div>
      </div>
      
    )
}


export default Profile;