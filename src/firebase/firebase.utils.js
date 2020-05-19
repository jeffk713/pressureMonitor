import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const myOwnConfig = {
  apiKey: "AIzaSyAtwo3vmv1GMA8Myxnr1oiYoHKQOqcGvrk",
  authDomain: "pressuremonitor-ec90c.firebaseapp.com",
  databaseURL: "https://pressuremonitor-ec90c.firebaseio.com",
  projectId: "pressuremonitor-ec90c",
  storageBucket: "pressuremonitor-ec90c.appspot.com",
  messagingSenderId: "135876127055",
  appId: "1:135876127055:web:1465015cb7eede54613d3a",
  measurementId: "G-XCM5Y3CSHV"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      })
    }catch(error) {
      console.log('error from createUserProfileDocument from firebase.utils', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(myOwnConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); 

export default firebase; 