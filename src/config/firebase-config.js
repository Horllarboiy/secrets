import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const apiKey = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: `${apiKey}`,
  authDomain: "secretapp-72c50.firebaseapp.com",
  projectId: "secretapp-72c50",
  storageBucket: "secretapp-72c50.appspot.com",
  messagingSenderId: "271854308855",
  appId: "1:271854308855:web:2c01b48cb4315a6f8f72f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {db, auth, provider}
