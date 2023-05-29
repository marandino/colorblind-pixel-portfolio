import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBt3zVXtimJJR8s9RbRBLTOS38VfPM5vU",
  authDomain: "colorblind-pixel-c2778.firebaseapp.com",
  projectId: "colorblind-pixel-c2778",
  storageBucket: "colorblind-pixel-c2778.appspot.com",
  messagingSenderId: "158300855397",
  appId: "1:158300855397:web:f6a639db2261e3becbfa8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);