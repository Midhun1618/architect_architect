import React from 'react';
import './Nav.css'; // Import the CSS file

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="index.html" className="nav-link">Home</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
