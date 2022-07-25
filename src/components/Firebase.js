import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAgjOxpI4z83d6bJRZpTkU305awXR1jGKk",
  authDomain: "reactcoderhouse-60ea9.firebaseapp.com",
  projectId: "reactcoderhouse-60ea9",
  storageBucket: "reactcoderhouse-60ea9.appspot.com",
  messagingSenderId: "459982509292",
  appId: "1:459982509292:web:7ab8d11f74d10d14a381c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)