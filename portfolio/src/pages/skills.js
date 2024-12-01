import React, { useEffect, useRef } from 'react';
import './portfolio.css';
import skillsimg from '../assets/img/work3.jpg';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleAnimation = (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
        skillBars.forEach((bar) => {
          bar.style.width = bar.getAttribute('data-skill-level');
        });
      } else {
        const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
        skillBars.forEach((bar) => {
          bar.style.width = '0'; // Reset width when leaving viewport
        });
      }
    };

    const observer = new IntersectionObserver(handleAnimation, {
      threshold: 0.3, // Adjust threshold based on how much of the section should be visible to trigger
    });

    observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <div className="skills-container">
        <div className="skills-description">
          <h2 className="skills-subtitle">Professional Skills</h2>
          <p className="skills-text">
            As a Computer Science Engineering student at NBKRIST, I am deeply passionate about programming and web development.
            I specialize in full-stack development with hands-on experience in Django and React.js.
          </p>

          <div className="skill">
            <div className="skill-name">React</div>
            <div className="skill-bar" data-skill-level="95%"></div>
            <span className="skill-percentage">95%</span>
          </div>

          <div className="skill">
            <div className="skill-name">Django</div>
            <div className="skill-bar" data-skill-level="85%"></div>
            <span className="skill-percentage">85%</span>
          </div>

          <div className="skill">
            <div className="skill-name">Python</div>
            <div className="skill-bar" data-skill-level="65%"></div>
            <span className="skill-percentage">65%</span>
          </div>

          <div className="skill">
            <div className="skill-name">Problem Solving</div>
            <div className="skill-bar" data-skill-level="85%"></div>
            <span className="skill-percentage">85%</span>
          </div>
        </div>

        <div className="skills-image">
          <img src={skillsimg} alt="Work" className="image" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
