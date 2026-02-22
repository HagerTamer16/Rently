import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img 
          src="src\assets\images\car-logo.svg" 
          alt="car-logo" 
          className="logo-img" 
        />
        <span className="logo-text">Rently</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#how-it-works">How It work</a></li>
        <li><a href="#download" className="active-link">DOWNLOAD</a></li>
        <li><a href="#how-to-rent">How to rent</a></li>
        <li><a href="#why-us">Why choose us</a></li>
      </ul>

      <div className="navbar-auth">
        <a href="#signin" className="signin-text">Sign in</a>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;