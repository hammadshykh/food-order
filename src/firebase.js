// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPjPZbmx1pAiPdin-ghJ1pfNKLuTazXAQ",
  authDomain: "new-project-44ee4.firebaseapp.com",
  databaseURL: "https://new-project-44ee4-default-rtdb.firebaseio.com",
  projectId: "new-project-44ee4",
  storageBucket: "new-project-44ee4.appspot.com",
  messagingSenderId: "913898232051",
  appId: "1:913898232051:web:7b57d1c27bb2631a233f86",
  measurementId: "G-0QP9G3G0SM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
