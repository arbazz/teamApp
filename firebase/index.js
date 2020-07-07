import firebase from 'firebase';
import "firebase/firestore";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCIgMKrTMBAGrqAFjsGcxFT_L4Jcj5u4xk",
  authDomain: "sportygram-ea7ea.firebaseapp.com",
  databaseURL: "https://sportygram-ea7ea.firebaseio.com",
  projectId: "sportygram-ea7ea",
  storageBucket: "sportygram-ea7ea.appspot.com",
  messagingSenderId: "388329455498",
  appId: "1:388329455498:web:cd499dd809e89dc5241273",
  measurementId: "G-C928XWFGFQ"
};
// Initialize Firebase


  firebase.initializeApp(firebaseConfig);


export default firebase;