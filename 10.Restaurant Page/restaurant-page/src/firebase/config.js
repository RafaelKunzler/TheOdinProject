import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpzc-d3QLViGyHQDQA5JASvR2issYA7Gg",
  authDomain: "restaurant-page-f1209.firebaseapp.com",
  projectId: "restaurant-page-f1209",
  storageBucket: "restaurant-page-f1209.appspot.com",
  messagingSenderId: "554220559970",
  appId: "1:554220559970:web:4be7cbe073dfde9567fb3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }