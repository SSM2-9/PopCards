// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaz1keGnl5iHBUechaXhQh2vg7R8UVhUg",
  authDomain: "popcards-3b0b1.firebaseapp.com",
  projectId: "popcards-3b0b1",
  storageBucket: "popcards-3b0b1.appspot.com",
  messagingSenderId: "877257496369",
  appId: "1:877257496369:web:91a16fbfceadb579a7c210",
  measurementId: "G-J65VRJYEDZ"
};

// Initialize Firebase (to avoid re-initialization in case of hot-reloading or SSR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
