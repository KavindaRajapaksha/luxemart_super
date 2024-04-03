// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVUWdEWlRYdDk05-DbS6bSzZAj5rUMEf0",
  authDomain: "luxemartsupermarket.firebaseapp.com",
  projectId: "luxemartsupermarket",
  storageBucket: "luxemartsupermarket.appspot.com",
  messagingSenderId: "202974361952",
  appId: "1:202974361952:web:a0adc87ee1ecdafe9d4605"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();