// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBohl6z5IYTc3ffFuzOZNjAWQ_3R4IHCE",
  authDomain: "auth-integration-part2.firebaseapp.com",
  projectId: "auth-integration-part2",
  storageBucket: "auth-integration-part2.firebasestorage.app",
  messagingSenderId: "233773557126",
  appId: "1:233773557126:web:17ce193555073d443f7807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);