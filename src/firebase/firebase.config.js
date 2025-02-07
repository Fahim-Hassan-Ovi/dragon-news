// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD6NqfV39HlFYTA_QLpMI9OaUvCX8OyUM",
  authDomain: "dragon-news-410c5.firebaseapp.com",
  projectId: "dragon-news-410c5",
  storageBucket: "dragon-news-410c5.firebasestorage.app",
  messagingSenderId: "160567957041",
  appId: "1:160567957041:web:9e7873ecf66e85bfd12710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;