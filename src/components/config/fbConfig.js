import firebase from '@firebase/app';
// import 'firebase/firestore';
// import firebase from "firebase";
import '@firebase/firestore'
// import '@firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3gS_9bb8Z3G0zmUmodKXfqzWeR0xpnbo",
    authDomain: "react-crud-25ab7.firebaseapp.com",
    databaseURL: "https://react-crud-25ab7.firebaseio.com",
    projectId: "react-crud-25ab7",
    storageBucket: "react-crud-25ab7.appspot.com",
    messagingSenderId: "251018823599",
    appId: "1:251018823599:web:3431915243f422b3c3115a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db };