import React from 'react';
import '../css/blog1.css';
import Footer from "../pages/footer.js";
import Contact from "../pages/contact.js";
import copyCode from '../utils/copycode.js';

const IndexedDBsetup = () => {
    return (
        <>
            <div className="blog-container">
                {/* Header Section */}
                <header className="header">
                    <h1>IndexedDB Setup in React: A Crazy-Friendly Guide!</h1>
                </header>

                {/* Author Information */}
                <p className="article-author" style={{ textAlign: "right" }}>
                    <strong>Blog post by:</strong> <i>Chandu Chitteti</i>
                </p>
                <hr />

                {/* Guide Content */}
                <div className="blog-content-container">
                    <div className="blog-content-container-insider">
                        {/* Introduction Section */}
                        <div className="intro-section">
                            <h2>Introduction</h2>

                        </div>


                        {/* Method 1: idb Library */}
                        <div className="section">
                            <h2>Step 2: Using the idb Library</h2>
                            <h3>Create a utils folder</h3>

                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('idb-setup', e.target)}>Copy</button>
                                <pre>
                                    <code id="idb-setup">
                                        {`
code goes here.
`}
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div className='section'>

                        </div>


                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    );
};

export default IndexedDBsetup;
