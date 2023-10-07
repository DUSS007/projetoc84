import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCxuZE9R-bGo81bPh9XbX1ndJ5gR3GPhIQ",
  authDomain: "ciclista-eletronico-be76b.firebaseapp.com",
  projectId: "ciclista-eletronico-be76b",
  storageBucket: "ciclista-eletronico-be76b.appspot.com",
  messagingSenderId: "579890671758",
  appId: "1:579890671758:web:0fcaca9ae3f062e4e2d9df"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
