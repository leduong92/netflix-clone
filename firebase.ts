// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmebTnNaWeu8Vrilfk_wkysQNTL5ag6hw",
  authDomain: "netfilx-clone-dcecb.firebaseapp.com",
  projectId: "netfilx-clone-dcecb",
  storageBucket: "netfilx-clone-dcecb.appspot.com",
  messagingSenderId: "786997308357",
  appId: "1:786997308357:web:3a24ab1a53726c2780b9ac",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
