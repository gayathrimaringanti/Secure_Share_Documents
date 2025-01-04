// Firebase configuration for your project
const firebaseConfig = {
  apiKey: "AIzaSyB2PNyIj9BKiq8gh7aKaJ9a0S7btAB64Ns",
  authDomain: "share-2f2c8.firebaseapp.com",
  projectId: "share-2f2c8",
  storageBucket: "share-2f2c8.firebasestorage.app",
  messagingSenderId: "614151650069",
  appId: "1:614151650069:web:8ead2cc41fda087455071c",
  measurementId: "G-H2XYGNJS9R"
};

// Initialize Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
const app = initializeApp(firebaseConfig);

// Exporting the app instance for further use
export { app };
