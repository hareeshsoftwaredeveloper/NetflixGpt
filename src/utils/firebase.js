// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdkks3jsbDb2b48LtzqmjGH9QspvtMiuQ",
  authDomain: "netflixgpt-2ed66.firebaseapp.com",
  projectId: "netflixgpt-2ed66",
  storageBucket: "netflixgpt-2ed66.appspot.com",
  messagingSenderId: "651301425374",
  appId: "1:651301425374:web:9d94c0f0c5f9c7acdaf24f",
  measurementId: "G-SFENXRKYHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()