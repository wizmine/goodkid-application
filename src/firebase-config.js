import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGxquoIRNqGQl9ICdzMCsSMUlWa8wT-ds",
  authDomain: "goodkidstudiodesign.firebaseapp.com",
  projectId: "goodkidstudiodesign",
  storageBucket: "goodkidstudiodesign.appspot.com",
  messagingSenderId: "396699997735",
  appId: "1:396699997735:web:fbd796c0eac28e3bfda002",
  measurementId: "G-PSXJJCT3GV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
