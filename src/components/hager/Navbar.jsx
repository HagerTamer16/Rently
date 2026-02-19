import React from 'react';
import './Navbar.css';
import logoIcon from '../../assets/images/car-logo.svg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <div className="nav-logo">
          <img src={logoIcon} alt="Rently Logo" className="logo-img" />
          <span className="logo-text">Rently</span>
        </div>

        <ul className="nav-links">
          <li><a href="#how-it-works">How It work</a></li>
          <li><a href="#download" className="download-link">DOWNLOAD</a></li>
          <li><a href="#how-to-rent">How to rent</a></li>
          <li><a href="#why-choose-us">Why choose us</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#signin" className="signin-btn">Sign in</a>
          <button className="signup-btn">Sign up</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;