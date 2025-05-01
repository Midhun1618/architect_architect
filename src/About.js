import React, { useEffect, useRef } from 'react';
import './About.css';
import autocad from './autocad-logo.png'; 
import sketchup from './sketchup-logo.png'; 
import revit from './revit-logo.png'; 
import d5 from './d5-logo.png'; 
import twinmotion from './twinmotion-logo.png'; 
import ps from './photoshop-logo.png'; 
import il from './illustrator-logo.png'; 
import indesign from './indesign-logo.png'; 
import msoffice from './msoffice-logo.png'; 
import canva from './canva-logo.png'; 

const About = () => {
  const progressBarsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const targetWidth = target.getAttribute('data-value');
            target.style.width = targetWidth + '%';
            target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.5 }
    );

    progressBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => {
      progressBarsRef.current.forEach((bar) => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  const languages = ['English', 'Malayalam', 'Hindi', 'Tamil'];
  const competitions = [
    'Griha 2025',
    'NASA India 2025',
    'Clock Tower Design Competition 2023'
  ];
  
  const education = [
    {
      institution: 'National Institute of Technology Calicut',
      degree: 'Bachelor of Architecture',
      period: '2022–2026'
    },
    {
      institution: 'Madin Polytechnic College Malappuram',
      degree: 'Diploma in Architecture',
      period: '2020–2022'
    },
    {
      institution: 'PKMM Higher Secondary School Edarikode',
      degree: 'Higher Secondary Education',
      period: ''
    }
  ];

  const achievements = [
    'Branch Representative – Architecture Department 2023',
    'Treasurer – ADIZYA \'24, NIT Calicut Fest',
    'Props & Design PAD Head – RAGAM \'25, NIT Calicut Cultural Fest',
    'Light & Sounds Head LAS – RAGAM \'25, NIT Calicut Cultural Fest'
  ];

  const certifications = [
    { name: 'Bio Climatic Architecture – NPTEL 2022', img: 'bio-climatic-cert.jpg' },
    { name: 'Autocad – Milan School of Design 2022', img: 'autocad-cert.jpg' },
    { name: 'Sketchup – Milan School of Design 2022', img: 'sketchup-cert.jpg' }
  ];

  const software = [
    { name: 'Autocad', img: autocad },
    { name: 'Sketchup', img: sketchup },
    { name: 'Revit', img: revit },
    { name: 'D5', img: d5 },
    { name: 'Twinmotion', img: twinmotion },
    { name: 'Photoshop', img: ps },
    { name: 'Illustrator', img: il },
    { name: 'Indesign', img: indesign },
    { name: 'MS Office', img: msoffice },
    { name: 'Canva', img: canva }
  ];

  const extracurricular = [
    'National Service Scheme 2023 – Active Member',
    'Kolkali (Home Team) 2023 – Team Lead',
    'Fashion Show (FS) – 2025 – Lead Designer'
  ];

  const interests = [
    'Art (Painting – All Mediums)',
    'Carpentry',
    'Model Making'
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      {/* First Row - CGPA, Languages, Competitions */}
      <div className="about-row">
        <div className="cgpa-container">
          <h3>Academic Performance</h3>
          <div className="cgpa-item">
            <span>Current CGPA (2022–Present)</span>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                ref={el => progressBarsRef.current[0] = el}
                data-value="78"
              ></div>
              <span>7.8</span>
            </div>
          </div>
          <div className="cgpa-item">
            <span>Diploma CGPA (2020–2022)</span>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                ref={el => progressBarsRef.current[1] = el}
                data-value="89"
              ></div>
              <span>8.9</span>
            </div>
          </div>
        </div>
        
        <div className="languages-container">
          <h3>Languages</h3>
          <ul className="languages-list">
            {languages.map((lang, index) => (
              <li key={index} className="language-item">
                <span>{lang}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="competitions-container">
          <h3>Competitions</h3>
          <ul className="competitions-list">
            {competitions.map((comp, index) => (
              <li key={index} className="competition-item">
                <span>{comp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Second Row - Education and Achievements */}
      <div className="about-row">
        <div className="education-container">
          <h3>Education</h3>
          <ul className="education-list">
            {education.map((edu, index) => (
              <li key={index} className="education-item">
                <h4>{edu.institution}</h4>
                <p>{edu.degree}</p>
                {edu.period && <p className="period">{edu.period}</p>}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="achievements-container">
          <h3>Achievements</h3>
          <div className="achievements-list">
            {achievements.map((ach, index) => (
              <li key={index} className="achievement-item">
                <span>{ach}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
      
      {/* Third Row - Certifications */}
      <div className="about-row">
        <div className="certifications-container">
          <h3>Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-img-container">
                  <img src={cert.img} alt={cert.name} className="cert-img" />
                </div>
                <p>{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Fourth Row - Software Skills */}
      <div className="about-row">
        <div className="software-container">
          <h3>Software Skills</h3>
          <div className="software-grid">
            {software.map((soft, index) => (
              <div key={index} className="software-card">
                <div className="software-img-container">
                  <img src={soft.img} alt={soft.name} className="software-img" />
                </div>
                <p>{soft.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Fifth Row - Extracurricular and Interests */}
      <div className="about-row">
        <div className="extracurricular-container">
          <h3>Extracurricular Activities</h3>
          <ul className="extracurricular-list">
            {extracurricular.map((act, index) => (
              <li key={index} className="extracurricular-item">
                <span>{act}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="interests-container">
          <h3>Interests</h3>
          <ul className="interests-list">
            {interests.map((int, index) => (
              <li key={index} className="interest-item">
                <span>{int}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;