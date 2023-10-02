// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYAzG34rUz3DVV8Rvs_rzShEFYxkWlDlY",
  authDomain: "react-dragon-news-80df0.firebaseapp.com",
  projectId: "react-dragon-news-80df0",
  storageBucket: "react-dragon-news-80df0.appspot.com",
  messagingSenderId: "243729233784",
  appId: "1:243729233784:web:234712900f5a712cd8ba8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getApp(app);

export default auth;