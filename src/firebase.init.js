/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFPow6Qv0I1JeX9iZT3nwBmaFi580PIEQ",
  authDomain: "to-do-app-4d5c9.firebaseapp.com",
  projectId: "to-do-app-4d5c9",
  storageBucket: "to-do-app-4d5c9.appspot.com",
  messagingSenderId: "444649842574",
  appId: "1:444649842574:web:62702a7e05affb00c326df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;