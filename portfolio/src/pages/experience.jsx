import React, { useEffect, useState, useRef } from 'react';
import './portfolio.css';
const Experience = () => {
  const [ballPosition, setBallPosition] = useState(0);
  const experienceSectionRef = useRef(null); // Create a ref for the section

  const handleBallScroll = () => {
    if (experienceSectionRef.current) {
      const section = experienceSectionRef.current;
      const scrollTop = window.scrollY; // Current scroll position
      const sectionTop = section.offsetTop; // Distance from top of the page to the section
      const sectionHeight = section.offsetHeight; // Height of the section

      // Calculate the position relative to the section
      const sectionScrollTop = scrollTop - sectionTop;
      const scrollProgress = Math.min(
        Math.max((sectionScrollTop / (sectionHeight - window.innerHeight)) * 100, 0), // Ensure between 0% and 100%
        100
      );

      setBallPosition(scrollProgress); // Set the ball position
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleBallScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener('scroll', handleBallScroll);
  }, []);

  return (
    <section ref={experienceSectionRef} id="experience" className="experience-section">
      <div className="timeline">
        <div
          className="ball"
          style={{ top: `${ballPosition}%` }} // Move the ball proportionally to section scroll
        ></div>
      </div>

      <div className="experience-container">
        <h2>Experience</h2>

        <div className="experience-item">
          <div className="experience-period">Apr 2024 - Sep 2024 · 6 mos</div>
          <h3>Intern Lead</h3>
          <h4>CompSci Technology Solutions · Internship</h4>
          <p>
            Worked on enhancing Django and React skills. Gained hands-on experience with Django REST framework, managing APIs, and using Axios in React. Handled session management in the certificate generation project, solving challenges effectively. This role deepened my full-stack knowledge, integrating React and Django seamlessly.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-period">Oct 2023 - Nov 2023 · 2 mos</div>
          <h3>Intern</h3>
          <h4>CodSoft · Internship</h4>
          <p>
            Developed Python and GUI-building skills, gaining hands-on experience through practice. Overcame coding challenges and learned debugging techniques. This internship introduced me to the foundations of effective coding practices, building error-free applications.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-period">Nov 2023 - Dec 2023 · 2 mos</div>
          <h3>Intern</h3>
          <h4>Oasis Infobyte · Internship</h4>
          <p>
            Immersed in a web development environment, working on web pages, landing pages, and a temperature converter application. This growth-oriented experience strengthened my web development and JavaScript skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
