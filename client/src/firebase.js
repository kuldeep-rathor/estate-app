// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7b77a.firebaseapp.com",
  projectId: "mern-estate-7b77a",
  storageBucket: "mern-estate-7b77a.firebasestorage.app",
  messagingSenderId: "807507258609",
  appId: "1:807507258609:web:dd555203ec103ab3c38d50",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
