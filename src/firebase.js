
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAazxOMcHFwellRroTTi7tvNZ8gY61B2fY",
    authDomain: "fir-e4689.firebaseapp.com",
    projectId: "fir-e4689",
    storageBucket: "fir-e4689.appspot.com",
    messagingSenderId: "1086004520628",
    appId: "1:1086004520628:web:47d339c3965c5d5efe19e1",
    measurementId: "G-SRZRFDZ261"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(firebaseApp);
const auth = firebase.auth();

export {db,auth };