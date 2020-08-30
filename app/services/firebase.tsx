import * as firebase from "firebase/app";

// import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import "firebase/performance";

firebase.initializeApp({
  apiKey: "AIzaSyBdC0_RhpVYSztZ1taYNFplchTlYTAV6hs",
  authDomain: "bini-83648.firebaseapp.com",
  databaseURL: "https://bini-83648.firebaseio.com",
  projectId: "bini-83648",
  storageBucket: "bini-83648.appspot.com",
  messagingSenderId: "875109147391",
  appId: "1:875109147391:web:757d427fff15041c3ea2ca",
  measurementId: "G-M97NKEGPXJ",
});

export default firebase;
// export const analytics = firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
// export const performance = firebase.performance();
