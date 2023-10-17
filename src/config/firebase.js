// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAtJ-b-MmzbmxVlA3meize0R5BPdLdaHsY",
  authDomain: "mecanicabustos-52d15.firebaseapp.com",
  databaseURL: "https://mecanicabustos-52d15-default-rtdb.firebaseio.com",
  projectId: "mecanicabustos-52d15",
  storageBucket: "mecanicabustos-52d15.appspot.com",
  messagingSenderId: "48306549273",
  appId: "1:48306549273:web:a35416348a92730902b088",
  measurementId: "G-E55XGJKN8G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);



export const auth = getAuth(app);

export const db = getDatabase(app)

export const login = ({email, password}) =>{
    return signInWithEmailAndPassword(auth, email, password)
}


export const register = ({ email, password }) =>{
    return createUserWithEmailAndPassword(auth, email, password);}
    

export const logOut = () => signOut(auth);