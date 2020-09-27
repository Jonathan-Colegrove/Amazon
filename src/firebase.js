import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLiwysWrVz_qJfvdpPSE5DkZKP7q3t3tY",
  authDomain: "challenge-c1e72.firebaseapp.com",
  databaseURL: "https://challenge-c1e72.firebaseio.com",
  projectId: "challenge-c1e72",
  storageBucket: "challenge-c1e72.appspot.com",
  messagingSenderId: "150516355452",
  appId: "1:150516355452:web:b5a9ddfc6de6695026d4f9",
  measurementId: "G-GBG8QYFP47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
