import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const loginLink = () => (
    <nav>
      <Link to="/login">Log In</Link>
    </nav>
  );
  const profile = () => (
    <div className="header-group">
      <h2 className="header-name">{currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? profile() : loginLink();
};


export default Greeting;