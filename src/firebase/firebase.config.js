// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv1H-Qny9pgKO9aUbtoz1Lk1PGjeaQwOA",
  authDomain: "auth-moha-milon-89395.firebaseapp.com",
  projectId: "auth-moha-milon-89395",
  storageBucket: "auth-moha-milon-89395.appspot.com",
  messagingSenderId: "992034452815",
  appId: "1:992034452815:web:0a207a69719cf2654e413a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
