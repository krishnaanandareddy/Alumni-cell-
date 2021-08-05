import firebase from "firebase";
// import { Link, useHistory } from 'react-router-dom'

var firebaseConfig = {
  apiKey: "AIzaSyA7vDFqoT7uUR0P4YkEnW-x6PWS4e5OjCk",
  authDomain: "alumni-cell-68ee7.firebaseapp.com",
  projectId: "alumni-cell-68ee7",
  storageBucket: "alumni-cell-68ee7.appspot.com",
  messagingSenderId: "719237918006",
  appId: "1:719237918006:web:70bc5baae98d20b864d797"

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
// const history = useHistory()

export default db;
export { auth };





