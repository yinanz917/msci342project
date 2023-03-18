//for some reason I get an error when using environment variables for api key
// I used firebase version 8.10.0 (yarn add firebase@8.10.0) and installed it in both node-react-app and client
// followed the instructions in this video to implement firebase (https://www.youtube.com/watch?v=PKwu15ldZ7k)
// need to create databaseURL on firebase which was not shown in video at the start

import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyA0-PTPi50Y9cjidWrIp50eUVEIBaHo_zQ",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app




// import app from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//   //Enter your firebase API details
//   };
// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();
//   }
  
//   // *** Auth API ***

//   doCreateUserWithEmailAndPassword = (email, password) =>
//   this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email, password) =>
//   this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

//   doPasswordUpdate = password =>
//     this.auth.currentUser.updatePassword(password);

//   doGetIdToken = (bool) => {
//     return this.auth.currentUser.getIdToken(/* forceRefresh */ bool);
//   }

//   doGetUserByEmail = email => this.auth.getUserByEmail(email);

// }

// export default Firebase;