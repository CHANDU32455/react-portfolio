// utils/indexeddb.js

export const initializeDB = (dbName, storeName) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (err) => reject(err);
    });
};


export const saveBlobData = (db, storeName, blob, metadata) => {
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
};


export const getBlobData = (db, storeName, id) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);

        const request = store.get(id);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

export const getAllBlobData = (db, storeName) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);

        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = (err) => reject(err);
    });
};

export const getBlobDataByName = (db, storeName, name) => {
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
};

export const deleteBlobDataByType = (db, storeName, type) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);

        const request = store.getAll();
        request.onsuccess = () => {
            const filesToDelete = request.result.filter((file) => file.metadata?.type.startsWith(type));
            if (filesToDelete.length > 0) {
                filesToDelete.forEach((file) => {
                    const deleteRequest = store.delete(file.id); // Delete the file by its ID
                    deleteRequest.onerror = (err) => reject(err);
                });
                resolve(`${filesToDelete.length} ${type} files deleted.`);
            } else {
                reject(new Error('No files found for the given type.'));
            }
        };
        request.onerror = (err) => reject(err);
    });
};

