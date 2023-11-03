import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzUgSeIF-x7YyItz61kr8fWBHcPcjrX7c",
  authDomain: "chococat-coffee.firebaseapp.com",
  projectId: "chococat-coffee",
  storageBucket: "chococat-coffee.appspot.com",
  messagingSenderId: "732262634876",
  appId: "1:732262634876:web:dbd97af6b04447b31480f9",
  measurementId: "G-XXBPX8C7XP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
