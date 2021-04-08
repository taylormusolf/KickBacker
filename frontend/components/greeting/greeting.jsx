import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
  const loginLink = () => (
    <nav>
      <Link to="/login">Log In</Link>
    </nav>
  );
  const profile = () => (
    <div className="header-group">
      <button className="header-name" onClick={() => openModal('profile')}>{currentUser.username}</button>
    </div>
  );

  return currentUser ? profile() : loginLink();
};


export default Greeting;