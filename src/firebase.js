import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv73o9AJ03-JSKA_omiZEXqymu9krr2wc",
  authDomain: "chats-660db.firebaseapp.com",
  projectId: "chats-660db",
  storageBucket: "chats-660db.appspot.com",
  messagingSenderId: "997331898944",
  appId: "1:997331898944:web:00d2504c2b9fd3319c05a5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
