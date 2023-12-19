import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzpqkELCQPLxlfnSWqNiRAqkLt7PmvuBE",
  authDomain: "anchorblock-assignment.firebaseapp.com",
  projectId: "anchorblock-assignment",
  storageBucket: "anchorblock-assignment.appspot.com",
  messagingSenderId: "714852065740",
  appId: "1:714852065740:web:c6098cd84616d673573d69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
