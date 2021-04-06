import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const loginLink = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
    </nav>
  );
  const profile = () => (
    <hgroup className="header-group">
      <h2 className="header-name">{currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? profile() : loginLink();
};


export default Greeting;