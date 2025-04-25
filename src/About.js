import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const aboutData = {
  education: [
    'National Institute of Technology Calicut – Bachelor of Architecture (2022–2026)',
    'Madin Polytechnic College Malappuram – Diploma in Architecture (2020–2022 Lat)',
    'PKMM Higher Secondary School Edarikode'
  ],
  language: ['English', 'Malayalam', 'Hindi', 'Tamil'],
  software: [
    'Autocad', 'Sketchup', 'Revit', 'D5', 'Twinmotion',
    'Photoshop', 'Illustrator', 'Indesign', 'MS Office', 'Canva'
  ],
  competitions: [
    'Griha 2025',
    'NASA India 2025',
    'Clock Tower Design Competition 2023'
  ],
  cgpa: ['Current: 7.8 (2022–Present)', 'Diploma: 8.9 (2020–2022)'],
  certifications: [
    'Bio Climatic Architecture – NPTEL 2022',
    'Autocad – Milan School of Design 2022',
    'Sketchup – Milan School of Design 2022'
  ],
  achievements: [
    "Branch Representative – Architecture Department 2023",
    "Treasurer – ADIZYA '24, NIT Calicut Fest",
    "Props & Design PAD Head – RAGAM '25, NIT Calicut Cultural Fest",
    "Light & Sounds Head LAS – RAGAM '25, NIT Calicut Cultural Fest"
  ],
  extracurricular: [
    'National Service Scheme 2023 – Active Member',
    'Kolkali (Home Team) 2023 – Team Lead',
    'Fashion Show (FS) – 2025 – Lead Designer'
  ],
  interests: ['Art (Painting – All Mediums)', 'Carpentry', 'Model Making']
};

const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 }
  })
};

const AnimatedList = ({ items }) => (
  <motion.ul 
    className="about-list"
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: { staggerChildren: 0.05 }
      }
    }}
  >
    {items.map((item, idx) => (
      <motion.li 
        key={idx}
        custom={idx}
        variants={listItemVariants}
        className="about-list-item"
      >
        <div className="list-marker"></div>
        {item}
      </motion.li>
    ))}
  </motion.ul>
);

export default function About() {
  const [activeTab, setActiveTab] = useState('education');
  
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="about-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        About Me
      </motion.h1>
      
      <div className="about-grid-container">
        <div className="about-tabs-list">
          {Object.keys(aboutData).map((key) => (
            <motion.button
              key={key}
              className={`about-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="about-content"
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="about-card">
            <AnimatedList items={aboutData[activeTab]} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}