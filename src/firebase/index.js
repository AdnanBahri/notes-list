// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  // updateProfil,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  // serverTimestamp,
  updateDoc,
  doc,
  orderBy,
  arrayUnion,
  arrayRemove,
  limit,
  onSnapshot,
  query,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxcAhgQTtmtWBG8I3EIQAtyHIqy6Frsfg",
  authDomain: "testtest-eb023.firebaseapp.com",
  databaseURL: "https://testtest-eb023.firebaseio.com",
  projectId: "testtest-eb023",
  storageBucket: "testtest-eb023.appspot.com",
  messagingSenderId: "893110799529",
  appId: "1:893110799529:web:644ec6b6e4269b95c8adb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

const todoCollection = collection(db, "todos");

export {
  auth,
  createUserWithEmailAndPassword,
  db,
  todoCollection,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  getDocs,
  getDoc,
  Timestamp,
  collection,
  setDoc,
  updateDoc,
  addDoc,
  deleteDoc,
  doc,
};
