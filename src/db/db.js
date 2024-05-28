// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2TPjabKKLMUOoX1AIvJbspnjYAnGtg04",
  authDomain: "ecommerce-santi-57750.firebaseapp.com",
  projectId: "ecommerce-santi-57750",
  storageBucket: "ecommerce-santi-57750.appspot.com",
  messagingSenderId: "711277075999",
  appId: "1:711277075999:web:be4252087b25e095f2ff2a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
export default db