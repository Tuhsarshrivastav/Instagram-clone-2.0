import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB30coWDCDogeRkQ-_nQxAWieSe8XfbIlA",
  authDomain: "instagram-clone-b7110.firebaseapp.com",
  databaseURL: "https://instagram-clone-b7110-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-b7110",
  storageBucket: "instagram-clone-b7110.appspot.com",
  messagingSenderId: "144894388537",
  appId: "1:144894388537:web:fe5b6a9cacdee4b27c20e8",
  measurementId: "G-CNK93ZK02V",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
