// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "moises-blog.firebaseapp.com",
  projectId: "moises-blog",
  storageBucket: "moises-blog.appspot.com",
  messagingSenderId: "823491874109",
  appId: "1:823491874109:web:9d5b2cdbf965a11157c954"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);