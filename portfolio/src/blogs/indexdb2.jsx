import { Link } from 'react-router-dom';
import '../css/blog1.css';
import Footer from "../pages/footer.jsx";
import copyCode from '../utils/copycode.js';
import indexedbd_outcome from '../assets/indexdb/p2-outcome.png'

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
                            <p>
                                Hey there, fellow React enthusiasts! Ready to dive into the world of
                                IndexedDB? Today, we'll cover how to set it up in two ways:
                                using the super-smooth <code>idb</code> library.
                                come-on,let's make IndexedDB our new best friend!
                            </p>
                            <p>Talking about indexedDB in single statement, IndexedDB is a low-level API for storing large amounts of structured data at client-side, including files and blobs.</p>
                            <br />
                        </div>

                        {/* Requirements Installation */}
                        <div className="section">
                            <h2>Step 1: Install What You Need</h2>
                            <p>Before we start, here’s the boring-but-important checklist:</p>
                            <ul>
                                <li>React project set up (<code>npx create-react-app appname</code> if not).</li>
                                <li>Modern browser that loves IndexedDB (hint: Chrome, Firefox, etc.).</li>
                                <li>For the <code>idb</code> method, install the library:</li>
                            </ul>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('install-idb', e.target)}>Copy</button>
                                <pre>
                                    <code id="install-idb">
                                        npm install idb
                                    </code>
                                </pre>
                            </div>
                            <p>The <code>idb</code> package provides a modern promise-based wrapper for IndexedDB, making it easier to work with.</p>

                        </div> <br />

                        {/* Method 1: idb Library */}
                        <div className="section">
                            <h2>Step 2: Using the idb Library</h2>
                            <h3>Create a utils folder</h3>
                            <ul>
                                <li>
                                    Create a folder named <code>utils</code> in your project’s <code>src</code> directory.
                                    <ul>
                                        <li>This folder will house reusable utility functions.</li>
                                        <li>
                                            The name <code>utils</code> is commonly used for organizing helper functions and logic unrelated to UI components.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Inside the <code>utils</code> folder, create a file named <code>indexedDB.js</code>.
                                </li>
                                <li>
                                    Add the following code: <br />
                                    <div className="code-snippet">
                                        <button className="copy-btn" onClick={(e) => copyCode('code-functional', e.target)}>Copy</button>
                                        <pre>

                                            <pre>
                                                <code id="idb-dbsetup">
                                                    {`
import { openDB } from 'idb';

// Initialize the database
export const initDB = async () => {
    return await openDB('myDatabase', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.
            contains('myStore')) {
                db.createObjectStore('myStore', 
                { keyPath: 'id', autoIncrement: true });
            }
        },
    });
};
    // Function to add data to the database
export const addData = async (data) => {
    const db = await initDB();
    const tx = db.transaction('myStore', 'readwrite');
    await tx.store.add(data);
    await tx.done;
};

// Function to retrieve data by ID from the database
export const getData = async (id) => {
    const db = await initDB();
    return await db.get('myStore', id);
};

// Function to retrieve all data from the database
export const getAllData = async () => {
    const db = await initDB();
    return await db.getAll('myStore');
};

// Function to delete data by ID from the database
export const deleteData = async (id) => {
    const db = await initDB();
    const tx = db.transaction('myStore', 'readwrite');
    await tx.store.delete(id);
    await tx.done;
};`}
                                                </code>
                                            </pre>
                                        </pre>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='section'>
                            <h2>Step3 :Create a Component to Test the Functions</h2>
                            <p>In the <code>src</code> folder, create a <code>components</code> folder and add a file named <code>DBTest.js</code>. This component will test the IndexedDB functions.</p>
                            <p>Code for <code>DBTest.js</code>:</p>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('idb-setup', e.target)}>Copy</button>
                                <pre>
                                    <code id="idb-setup">
                                        {`import React, { useState } from 'react';
import { addData, getData, getAllData, deleteData } from '../utils/indexedDB';

function DBTest() {
    const [addedData, setAddedData] = useState('');
    const [retrievedData, setRetrievedData] = useState(null);
    const [idToRetrieve, setIdToRetrieve] = useState('');
    const [idToDelete, setIdToDelete] = useState('');
    const [idToUpdate, setIdToUpdate] = useState('');
    const [updatedContent, setUpdatedContent] = useState('');

    // Function to add data
    const handleAddData = async () => {
        const newData = { content: addedData };
        await addData(newData);
        alert('Data added!');
        setAddedData('');
    };

    // Function to fetch all data
    const handleFetchAllData = async () => {
        const allData = await getAllData();
        setRetrievedData(allData);
    };

    // Function to fetch data by ID
    const handleFetchDataById = async () => {
        const data = await getData(Number(idToRetrieve));
        setRetrievedData(data ? [data] : 'No data found for the given ID.');
    };

    // Function to delete data by ID
    const handleDeleteData = async () => {
        await deleteData(Number(idToDelete));
        alert('Data deleted!');
        setIdToDelete('');
    };

    const handleUpdateData = async () => {
      const id = Number(idToUpdate);
      await addData({ id, content: updatedContent });
      alert('Data updated!');
      setIdToUpdate('');
      setUpdatedContent('');
  };
  

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>CRUD Operations with IndexedDB</h1>

            {/* Add Data Section */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={addedData}
                    onChange={(e) => setAddedData(e.target.value)}
                    placeholder="Enter data to add"
                    style={{ padding: '10px', marginRight: '10px', width: '200px' }}
                />
                <button onClick={handleAddData} style={{ padding: '10px' }}>
                    Add Data
                </button>
            </div>

            {/* Fetch All Data Section */}
            <div style={{ marginBottom: '20px' }}>
                <button onClick={handleFetchAllData} style={{ padding: '10px' }}>
                    Fetch All Data
                </button>
            </div>

            {/* Fetch Data by ID Section */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="number"
                    value={idToRetrieve}
                    onChange={(e) => setIdToRetrieve(e.target.value)}
                    placeholder="Enter ID to fetch"
                    style={{ padding: '10px', marginRight: '10px', width: '200px' }}
                />
                <button onClick={handleFetchDataById} style={{ padding: '10px' }}>
                    Fetch Data by ID
                </button>
            </div>

            {/* Update Data Section */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="number"
                    value={idToUpdate}
                    onChange={(e) => setIdToUpdate(e.target.value)}
                    placeholder="Enter ID to update"
                    style={{ padding: '10px', marginRight: '10px', width: '150px' }}
                />
                <input
                    type="text"
                    value={updatedContent}
                    onChange={(e) => setUpdatedContent(e.target.value)}
                    placeholder="Enter updated content"
                    style={{ padding: '10px', marginRight: '10px', width: '200px' }}
                />
                <button onClick={handleUpdateData} style={{ padding: '10px' }}>
                    Update Data
                </button>
            </div>

            {/* Delete Data Section */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="number"
                    value={idToDelete}
                    onChange={(e) => setIdToDelete(e.target.value)}
                    placeholder="Enter ID to delete"
                    style={{ padding: '10px', marginRight: '10px', width: '200px' }}
                />
                <button onClick={handleDeleteData} style={{ padding: '10px' }}>
                    Delete Data by ID
                </button>
            </div>

            {/* Display Retrieved Data */}
            {retrievedData && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Retrieved Data:</h2>
                    <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
                        {JSON.stringify(retrievedData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}
export default DBTest;`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <br />

                        <div className='section'>
                            <h2>Step 4: Import and Test the Component</h2>
                            <ul>
                                <p>        Open <code>App.js</code> and import the <code>DBTest</code> component:</p>
                                <div className="code-snippet">
                                    <button className="copy-btn" onClick={(e) => copyCode('code-navbar', e.target)}>Copy</button>
                                    <pre>
                                        <code id="code-navbar">
                                            {`
import DBTest from './components/DBTest';
                                        `}
                                        </code>
                                    </pre>
                                </div>
                                <p>Render the component:</p>
                                <div className="code-snippet">
                                    <button className="copy-btn" onClick={(e) => copyCode('code-navbar', e.target)}>Copy</button>
                                    <pre>
                                        <code id="code-navbar">
                                            {`
import DBTest from "./components/DBTest";

function App() {
return(
 <DBTest/>
)};

export default App;
                                   
                                        `}
                                        </code>
                                    </pre>
                                </div>

                            </ul>
                            <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
                                <p>
                                    You can also import it and create a link using the <code>&lt;Link&gt;</code> tag from{" "}
                                    <code>react-router-dom</code>. If you haven’t already, install it using:
                                </p>
                                <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                                    npm install react-router-dom
                                </pre>
                                <p>
                                    For example, you could define a path like <code>/DBTest</code> for navigation.
                                    However, for now, I’m simply rendering it.
                                </p>
                            </div>
                            <p>Start your application and navigate to the page.</p>
                        </div>

                        <div className='section'>
                            <h2>Final outcome</h2>
                            <img style={{ maxWidth: "100%" }} src={indexedbd_outcome} alt="index-db overview" />
                            <p>This is a component with basic CRUD operations and may varies according to yur needs.
                                Note that the data remains persistant accross sessions, doesn't matter even if you close your browser.</p>
                        </div>
                        <br />
                        {/* Wrap Up Section */}
                        <div className="section">
                            <h2>Wrapping It Up</h2>
                            <p>
                                That’s it for setting up IndexedDB in React! You can choose to use the
                                developer-friendly <code>idb</code> library for ease of implementation.
                                Alternatively, if you’re interested in setting it up without using any library
                                (raw setup), let me know, and we can work on it together.

                                If you have any questions or run into issues with this setup, feel free to reach
                                out for help. In our next article, we’ll dive into advanced operations you can
                                perform with these setups.

                                Until then, happy coding and exploring IndexedDB!
                            </p>

                        </div>
                        <div className="navigation-links">
                            {/* <Link to="/previous-page" className="nav-link">Previous Page</Link> */}
                            <Link to="/blogs/getting-started-with-indexeddb" className="nav-link">Prev Page</Link>
                            <Link to="/blogs/Advanced-indexedDB" className="nav-link">Next Page</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default IndexedDBsetup;
