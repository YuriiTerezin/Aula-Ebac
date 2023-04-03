import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyADSfWJD72FoPpGswbKVtwc7oDDdBFogaw",
  authDomain: "clone-tiktok-dc3b7.firebaseapp.com",
  projectId: "clone-tiktok-dc3b7",
  storageBucket: "clone-tiktok-dc3b7.appspot.com",
  messagingSenderId: "522730166104",
  appId: "1:522730166104:web:11864b2932529c492df72d",
  measurementId: "G-SH36KZCWS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
