// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQV-DPSuP-L7a5sfNy115stmYUjjYOY-A",
  authDomain: "booo-d2dd4.firebaseapp.com",
  projectId: "booo-d2dd4",
  storageBucket: "booo-d2dd4.firebasestorage.app",
  messagingSenderId: "428930647713",
  appId: "1:428930647713:web:4ae84fcbe3fa011c8fd2e0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
