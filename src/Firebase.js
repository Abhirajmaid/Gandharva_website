// Import the functions you need from the SDKs you need
import firebase from "firebase";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDBAuV923uyjHbWPQ9MCE3fOBw3KnLyWM",
  authDomain: "gandharva-site.firebaseapp.com",
  projectId: "gandharva-site",
  storageBucket: "gandharva-site.appspot.com",
  messagingSenderId: "685300334143",
  appId: "1:685300334143:web:6cd7a499b2c6641020028a",
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };
