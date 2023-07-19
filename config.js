import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = { 
    apiKey: "AIzaSyDs-zUl687MOko5DFRMaxNR8rE4eJ6oZWA",
    authDomain: "e-ride-de187.firebaseapp.com",
    projectId: "e-ride-de187",
    storageBucket: "e-ride-de187.appspot.com",
    messagingSenderId: "797596324629",
    appId: "1:797596324629:web:d9ab39a8b06918b4aa0f1c"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
