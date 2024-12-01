import React, { useEffect, useState } from 'react';
import resume from '../assets/ChanduChitteti.pdf';

const Resume = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dynamic styles based on dimensions
  const topBarStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: `${Math.min(dimensions.height * 0.02, 20)}px`, // Dynamic padding
    textAlign: 'center',
    fontSize: `${Math.min(dimensions.width * 0.05, 24)}px`, // Font size responsive to width
    flexShrink: 0,
  };

  const iframeStyle = {
    width: '100%',
    height: `${dimensions.height * 0.85}px`, // Dynamic height based on viewport height
    border: 'none',
    minWidth: '600px', // Minimum width to allow scrolling
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
    }}>
      {/* Top Bar */}
      <div style={topBarStyle}>
        My Resume
      </div>

      {/* Horizontal Scrolling Area */}
      <div style={{
        overflowX: 'auto',
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
      }}>
        <iframe
          src={resume} // Directly set the src to the imported PDF
          title="Resume PDF"
          style={iframeStyle}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
