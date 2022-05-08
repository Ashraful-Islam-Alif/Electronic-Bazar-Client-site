// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxt9DXF-73atpoMov36B4Xi9fN1FdYRNM",
    authDomain: "laptop-bazar-e6bbe.firebaseapp.com",
    projectId: "laptop-bazar-e6bbe",
    storageBucket: "laptop-bazar-e6bbe.appspot.com",
    messagingSenderId: "571633560140",
    appId: "1:571633560140:web:f00f59372effb60034a2e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;