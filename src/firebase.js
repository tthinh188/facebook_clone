import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH83E5_w0R0ekDxe0M0z8Yfm9tDErmym8",
  authDomain: "afacebookclone-50d11.firebaseapp.com",
  projectId: "afacebookclone-50d11",
  storageBucket: "afacebookclone-50d11.appspot.com",
  messagingSenderId: "814039030635",
  appId: "1:814039030635:web:1bdb0f53f93b63586c4a2e",
  measurementId: "G-6E3QC458LX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;