import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBYdWpjiYVbFxRRcUkePNc-T_s2AVNtTqI",
    authDomain: "aiems-97044.firebaseapp.com",
    projectId: "aiems-97044",
    storageBucket: "aiems-97044.appspot.com",
    messagingSenderId: "292069730556",
    appId: "1:292069730556:web:c5426e5aacc916ac6ccf79"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

export { firebaseConfig };