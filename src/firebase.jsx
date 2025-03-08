// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDq4F2ZYcbURegjOZJi_tab5BcAq9R2Wmg",
    authDomain: "quantum-accounting.firebaseapp.com",
    projectId: "quantum-accounting",
    storageBucket: "quantum-accounting.firebasestorage.app",
    messagingSenderId: "640833327935",
    appId: "1:640833327935:web:9dc9c388ec6bdb7d30f98a",
    measurementId: "G-XQW4N19M7M"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, collection, addDoc };
