import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set worker from CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2 style={{ color: '#333', marginBottom: '1rem' }}>My Resume</h2>

      <div
        style={{
          overflowX: 'auto',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Document
          file="/Chandu_Chitteti_Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading resume..."
          error="Failed to load the resume."
        >
          {Array.from(new Array(numPages || 0), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={Math.min(width * 0.9, 800)}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>

      <a
        href="/Chandu_Chitteti_Resume.pdf"
        download
        style={{
          marginTop: '1rem',
          color: '#fdd835',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          textDecoration: 'underline',
        }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
