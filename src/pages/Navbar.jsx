import React from 'react';
import '../css/navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <header className="navbar-new">
      <div className="navbar-wrapper">
        <img src={logo} alt="logo" className="logo-new" />
        <nav className="nav-links">
          <a href="#">My Sites</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
