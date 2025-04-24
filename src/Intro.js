import React from 'react';
import './Intro.css';
import profilePic from './res/profile.png'; 

function Intro() {
  return (
    <div className="intro-section">
      <div className="profile-left">
        <img src={profilePic} alt="Rahul Prasad" className="profile-pic" />
      </div>
      <div className="intro-right">
        <h1 className="intro-name">Rahul Prasad</h1>
        <p className="intro-subtitle">Architect Student | NIT Calicut</p>
        <div className="intro-links">
          <a href="#portfolio" className="intro-link">Portfolio</a>
          <a href="#about" className="intro-link">About Me</a>
          <a href="#contact" className="intro-link">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
