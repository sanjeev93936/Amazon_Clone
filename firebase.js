
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6P8AM1bTjzdLGxSU3mKPp2EPvxkWhMu0",
    authDomain: "amzone-clone-a915e.firebaseapp.com",
    projectId: "amzone-clone-a915e",
    storageBucket: "amzone-clone-a915e.appspot.com",
    messagingSenderId: "553132565017",
    appId: "1:553132565017:web:4747300828231146284088",
    measurementId: "G-S54FH6RLJB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export {  auth };