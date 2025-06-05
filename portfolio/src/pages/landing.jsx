import React, { useState, useEffect, useMemo } from 'react';
import mypic from '../assets/mypic2.jpg';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';
function Landing() {
  const titles = useMemo(() => [
    "WEB DESIGNER",
    "REACT DEVELOPER",
    "DJANGO DEVELOPER",
    "FLUTTER LOVER",
  ], []);

  const navigate = useNavigate();

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex];

      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const typingInterval = setInterval(handleTyping, 150);
    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  const gotohome = () => {
    navigate('/portfolio');
  };
  const checkoutResume = () => {
    navigate('/resume');
  };
  return (
    <main className="landing-container">
      <button className="cta resume-button" onClick={checkoutResume}>
        <span className="hover-underline-animation"> Resume </span>
        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
          <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
        </svg>
      </button>
      <div className="landing-content">
        <h1 className="landing-title">Hi, I'm Chandu</h1>
        <h2 className="landing-subtitle">I'M A {displayedText}<span className="cursor">|</span></h2>
        <p className="landing-description">
          I'm Chandu, a web developer skilled in React, Django, and desktop app development. I enjoy creating clean, responsive designs and building efficient applications that make a difference.
        </p>
        <button class="landing-button" onClick={gotohome}>
          <div class="blob1"></div>
          <div class="blob2"></div>
          <div class="inner">Checkout My Portfolio</div>
        </button>
      </div>
      <div className="landing-image">
      <img style={{ maxWidth: "450px" }} src={mypic} alt="Web Designer" />
      </div>
    </main>
  );
}

export default Landing;
