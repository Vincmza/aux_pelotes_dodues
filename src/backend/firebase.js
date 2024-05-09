// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

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
const imgDB = getStorage(app)
const txtDB = getFirestore(app)
const analytics = getAnalytics(app);
export const auth = getAuth()
export default getFirestore()

export {imgDB,txtDB};
