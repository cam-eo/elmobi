// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_uaCrXtS4IEzWeR_FvttSyFl_HzolSn8",
    authDomain: "el-mobi.firebaseapp.com",
    projectId: "el-mobi",
    storageBucket: "el-mobi.appspot.com",
    messagingSenderId: "950723428761",
    appId: "1:950723428761:web:7e439ebfd76320f6491308",
    measurementId: "G-R9Y3K7CL0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);