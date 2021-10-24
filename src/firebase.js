import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-YqValtpfvpWOWQeO66jvnIushbN3AhI",
    authDomain: "d-team2.firebaseapp.com",
    projectId: "d-team2",
    storageBucket: "d-team2.appspot.com",
    messagingSenderId: "888575563215",
    appId: "1:888575563215:web:e85fa27bffb1627f7caeba",
    measurementId: "G-6GWZX61W3S"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();