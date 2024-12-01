import React, { useState } from "react";

const CodeSnippet = ({ code }) => {
  const [copyStatus, setCopyStatus] = useState("Copy");

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy"), 2000);
    });
  };

  // Inline Styles
  const styles = {
    snippetContainer: {
      position: "relative",
      backgroundColor: "#f4f4f4",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "15px",
      overflowX: "auto",
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: "14px",
      color: "#333",
      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
      margin: "15px 0",
      maxWidth: "100%",
      wordWrap: "break-word",
      whiteSpace: "pre-wrap",
    },
    copyButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "5px 10px",
      fontSize: "12px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    copyButtonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.snippetContainer}>
      <button
        style={styles.copyButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        onClick={handleCopy}
      >
        {copyStatus}
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
