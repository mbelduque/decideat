import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF0chy9Qzw_rh0im1B8wZAR7gWDifn7AA",
  authDomain: "decideat-aa331.firebaseapp.com",
  projectId: "decideat-aa331",
  storageBucket: "decideat-aa331.appspot.com",
  messagingSenderId: "952475352040",
  appId: "1:952475352040:web:551a2bea8513d29720c25d",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
