import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAb3P5Ds7qaU3kPBZILfEDAGDMxObnkyTk",
  authDomain: "jobsy-4e401.firebaseapp.com",
  projectId: "jobsy-4e401",
  storageBucket: "jobsy-4e401.firebasestorage.app",
  messagingSenderId: "524909520863",
  appId: "1:524909520863:web:2f0834e4d735b9e984866a",
  measurementId: "G-4PMQ250ZBX"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
