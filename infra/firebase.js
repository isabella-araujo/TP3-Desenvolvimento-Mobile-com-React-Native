// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFHXFEl27gQPvI1QdUTOrwIlOyfgSD994",
  authDomain: "react-native-67f0f.firebaseapp.com",
  projectId: "react-native-67f0f",
  storageBucket: "react-native-67f0f.appspot.com",
  messagingSenderId: "815856822952",
  appId: "1:815856822952:web:e6ac5e19f9965cc374709d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);