import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDUS0NHksyiWYlxI5sbdTn7Vg45vVPQuVc",
  authDomain: "serendipe-4913f.firebaseapp.com",
  projectId: "serendipe-4913f",
  storageBucket: "serendipe-4913f.firebasestorage.app",
  messagingSenderId: "349488956077",
  appId: "1:349488956077:web:8b275b0e93aea4c5c33c24",
  measurementId: "G-7H9BCZVB71",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
