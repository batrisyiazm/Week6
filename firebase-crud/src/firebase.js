import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDrouxsI1dMWmpI7hR5hHEsnrv1uANZJkE",
  authDomain: "sse3308w6-8bc6b.firebaseapp.com",
  projectId: "sse3308w6-8bc6b",
  storageBucket: "sse3308w6-8bc6b.firebasestorage.app",
  messagingSenderId: "1023561092138",
  appId: "1:1023561092138:web:e49fc93136b0ae4c4a4753"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);