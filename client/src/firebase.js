// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "home-estate-3eb30.firebaseapp.com",
  projectId: "home-estate-3eb30",
  storageBucket: "home-estate-3eb30.appspot.com",
  messagingSenderId: "947725389187",
  appId: "1:947725389187:web:4e32b7b28b2b1e9fd47ab6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);