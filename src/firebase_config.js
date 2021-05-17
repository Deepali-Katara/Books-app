import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAVY2FfBxlIEbh9vg7gRHnGVhUp1e4pBKM",
    authDomain: "deepali-app.firebaseapp.com",
    projectId: "deepali-app",
    storageBucket: "deepali-app.appspot.com",
    messagingSenderId: "505036347667",
    appId: "1:505036347667:web:087768377d3b78d12662e6"
  };
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()

  export {db};