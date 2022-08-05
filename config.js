import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDkdxK3RCvASyWLitdPXKERWFiR4euoF8Y",
    authDomain: "pro71-8f336.firebaseapp.com",
    projectId: "pro71-8f336",
    storageBucket: "pro71-8f336.appspot.com",
    messagingSenderId: "429207908518",
    appId: "1:429207908518:web:fa3019c6fddc814bf90467",
    measurementId: "G-EPSK9BG4SV"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
