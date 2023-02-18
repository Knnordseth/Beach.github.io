

{/* <script type="module"> */}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';

import{collection
}

// Your web app's Firebase configuration
// NB! HER KOMMER DINE UNIKE KODER
const firebaseConfig = {
apiKey: "AIzaSyCrCsxxIIYTUpF8uJ12a49UTsDx9KIrbtU",
authDomain: "white-sand-beach.firebaseapp.com",
projectId: "white-sand-beach",
storageBucket: "white-sand-beach.appspot.com",
messagingSenderId: "195541876312",
appId: "1:195541876312:web:9c2e5805b988c51071542d",
measurementId: "G-BT2BE8CH95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init service
const db = getFirestore();

// //manually require both Firebase and Cloud Firestore.
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// const firebaseConfig = {
//     apiKey: "AIzaSyCrCsxxIIYTUpF8uJ12a49UTsDx9KIrbtU",
//     authDomain: "white-sand-beach.firebaseapp.com",
//     projectId: "white-sand-beach",
//     storageBucket: "white-sand-beach.appspot.com",
//     messagingSenderId: "195541876312",
//     appId: "1:195541876312:web:9c2e5805b988c51071542d",
//   };

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);


// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
