// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcDR7eu-Ch_WsL3v9SYCz5e7NbpcyJZ0A",
    authDomain: "udon-9d359.firebaseapp.com",
    databaseURL: "https://udon-9d359-default-rtdb.firebaseio.com",
    projectId: "udon-9d359",
    storageBucket: "udon-9d359.appspot.com",
    messagingSenderId: "479023812644",
    appId: "1:479023812644:web:fff39ed836d28e320c48b1",
    measurementId: "G-6VGKWEVBXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
