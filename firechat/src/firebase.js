// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADhSGnmNt1nd1Gs9xImIaRqCbFGc4d7yU",
  authDomain: "firechat-df5e0.firebaseapp.com",
  projectId: "firechat-df5e0",
  storageBucket: "firechat-df5e0.appspot.com",
  messagingSenderId: "659351150463",
  appId: "1:659351150463:web:e4bb0ad590adf3cb62844a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);