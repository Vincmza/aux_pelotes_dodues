// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHeKXRP14Yz-NONY-bYLxc4IASgbtevhk",
  authDomain: "les-pelotes-dodues.firebaseapp.com",
  projectId: "les-pelotes-dodues",
  storageBucket: "les-pelotes-dodues.appspot.com",
  messagingSenderId: "900936535273",
  appId: "1:900936535273:web:5f71a5c3e822ca5b5a3478",
  measurementId: "G-YCBN8XZR1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore()