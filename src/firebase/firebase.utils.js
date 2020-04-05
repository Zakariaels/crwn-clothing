import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDASCgNZ32U9Lv1ds1wH-MrDtEmM37GlcY",
    authDomain: "crwn-db-6da77.firebaseapp.com",
    databaseURL: "https://crwn-db-6da77.firebaseio.com",
    projectId: "crwn-db-6da77",
    storageBucket: "crwn-db-6da77.appspot.com",
    messagingSenderId: "335708701542",
    appId: "1:335708701542:web:086279be6ea2360d4dfea7"
  };

firebase.initializeApp(config);  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;