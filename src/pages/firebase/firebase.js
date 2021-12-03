import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAfAktAelLZ3_szUVRwVcQi7nROJVjYmV4",
  authDomain: "my-hackerloft-app.firebaseapp.com",
  databaseURL: "https://my-hackerloft-app.firebaseio.com",
  projectId: "my-hackerloft-app",
  storageBucket: "my-hackerloft-app.appspot.com",
  messagingSenderId: "254615695405",
  appId: "1:254615695405:web:be2f95772bf79d5fbec8a4",
  measurementId: "G-15MW6B3WMQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
