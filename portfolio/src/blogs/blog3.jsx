import React from 'react';
import '../css/blog1.css'; 
import copyCode from '../utils/copycode.js';
import Footer from '../pages/footer.jsx';
const FlexboxGuide = () => {
    return (
        <>
            <div className="blog-container">
                {/* Header Section */}
                <header className="header">
                    <h1>Understanding Flexbox: A Comprehensive Guide</h1>
                </header>
                {/* Author information */}
                <p className="article-author" style={{ textAlign: "right" }}>
                    <strong>Blog post by:</strong> <i>Chandu Chitteti</i>
                </p>
                <hr />
                {/* Guide content */}
                <div className="blog-content-container">
                    <div className="blog-content-container-insider">
                        {/* Introduction Section */}
                        <div className="intro-section">
                            <h2>Introduction</h2>
                            <p>
                                Flexbox (short for Flexible Box Layout) is a layout model in CSS designed to provide a more efficient way to arrange, align, and distribute space among items within a container. It excels in creating flexible, responsive layouts by offering control over alignment, spacing, and order of elements, regardless of their size.
                            </p>
                        </div>

                        {/* Section 1: How Flexbox Works */}
                        <div className="section">
                            <h2>How Flexbox Works</h2>
                            <ul>
                                <li>The container becomes a flex container when <code>display: flex</code> is applied to it.</li>
                                <li>The child elements within the container become flex items.</li>
                            </ul>
                        </div>

                        {/* Section 2: Flex Container Properties */}
                        <div className="section">
                            <h2>Flex Container Properties</h2>
                            <p>These properties are applied to the container to control the behavior of the flex items inside it.</p>
                            <ul>
                                <li><strong>display:</strong> <code>flex</code> defines the container as a flex container. <code>inline-flex</code> makes it behave like an inline element.</li>
                                <li><strong>flex-direction:</strong> Specifies the direction of the flex items. Options include <code>row</code> (default), <code>row-reverse</code>, <code>column</code>, and <code>column-reverse</code>.</li>
                                <li><strong>justify-content:</strong> Aligns items along the main axis. Options include <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, and <code>space-evenly</code>.</li>
                                <li><strong>align-items:</strong> Aligns items along the cross axis. Options include <code>stretch</code> (default), <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, and <code>baseline</code>.</li>
                                <li><strong>align-content:</strong> Controls the alignment of multiple lines of items. Options include <code>stretch</code>, <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, and <code>space-evenly</code>.</li>
                                <li><strong>flex-wrap:</strong> Specifies whether items should wrap onto multiple lines. Options include <code>nowrap</code> (default), <code>wrap</code>, and <code>wrap-reverse</code>.</li>
                                <li><strong>gap:</strong> Defines the space between flex items. Can be used as <code>row-gap</code> and <code>column-gap</code>, or the shorthand <code>gap</code>.</li>
                            </ul>
                        </div>

                        {/* Section 3: Flex Item Properties */}
                        <div className="section">
                            <h2>Flex Item Properties</h2>
                            <p>These properties are applied to individual items inside the flex container.</p>
                            <ul>
                                <li><strong>order:</strong> Defines the order of the flex items. Lower numbers appear first. Default is <code>0</code>.</li>
                                <li><strong>flex-grow:</strong> Defines how much the flex item will grow relative to other items. Default is <code>0</code>.</li>
                                <li><strong>flex-shrink:</strong> Defines how much the flex item will shrink relative to others when space is limited. Default is <code>1</code>.</li>
                                <li><strong>flex-basis:</strong> Defines the initial size of the item before space distribution. Default is <code>auto</code>.</li>
                                <li><strong>flex:</strong> Shorthand for <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>.</li>
                                <li><strong>align-self:</strong> Overrides <code>align-items</code> for an individual item. Options include <code>auto</code> (default), <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>baseline</code>, and <code>stretch</code>.</li>
                            </ul>
                        </div>

                        {/* Section 4: Flexbox Axes */}
                        <div className="section">
                            <h2>Flexbox Axes</h2>
                            <p>Flexbox operates along two axes:</p>
                            <ul>
                                <li><strong>Main Axis:</strong> Defined by the <code>flex-direction</code> property. Horizontal by default (row).</li>
                                <li><strong>Cross Axis:</strong> Perpendicular to the main axis. Vertical by default (row).</li>
                            </ul>
                        </div>

                        {/* Section 5: Common Use Cases */}
                        <div className="section">
                            <h2>Common Use Cases</h2>
                            <h3>Centering an Element</h3>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('code-centering', e.target)}>Copy</button>
                                <pre>
                                    <code id="code-centering">
                                        {`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`}
                                    </code>
                                </pre>
                            </div>

                            <h3>Navbar with Space Between Items</h3>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('code-navbar', e.target)}>Copy</button>
                                <pre>
                                    <code id="code-navbar">
                                        {`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}`}
                                    </code>
                                </pre>
                            </div>

                            <h3>Responsive Grid</h3>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('code-grid', e.target)}>Copy</button>
                                <pre>
                                    <code id="code-grid">
                                        {`.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.item {
  flex: 1 1 calc(33.33% - 10px); /* 3 items per row */
  box-sizing: border-box;
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FlexboxGuide;
