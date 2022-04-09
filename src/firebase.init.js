// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI4O29bumb9lt8Bx96jaBN_6nv7zubylE",
    authDomain: "react-firebase-integrati-fb0df.firebaseapp.com",
    projectId: "react-firebase-integrati-fb0df",
    storageBucket: "react-firebase-integrati-fb0df.appspot.com",
    messagingSenderId: "454024810396",
    appId: "1:454024810396:web:09747d0fde43431a4c0259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;