// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "podcast-f476c.firebaseapp.com",
  projectId: "podcast-f476c",
  storageBucket: "podcast-f476c.appspot.com",
  messagingSenderId: "102133903222",
  appId: "1:102133903222:web:a00f2defa85555aab0d457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);