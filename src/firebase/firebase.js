import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBdS3hIBZRAds3E3smk5stLeLW5rzTxewo",
    authDomain: "ig-clone-22330.firebaseapp.com",
    projectId: "ig-clone-22330",
    storageBucket: "ig-clone-22330.appspot.com",
    messagingSenderId: "914619122434",
    appId: "1:914619122434:web:4ef51278cc6228db5cb81b",
    measurementId: "G-G9L2LZPB6T"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
