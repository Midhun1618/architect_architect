import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import hridaya_main from './hridya.png';

function Portfolio() {
  const [scrolled, setScrolled] = useState({});

  const handleScroll = () => {
    const newScrolled = {};
    
    // Manually checking each section
    const project1 = document.getElementById('project-0');
    const project2 = document.getElementById('project-1');
    const project3 = document.getElementById('project-2');
    
    if (project1) {
      const rect = project1.getBoundingClientRect();
      newScrolled[0] = rect.top < window.innerHeight * 0.5;
    }
    if (project2) {
      const rect = project2.getBoundingClientRect();
      newScrolled[1] = rect.top < window.innerHeight * 0.5;
    }
    if (project3) {
      const rect = project3.getBoundingClientRect();
      newScrolled[2] = rect.top < window.innerHeight * 0.5;
    }

    setScrolled(newScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Project 1 */}
      <section
        id="project-0"
        className={`project-section ${scrolled[0] ? 'scrolled' : ''}`}
      >
        <div className="project-hero">
          <img src={hridaya_main} alt="Hridaya – A Residence in Goa" />
          <div className="project-title-float">Hridaya – A Residence in Goa</div>
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
      </section>

      {/* Project 2 */}
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

      {/* Project 3 */}
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
    </div>
  );
}

export default Portfolio;