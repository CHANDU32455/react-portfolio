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
          <div className="experience-period">Jul 2024 - Sep 2024 · 3 mos</div>
          <h3>Intern Lead</h3>
          <h4>CompSci Technology Solutions · Internship · Remote · Hyderabad, Telangana, India</h4>
          <p>
            As an Intern Lead at CompSci Technologies, I worked closely with a talented team of co-interns, ensuring smooth workflows and steady project progress. I gathered daily status updates, reported to the manager, and hosted live problem-solving sessions to resolve blockers quickly.
            <br /><br />
            This role helped me sharpen my leadership, time management, and communication skills, while contributing meaningfully to the team’s success through proactive coordination.
          </p>
          <p><strong>Skills:</strong> Leadership & Coordination · Workflow Management · Team Leadership · Time Management · Realtime Problem Solving · Communication & Management · Milestone Tracking</p>
        </div>

        <div className="experience-item">
          <div className="experience-period">Apr 2024 - Sep 2024 · 6 mos</div>
          <h3>Software Development Engineer (SDE)</h3>
          <h4>CompSci Technology Solutions · Internship · Remote · Hyderabad, Telangana, India</h4>
          <p>
            At CompSci Technologies, I enhanced my skills in both Django and React. I gained hands-on experience with Django REST Framework, API development, Axios in React, and implemented session management in a certificate generation project.
            <br /><br />
            I also started exploring Flask to expand my backend knowledge. The internship provided valuable exposure to real-world projects, industry meetings, and collaborative discussions, enriching my full-stack development journey.
          </p>
          <p><strong>Skills:</strong> Flask · Django REST Framework · Agile Project Management · Version Control · SQLite · MySQL · Python GUI · React.js · JWT · REST APIs · Project Planning · PyQt6 · npm · Web Projects · Django · Microservices · Milestones</p>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7239815878442115072/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.6rem 1.2rem',
              backgroundColor: '#f39c12',
              color: '#1e1e1e',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(243, 156, 18, 0.5)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ffa726';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#f39c12';
              e.target.style.transform = 'scale(1)';
            }}
          >
            View Internship Completion Letter
          </a>

        </div>

        {/**
         * 
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
         */}
      </div>
    </section>
  );
};

export default Experience;
