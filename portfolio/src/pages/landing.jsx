import { useState, useEffect, useMemo, useCallback } from 'react';
import mypic from '../assets/mypic2.jpg';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';

function Landing() {
  const titles = useMemo(() => [
    "WEB DESIGNER",
    "REACT DEVELOPER",
    "DJANGO DEVELOPER",
    "FLUTTER LOVER",
    "AWS LOVER",
    "AI & ML ENTHUSIAST",
  ], []);

  const navigate = useNavigate();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Optimized typing effect with useCallback
  useEffect(() => {
    let timeoutId;
    
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex];

      if (isDeleting) {
        setDisplayedText(current => current.slice(0, -1));
      } else {
        setDisplayedText(current => currentTitle.slice(0, current.length + 1));
      }
    };

    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 75 : 150;
    const pauseTime = !isDeleting && displayedText === currentTitle ? 2000 : 0;

    if (pauseTime) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
    } else {
      timeoutId = setTimeout(handleTyping, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  // Reset when title changes
  useEffect(() => {
    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex(prev => (prev + 1) % titles.length);
    }
  }, [displayedText, isDeleting, titles.length]);

  // Memoized navigation handlers
  const gotohome = useCallback(() => navigate('/portfolio'), [navigate]);
  const checkoutResume = useCallback(() => navigate('/resume'), [navigate]);

  return (
    <main className="landing-container">
      <button className="cta resume-button" onClick={checkoutResume} aria-label="View Resume">
        <span className="hover-underline-animation">Resume</span>
        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16" aria-hidden="true">
          <path d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
        </svg>
      </button>

      <div className="landing-content">
        <h1 className="landing-title">Hi, I'm Chandu</h1>
        <h2 className="landing-subtitle" aria-live="polite">
          I'M A {displayedText}<span className="cursor">|</span>
        </h2>
        <p className="landing-description">
          I'm Chandu, a web developer skilled in React, Django, and desktop app development. 
          I enjoy creating clean, responsive designs and building efficient applications that make a difference.
        </p>

        <div className="landing-button-desktop">
          <button className="landing-button" onClick={gotohome} aria-label="View Portfolio">
            <div className="blob1" aria-hidden="true"></div>
            <div className="blob2" aria-hidden="true"></div>
            <div className="inner">Checkout My Portfolio</div>
          </button>
        </div>
      </div>

      <div className="landing-image">
        <img 
          src={mypic} 
          alt="Chandu - Web Developer" 
          loading="eager"
          width="400"
          height="500"
        />
      </div>

      <div className="landing-button-mobile">
        <button className="landing-button" onClick={gotohome} aria-label="View Portfolio">
          <div className="blob1" aria-hidden="true"></div>
          <div className="blob2" aria-hidden="true"></div>
          <div className="inner">Checkout My Portfolio</div>
        </button>
      </div>
    </main>
  );
}

export default Landing;