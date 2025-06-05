// src/App.js
import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore";

function FireBaseTest() {
  const [message, setMessage] = useState("");

  // Function to fetch data from Firestore
  const fetchData = async () => {
    try {
      // Reference to the test document
      const docRef = doc(db, "testCollection", "testCollection");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Set the message from Firestore
        setMessage(docSnap.data().message);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Firestore Connectivity Test</h1>
      <p>Message from Firestore: {message}</p>
    </div>
  );
}

export default FireBaseTest;