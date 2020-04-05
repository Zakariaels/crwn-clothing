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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(  `users/${userAuth.uid}`  );
  const snapShot = await userRef.get();
  // console.log( snapShot )
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
  try {
        await userRef.set( { 
            displayName,
            email,
            createdAt,
            ...additionalData
         } )
  } catch (error) {
            console.log('error creating user', error.message);
  }
}
return userRef;
}

firebase.initializeApp(config);  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;