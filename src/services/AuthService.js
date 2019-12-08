import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8w4-fXtEpE0QyV9S2-FHN_INq3kFTJ2A",
  authDomain: "mercash-escobedo.firebaseapp.com",
  databaseURL: "https://mercash-escobedo.firebaseio.com",
  projectId: "mercash-escobedo",
  storageBucket: "mercash-escobedo.appspot.com",
  messagingSenderId: "1010158987759",
  appId: "1:1010158987759:web:a86d17a2648c9c8ba8ee1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default {
    signIn: (email, password) => auth.signInWithEmailAndPassword(email, password),
    signOut: () => auth.signOut(),
    userLoggedIn: callback => auth.onAuthStateChanged(user => callback(user)),
    getToken: () => auth.currentUser.getIdToken(true),
}
