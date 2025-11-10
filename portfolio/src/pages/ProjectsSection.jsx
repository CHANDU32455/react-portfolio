import './portfolio.css';
import { useEffect } from 'react';

const ProjectsSection = () => {
  useEffect(() => {
    // Add hover styles safely
    const style = document.createElement('style');
    style.textContent = `
      .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 255, 224, 0.2);
        border-color: #00ffe0;
      }
      
      .project-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 255, 224, 0.3);
      }
      
      .github-link:hover {
        background: #00ffe0;
        color: #121212;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 255, 224, 0.3);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.mainTitle}>Projects</h2>
        <p style={styles.subtitle}>
          A showcase of my professional work and technical implementations
        </p>

        {/* Project Grid */}
        <div style={styles.projectsGrid}>
          {/* Crinzping */}
          <div style={styles.projectCard} className="project-card">
            <h3 style={styles.projectTitle}>Crinzping – AWS-Based Roast Feed App</h3>
            <div style={styles.techStack}>
              <span style={styles.techTag}>ReactJS</span>
              <span style={styles.techTag}>AWS Lambda</span>
              <span style={styles.techTag}>DynamoDB</span>
              <span style={styles.techTag}>Cognito</span>
            </div>
            <p style={styles.projectDesc}>
              A mobile-first app featuring roast-style message feeds with real-time likes and comments. 
              Implements AWS Cognito for authentication, serverless backend via Lambda + API Gateway, 
              and offline-first sync for seamless user experience.
            </p>
            <div style={styles.links}>
              <a 
                href="https://github.com/CHANDU32455/CrinzPing" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.link}
                className="project-link"
              >
                View Code
              </a>
              <a 
                href="https://crinzping.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.link}
                className="project-link"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Invoice Generation System */}
          <div style={styles.projectCard} className="project-card">
            <h3 style={styles.projectTitle}>Invoice Generation System</h3>
            <div style={styles.techStack}>
              <span style={styles.techTag}>ReactJS</span>
              <span style={styles.techTag}>Flask</span>
            </div>
            <p style={styles.projectDesc}>
              Developed the full ReactJS frontend with smooth API integration and dynamic components. 
              Supported Flask backend for generating and printing invoices in both A4 and thermal formats 
              without extra setup.
            </p>
            <div style={styles.companyNote}>
              <span style={styles.noteIcon}>🏢</span>
              Company Project - Code Confidential
            </div>
          </div>

          {/* Certificate Generation Portal */}
          <div style={styles.projectCard} className="project-card">
            <h3 style={styles.projectTitle}>Certificate Generation Portal</h3>
            <div style={styles.techStack}>
              <span style={styles.techTag}>ReactJS</span>
              <span style={styles.techTag}>Django</span>
            </div>
            <p style={styles.projectDesc}>
              Built the complete ReactJS frontend with responsive UI, form validation, and workflow logic. 
              Collaborated with Django backend and PyQt modules for integration and sprint feature delivery.
            </p>
            <div style={styles.companyNote}>
              <span style={styles.noteIcon}>🏢</span>
              Company Project - Code Confidential
            </div>
          </div>

          {/* PULSEVO */}
          <div style={styles.projectCard} className="project-card">
            <h3 style={styles.projectTitle}>PULSEVO – Team Productivity Dashboard</h3>
            <div style={styles.techStack}>
              <span style={styles.techTag}>ReactJS</span>
              <span style={styles.techTag}>Flask</span>
              <span style={styles.techTag}>SQLite3</span>
              <span style={styles.techTag}>Recharts</span>
            </div>
            <p style={styles.projectDesc}>
              A real-time dashboard tracking team performance and task analytics with time-based filters, 
              charts, auto-refresh with advanced search, pagination, and performance metrics.
            </p>
            <div style={styles.outcome}>
              <strong>Outcome:</strong> Ranked <strong>1st Place</strong> at <em>Hackathon Nellore 2025</em>
            </div>
            <div style={styles.companyNote}>
              <span style={styles.noteIcon}>🏆</span>
              Hackathon Project - Demo Available on Request
            </div>
          </div>
        </div>

        {/* Additional Projects Section */}
        <div style={styles.commentsSection}>
          <h3 style={styles.commentsTitle}>Additional Projects & Learning</h3>
          <p style={styles.commentsText}>
            Explore my complete project history including internship work at CodSoft, Oasis Infobyte, 
            and CloudCredits, along with personal experiments in AI/ML, web development, and mobile apps 
            in my portfolio repository.
          </p>
          <a 
            href="https://github.com/CHANDU32455" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.githubLink}
            className="github-link"
          >
            View My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

// CSS Styles Object - Fixed and simplified
const styles = {
  section: {
    padding: '3rem 2rem',
    backgroundColor: '#121212',
    color: '#fff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #00ffe0, #00ffaa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#ccc',
    textAlign: 'center',
    marginBottom: '3rem',
    lineHeight: '1.6',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  },
  projectCard: {
    background: '#1f1f1f',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  projectTitle: {
    fontSize: '1.4rem',
    color: '#00ffe0',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  techTag: {
    background: 'rgba(0, 255, 224, 0.1)',
    color: '#00ffe0',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    border: '1px solid rgba(0, 255, 224, 0.3)',
  },
  projectDesc: {
    color: '#ccc',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontSize: '1rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  link: {
    background: 'linear-gradient(45deg, #00ffe0, #00ffaa)',
    color: '#121212',
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
  },
  companyNote: {
    background: 'rgba(255, 193, 7, 0.1)',
    color: '#ffc107',
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid rgba(255, 193, 7, 0.3)',
    fontSize: '0.9rem',
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  noteIcon: {
    fontSize: '1rem',
  },
  outcome: {
    background: 'rgba(0, 255, 170, 0.1)',
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid rgba(0, 255, 170, 0.3)',
    color: '#00ffaa',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  commentsSection: {
    background: '#1a1a1a',
    borderRadius: '12px',
    padding: '2.5rem',
    border: '1px solid #333',
    textAlign: 'center',
  },
  commentsTitle: {
    color: '#00ffe0',
    marginBottom: '1rem',
    fontSize: '1.3rem',
  },
  commentsText: {
    color: '#999',
    lineHeight: '1.6',
    fontSize: '1rem',
    marginBottom: '1.5rem',
  },
  githubLink: {
    background: 'transparent',
    color: '#00ffe0',
    padding: '0.8rem 1.5rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    border: '2px solid #00ffe0',
    transition: 'all 0.3s ease',
    display: 'inline-block',
  },
};

export default ProjectsSection;