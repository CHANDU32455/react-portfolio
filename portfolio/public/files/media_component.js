// components/media_component.js

import React, { useState, useEffect } from 'react';
import '../css/blog1.css';

// Utility functions
import { initializeDB, saveBlobData, getAllBlobData, deleteBlobDataByType } from '../utils/indexeddb.js';

const MediaManager = () => {
    const [db, setDb] = useState(null);
    const [mediaType, setMediaType] = useState('');
    const [retrievedFiles, setRetrievedFiles] = useState([]);
    const [selectedTypeToClear, setSelectedTypeToClear] = useState(''); // For clearing selected types

    useEffect(() => {
        initializeDB('MediaDB', 'mediaStore')
            .then(setDb)
            .catch(console.error);
    }, []);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const metadata = { name: file.name, type: file.type, size: file.size };
            saveBlobData(db, 'mediaStore', file, metadata)
                .then(() => console.log('File saved successfully'))
                .catch(console.error);
        }
    };

    const handleRetrieve = (type) => {
        getAllBlobData(db, 'mediaStore')
            .then((files) => {
                setRetrievedFiles(
                    type ? files.filter((file) => file.metadata?.type.startsWith(type)) : files
                );
            })
            .catch(console.error);
    };

    const handleClearData = () => {
        if (!selectedTypeToClear) {
            alert('Please select a media type to clear');
            return;
        }

        deleteBlobDataByType(db, 'mediaStore', selectedTypeToClear)
            .then((message) => {
                alert(message);
                handleRetrieve(); // Optionally reload the list of files
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div
            className="section"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                flexDirection: 'column',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#f9f9f9',
                textAlign: 'center', // Ensures text alignment within the container
            }} >

            <div style={{ width: '80%', maxWidth: '500px', marginBottom: '20px' }}>
                <header style={{ marginBottom: '20px' }}>
                    <h1>Interactive Example Test form:</h1>
                </header>
                <h2>Upload Media Files</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="mediaType">Select Type: </label>
                    <select
                        id="mediaType"
                        value={mediaType}
                        onChange={(e) => setMediaType(e.target.value)}
                        style={{ margin: '0 10px', padding: '5px', width: '100%' }}
                    >
                        <option value="">--Choose Type--</option>
                        <option value="image">Image</option>
                        <option value="audio">Audio</option>
                        <option value="video">Video</option>
                    </select>
                </div>
                <input
                    type="file"
                    accept={mediaType ? `${mediaType}/*` : '*/*'}
                    onChange={handleUpload}
                    disabled={!mediaType}
                    style={{ marginTop: '10px', width: '100%' }}
                />
            </div>

            <div style={{ width: '80%', maxWidth: '500px', marginBottom: '20px' }}>
                <h2>Clear Data</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="clearType">Select Type to Clear: </label>
                    <select
                        id="clearType"
                        value={selectedTypeToClear}
                        onChange={(e) => setSelectedTypeToClear(e.target.value)}
                        style={{ margin: '0 10px', padding: '5px', width: '100%' }}
                    >
                        <option value="">--Select Media Type--</option>
                        <option value="image">Image</option>
                        <option value="audio">Audio</option>
                        <option value="video">Video</option>
                    </select>
                </div>
                <button
                    onClick={handleClearData}
                    disabled={!db}
                    style={{
                        marginTop: '10px',
                        padding: '10px 20px',
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        width: '50%',
                    }}
                >
                    Clear Selected Data
                </button>
            </div>

            <div style={{ width: '80%', maxWidth: '500px' }}>
                <h2>Retrieve Media Files</h2>
                <div style={{ marginBottom: '10px' }}>
                    <button
                        onClick={() => handleRetrieve('image')}
                        disabled={!db}
                        style={{ margin: '0 5px', padding: '10px 20px', width: '45%' }}
                    >
                        Get Images
                    </button>
                    <button
                        onClick={() => handleRetrieve('audio')}
                        disabled={!db}
                        style={{ margin: '0 5px', padding: '10px 20px', width: '45%' }}
                    >
                        Get Audio
                    </button>
                    <button
                        onClick={() => handleRetrieve('video')}
                        disabled={!db}
                        style={{ margin: '0 5px', padding: '10px 20px', width: '45%' }}
                    >
                        Get Videos
                    </button>
                    <button
                        onClick={() => handleRetrieve(null)}
                        disabled={!db}
                        style={{ margin: '0 5px', padding: '10px 20px', width: '45%' }}
                    >
                        Get All Media
                    </button>
                </div>

                <div>
                    {retrievedFiles.length === 0 ? (
                        <p style={{ fontSize: '18px', color: '#666' }}>Nothing found, dude...</p>
                    ) : (
                        retrievedFiles.map((file, index) => (
                            <div
                                key={index}
                                style={{
                                    marginBottom: '15px',
                                    border: '1px solid #ccc',
                                    padding: '10px',
                                    borderRadius: '5px',
                                }}
                            >
                                {file.metadata?.type.startsWith('image/') && (
                                    <img
                                        src={URL.createObjectURL(file.blob)}
                                        alt={file.metadata.name}
                                        style={{ maxWidth: '100px', display: 'block' }}
                                    />
                                )}
                                {file.metadata?.type.startsWith('audio/') && (
                                    <audio controls style={{ display: 'block' }}>
                                        <source
                                            src={URL.createObjectURL(file.blob)}
                                            type={file.metadata.type}
                                        />
                                    </audio>
                                )}
                                {file.metadata?.type.startsWith('video/') && (
                                    <video controls style={{ maxWidth: '200px', display: 'block' }}>
                                        <source
                                            src={URL.createObjectURL(file.blob)}
                                            type={file.metadata.type}
                                        />
                                    </video>
                                )}
                                <p>{file.metadata?.name}</p>
                            </div>
                        ))
                    )}
                    <br />
                    <i>What ever is given into the form lies only on your local db not online.</i>
                </div>
            </div>
        </div>
    );
};

export default MediaManager;
