// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
const config = require('./config.js');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: "dogmeetdog-ad226.firebaseapp.com",
  projectId: "dogmeetdog-ad226",
  storageBucket: "dogmeetdog-ad226.appspot.com",
  messagingSenderId: "536432085885",
  appId: "1:536432085885:web:9aa0d5acc4a119e5571a14"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth();
const createUser = createUserWithEmailAndPassword;
const loginUser = signInWithEmailAndPassword;

export { auth, createUser, loginUser, signOut };
