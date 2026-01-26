// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVK6V3cCVD_9MeUUhkeZ2zExwBfoQkA80",
  authDomain: "contact-saver-f8b27.firebaseapp.com",
  projectId: "contact-saver-f8b27",
  storageBucket: "contact-saver-f8b27.firebasestorage.app",
  messagingSenderId: "943769293089",
  appId: "1:943769293089:web:9c07f10ca4ca783b132e60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
