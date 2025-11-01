// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn6TyO9c0pb_af1q8MN-g1upbI5HcF5Bg",
  authDomain: "netflixgpt-55719.firebaseapp.com",
  projectId: "netflixgpt-55719",
  storageBucket: "netflixgpt-55719.firebasestorage.app",
  messagingSenderId: "819595056834",
  appId: "1:819595056834:web:465c471c030d15deda4d5b",
  measurementId: "G-L20VL3RB88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
