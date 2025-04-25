import React from 'react';
import './Intro.css';
import profilePic from './profile.png'; 

function Intro() {
  return (
    <div className="intro-section">
      <div className="profile-left">
        <img src={profilePic} alt="Rahul Prasad" className="profile-pic" />
      </div>
      <div className="intro-right">
        <h1 className="intro-name">Rahul Prasad</h1>
        <p className="intro-subtitle">Architect Student | NIT Calicut</p>
        <p className="intro-subtitle">I am a third-year student  pursuing architecture 
from  National Institute of Technology Calicut 
with a strong foundation in architectural design, 
visualization, and hands-on project experience. 
Through active involvement in design competitions 
and leadership roles in college events, I have 
developed both creative and technical skills. I am 
currently seeking an internship opportunity to gain 
professional exposure, contribute to real-world 
projects, and grow as a designer.</p>
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
