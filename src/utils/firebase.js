// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmJR_w61-Pqwpv0ELWwzRcwe7LG1R0t78",
  authDomain: "hungry-hours01.firebaseapp.com",
  projectId: "hungry-hours01",
  storageBucket: "hungry-hours01.appspot.com",
  messagingSenderId: "103994087731",
  appId: "1:103994087731:web:2c68b64fa9951f557b8646",
  measurementId: "G-41Y37TNB12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);