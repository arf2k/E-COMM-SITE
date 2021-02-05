import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
     apiKey: "AIzaSyAWetiR6n_nIgaU-6X9mzuXRBIvFD9Jc5A",
     authDomain: "ecomm-ba1b7.firebaseapp.com",
     projectId: "ecomm-ba1b7",
     storageBucket: "ecomm-ba1b7.appspot.com",
     messagingSenderId: "520255608690",
     appId: "1:520255608690:web:cad544a0ba9f58ea78afeb",
     measurementId: "G-8CZ3WJ90V7"
   }


   firebase.initializeApp(config)

   export const auth = firebase.auth();
   export const firestore = firebase.firestore();

   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt: 'select_account'});
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

   export default firebase;
    