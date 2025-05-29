// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuCXRxc8bJBa3xAs1uroLMtwrn-bdbA4Q",
  authDomain: "d4me-dc945.firebaseapp.com",
  projectId: "d4me-dc945",
  storageBucket: "d4me-dc945.firebasestorage.app",
  messagingSenderId: "837207824705",
  appId: "1:837207824705:web:e85833d4cc2dc6efcbe9c0",
  measurementId: "G-W0Y05H857P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
