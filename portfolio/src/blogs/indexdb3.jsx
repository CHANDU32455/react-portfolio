import React from 'react';
import '../css/blog1.css';
import Footer from "../pages/footer.js";
import Contact from "../pages/contact.js";
import copyCode from '../utils/copycode.js';
import MediaManager from '../components/media_component.js';

const IndexedDBadvanced = () => {
    return (
        <>
            <div className="blog-container">
                {/* Header Section */}
                <header className="header">
                    <h1>Unlock IndexedDB Superpowers: Store & Retrieve Blobs Like a Pro!</h1>
                </header>

                {/* Author Information */}
                <p className="article-author" style={{ textAlign: "right" }}>
                    <strong>Blog post by:</strong> <i>Chandu Chitteti</i>
                </p>
                <hr />

                {/* Blog Content */}
                <div className="blog-content-container">
                    <div className="blog-content-container-insider">

                        {/* Introduction Section */}
                        <div className="intro-section">
                            <h2>Welcome to the Blob Party 🎉</h2>
                            <p>
                                Alright, no more delay, Lets dive deep into the magical ocean of IndexedDB.
                                Forget boring localStorage and those tiresome cookie alerts. With IndexedDB, you’re about to
                                become the <b>File Whisperer</b>.
                                <p>Saving files is not so easy as they need to be stored in binary format, they need to be handled properly while saving them and retrieving them.There is something called MetaData(Data about data) that helps in this retrievel process and metadata has to be created at the time we save things up.</p>
                            </p>
                        </div>

                        {/* Step 1 */}
                        <div className="section">
                            <h2>Step 1: Setting Up Your Vault 🏰</h2>
                            <p>
                                First things first – your media files need a home, and IndexedDB is the real estate king.
                                Ofcourse we have set our db previously,. but i provided a basic view for understanding.
                                Here’s how you create the perfect vault to lock in all that data:
                            </p>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('idb-setup', e.target)}>Copy</button>
                                <pre>
                                    <code id="idb-setup">
                                        {`export const initializeDB = (dbName, storeName) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(
            storeName)) {
                db.createObjectStore(storeName, 
                { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
};`}
                                    </code>
                                </pre>
                            </div>
                            <p>
                                And voila! Your IndexedDB is ready. This isn’t just a house; it’s a penthouse for your blobs.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="section">
                            <h2>Step 2: Blob It Like It’s Hot 🔥</h2>
                            <p>
                                Time to fill that vault! Whether it’s an audio clip of your cat meowing
                                or a video of your dog doing the moonwalk, IndexedDB’s got you covered. Here’s the blob magic:
                            </p>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('save-blob', e.target)}>Copy</button>
                                <pre>
                                    <code id="save-blob">
                                        {`export const saveBlobData = (db, storeName, blob, metadata) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);

        const data = {
            blob, // Actual file data
            metadata, // Associated metadata
        };

        const request = store.add(data);
        request.onsuccess = () => resolve();
        request.onerror = (err) => reject(err);
    });
};`}
                                    </code>
                                </pre>
                            </div>
                            <p>
                                Boom 💥 – your file is now stored. Metadata included. It’s like saving the Mona Lisa, but cooler.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="section">
                            <h2>Step 3: Fetch It Back Like a Pro 📥</h2>
                            <p>
                                What’s the point of saving files if you can’t show them off? Let’s retrieve those blobs
                                and make them shine:
                            </p>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('fetch-blob', e.target)}>Copy</button>
                                <pre>
                                    <code id="fetch-blob">
                                        {`export const getAllBlobData = (db, storeName) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);

        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = (err) => reject(err);
    });
};`}
                                    </code>
                                </pre>
                            </div>
                            <p>
                                Just like that, your files are back in action. Whether it’s a gallery or a playlist,
                                the possibilities are endless. Your blobs, your rules!
                            </p>
                        </div>

                        {/* Advanced Tips */}
                        <div className="section">
                            <h2>Advanced: Delete Like a Ninja 🥷</h2>
                            <p>
                                Too much clutter? No worries. You can surgically remove files by type, like a pro ninja:
                            </p>
                            <div className="code-snippet">
                                <button className="copy-btn" onClick={(e) => copyCode('delete-blob', e.target)}>Copy</button>
                                <pre>
                                    <code id="delete-blob">
                                        {`export const getBlobDataByName = (db, storeName, name) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);

        const request = store.getAll(); // Fetch all files
        request.onsuccess = () => {
            const files = request.result || [];
            const matchingFile = files.find((file) => file?.metadata?.name === name); // Safely check metadata
            if (matchingFile) {
                resolve(matchingFile);
            } else {
                reject(new Error("File not found or metadata missing"));
            }
        };
        request.onerror = (err) => reject(err);
    });
};`}
                                    </code>
                                </pre>
                            </div>
                            <p>
                                Now your IndexedDB is neat and tidy – no Marie Kondo required!
                            </p>
                        </div>

                        <div className="section">
                            <h2>Code Overview:</h2>
                            Wanna look at the code once? Well, here it goes. We have 2 files. One for <code>DB</code> and another is <code>component</code>. <br />
                            <ul>
                                <li>
                                    <code>Indexdb.js</code>:
                                    <a href="/files/indexeddb.js" download="indexeddb.js">Download</a>
                                </li>
                                <p>The next file we have to look at is the Component file, namely:</p>
                                <li>
                                    <code>media_component.js</code>:
                                    <a href="/files/media_component.js" download="media_component.js">Download</a>
                                </li>
                            </ul>
                            <p>I guess you guys can understand it easily as we know JS.</p>
                        </div>


                        {/* Conclusion */}
                        <div className="section">
                            <h2>Closing Thoughts 💡</h2>
                            <p>
                                Congratulations! You’re now the master of IndexedDB blob handling. Go forth and build
                                that gallery, music app, or personal meme collection. Just remember – with great power
                                comes great responsibility (do not accidentally delete your cat videos). Thats it for today, guess we have covered most parts, If there is anything to talk about feel free to connect with me. We will meet again with some new topic. Till then, happy coding!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <MediaManager />
            <Contact />
            <Footer />
        </>
    );
};

export default IndexedDBadvanced;
