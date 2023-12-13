// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2C_hv43P-z0ZIpHi6Q-Tr-PRKEUmiWzk",
  authDomain: "perosnal-messager.firebaseapp.com",
  projectId: "perosnal-messager",
  storageBucket: "perosnal-messager.appspot.com",
  messagingSenderId: "398848423109",
  appId: "1:398848423109:web:2f4728f65d7f132702acac",
  measurementId: "G-73B6R6KM08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db=getFirestore(app)
export { auth, provider ,db };