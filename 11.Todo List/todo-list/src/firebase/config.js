import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZTHSD0MszL58iZ5EsyeIqb2oL9MvMK0w",
  authDomain: "todo-list-37b29.firebaseapp.com",
  projectId: "todo-list-37b29",
  storageBucket: "todo-list-37b29.appspot.com",
  messagingSenderId: "546560109610",
  appId: "1:546560109610:web:8986904d5af14befdd2753"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};