// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn7jEr2KJ_HhppcGh8oFzkmRTh61WbdzY",
  authDomain: "ecommercelogin-faac7.firebaseapp.com",
  projectId: "ecommercelogin-faac7",
  storageBucket: "ecommercelogin-faac7.appspot.com",
  messagingSenderId: "278165875065",
  appId: "1:278165875065:web:100212713909f922d667a8",
  measurementId: "G-SJT5QHKKZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;