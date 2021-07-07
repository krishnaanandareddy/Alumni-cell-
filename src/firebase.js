import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyA7vDFqoT7uUR0P4YkEnW-x6PWS4e5OjCk",
    authDomain: "alumni-cell-68ee7.firebaseapp.com",
    projectId: "alumni-cell-68ee7",
    storageBucket: "alumni-cell-68ee7.appspot.com",
    messagingSenderId: "719237918006",
    appId: "1:719237918006:web:70bc5baae98d20b864d797"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export default db;
  export {auth};