import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
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
    'Branch Representative – Architecture Department 2023',
    'Treasurer – ADIZYA ‘24, NIT Calicut Fest',
    'Props & Design PAD Head – RAGAM ‘25, NIT Calicut Cultural Fest',
    'Light & Sounds Head LAS – RAGAM ‘25, NIT Calicut Cultural Fest'
  ],
  extracurricular: [
    'National Service Scheme 2023 – Active Member',
    'Kolkali (Home Team) 2023 – Team Lead',
    'Fashion Show (FS) – 2025 – Lead Designer'
  ],
  interests: ['Art (Painting – All Mediums)', 'Carpentry', 'Model Making']
};

const AnimatedList = ({ items }) => (
  <ul className="about-list">
    {items.map((item, idx) => (
      <motion.li key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
        {item}
      </motion.li>
    ))}
  </ul>
);

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="about-tabs">
          <TabsTrigger value="education" className="about-tab-trigger">Education</TabsTrigger>
          <TabsTrigger value="language" className="about-tab-trigger">Languages</TabsTrigger>
          <TabsTrigger value="software" className="about-tab-trigger">Software</TabsTrigger>
          <TabsTrigger value="competitions" className="about-tab-trigger">Competitions</TabsTrigger>
          <TabsTrigger value="cgpa" className="about-tab-trigger">CGPA</TabsTrigger>
          <TabsTrigger value="certifications" className="about-tab-trigger">Certifications</TabsTrigger>
          <TabsTrigger value="achievements" className="about-tab-trigger">Achievements</TabsTrigger>
          <TabsTrigger value="extracurricular" className="about-tab-trigger">Extra Curricular</TabsTrigger>
          <TabsTrigger value="interests" className="about-tab-trigger">Interests</TabsTrigger>
        </TabsList>

        {Object.keys(aboutData).map((key) => (
          <TabsContent key={key} value={key} className="about-content">
            <div className="about-card">
              <div className="about-card-content">
                <AnimatedList items={aboutData[key]} />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
