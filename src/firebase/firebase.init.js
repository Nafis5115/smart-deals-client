// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCST1-9mcK8wEVlRRZqmt7PFrCkDSGR3Vk",
  authDomain: "smart-deals-3565b.firebaseapp.com",
  projectId: "smart-deals-3565b",
  storageBucket: "smart-deals-3565b.firebasestorage.app",
  messagingSenderId: "240675494194",
  appId: "1:240675494194:web:072a1a3c33950250bb1f2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
