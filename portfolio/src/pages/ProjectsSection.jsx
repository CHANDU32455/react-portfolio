import './portfolio.css';
import certgenImg from '../assets/ProjectsAssets/certgen_img.png';
import invoicegenImg from '../assets/ProjectsAssets/invoicegen_img.png';
import certgendoc from '../assets/ProjectsAssets/Chandu_internship report.pdf';
import invoicedoc from '../assets/ProjectsAssets/Compsci_submission_invoice.pdf'

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      style={{
        padding: '2rem',
        backgroundColor: '#121212',
        color: '#fff',
        minHeight: '100vh',
        overflowY: 'auto',
      }}
    >
      {/* Inline CSS for hover animations */}
      <style>{`
        .project-tile-link {
          display: block;
          background: #292929;
          border-radius: 10px;
          padding: 1rem;
          box-shadow: 0 0 8px rgba(0,0,0,0.3);
          text-decoration: none;
          color: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-tile-link:hover {
          transform: scale(1.05);
          box-shadow: 0 0 14px rgba(0,255,224,0.6);
        }
      `}</style>

      <div style={{ width: '90%', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Explore My Projects</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Every time I learn something new, I build something to prove it — these are my "learning proofs". You’ll find internship projects, college work, and casual experiments here.
        </p>

        {/* CodSoft Internship */}
        <div style={projectTileStyle}>
          <h3 style={tileHeader}>CodSoft Internship (Oct 2023 – Nov 2023)</h3>
          <p style={tilePara}>
            My first internship showed me that Python is more than scripting — it's also about building interactive GUIs. Tackling bugs and iterating on UI logic solidified my patience and problem-solving skills.
          </p>

          <div style={tileGrid}>
            <a
              href="https://github.com/CHANDU32455/CodeSoft/blob/main/phone%20book"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile-link"
            >
              <h4 style={tileTitle}>Phone Book GUI</h4>
              <p style={tileDesc}>Python contact manager with search, edit & delete—all in a Tkinter interface.</p>
            </a>
            <a
              href="https://github.com/CHANDU32455/CodeSoft/blob/main/random%20password%20generator%20(python)"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile-link"
            >
              <h4 style={tileTitle}>Random Password Generator</h4>
              <p style={tileDesc}>Secure passwords of custom length, generated instantly via Tkinter.</p>
            </a>
            <a
              href="https://github.com/CHANDU32455/CodeSoft/blob/main/to%20do%20list.py"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile-link"
            >
              <h4 style={tileTitle}>To-Do List App</h4>
              <p style={tileDesc}>Task manager with add, edit, and delete—complete with a themed background.</p>
            </a>
          </div>
        </div>

        {/* Oasis Infobyte Internship */}
        <div style={projectTileStyle}>
          <h3 style={tileHeader}>Oasis Infobyte Internship (Nov 2023 – Dec 2023)</h3>
          <p style={tilePara}>
            During my internship at Oasis InfoByte, I immersed myself in a dynamic web development environment. I designed and developed a landing page, a temperature converter, and a basic portfolio. This was my first real experience crafting web pages from scratch using HTML, CSS, and JavaScript—and it felt amazing.
          </p>

          <div style={tileGrid}>
            <a
              href="https://github.com/CHANDU32455/OIBSIP"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile-link"
            >
              <h4 style={tileTitle}>Landing Page & Converter</h4>
              <p style={tileDesc}>First hands-on projects in HTML, CSS, and JS — includes a temperature converter and a homepage mockup.</p>
            </a>
            <a
              href="https://github.com/CHANDU32455/OIBSIP-"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile-link"
            >
              <h4 style={tileTitle}>Portfolio (v1)</h4>
              <p style={tileDesc}>My early personal portfolio website built with raw HTML/CSS—my first attempt at self-branding online.</p>
            </a>
          </div>
        </div>

        {/* CompSci Internship */}
        <div style={projectTileStyle}>
          <h3 style={tileHeader}>CompSci Internship (Apr 2024 – Sep 2024)</h3>
          <p style={tilePara}>
            My most enriching internship to date—CompSci immersed me in company-grade development cycles, from backend API design to team collaboration and leadership.
          </p>
          <ul style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            <li style={tileDesc}>
              <strong>Intern Lead (Jul – Sep 2024):</strong> Led sprint planning, team meetings, and issue resolution in live collaboration settings. Built confidence in communication, accountability, and reporting.
            </li>
            <li style={tileDesc}>
              <strong>SDE Intern (Apr – Sep 2024):</strong> Contributed to real-time web systems using Django and React. Implemented REST APIs, handled session-based certificate generation, explored invoice automation, and began working with Flask to widen my backend experience.
            </li>
          </ul>

          <div style={tileGrid}>
            <a
              href={certgendoc}
              rel="noopener noreferrer"
              className="project-tile-link"
              style={{ overflow: 'hidden', borderRadius: '12px', position: 'relative' }}
            >
              <img
                src={certgenImg}
                alt="Certificate Generation Project"
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                }}
              />
              <p style={tileDesc}>Certificate Generation (Report PDF)</p>
            </a>

            <a
              href={invoicedoc}
              rel="noopener noreferrer"
              className="project-tile-link"
              style={{ overflow: 'hidden', borderRadius: '12px', position: 'relative' }}
            >
              <img
                src={invoicegenImg}
                alt="Invoice Management Project"
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                }}
              />
              <p style={tileDesc}>Invoice Management (Submission PDF)</p>
            </a>
          </div>


        </div>


        {/* CloudCredits Internship Tile */}
        <div style={projectTileStyle}>
          <h3 style={tileHeader}>CloudCredits Internship (May 2025 – Aug 2025)</h3>
          <p style={tilePara}>
            This internship sharpened my focus on applied AI/ML development. I built end-to-end machine learning projects and designed user interfaces so that even non-technical users could interact with the models.
          </p>
          <div style={tileGrid}>
            <a href="https://github.com/CHANDU32455/Cloudcredits/tree/main/Handwritten_Digit_Recognition" target="_blank" rel="noopener noreferrer" className="project-tile-link">
              <h4 style={tileTitle}>Handwritten Digit Recognizer</h4>
              <p style={tileDesc}>ML model trained on MNIST + a clean UI to allow digit drawing and prediction—no code knowledge needed.</p>
            </a>
            <a href="https://github.com/CHANDU32455/Cloudcredits/tree/main/movie_recommender" target="_blank" rel="noopener noreferrer" className="project-tile-link">
              <h4 style={tileTitle}>Movie Recommender</h4>
              <p style={tileDesc}>Content-based filtering engine with a user-friendly interface to suggest movies based on preferences.</p>
            </a>
          </div>
        </div>

        {/* Personal Projects Tile */}
        <div style={projectTileStyle}>
          <h3 style={tileHeader}>Personal Projects</h3>
          <p style={tilePara}>
            In my free time, I explore technologies, tools, and frameworks through personal experiments. These projects reflect my curiosity, self-learning spirit, and a hands-on approach to mastering web, mobile, and AI development.
          </p>
          <div style={tileGrid}>
            <a href="https://github.com/CHANDU32455/ebidding/tree/master" target="_blank" rel="noopener noreferrer" className="project-tile-link">
              <h4 style={tileTitle}>E‑Bidding Platform</h4>
              <p style={tileDesc}>Built with friends using HTML, CSS, JS, and PHP to simulate a live online bidding system.</p>
            </a>
            <a href="https://github.com/CHANDU32455/flutter/tree/master" target="_blank" rel="noopener noreferrer" className="project-tile-link">
              <h4 style={tileTitle}>Flutter To‑Do App</h4>
              <p style={tileDesc}>My first cross-platform app exploring Dart and Flutter for a sleek task manager UI.</p>
            </a>
            <a href="https://github.com/CHANDU32455/SIH/tree/SIH3" target="_blank" rel="noopener noreferrer" className="project-tile-link">
              <h4 style={tileTitle}>Inventory Management (SIH)</h4>
              <p style={tileDesc}>ReactJS + Django app built with my team for Smart India Hackathon 2023.</p>
            </a>
            <a href="https://github.com/CHANDU32455/portfolio/tree/casual_portfolio" target="_blank" rel="noopener noreferrer" className="project-tile-link">
              <h4 style={tileTitle}>HTML/CSS Portfolio</h4>
              <p style={tileDesc}>A minimal, responsive personal webpage showcasing my bio and skills.</p>
            </a>
            <a href="https://github.com/CHANDU32455/my-work" target="_blank" rel="noopener noreferrer" className="project-tile-link">
              <h4 style={tileTitle}>My Work Showcase</h4>
              <p style={tileDesc}>A collection of side experiments—from LeetCode clones to desktop assistants, music players, React UIs, PyQt tools, and more.</p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

const projectTileStyle = {
  background: '#1f1f1f',
  borderRadius: '12px',
  padding: '1.5rem',
  boxShadow: '0 0 12px rgba(0,0,0,0.5)',
  marginBottom: '2rem',
};

const tileHeader = {
  fontSize: '1.5rem',
  color: '#00ffe0',
  marginBottom: '1rem',
};

const tilePara = {
  margin: '1rem 0',
  fontSize: '1rem',
  lineHeight: '1.5',
};

const tileGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1rem',
};

const tileTitle = {
  fontSize: '1.1rem',
  color: '#00ffe0',
  marginBottom: '0.5rem',
};

const tileDesc = {
  fontSize: '0.95rem',
  color: '#ccc',
};

export default ProjectsSection;
