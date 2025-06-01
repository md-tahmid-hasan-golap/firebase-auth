// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfWkgdzQL26w0mf9z7cDW-v5ZleoKhLlY",
  authDomain: "fir-auth-1fe83.firebaseapp.com",
  projectId: "fir-auth-1fe83",
  storageBucket: "fir-auth-1fe83.firebasestorage.app",
  messagingSenderId: "749734369827",
  appId: "1:749734369827:web:1e2155455863a5d3d66f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
