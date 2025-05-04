import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import hridaya_main from './hridaya-img.png'; // Replace with different images if available
import pn1 from './pnav1.png';
import pn2 from './pnav2.png';
import pn3 from './pnav3.png';
import pn4 from './pnav4.png';
import imgd1 from './drawerimg1.png';
import imgd2 from './drawerimg2.png';
import imgd3 from './drawerimg3.png';

function Portfolio() {
  const [scrolled, setScrolled] = useState({});

  const handleScroll = () => {
    const newScrolled = {};
    for (let i = 0; i < 3; i++) {
      const project = document.getElementById(`project-${i}`);
      if (project) {
        const rect = project.getBoundingClientRect();
        newScrolled[i] = rect.top < window.innerHeight * 0.5;
      }
    }
    setScrolled(newScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProject = (index) => {
    const element = document.getElementById(`project-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div>
      <h2 className="section-title">Portfolio</h2>
      {/* Image Navigation Buttons */}
      <div className="project-gallery">
        <div className="gallery-item" onClick={() => scrollToProject(0)}>
          <img src={pn1} alt="Elen Homes" className="gallery-image" />
          <div className="gallery-title">
            <span className="project-number"><b>01</b></span>
            <span className="project-name">Hridaya</span>
            <span className='project-subtitle'>Residence</span>
          </div>
        </div>
        <div className="gallery-item" onClick={() => scrollToProject(1)}>
          <img src={pn2} alt="Elen Homes" className="gallery-image" />
          <div className="gallery-title">
            <span className="project-number"><b>02</b></span>
            <span className="project-name">Elen Homes</span>
            <span className='project-subtitle'>Low-rise Apartments</span>
          </div>
        </div>
        <div className="gallery-item" onClick={() => scrollToProject(2)}>
          <img src={pn3} alt="Elen Homes" className="gallery-image" />
          <div className="gallery-title">
            <span className="project-number"><b>03</b></span>
            <span className="project-name">Phadaro sa Hub</span>
            <span className='project-subtitle'>Convention Centre</span>
          </div>
        </div>
        <div className="gallery-item" onClick={() => scrollToProject(2)}>
          <img src={pn4} alt="Elen Homes" className="gallery-image" />
          <div className="gallery-title">
            <span className="project-number"><b>04</b></span>
            <span className="project-name">Working Drawing</span>
            <span className='project-subtitle'>AutoCAD drawings</span>
          </div>
        </div>
      </div>
      <div className="portfolio-container">
        {/* Project 1 */}
        <section
          id="project-0"
          className={`project-section ${scrolled[0] ? 'scrolled' : ''}`}
        >
          <div className="project-container">
            <div className="project-hero">
              <img src={hridaya_main} alt="Hridaya – A Residence in Goa" />
              <div className="project-title-float">Hridaya – A Residence in Goa</div>
              <div className="hover-drawer">
                <div className="drawer-item">
                  <img src={imgd1}  alt="Building Mass" className="drawer-img" />
                  <h4>Building Mass</h4>
                  <p>Starting with a solid volume to sculpt around the natural form.</p>
                </div>
                <div className="drawer-item">
                  <img src={imgd2} alt="Creating Void" className="drawer-img" />
                  <h4>Creating Void</h4>
                  <p> Subtractive techniques carve voids into the form, introducing light, ventilation, and outdoor spaces. </p>
                </div>
                <div className="drawer-item">
                  <img src={imgd3}  alt="Core Concept" className="drawer-img" />
                  <h4>Core Concept</h4>
                  <p>The heart of the design — a living tree, not just a centerpiece.</p>
                </div>
              </div>
            </div>
          </div>
          </section>

      </div>
      <div className="project-body">
        <p className="project-quote">“I didn’t design a house. I designed around a soul.”</p>
        <p className="project-story">
          I imagined a tree as a living core, not just a visual. I began with a single mass, then carved voids for air, light, and privacy. The home breathes around its center.
        </p>
        <div className="project-details">
          <p><strong>Key Concept:</strong> Tree as spatial soul</p>
          <p><strong>Design Moment:</strong> Sketching in mud to visualize the core</p>
        </div>
      </div>
      <div className="project-separator">
        <p>Explore more inspiring projects below...</p>
      </div>
    
  
    

        {/* Project 2 */ }
  <section
    id="project-1"
    className={`project-section ${scrolled[1] ? 'scrolled' : ''}`}
  >
    <div className="project-hero">
      <img src={hridaya_main} alt="Elen Homes – Low-Rise Apartments" />
      <div className="project-title-float">Elen Homes – Low-Rise Apartments</div>
    </div>
    <div className="project-body">
      <p className="project-quote">“I learned that simplicity is louder than symmetry.”</p>
      <p className="project-story">
        This was about order without dullness. The grid gave structure, but natural light, materials, and minor asymmetry gave life. Balance became my language.
      </p>
      <div className="project-details">
        <p><strong>Key Concept:</strong> Order and warmth</p>
        <p><strong>Design Moment:</strong> Replaced frame with tree-framed view</p>
      </div>
    </div>
    <div className="project-separator">
      <p>Explore more inspiring projects below...</p>
    </div>
  </section>

  {/* Project 3 */ }
  <section
    id="project-2"
    className={`project-section ${scrolled[2] ? 'scrolled' : ''}`}
  >
    <div className="project-hero">
      <img src={hridaya_main} alt="Phadaro Sa Hub – Convention Centre" />
      <div className="project-title-float">Phadaro Sa Hub – Convention Centre</div>
    </div>
    <div className="project-body">
      <p className="project-quote">“In Rajasthan, even shadows have stories.”</p>
      <p className="project-story">
        Inspired by havelis and chowks, this project is where my cultural roots met modern design. It’s not mimicry, it’s a respectful reflection with utility.
      </p>
      <div className="project-details">
        <p><strong>Key Concept:</strong> Heritage reimagined</p>
        <p><strong>Design Moment:</strong> Sketching jaalis at sunset</p>
      </div>
    </div>
    <div className="project-separator">
      <p>Explore more inspiring projects below...</p>
    </div>
  </section>
      </div >

  );
}

export default Portfolio;
