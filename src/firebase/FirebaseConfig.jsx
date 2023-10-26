// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAshVcxNFMLo23lirbFp4wE5I5CYIGGdws",
  authDomain: "intirious.firebaseapp.com",
  projectId: "intirious",
  storageBucket: "intirious.appspot.com",
  messagingSenderId: "936130684347",
  appId: "1:936130684347:web:89ce55c74fcddfbf59d09e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth};