import "../css/blog1.css";
import { Link } from "react-router-dom";
import copyCode from '../utils/copycode.js';
import Footer from "../pages/footer.jsx";
import img1 from "../assets/blog2/Intro to React JS.jpeg";
import img2 from "../assets/blog2/React JS components.jpeg";
import img3 from '../assets/blog2/Props in React JS as gift packages from parent to child component.jpeg'

const GettingStartedWithReactJS = () => {
    return (
        <>
            {/* Blog container */}
            <div className="blog-container">
                {/* Header Section */}
                <header className="header">
                    <h1>Getting Started with ReactJS: A Beginner's Guide</h1>
                </header>

                {/* Author information */}
                <p className="article-author" style={{ textAlign: "right" }}>
                    <strong>Blog post by:</strong> <i>Chandu Chitteti</i>
                </p>
                <hr />

                {/* Blog content */}
                <div className="blog-content-container">
                    <div className="blog-content-container-insider">
                        {/* Introduction Section */}
                        <div className="intro-section">
                            <h2>Introduction</h2>
                            <p>Hey there, fellow tech enthusiast! Have you ever experienced a webpage where clicking on a link doesn’t cause a reload, yet you’re seamlessly taken to the next page? Or wondered how data flows from one page to another, how passwords are securely stored in a hashed format, or how authentication and authorization are handled behind the scenes? The answer to all these questions lies in the fascinating world of web development. And if there’s one language that powers it all, it’s JavaScript. Today, we’re diving into a powerful framework that goes beyond the basics of HTML templates and leverages JavaScript to the fullest—<strong>ReactJS</strong>. In this post, we’ll cover the basics of ReactJS from scratch, complete with some engaging code snippets and their explanations. Let’s get this party started!</p>
                        </div>

                        {/* Section 1: What is ReactJS? */}
                        <div className="section">
                            <h2>1. What is ReactJS?</h2>
                            <p>ReactJS isn’t just another JavaScript library—it’s a game changer. Developed by Facebook, React helps developers build fast and interactive user interfaces (UIs) for single-page applications. It works by breaking the UI into small, reusable components (remember the word components well—catch up with it soon), making UI easier to manage and develop complex web applications.</p>
                            <img className="ref-image" src={img1} alt="intro-to-reactjs" />
                            <p>Imagine having a Lego set where each piece is a React component. You can connect these pieces to build a stunning UI structure while keeping each piece independent and reusable. Imagine bolts, washers, and nuts—they are actually two separate things, but combined, they help in tightening a wooden plank, right?</p>
                        </div>
                        <div className="section">
                            <h2>2. Understanding JSX</h2>
                            <p>
                                Going next to components, let's know about JSX — it stands for <b>JavaScript Extension </b>
                                and allows you to write HTML-like code inside JavaScript. This sounds super crazy, right?
                                But it is! Let's see a basic JSX code snippet that prints "Nice meeting you bro..!"
                                where we have a function inside which we use `return` to print a single line.
                            </p>

                            {/* JSX Code Snippet */}
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('code-jsx', e.target)}>Copy</button>
                                <pre>
                                    <code id="code-jsx">
                                        {`function Greeting() {
    return <h1>Nice meeting you bro..!</h1>;
}`}
                                    </code>
                                </pre>
                            </div>
                            <br />

                            <p>
                                You see that h1 tag? and thats inside a js function.. crazy right? <br />
                                JSX might look like a mashup of HTML and JavaScript, but under the hood,
                                it gets converted to standard JavaScript using tools like Babel. This means your
                                browser actually runs JavaScript, not JSX, making it both powerful and simple to use!
                            </p>
                        </div>

                        {/* Section 3: Understanding Components */}
                        <div className="section">
                            <h2>3. Understanding Components</h2>
                            <p>You remember nuts and bolts discussed above..? Then i got you.</p>
                            <p>Components are the heart and soul of React. Think of them as individual building blocks of your application. Whether it's a header, a button, or a whole section of the page, <i><u>everything can be a component in React</u></i>.</p>
                            <p>React components are broadly categorized into two types:</p>
                            <ul>
                                <li><strong>Functional Components:</strong> Simple JavaScript functions that return JSX. They are lightweight and easy to use.Just like mentioned above.</li>
                                <li><strong>Class-Based Components:</strong> More complex, requiring ES6 classes. They include additional features like lifecycle methods. sounds heavy? relax,..</li>
                            </ul>
                            <p>Since the React 16.8 update, functional components have been enhanced with <strong>Hooks</strong> (we will discuss about it later), allowing them to perform many tasks previously exclusive to class-based components. This update makes functional components more powerful and often the preferred choice in modern React development.</p>

                            {/* Functional Components */}
                            <h3>Functional Components</h3>
                            <p>Functional components are simple JavaScript functions that return a React element. Here's a quick example:</p>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('code-functional', e.target)}>Copy</button>
                                <pre>
                                    <code id="code-functional">
                                        {`function Greeting() { 
  return <h1>Hello, welcome to ReactJS!</h1>;
}`} </code>
<pre>
<code>
    {`      <Greeting /> 
     is the way of rendering the above component. Within the closed tag, 
     < FunctionName />
     `}
</code>
</pre>
                                </pre>
                            </div>
                                    
                            {/* Class Components */}
                            <h3>Class Components</h3>
                            <p>Before hooks became popular, class components were the go-to choice for handling state and lifecycle methods. Here’s how a class component looks:</p>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('code-class', e.target)}>Copy</button>
                                <pre>
                                    <code id="code-class">
                                        {`class Greeting extends React.Component {
    render() {
        return <h1>Hello, welcome to ReactJS!</h1>;
    }
}`}
                                    </code>
                                </pre>
                            </div> <br />
                            <p>You see the difference and difficulty levels of using a class based component VS the functional components and their developer friendlyness..? Love for functional components.</p>
                            <img className="ref-image" src={img2} alt="react-components" />
                            <p>Modern React leans heavily on functional components with hooks for simplicity and flexibility. Analyse the above image whixh talks about components.</p>
                        </div>
                        {/* Section 4: Props */}
                        <div className="section">
                            <h2>4. Props: The Data Carrier</h2>
                            <p>props (i.e., Properties) are like gift packages passed from a parent component to its child. They allow you to share data and customize components.</p>
                            <img className="ref-image" src={img3} alt="react-props" />
                            <h3>Example of Props</h3>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('code-props', e.target)}>Copy</button>
                                <pre>
                                    <code id="code-props">
                                        {`function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="React Learner" />
            <Welcome name="Component Master" />
        </div>
    );
}`}
                                    </code>
                                </pre>
                            </div>
                            <p>Props are <strong>read-only</strong>, ensuring a clear and predictable data flow.</p>
                            <p>Did you see what just happened? <br />The welcome function takes props and uses it to dynamically welcome the user based on the name that's been passed from the <code>App()</code> function.</p>
                            <p>Note: <br />
                                Closed tag of functionname (here,. Welcome) is the common way of rendering an entire component. Here, we are passing the <code>name</code> prop that has the content "React Learner" the first time, and "Component Master" the second time. So, we see two welcome messages.</p>
                            <div className="code-snippet">
                                <pre>
                                    <code id="code-props">
                                        {`Output :
Hello, React Learner! 
Hello, Component Master!  `}
                                    </code>
                                </pre>
                            </div>
                        </div> <br />
                        <div className="section">
                            <p>
                                In our next post we talk about react hooks , their types, each one in detail with example code snippets.
                            </p>
                        </div>
                        <div className="navigation-links">
                            {/* <Link to="/previous-page" className="nav-link">Previous Page</Link> */}
                            <Link to="/blogs/react-hooks" className="nav-link">Next Page</Link>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default GettingStartedWithReactJS;
