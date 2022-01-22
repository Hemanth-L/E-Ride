import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

apiKey: "AIzaSyBt3O8hd_sENO5SX0z0PbXl7LETD4QOSVk",
    authDomain: "e-ride-70d06.firebaseapp.com",
    projectId: "e-ride-70d06",
    storageBucket: "e-ride-70d06.appspot.com",
    messagingSenderId: "733481354322",
    appId: "1:733481354322:web:a4041d0d7635fb205b0b8b",
    measurementId: "G-65FT1D20FH"



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


