import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyBw9rLW9eue1AgbTtSt0nWViI02saw22do",
  authDomain: "ticketsale-c044d.firebaseapp.com",
  databaseURL: "https://ticketsale-c044d-default-rtdb.firebaseio.com",
  projectId: "ticketsale-c044d",
  storageBucket: "ticketsale-c044d.appspot.com",
  messagingSenderId: "142430760207",
  appId: "1:142430760207:web:93a33bf8bac9567e9d227a",
  measurementId: "G-Q8D12J2HNW"
};
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export default firebase;

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// const analytics = getAnalytics(app);
