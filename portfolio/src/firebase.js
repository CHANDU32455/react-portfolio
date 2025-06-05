// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLmsxpbtOf8jG7_Mqt1kA-0uAK1JxxNzE",
  authDomain: "portfolio-ea261.firebaseapp.com",
  projectId: "portfolio-ea261",
  storageBucket: "portfolio-ea261.firebasestorage.app",
  messagingSenderId: "967851444256",
  appId: "1:967851444256:web:4cf246c977e2943f5c1445",
  measurementId: "G-4TS410HPS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Initialize Firestore
const db = getFirestore(app); // This is the Firestore instance
export { db }; // Export Firestore instance for use in other components

