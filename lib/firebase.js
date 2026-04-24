import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjfLMuwyo4SY_uTjbMSPsEYagnydMPntE",
    authDomain: "chittor-tech.firebaseapp.com",
    projectId: "chittor-tech",
    storageBucket: "chittor-tech.firebasestorage.app",
    messagingSenderId: "7685535660",
    appId: "1:7685535660:web:bc2dae8715c9bb848bac09",
    measurementId: "G-K60TEX6DJ3"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
